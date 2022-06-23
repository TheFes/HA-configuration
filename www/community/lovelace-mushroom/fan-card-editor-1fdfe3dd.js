import{a as i,o as e,b as a,s as o,d as t,l as s,e as c,f as l,$ as n,z as h,g as d,W as r,n as g,_ as u,h as f,t as _,i as $,X as v}from"./mushroom-a5aee8f6.js";import{s as p}from"./localize-32a7779c.js";import"./layout-picker-a27bd2f6.js";import"./mushroom-textfield-6a8dc5ef.js";import{b as m,c as b}from"./editor-styles-498e9f20.js";import{a as y}from"./action-struct-ee173542.js";import"./mushroom-select-6b50439e.js";import"./if-defined-d53f5798.js";import"./mwc-textfield-base-9070c458.js";const w=i(m,e({entity:a(o()),name:a(o()),icon:a(o()),icon_animation:a(t()),layout:a(s),hide_state:a(t()),show_percentage_control:a(t()),show_oscillate_control:a(t()),tap_action:a(y),hold_action:a(y),double_tap_action:a(y)})),z=["toggle","more-info","navigate","url","call-service","none"];let V=class extends c{setConfig(i){l(i,w),this._config=i}render(){var i;if(!this.hass||!this._config)return n``;const e=h(this.hass),a=this._config.entity?this.hass.states[this._config.entity]:void 0,o=a?d(a):void 0,t=p(this.hass);return n`
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
                    <ha-formfield
                        .label=${t("editor.card.fan.animate_icon_active")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${this._config.icon_animation}
                            .configValue=${"icon_animation"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
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
                        .label=${t("editor.card.fan.show_percentage_control")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.show_percentage_control}
                            .configValue=${"show_percentage_control"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                    <ha-formfield
                        .label=${t("editor.card.fan.show_oscillate_control")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.show_oscillate_control}
                            .configValue=${"show_oscillate_control"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="side-by-side">
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.tap_action}
                        .actions=${z}
                        .configValue=${"tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.hold_action}
                        .actions=${z}
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
                        .actions=${z}
                        .configValue=${"double_tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                </div>
            </div>
        `}_valueChanged(i){var e,a;if(!this._config||!this.hass)return;const o=i.target,t=null!==(a=null!==(e=o.checked)&&void 0!==e?e:i.detail.value)&&void 0!==a?a:o.value;o.configValue&&this._config[o.configValue]!==t&&(o.configValue&&(t?this._config=Object.assign(Object.assign({},this._config),{[o.configValue]:t}):(this._config=Object.assign({},this._config),delete this._config[o.configValue])),g(this,"config-changed",{config:this._config}))}static get styles(){return b}};u([f({attribute:!1})],V.prototype,"hass",void 0),u([_()],V.prototype,"_config",void 0),V=u([$(v)],V);export{V as FanCardEditor};
