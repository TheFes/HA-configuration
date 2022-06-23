import{a as e,o as a,b as i,s as o,d as t,l,E as s,c,e as n,f as r,$ as h,z as d,n as u,_ as g,h as f,t as p,i as _,a2 as $}from"./mushroom-a5aee8f6.js";import{s as m}from"./localize-32a7779c.js";import"./layout-picker-a27bd2f6.js";import"./mushroom-textarea-37cef3e4.js";import{b as v,c as y}from"./editor-styles-498e9f20.js";import{a as b}from"./action-struct-ee173542.js";import"./mushroom-select-6b50439e.js";import"./if-defined-d53f5798.js";import"./mwc-textfield-base-9070c458.js";const z=e(v,a({icon:i(o()),icon_color:i(o()),primary:i(o()),secondary:i(o()),multiline_secondary:i(t()),layout:i(l),tap_action:i(b),hold_action:i(b),double_tap_action:i(b),entity_id:i(s([o(),c(o())]))})),w=["navigate","url","call-service","none"];let x=class extends n{setConfig(e){r(e,z),this._config=e}render(){var e,a,i,o;if(!this.hass||!this._config)return h``;const t=d(this.hass),l=m(this.hass);return h`
            <div class="card-config">
                <mushroom-textarea
                    .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                    .value=${null!==(e=this._config.icon)&&void 0!==e?e:""}
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
                    .label="${l("editor.card.generic.icon_color")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
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
                <mushroom-textarea
                    .label="${l("editor.card.template.primary")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                    .value=${null!==(i=this._config.primary)&&void 0!==i?i:""}
                    .configValue=${"primary"}
                    @keydown=${this._ignoreKeydown}
                    @input=${this._valueChanged}
                    dir="ltr"
                    autogrow
                    autocapitalize="none"
                    autocomplete="off"
                    spellcheck="false"
                ></mushroom-textarea>
                <mushroom-textarea
                    .label="${l("editor.card.template.secondary")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                    .value=${null!==(o=this._config.secondary)&&void 0!==o?o:""}
                    .configValue=${"secondary"}
                    @keydown=${this._ignoreKeydown}
                    @input=${this._valueChanged}
                    dir="ltr"
                    autogrow
                    autocapitalize="none"
                    autocomplete="off"
                    spellcheck="false"
                ></mushroom-textarea>
                <div class="side-by-side">
                    <mushroom-layout-picker
                        .label="${l("editor.card.generic.layout")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.layout}
                        .configValue=${"layout"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-layout-picker>
                    <ha-formfield
                        .label=${l("editor.card.generic.multiline_secondary")}
                        .dir=${t}
                    >
                        <ha-switch
                            .checked=${!!this._config.multiline_secondary}
                            .configValue=${"multiline_secondary"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="side-by-side">
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.tap_action}
                        .actions=${w}
                        .configValue=${"tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.hold_action}
                        .actions=${w}
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
                        .actions=${w}
                        .configValue=${"double_tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                </div>
            </div>
        `}_ignoreKeydown(e){e.stopPropagation()}_valueChanged(e){var a,i;if(!this._config||!this.hass)return;const o=e.target,t=null!==(i=null!==(a=o.checked)&&void 0!==a?a:e.detail.value)&&void 0!==i?i:o.value;if(this[`_${o.configValue}`]===t)return;let l;o.configValue&&(t?l=Object.assign(Object.assign({},this._config),{[o.configValue]:t}):(l=Object.assign({},this._config),delete l[o.configValue])),u(this,"config-changed",{config:l})}static get styles(){return y}};g([f({attribute:!1})],x.prototype,"hass",void 0),g([p()],x.prototype,"_config",void 0),x=g([_($)],x);export{x as TemplateCardEditor};
