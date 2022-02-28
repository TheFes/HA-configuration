import{a as i,o as e,b as a,s as o,l as t,d as s,e as l,f as c,$ as h,z as n,g as d,Y as r,n as g,r as u,_,h as f,t as $,i as v,Z as p}from"./mushroom-a5aee8f6.js";import{s as m}from"./localize-32a7779c.js";import"./layout-picker-a27bd2f6.js";import"./mushroom-textfield-6a8dc5ef.js";import{b,c as y}from"./editor-styles-498e9f20.js";import{a as w}from"./action-struct-ee173542.js";import"./mushroom-select-6b50439e.js";import"./if-defined-d53f5798.js";import"./mwc-textfield-base-9070c458.js";const z=i(b,e({entity:a(o()),icon:a(o()),name:a(o()),layout:a(t),hide_state:a(s()),show_brightness_control:a(s()),show_color_temp_control:a(s()),show_color_control:a(s()),use_light_color:a(s()),tap_action:a(w),hold_action:a(w),double_tap_action:a(w)})),V=["toggle","more-info","navigate","url","call-service","none"];let C=class extends l{setConfig(i){c(i,z),this._config=i}render(){var i;if(!this.hass||!this._config)return h``;const e=n(this.hass),a=this._config.entity?this.hass.states[this._config.entity]:void 0,o=a?d(a):void 0,t=m(this.hass);return h`
            <div class="card-config">
                <ha-entity-picker
                    .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")}"
                    .hass=${this.hass}
                    .value=${this._config.entity}
                    .configValue=${"entity"}
                    @value-changed=${this._valueChanged}
                    .includeDomains=${r}
                    allow-custom-entity
                ></ha-entity-picker>
                <div class="side-by-side">
                    <mushroom-textfield
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.name")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .value=${null!==(i=this._config.name)&&void 0!==i?i:""}
                        .configValue=${"name"}
                        @input=${this._valueChanged}
                    >
                    </mushroom-textfield>
                    <ha-icon-picker
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .value=${this._config.icon}
                        .placeholder=${this._config.icon||o}
                        .configValue=${"icon"}
                        @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                </div>
                <div class="side-by-side">
                    <mushroom-layout-picker
                        .label="${t("editor.card.generic.layout")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.layout}
                        .configValue=${"layout"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-layout-picker>
                    <ha-formfield
                        .label=${t("editor.card.generic.hide_state")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.hide_state}
                            .configValue=${"hide_state"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="side-by-side">
                    <ha-formfield
                        .label=${t("editor.card.light.show_brightness_control")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.show_brightness_control}
                            .configValue=${"show_brightness_control"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                    <ha-formfield
                        .label=${t("editor.card.light.use_light_color")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.use_light_color}
                            .configValue=${"use_light_color"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="side-by-side">
                    <ha-formfield
                        .label=${t("editor.card.light.show_color_temp_control")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.show_color_temp_control}
                            .configValue=${"show_color_temp_control"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                    <ha-formfield
                        .label=${t("editor.card.light.show_color_control")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.show_color_control}
                            .configValue=${"show_color_control"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="side-by-side">
                    <p class="message">
                        ${t("editor.card.light.incompatible_controls")}
                    </p>
                </div>
                <div class="side-by-side">
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.tap_action}
                        .actions=${V}
                        .configValue=${"tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.hold_action}
                        .actions=${V}
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
                        .actions=${V}
                        .configValue=${"double_tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                </div>
            </div>
        `}_valueChanged(i){var e,a;if(!this._config||!this.hass)return;const o=i.target,t=null!==(a=null!==(e=o.checked)&&void 0!==e?e:i.detail.value)&&void 0!==a?a:o.value;o.configValue&&this._config[o.configValue]!==t&&(o.configValue&&(t?this._config=Object.assign(Object.assign({},this._config),{[o.configValue]:t}):(this._config=Object.assign({},this._config),delete this._config[o.configValue])),g(this,"config-changed",{config:this._config}))}static get styles(){return[y,u`
                .message {
                    font-size: 14px;
                }
            `]}};_([f({attribute:!1})],C.prototype,"hass",void 0),_([$()],C.prototype,"_config",void 0),C=_([v(p)],C);export{C as LightCardEditor};
