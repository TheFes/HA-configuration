import { LitElement, html, css } from 'https://unpkg.com/lit@2.8.0/index.js?module';

class FontClockCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: { type: Object },
      _time: { type: String },
    };
  }

  constructor() {
    super();
    this._config = {};
    this._time = '--:--';
    this._animationFrameId = null;
  }

  setConfig(config) {
    this._config = config;
    this._fontName = config.font_name || 'Roboto';
    this._fontWeight = config.font_weight || '400';
    this._fontSize = config.font_size || '75px';
    this._fontColor = config.color || 'var(--primary-text-color)';
    this._clockFormat = config.format || 'HH:mm';
    this._noSpaceAmPm = config.no_space_ampm === true;
    this._align = config.align || 'center';

    this._loadGoogleFont(this._fontName, this._fontWeight);
    this._startClock();
  }

  _startClock() {
    if (this._animationFrameId !== null) cancelAnimationFrame(this._animationFrameId);
    const tick = () => {
      this._updateClock();
      this._animationFrameId = requestAnimationFrame(tick);
    };
    this._animationFrameId = requestAnimationFrame(tick);
  }

  _updateClock() {
    const now = new Date();
    let H_24 = now.getHours();
    let M = now.getMinutes();
    let S = now.getSeconds();

    let h_12 = H_24 % 12;
    h_12 = h_12 ? h_12 : 12;

    let ampm = "";
    const formatString = this._clockFormat;
    const usesAmPmPlaceholder = formatString.toLowerCase().includes('a');

    if (usesAmPmPlaceholder) {
      const isUpperCaseAmPm = formatString.includes('A');
      ampm = H_24 >= 12 ? (isUpperCaseAmPm ? 'PM' : 'pm') : (isUpperCaseAmPm ? 'AM' : 'am');
    }

    let result = "";
    let i = 0;
    while (i < formatString.length) {
      let token = formatString.substring(i, i + 2);
      if (token === "HH") {
        result += H_24.toString().padStart(2, '0');
        i += 2;
      } else if (token === "hh") {
        result += h_12.toString();
        i += 2;
      } else if (token === "mm") {
        result += M.toString().padStart(2, '0');
        i += 2;
      } else if (token === "ss") {
        result += S.toString().padStart(2, '0');
        i += 2;
      } else {
        const char = formatString.charAt(i);
        if (char.toLowerCase() === 'a') {
          i += 1;
        } else {
          result += char;
          i += 1;
        }
      }
    }

    if (usesAmPmPlaceholder && ampm) {
      const amPmSeparator = this._noSpaceAmPm ? "" : " ";
      if (this._noSpaceAmPm && result.endsWith(" ")) {
        result = result.trimEnd();
      }
      result += amPmSeparator + ampm;
    }

    this._time = result;
  }

  _loadGoogleFont(fN, fW) {
    if (!fN || !fW) return;
    const id = `google-font-${fN.replace(/\s+/g, '-')}-${fW}`;
    if (document.getElementById(id)) return;
    const l = document.createElement('link');
    l.id = id;
    l.rel = 'stylesheet';
    const eFN = fN.replace(/\s+/g, '+');
    l.href = `https://fonts.googleapis.com/css2?family=${eFN}:wght@${fW}&display=swap`;
    document.head.appendChild(l);
  }

  render() {
    return html`
      <style>
        .clock {
          font-size: ${this._fontSize};
          font-family: "${this._fontName}", sans-serif;
          font-weight: ${this._fontWeight};
          color: ${this._fontColor};
          white-space: nowrap;
          line-height: 1;
          text-align: ${this._align};
          width: 100%;
          padding: 0.2em;
        }
        .clock-container {
          display: flex;
          justify-content: ${this._align === 'left' ? 'flex-start' : this._align === 'right' ? 'flex-end' : 'center'};
        }
        mwc-menu {
          overflow: visible !important;
        }
      </style>
      <div class="clock-container">
        <div class="clock">${this._time}</div>
      </div>
    `;
  }

  getCardSize() {
    const fs = parseInt(this._fontSize || '75');
    if (fs > 70) return 3;
    if (fs > 40) return 2;
    return 1;
  }

  static getStubConfig() {
    return {
      font_name: "Roboto",
      font_weight: "400",
      font_size: "75px",
      format: "HH:mm",
      no_space_ampm: false,
      align: "center"
    };
  }

  static getConfigElement() {
    return document.createElement("font-clock-card-editor");
  }
}

class FontClockCardEditor extends LitElement {
  static get properties() {
    return {
      hass: {},
      _config: { state: true },
    };
  }

