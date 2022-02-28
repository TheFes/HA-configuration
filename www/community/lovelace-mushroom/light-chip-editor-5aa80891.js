import{e as i,$ as e,z as a,g as o,n as t,_ as s,h as l,t as c,i as n,a4 as h}from"./mushroom-a5aee8f6.js";import{s as d}from"./localize-32a7779c.js";import"./info-picker-681abcfb.js";import"./mushroom-textfield-6a8dc5ef.js";import{c as r}from"./editor-styles-498e9f20.js";import"./mushroom-select-6b50439e.js";import"./if-defined-d53f5798.js";import"./mwc-textfield-base-9070c458.js";const g=["toggle","more-info","navigate","url","call-service","none"];let u=class extends i{setConfig(i){this._config=i}render(){var i;if(!this.hass||!this._config)return e``;const t=a(this.hass),s=this._config.entity?this.hass.states[this._config.entity]:void 0,l=s?o(s):void 0,c=d(this.hass);return e`
            <div class="card-config">
                <div class="side-by-side">
                    <ha-entity-picker
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")}"
                        .hass=${this.hass}
                        .value=${this._config.entity}
                        .configValue=${"entity"}
                        @value-changed=${this._valueChanged}
                        allow-custom-entity
                    ></ha-entity-picker>
                </div>
                <div class="side-by-side">
                    <mushroom-textfield
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .value=${null!==(i=this._config.name)&&void 0!==i?i:""}
                        .configValue=${"name"}
                        @input=${this._valueChanged}
                    >
                    </mushroom-textfield>
                    <mushroom-info-picker
                        .label="${c("editor.card.entity.primary_info")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.content_info}
                        .configValue=${"content_info"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-info-picker>
                </div>
                <div class="side-by-side">
                    <ha-icon-picker
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .value=${this._config.icon}
                        .placeholder=${this._config.icon||l}
                        .configValue=${"icon"}
                        @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                    <ha-formfield
                        .label=${c("editor.card.light.use_light_color")}
                        .dir=${t}
                    >
                        <ha-switch
                            .checked=${!!this._config.use_light_color}
                            .configValue=${"use_light_color"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="side-by-side">
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.tap_action}
                        .actions=${g}
                        .configValue=${"tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.hold_action}
                        .actions=${g}
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
                        .actions=${g}
                        .configValue=${"double_tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                </div>
            </div>
        `}_valueChanged(i){var e,a;if(!this._config||!this.hass)return;const o=i.target,s=null!==(a=null!==(e=o.checked)&&void 0!==e?e:i.detail.value)&&void 0!==a?a:o.value;o.configValue&&this._config[o.configValue]!==s&&(o.configValue&&(s?this._config=Object.assign(Object.assign({},this._config),{[o.configValue]:s}):(this._config=Object.assign({},this._config),delete this._config[o.configValue])),t(this,"config-changed",{config:this._config}))}static get styles(){return r}};s([l({attribute:!1})],u.prototype,"hass",void 0),s([c()],u.prototype,"_config",void 0),u=s([n(h("light"))],u);export{u as LightChipEditor};
