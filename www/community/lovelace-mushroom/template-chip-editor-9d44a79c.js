import{e,$ as i,n as o,_ as a,h as t,t as l,i as c,a4 as n}from"./mushroom-a5aee8f6.js";import{s}from"./localize-32a7779c.js";import"./mushroom-textarea-37cef3e4.js";import{c as h}from"./editor-styles-498e9f20.js";import"./mwc-textfield-base-9070c458.js";import"./if-defined-d53f5798.js";const r=["navigate","url","call-service","none"];let d=class extends e{setConfig(e){this._config=e}render(){var e,o,a;if(!this.hass||!this._config)return i``;const t=s(this.hass);return i`
            <div class="card-config">
                <mushroom-textarea
                    .label="${t("editor.chip.template.content")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                    .value=${null!==(e=this._config.content)&&void 0!==e?e:""}
                    .configValue=${"content"}
                    @keydown=${this._ignoreKeydown}
                    @input=${this._valueChanged}
                    dir="ltr"
                    autogrow
                    autocapitalize="none"
                    autocomplete="off"
                    spellcheck="false"
                ></mushroom-textarea>
                <mushroom-textarea
                    .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                    .value=${null!==(o=this._config.icon)&&void 0!==o?o:""}
                    .configValue=${"icon"}
                    @keydown=${this._ignoreKeydown}
                    @input=${this._valueChanged}
                    dir="ltr"
                    autogrow
                    autocapitalize="none"
                    autocomplete="off"
                    spellcheck="false"
                ></mushroom-textarea>
                <mushroom-textarea
                    .label="${t("editor.card.generic.icon_color")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                    .value=${null!==(a=this._config.icon_color)&&void 0!==a?a:""}
                    .configValue=${"icon_color"}
                    @keydown=${this._ignoreKeydown}
                    @input=${this._valueChanged}
                    dir="ltr"
                    autogrow
                    autocapitalize="none"
                    autocomplete="off"
                    spellcheck="false"
                ></mushroom-textarea>
                <div class="side-by-side">
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.tap_action}
                        .actions=${r}
                        .configValue=${"tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.hold_action}
                        .actions=${r}
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
                        .actions=${r}
                        .configValue=${"double_tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                </div>
            </div>
        `}_ignoreKeydown(e){e.stopPropagation()}_valueChanged(e){var i,a;if(!this._config||!this.hass)return;const t=e.target,l=null!==(a=null!==(i=t.checked)&&void 0!==i?i:e.detail.value)&&void 0!==a?a:t.value;t.configValue&&this._config[t.configValue]!==l&&(t.configValue&&(l?this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:l}):(this._config=Object.assign({},this._config),delete this._config[t.configValue])),o(this,"config-changed",{config:this._config}))}static get styles(){return h}};a([t({attribute:!1})],d.prototype,"hass",void 0),a([l()],d.prototype,"_config",void 0),d=a([c(n("template"))],d);export{d as EntityChipEditor};