  constructor() {
    super();
    this._config = {};
  }

  setConfig(config) {
    this._config = { ...config };
  }

  _valueChanged(ev) {
    if (!this._config) return;
    const target = ev.target;
    const configKey = target.configValue;
    if (configKey === undefined) return;

    let value;
    if (target.tagName === 'HA-SWITCH') {
      value = target.checked;
    } else {
      value = target.value;
    }

    const newConfig = { ...this._config };

    if (value === "" && configKey !== 'color' && target.tagName !== 'HA-SWITCH') {
      delete newConfig[configKey];
    } else {
      newConfig[configKey] = value;
    }

    if (JSON.stringify(newConfig) === JSON.stringify(this._config)) {
      return;
    }

    this._config = newConfig;

    this.dispatchEvent(new CustomEvent('config-changed', {
      detail: { config: this._config },
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    const d = FontClockCard.getStubConfig();

    return html`
      <div class="card-config-editor">
        <ha-textfield
          label="Font Name"
          .value=${this._config.font_name || ''}
          placeholder="${d.font_name}"
          .configValue=${'font_name'}
          @input=${this._valueChanged}
          helper="e.g., Orbitron, Lato. Default: ${d.font_name}"
          helper-persistent
        ></ha-textfield>

        <ha-textfield
          label="Font Weight"
          .value=${this._config.font_weight || ''}
          placeholder="${d.font_weight}"
          .configValue=${'font_weight'}
          @input=${this._valueChanged}
          helper="e.g., 300, 700, 400italic. Default: ${d.font_weight}"
          helper-persistent
        ></ha-textfield>

        <ha-textfield
          label="Font Size"
          .value=${this._config.font_size || ''}
          placeholder="${d.font_size}"
          .configValue=${'font_size'}
          @input=${this._valueChanged}
          helper="e.g., 60px, 4em, 12vh. Default: ${d.font_size}"
          helper-persistent
        ></ha-textfield>

        <ha-textfield
          label="Text Color"
          .value=${this._config.color || ''}
          placeholder="Theme default"
          .configValue=${'color'}
          @input=${this._valueChanged}
          helper="Leave empty for theme default"
          helper-persistent
        ></ha-textfield>

        <ha-select
          label="Time Format"
          .value=${this._config.format || d.format}
          .configValue=${'format'}
          @selected=${this._valueChanged}
          @closed=${(ev) => ev.stopPropagation()}
          fixedMenuPosition
          naturalMenuWidth
          style="overflow: visible !important"
        >
          <mwc-list-item value="HH:mm:ss">24h with seconds (00:00:00)</mwc-list-item>
          <mwc-list-item value="HH:mm">24h no seconds (00:00)</mwc-list-item>
          <mwc-list-item value="hh:mm:ss A">12h with seconds (1:00:00 AM/PM)</mwc-list-item>
          <mwc-list-item value="hh:mm A">12h no seconds (1:00 AM/PM)</mwc-list-item>
          <mwc-list-item value="hh:mm a">12h lowercase am/pm (1:00 am/pm)</mwc-list-item>
        </ha-select>

        <div class="switch-option">
          <ha-switch
            .checked=${this._config.no_space_ampm === true}
            .configValue=${'no_space_ampm'}
            @change=${this._valueChanged}
          ></ha-switch>
          <div class="label">Remove space before am/pm</div>
        </div>

        <ha-select
          label="Clock Alignment"
          .value=${this._config.align || 'center'}
          .configValue=${'align'}
          @selected=${this._valueChanged}
          @closed=${(ev) => ev.stopPropagation()}
          fixedMenuPosition
          naturalMenuWidth
          style="overflow: visible !important"
        >
          <mwc-list-item value="left">Left</mwc-list-item>
          <mwc-list-item value="center">Center</mwc-list-item>
          <mwc-list-item value="right">Right</mwc-list-item>
        </ha-select>
      </div>
    `;
  }

  static get styles() {
    return css`
      .card-config-editor {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        overflow: visible;
      }
      ha-textfield, ha-select {
        display: block;
        width: 100%;
        overflow: visible;
      }
      .switch-option {
        display: flex;
        align-items: center;
        gap: 16px;
      }
      .switch-option .label {
        flex-grow: 1;
      }
    `;
  }
}

customElements.define('font-clock-card', FontClockCard);
customElements.define('font-clock-card-editor', FontClockCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "font-clock-card",
  name: "Font Clock Card",
  description: "A clock card that uses a Google Font specified in its configuration.",
  preview: true,
});
