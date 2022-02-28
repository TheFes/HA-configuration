import{a as i,o as e,b as a,s as t,c as s,l as o,d as l,e as c,f as n,$ as h,z as d,g as r,n as u,r as g,_ as f,h as _,t as v,i as p,A as m,j as $}from"./mushroom-a5aee8f6.js";import{s as b}from"./localize-32a7779c.js";import"./layout-picker-a27bd2f6.js";import"./mushroom-select-6b50439e.js";import"./mushroom-textfield-6a8dc5ef.js";import{b as y,c as j}from"./editor-styles-498e9f20.js";import{a as z}from"./action-struct-ee173542.js";import"./if-defined-d53f5798.js";import"./mwc-textfield-base-9070c458.js";const w=i(y,e({entity:a(t()),name:a(t()),icon:a(t()),states:a(s()),layout:a(o),hide_state:a(l()),tap_action:a(z),hold_action:a(z),double_tap_action:a(z)})),x=[...$],V=["more-info","navigate","url","call-service","none"];let k=class extends c{setConfig(i){n(i,w),this._config=i}get _states(){return this._config.states||[]}render(){var i;if(!this.hass||!this._config)return h``;const e=d(this.hass),a=this._config.entity?this.hass.states[this._config.entity]:void 0,t=a?r(a):void 0,s=b(this.hass);return h`
            <div class="card-config">
                <ha-entity-picker
                    .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.entity")}"
                    .hass=${this.hass}
                    .value=${this._config.entity}
                    .configValue=${"entity"}
                    @value-changed=${this._valueChanged}
                    .includeDomains=${x}
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
                        .label="${s("editor.card.generic.layout")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .value=${this._config.layout}
                        .configValue=${"layout"}
                        @value-changed=${this._valueChanged}
                    >
                    </mushroom-layout-picker>
                    <ha-formfield
                        .label=${s("editor.card.generic.hide_state")}
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
                    <div>
                        <mwc-list>
                            <mwc-list-item noninteractive
                                >${s("editor.card.alarm_control_panel.displayed_states")}</mwc-list-item
                            >
                            <li divider role="separator"></li>
                            ${this._states.map(((i,e)=>h`
                                    <mwc-list-item hasMeta>
                                        <span>${i}</span>
                                        <ha-icon
                                            class="deleteState"
                                            .value=${e}
                                            icon="mdi:close"
                                            @click=${this._stateRemoved}
                                            slot="meta"
                                        ></ha-icon>
                                    </mwc-list-item>
                                `))}
                        </mwc-list>
                        <mushroom-select
                            .label=${this.hass.localize("ui.panel.lovelace.editor.card.alarm-panel.available_states")}
                            @selected=${this._stateAdded}
                            @closed=${i=>i.stopPropagation()}
                            fixedMenuPosition
                            naturalMenuWidth
                        >
                            ${["armed_home","armed_away","armed_night","armed_vacation","armed_custom_bypass"].map((i=>h`
                                        <mwc-list-item .value=${i}>
                                            ${i}
                                        </mwc-list-item>
                                    `))}
                        </mushroom-select>
                    </div>
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
        `}_valueChanged(i){var e,a;if(!this._config||!this.hass)return;const t=i.target,s=null!==(a=null!==(e=t.checked)&&void 0!==e?e:i.detail.value)&&void 0!==a?a:t.value;t.configValue&&this._config[t.configValue]!==s&&(t.configValue&&(s?this._config=Object.assign(Object.assign({},this._config),{[t.configValue]:s}):(this._config=Object.assign({},this._config),delete this._config[t.configValue])),u(this,"config-changed",{config:this._config}))}_stateRemoved(i){if(!this._config||!this._states||!this.hass)return;const e=i.target,a=Number(e.value);if(a>-1){const i=[...this._states];i.splice(a,1),u(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{states:i})})}}_stateAdded(i){if(!this._config||!this.hass)return;const e=i.target;if(!e.value||-1!==this._states.indexOf(e.value))return void(e.value="");const a=[...this._states];a.push(e.value),e.value="",u(this,"config-changed",{config:Object.assign(Object.assign({},this._config),{states:a})})}static get styles(){return[j,g`
                .states {
                    display: flex;
                    flex-direction: row;
                }
                .deleteState {
                    visibility: hidden;
                }
                mwc-list-item:hover > .deleteState {
                    visibility: visible;
                }
                ha-icon {
                    padding-top: 12px;
                }
            `]}};f([_({attribute:!1})],k.prototype,"hass",void 0),f([v()],k.prototype,"_config",void 0),k=f([p(m)],k);export{k as SwitchCardEditor};
