import{e as i,$ as t,n as e,r as o,_ as a,h as s,t as n,p as c,i as d,a4 as l}from"./mushroom-a5aee8f6.js";import{s as h}from"./localize-32a7779c.js";import"./mushroom-select-6b50439e.js";import"./mushroom-textfield-6a8dc5ef.js";import{c as r}from"./editor-styles-498e9f20.js";import{C as g,g as p}from"./types-d56cbe3b.js";import"./if-defined-d53f5798.js";import"./mwc-textfield-base-9070c458.js";let u=class extends i{constructor(){super(...arguments),this._GUImode=!0,this._guiModeAvailable=!0,this._cardTab=!1}setConfig(i){this._config=i}focusYamlEditor(){var i;null===(i=this._cardEditorEl)||void 0===i||i.focusYamlEditor()}render(){var i;if(!this.hass||!this._config)return t``;const e=h(this.hass);return t`
            <mwc-tab-bar
                .activeIndex=${this._cardTab?1:0}
                @MDCTabBar:activated=${this._selectTab}
            >
                <mwc-tab
                    .label=${this.hass.localize("ui.panel.lovelace.editor.card.conditional.conditions")}
                ></mwc-tab>
                <mwc-tab .label=${e("editor.chip.conditional.chip")}></mwc-tab>
            </mwc-tab-bar>
            ${this._cardTab?t`
                      <div class="card">
                          ${void 0!==(null===(i=this._config.chip)||void 0===i?void 0:i.type)?t`
                                    <div class="card-options">
                                        <mwc-button
                                            @click=${this._toggleMode}
                                            .disabled=${!this._guiModeAvailable}
                                            class="gui-mode-button"
                                        >
                                            ${this.hass.localize(!this._cardEditorEl||this._GUImode?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                                        </mwc-button>
                                        <mwc-button @click=${this._handleReplaceChip}
                                            >${this.hass.localize("ui.panel.lovelace.editor.card.conditional.change_type")}</mwc-button
                                        >
                                    </div>
                                    <mushroom-chip-element-editor
                                        class="editor"
                                        .hass=${this.hass}
                                        .value=${this._config.chip}
                                        @config-changed=${this._handleChipChanged}
                                        @GUImode-changed=${this._handleGUIModeChanged}
                                    ></mushroom-chip-element-editor>
                                `:t`
                                    <mushroom-select
                                        .label=${e("editor.chip.chip-picker.select")}
                                        @selected=${this._handleChipPicked}
                                        @closed=${i=>i.stopPropagation()}
                                        fixedMenuPosition
                                        naturalMenuWidth
                                    >
                                        ${g.map((i=>t`
                                                    <mwc-list-item .value=${i}>
                                                        ${e(`editor.chip.chip-picker.types.${i}`)}
                                                    </mwc-list-item>
                                                `))}
                                    </mushroom-select>
                                `}
                      </div>
                  `:t`
                      <div class="conditions">
                          ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.condition_explanation")}
                          ${this._config.conditions.map(((i,e)=>{var o;return t`
                                  <div class="condition">
                                      <div class="entity">
                                          <ha-entity-picker
                                              .hass=${this.hass}
                                              .value=${i.entity}
                                              .idx=${e}
                                              .configValue=${"entity"}
                                              @change=${this._changeCondition}
                                              allow-custom-entity
                                          ></ha-entity-picker>
                                      </div>
                                      <div class="state">
                                          <mushroom-select
                                              .value=${void 0!==i.state_not?"true":"false"}
                                              .idx=${e}
                                              .configValue=${"invert"}
                                              @selected=${this._changeCondition}
                                              @closed=${i=>i.stopPropagation()}
                                              naturalMenuWidth
                                              fixedMenuPosition
                                          >
                                              <mwc-list-item value="false">
                                                  ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.state_equal")}
                                              </mwc-list-item>
                                              <mwc-list-item value="true">
                                                  ${this.hass.localize("ui.panel.lovelace.editor.card.conditional.state_not_equal")}
                                              </mwc-list-item>
                                          </mushroom-select>
                                          <mushroom-textfield
                                              .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.state")} (${this.hass.localize("ui.panel.lovelace.editor.card.conditional.current_state")}: ${null===(o=this.hass)||void 0===o?void 0:o.states[i.entity].state})"
                                              .value=${void 0!==i.state_not?i.state_not:i.state}
                                              .idx=${e}
                                              .configValue=${"state"}
                                              @input=${this._changeCondition}
                                          >
                                          </mushroom-textfield>
                                      </div>
                                  </div>
                              `}))}
                          <div class="condition">
                              <ha-entity-picker
                                  .hass=${this.hass}
                                  @change=${this._addCondition}
                              ></ha-entity-picker>
                          </div>
                      </div>
                  `}
        `}_selectTab(i){this._cardTab=1===i.detail.index}_toggleMode(){var i;null===(i=this._cardEditorEl)||void 0===i||i.toggleMode()}_setMode(i){this._GUImode=i,this._cardEditorEl&&(this._cardEditorEl.GUImode=i)}_handleGUIModeChanged(i){i.stopPropagation(),this._GUImode=i.detail.guiMode,this._guiModeAvailable=i.detail.guiModeAvailable}async _handleChipPicked(i){const t=i.target.value;if(""===t)return;let o;const a=p(t);o=a&&a.getStubConfig?await a.getStubConfig(this.hass):{type:t},i.target.value="",i.stopPropagation(),this._config&&(this._setMode(!0),this._guiModeAvailable=!0,this._config=Object.assign(Object.assign({},this._config),{chip:o}),e(this,"config-changed",{config:this._config}))}_handleChipChanged(i){i.stopPropagation(),this._config&&(this._config=Object.assign(Object.assign({},this._config),{chip:i.detail.config}),this._guiModeAvailable=i.detail.guiModeAvailable,e(this,"config-changed",{config:this._config}))}_handleReplaceChip(){this._config&&(this._config=Object.assign(Object.assign({},this._config),{chip:void 0}),e(this,"config-changed",{config:this._config}))}_addCondition(i){const t=i.target;if(""===t.value||!this._config)return;const o=[...this._config.conditions];o.push({entity:t.value,state:""}),this._config=Object.assign(Object.assign({},this._config),{conditions:o}),t.value="",e(this,"config-changed",{config:this._config})}_changeCondition(i){const t=i.target;if(!this._config||!t)return;const o=[...this._config.conditions];if("entity"===t.configValue&&""===t.value)o.splice(t.idx,1);else{const i=Object.assign({},o[t.idx]);"entity"===t.configValue?i.entity=t.value:"state"===t.configValue?void 0!==i.state_not?i.state_not=t.value:i.state=t.value:"invert"===t.configValue&&("true"===t.value?i.state&&(i.state_not=i.state,delete i.state):i.state_not&&(i.state=i.state_not,delete i.state_not)),o[t.idx]=i}this._config=Object.assign(Object.assign({},this._config),{conditions:o}),e(this,"config-changed",{config:this._config})}static get styles(){return[r,o`
                mwc-tab-bar {
                    border-bottom: 1px solid var(--divider-color);
                }
                .conditions {
                    margin-top: 8px;
                }
                .condition {
                    margin-top: 8px;
                    border: 1px solid var(--divider-color);
                    padding: 12px;
                }
                .condition .state {
                    display: flex;
                    align-items: flex-end;
                }
                .condition .state mushroom-select {
                    margin-right: 16px;
                }
                .card {
                    margin-top: 8px;
                    border: 1px solid var(--divider-color);
                    padding: 12px;
                }
                .card mushroom-select {
                    width: 100%;
                    margin-top: 0px;
                }
                @media (max-width: 450px) {
                    .card,
                    .condition {
                        margin: 8px -12px 0;
                    }
                }
                .card .card-options {
                    display: flex;
                    justify-content: flex-end;
                    width: 100%;
                }
                .gui-mode-button {
                    margin-right: auto;
                }
            `]}};a([s({attribute:!1})],u.prototype,"hass",void 0),a([s({attribute:!1})],u.prototype,"lovelace",void 0),a([n()],u.prototype,"_config",void 0),a([n()],u.prototype,"_GUImode",void 0),a([n()],u.prototype,"_guiModeAvailable",void 0),a([n()],u.prototype,"_cardTab",void 0),a([c("mushroom-chip-element-editor")],u.prototype,"_cardEditorEl",void 0),u=a([d(l("conditional"))],u);export{u as ConditionalChipEditor};
