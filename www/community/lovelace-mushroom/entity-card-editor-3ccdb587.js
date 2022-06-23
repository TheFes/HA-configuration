import{a as i,o as a,b as e,s as o,d as s,l as t,H as c,O as l,e as n,f as h,$ as r,z as d,g as u,n as g,_ as f,h as p,t as _,i as v,P as $}from"./mushroom-a5aee8f6.js";import{s as m}from"./localize-32a7779c.js";import"./color-picker-cd543841.js";import"./info-picker-681abcfb.js";import"./layout-picker-a27bd2f6.js";import"./mushroom-textfield-6a8dc5ef.js";import{b as y,c as b}from"./editor-styles-498e9f20.js";import{a as z}from"./action-struct-ee173542.js";import"./mushroom-select-6b50439e.js";import"./if-defined-d53f5798.js";import"./mwc-textfield-base-9070c458.js";const k=i(y,a({entity:e(o()),icon:e(o()),name:e(o()),icon_color:e(o()),hide_icon:e(s()),layout:e(t),primary_info:e(c(l)),secondary_info:e(c(l)),tap_action:e(z),hold_action:e(z),double_tap_action:e(z)})),V=["toggle","more-info","navigate","url","call-service","none"];let j=class extends n{setConfig(i){h(i,k),this._config=i}render(){var i;if(!this.hass||!this._config)return r``;const a=d(this.hass),e=this._config.entity?this.hass.states[this._config.entity]:void 0,o=e?u(e):void 0,s=m(this.hass);return r`
            <div class="card-config">
                <ha-entity-picker
                    .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")}"
                    .hass=${this.hass}
                    .value=${this._config.entity}
                    .configValue=${"entity"}
                    @value-changed=${this._valueChanged}
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
                    <mushroom-color-picker
                        .label="${s("editor.card.generic.icon_color")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.icon_color}
                        .configValue=${"icon_color"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-color-picker>
                    <ha-formfield
                        .label=${s("editor.card.generic.hide_icon")}
                        .dir=${a}
                    >
                        <ha-switch
                            .checked=${!!this._config.hide_icon}
                            .configValue=${"hide_icon"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="side-by-side">
                    <mushroom-layout-picker
                        .label="${s("editor.card.generic.layout")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.layout}
                        .configValue=${"layout"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-layout-picker>
                    <span></span>
                </div>
                <div class="side-by-side">
                    <mushroom-info-picker
                        .label="${s("editor.card.entity.primary_info")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.primary_info}
                        .configValue=${"primary_info"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-info-picker>
                    <mushroom-info-picker
                        .label="${s("editor.card.entity.secondary_info")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.secondary_info}
                        .configValue=${"secondary_info"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-info-picker>
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
        `}_valueChanged(i){var a,e;if(!this._config||!this.hass)return;const o=i.target,s=null!==(e=null!==(a=o.checked)&&void 0!==a?a:i.detail.value)&&void 0!==e?e:o.value;o.configValue&&this._config[o.configValue]!==s&&(o.configValue&&(s?this._config=Object.assign(Object.assign({},this._config),{[o.configValue]:s}):(this._config=Object.assign({},this._config),delete this._config[o.configValue])),g(this,"config-changed",{config:this._config}))}static get styles(){return b}};f([p({attribute:!1})],j.prototype,"hass",void 0),f([_()],j.prototype,"_config",void 0),j=f([v($)],j);export{j as EntityCardEditor};
