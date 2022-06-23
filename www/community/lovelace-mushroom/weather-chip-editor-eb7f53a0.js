import{e as i,$ as e,z as a,n as t,_ as o,h as s,t as c,i as l,a4 as n}from"./mushroom-a5aee8f6.js";import{s as h}from"./localize-32a7779c.js";import{c as d}from"./editor-styles-498e9f20.js";const r=["weather"],u=["more-info","navigate","url","call-service","none"];let g=class extends i{setConfig(i){this._config=i}render(){if(!this.hass||!this._config)return e``;const i=a(this.hass),t=h(this.hass);return e`
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
                    <ha-formfield
                        .label=${t("editor.chip.weather.show_conditions")}
                        .dir=${i}
                    >
                        <ha-switch
                            .checked=${!!this._config.show_conditions}
                            .configValue=${"show_conditions"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                    <ha-formfield
                        .label=${t("editor.chip.weather.show_temperature")}
                        .dir=${i}
                    >
                        <ha-switch
                            .checked=${!!this._config.show_temperature}
                            .configValue=${"show_temperature"}
                            @change=${this._valueChanged}
                        ></ha-switch>
                    </ha-formfield>
                </div>
                <div class="side-by-side">
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.tap_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.tap_action}
                        .actions=${u}
                        .configValue=${"tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                    <hui-action-editor
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.hold_action")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .hass=${this.hass}
                        .config=${this._config.hold_action}
                        .actions=${u}
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
                        .actions=${u}
                        .configValue=${"double_tap_action"}
                        .tooltipText=${this.hass.localize("ui.panel.lovelace.editor.card.button.default_action_help")}
                        @value-changed=${this._valueChanged}
                    ></hui-action-editor>
                </div>
            </div>
        `}_valueChanged(i){var e,a;if(!this._config||!this.hass)return;const o=i.target,s=null!==(a=null!==(e=o.checked)&&void 0!==e?e:i.detail.value)&&void 0!==a?a:o.value;o.configValue&&this._config[o.configValue]!==s&&(o.configValue&&(s?this._config=Object.assign(Object.assign({},this._config),{[o.configValue]:s}):(this._config=Object.assign({},this._config),delete this._config[o.configValue])),t(this,"config-changed",{config:this._config}))}static get styles(){return d}};o([s({attribute:!1})],g.prototype,"hass",void 0),o([c()],g.prototype,"_config",void 0),g=o([l(n("weather"))],g);export{g as WeatherChipEditor};
