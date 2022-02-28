import{a as i,o as e,b as a,s as t,d as o,l as s,e as c,f as l,$ as n,z as h,g as d,a0 as r,n as u,_ as g,h as f,t as _,i as p,a1 as $}from"./mushroom-a5aee8f6.js";import{s as v}from"./localize-32a7779c.js";import"./layout-picker-a27bd2f6.js";import"./mushroom-textfield-6a8dc5ef.js";import{b as m,c as b}from"./editor-styles-498e9f20.js";import{a as y}from"./action-struct-ee173542.js";import"./mushroom-select-6b50439e.js";import"./if-defined-d53f5798.js";import"./mwc-textfield-base-9070c458.js";const z=i(m,e({entity:a(t()),icon:a(t()),name:a(t()),use_entity_picture:a(o()),layout:a(s),hide_state:a(o()),hide_name:a(o()),tap_action:a(y),hold_action:a(y),double_tap_action:a(y)})),V=["more-info","navigate","url","call-service","none"];let j=class extends c{setConfig(i){l(i,z),this._config=i}render(){var i;if(!this.hass||!this._config)return n``;const e=h(this.hass),a=this._config.entity?this.hass.states[this._config.entity]:void 0,t=a?d(a):void 0,o=v(this.hass);return n`
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
                        .placeholder=${this._config.icon||t}
                        .configValue=${"icon"}
                        @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                </div>
                <div class="side-by-side">
                    <mushroom-layout-picker
                        .label="${o("editor.card.generic.layout")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.layout}
                        .configValue=${"layout"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-layout-picker>
                    <ha-formfield
                        .label=${o("editor.card.person.use_entity_picture")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.use_entity_picture}
                            .configValue=${"use_entity_picture"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="side-by-side">
                    <ha-formfield
                        .label=${o("editor.card.generic.hide_state")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.hide_state}
                            .configValue=${"hide_state"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                    <ha-formfield
                        .label=${o("editor.card.person.hide_name")}
                        .dir=${e}
                    >
                        <ha-switch
                            .checked=${!!this._config.hide_name}
                            .configValue=${"hide_name"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
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
                        ..config=${this._config.hold_action}
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
        `}_valueChanged(i){var e,a;if(!this._config||!this.hass)return;const t=i.target,o=null!==(a=null!==(e=t.checked)&&void 0!==e?e:i.detail.value)&&void 0!==a?a:t.value;t.configValue&&this._config[t.configValue]!==o&&(t.configValue&&(o?this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:o}):(this._config=Object.assign({},this._config),delete this._config[t.configValue])),u(this,"config-changed",{config:this._config}))}static get styles(){return b}};g([f({attribute:!1})],j.prototype,"hass",void 0),g([_()],j.prototype,"_config",void 0),j=g([p($)],j);export{j as SwitchCardEditor};
