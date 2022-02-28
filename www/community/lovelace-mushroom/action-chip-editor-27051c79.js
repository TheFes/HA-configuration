import{e as i,$ as e,n as a,_ as o,h as c,t,i as s,a4 as l}from"./mushroom-a5aee8f6.js";import{s as n}from"./localize-32a7779c.js";import"./color-picker-cd543841.js";import{c as h}from"./editor-styles-498e9f20.js";import"./mushroom-select-6b50439e.js";import"./if-defined-d53f5798.js";const d=["navigate","url","call-service","none"];let r=class extends i{setConfig(i){this._config=i}render(){if(!this.hass||!this._config)return e``;const i=n(this.hass);return e`
            <div class="card-config">
                <div class="side-by-side">
                    <ha-icon-picker
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .value=${this._config.icon}
                        .placeholder=${this._config.icon||"mdi:flash"}
                        .configValue=${"icon"}
                        @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                    <mushroom-color-picker
                        .label="${i("editor.card.generic.icon_color")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.icon_color}
                        .configValue=${"icon_color"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-color-picker>
                </div>
                <div class="side-by-side">
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.tap_action}
                        .actions=${d}
                        .configValue=${"tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.hold_action}
                        .actions=${d}
                        .configValue=${"hold_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                </div>
                <div class="side-by-side">
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.double_tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.double_tap_action}
                        .actions=${d}
                        .configValue=${"double_tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                </div>
            </div>
        `}_valueChanged(i){var e,o;if(!this._config||!this.hass)return;const c=i.target,t=null!==(o=null!==(e=c.checked)&&void 0!==e?e:i.detail.value)&&void 0!==o?o:c.value;c.configValue&&this._config[c.configValue]!==t&&(c.configValue&&(t?this._config=Object.assign(Object.assign({},this._config),{[c.configValue]:t}):(this._config=Object.assign({},this._config),delete this._config[c.configValue])),a(this,"config-changed",{config:this._config}))}static get styles(){return h}};o([c({attribute:!1})],r.prototype,"hass",void 0),o([t()],r.prototype,"_config",void 0),r=o([s(l("action"))],r);export{r as EntityChipEditor};
