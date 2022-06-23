import{_ as e,h as t,i,e as o,$ as s,r as n,t as a,p as c,n as l,y as r,B as h,D as d,o as p,F as u,b as m,s as g,d as f,v as _,c as b,E as y,J as v,a as C,f as $,K as x}from"./mushroom-a5aee8f6.js";import{s as E}from"./localize-32a7779c.js";import"./mushroom-select-6b50439e.js";import{a as k}from"./action-struct-ee173542.js";import{b as w}from"./editor-styles-498e9f20.js";import{C as j,g as M}from"./types-d56cbe3b.js";import"./if-defined-d53f5798.js";const S=["start","end","center","justify"];let A=class extends o{constructor(){super(...arguments),this.label="",this.configValue=""}_selectChanged(e){const t=e.target.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:"default"!==t?t:""}}))}render(){const e=E(this.hass);return s`
            <mushroom-select
                .label=${this.label}
                .configValue=${this.configValue}
                @selected=${this._selectChanged}
                @closed=${e=>e.stopPropagation()}
                .value=${this.value||"default"}
                fixedMenuPosition
                naturalMenuWidth
            >
                <mwc-list-item value="default">
                    ${e("editor.card.chips.alignment_values.default")}
                </mwc-list-item>
                ${S.map((t=>s`
                        <mwc-list-item .value=${t}>
                            ${e(`editor.card.chips.alignment_values.${t}`)}
                        </mwc-list-item>
                    `))}
            </mushroom-select>
        `}static get styles(){return n`
            mushroom-select {
                width: 100%;
            }
        `}};e([t()],A.prototype,"label",void 0),e([t()],A.prototype,"value",void 0),e([t()],A.prototype,"configValue",void 0),e([t()],A.prototype,"hass",void 0),A=e([i("mushroom-alignment-picker")],A);let O=class extends o{constructor(){super(...arguments),this._guiModeAvailable=!0,this._guiMode=!0}render(){const e=E(this.hass);return s`
            <div class="header">
                <div class="back-title">
                    <ha-icon-button
                        .label=${this.hass.localize("ui.common.back")}
                        @click=${this._goBack}
                    >
                        <ha-icon icon="mdi:arrow-left"></ha-icon>
                    </ha-icon-button>
                    <span slot="title"
                        >${e("editor.chip.sub_element_editor.title")}</span
                    >
                </div>
                <mwc-button
                    slot="secondaryAction"
                    .disabled=${!this._guiModeAvailable}
                    @click=${this._toggleMode}
                >
                    ${this.hass.localize(this._guiMode?"ui.panel.lovelace.editor.edit_card.show_code_editor":"ui.panel.lovelace.editor.edit_card.show_visual_editor")}
                </mwc-button>
            </div>
            ${"chip"===this.config.type?s`
                      <mushroom-chip-element-editor
                          class="editor"
                          .hass=${this.hass}
                          .value=${this.config.elementConfig}
                          @config-changed=${this._handleConfigChanged}
                          @GUImode-changed=${this._handleGUIModeChanged}
                      ></mushroom-chip-element-editor>
                  `:""}
        `}_goBack(){l(this,"go-back")}_toggleMode(){var e;null===(e=this._editorElement)||void 0===e||e.toggleMode()}_handleGUIModeChanged(e){e.stopPropagation(),this._guiMode=e.detail.guiMode,this._guiModeAvailable=e.detail.guiModeAvailable}_handleConfigChanged(e){this._guiModeAvailable=e.detail.guiModeAvailable}static get styles(){return n`
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .back-title {
                display: flex;
                align-items: center;
                font-size: 18px;
            }
            ha-icon {
                display: flex;
                align-items: center;
                justify-content: center;
            }
        `}};e([t({attribute:!1})],O.prototype,"config",void 0),e([a()],O.prototype,"_guiModeAvailable",void 0),e([a()],O.prototype,"_guiMode",void 0),e([c(".editor")],O.prototype,"_editorElement",void 0),O=e([i("mushroom-sub-element-editor")],O);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z={},B=r(class extends h{constructor(){super(...arguments),this.nt=z}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.nt)&&this.nt.length===t.length&&t.every(((e,t)=>e===this.nt[t])))return d}else if(this.nt===t)return d;return this.nt=Array.isArray(t)?Array.from(t):t,this.render(t,i)}}),I=n`
    #sortable a:nth-of-type(2n) paper-icon-item {
        animation-name: keyframes1;
        animation-iteration-count: infinite;
        transform-origin: 50% 10%;
        animation-delay: -0.75s;
        animation-duration: 0.25s;
    }

    #sortable a:nth-of-type(2n-1) paper-icon-item {
        animation-name: keyframes2;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        transform-origin: 30% 5%;
        animation-delay: -0.5s;
        animation-duration: 0.33s;
    }

    #sortable a {
        height: 48px;
        display: flex;
    }

    #sortable {
        outline: none;
        display: block !important;
    }

    .hidden-panel {
        display: flex !important;
    }

    .sortable-fallback {
        display: none;
    }

    .sortable-ghost {
        opacity: 0.4;
    }

    .sortable-fallback {
        opacity: 0;
    }

    @keyframes keyframes1 {
        0% {
            transform: rotate(-1deg);
            animation-timing-function: ease-in;
        }

        50% {
            transform: rotate(1.5deg);
            animation-timing-function: ease-out;
        }
    }

    @keyframes keyframes2 {
        0% {
            transform: rotate(1deg);
            animation-timing-function: ease-in;
        }

        50% {
            transform: rotate(-1.5deg);
            animation-timing-function: ease-out;
        }
    }

    .show-panel,
    .hide-panel {
        display: none;
        position: absolute;
        top: 0;
        right: 4px;
        --mdc-icon-button-size: 40px;
    }

    :host([rtl]) .show-panel {
        right: initial;
        left: 4px;
    }

    .hide-panel {
        top: 4px;
        right: 8px;
    }

    :host([rtl]) .hide-panel {
        right: initial;
        left: 8px;
    }

    :host([expanded]) .hide-panel {
        display: block;
    }

    :host([expanded]) .show-panel {
        display: inline-flex;
    }

    paper-icon-item.hidden-panel,
    paper-icon-item.hidden-panel span,
    paper-icon-item.hidden-panel ha-icon[slot="item-icon"] {
        color: var(--secondary-text-color);
        cursor: pointer;
    }
`;let P,V=class extends o{constructor(){super(...arguments),this._attached=!1,this._renderEmptySortable=!1}connectedCallback(){super.connectedCallback(),this._attached=!0}disconnectedCallback(){super.disconnectedCallback(),this._attached=!1}render(){if(!this.chips||!this.hass)return s``;const e=E(this.hass);return s`
            <h3>
                ${this.label||`${e("editor.chip.chip-picker.chips")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.required")})`}
            </h3>
            <div class="chips">
                ${B([this.chips,this._renderEmptySortable],(()=>this._renderEmptySortable?"":this.chips.map(((t,i)=>s`
                                  <div class="chip">
                                      <ha-icon class="handle" icon="mdi:drag"></ha-icon>
                                      ${s`
                                          <div class="special-row">
                                              <div>
                                                  <span> ${this._renderChipLabel(t)} </span>
                                                  <span class="secondary"
                                                      >${e("editor.chip.chip-picker.details")}</span
                                                  >
                                              </div>
                                          </div>
                                      `}
                                      <ha-icon-button
                                          .label=${e("editor.chip.chip-picker.clear")}
                                          class="remove-icon"
                                          .index=${i}
                                          @click=${this._removeChip}
                                      >
                                          <ha-icon icon="mdi:close"></ha-icon
                                      ></ha-icon-button>
                                      <ha-icon-button
                                          .label=${e("editor.chip.chip-picker.edit")}
                                          class="edit-icon"
                                          .index=${i}
                                          @click=${this._editChip}
                                      >
                                          <ha-icon icon="mdi:pencil"></ha-icon>
                                      </ha-icon-button>
                                  </div>
                              `))))}
            </div>
            <mushroom-select
                .label=${e("editor.chip.chip-picker.add")}
                @selected=${this._addChips}
                @closed=${e=>e.stopPropagation()}
                fixedMenuPosition
                naturalMenuWidth
            >
                ${j.map((t=>s`
                            <mwc-list-item .value=${t}>
                                ${e(`editor.chip.chip-picker.types.${t}`)}
                            </mwc-list-item>
                        `))}
            </mushroom-select>
        `}updated(e){var t;super.updated(e);const i=e.has("_attached"),o=e.has("chips");if(o||i)return i&&!this._attached?(null===(t=this._sortable)||void 0===t||t.destroy(),void(this._sortable=void 0)):void(this._sortable||!this.chips?o&&this._handleChipsChanged():this._createSortable())}async _handleChipsChanged(){this._renderEmptySortable=!0,await this.updateComplete;const e=this.shadowRoot.querySelector(".chips");for(;e.lastElementChild;)e.removeChild(e.lastElementChild);this._renderEmptySortable=!1}async _createSortable(){if(!P){const e=await import("./sortable.core.esm-2044fe66.js");P=e.Sortable,P.mount(e.OnSpill),P.mount(e.AutoScroll())}this._sortable=new P(this.shadowRoot.querySelector(".chips"),{animation:150,fallbackClass:"sortable-fallback",handle:".handle",onEnd:async e=>this._chipMoved(e)})}async _addChips(e){const t=e.target,i=t.value;if(""===i)return;let o;const s=M(i);o=s&&s.getStubConfig?await s.getStubConfig(this.hass):{type:i};const n=this.chips.concat(o);t.value="",l(this,"chips-changed",{chips:n})}_chipMoved(e){if(e.oldIndex===e.newIndex)return;const t=this.chips.concat();t.splice(e.newIndex,0,t.splice(e.oldIndex,1)[0]),l(this,"chips-changed",{chips:t})}_removeChip(e){const t=e.currentTarget.index,i=this.chips.concat();i.splice(t,1),l(this,"chips-changed",{chips:i})}_editChip(e){const t=e.currentTarget.index;l(this,"edit-detail-element",{subElementConfig:{index:t,type:"chip",elementConfig:this.chips[t]}})}_renderChipLabel(e){let t=E(this.hass)(`editor.chip.chip-picker.types.${e.type}`);return"entity"in e&&e.entity&&(t+=` - ${e.entity}`),t}static get styles(){return[I,n`
                .chip {
                    display: flex;
                    align-items: center;
                }

                ha-icon {
                    display: flex;
                }

                mushroom-select {
                    width: 100%;
                }

                .chip .handle {
                    padding-right: 8px;
                    cursor: move;
                }

                .special-row {
                    height: 60px;
                    font-size: 16px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-grow: 1;
                }

                .special-row div {
                    display: flex;
                    flex-direction: column;
                }

                .remove-icon,
                .edit-icon {
                    --mdc-icon-button-size: 36px;
                    color: var(--secondary-text-color);
                }

                .secondary {
                    font-size: 12px;
                    color: var(--secondary-text-color);
                }
            `]}};e([t({attribute:!1})],V.prototype,"hass",void 0),e([t({attribute:!1})],V.prototype,"chips",void 0),e([t()],V.prototype,"label",void 0),e([a()],V.prototype,"_attached",void 0),e([a()],V.prototype,"_renderEmptySortable",void 0),V=e([i("mushroom-chips-card-chips-editor")],V);const q=p({type:u("action"),icon:m(g()),icon_color:m(g()),tap_action:m(k),hold_action:m(k),double_tap_action:m(k)}),D=p({type:u("back"),icon:m(g()),icon_color:m(g())}),G=p({type:u("entity"),entity:m(g()),name:m(g()),content_info:m(g()),icon:m(g()),icon_color:m(g()),tap_action:m(k),hold_action:m(k),double_tap_action:m(k)}),U=p({type:u("menu"),icon:m(g()),icon_color:m(g())}),L=p({type:u("weather"),entity:m(g()),tap_action:m(k),hold_action:m(k),double_tap_action:m(k),show_temperature:m(f()),show_conditions:m(f())}),R=p({entity:g(),state:m(g()),state_not:m(g())}),T=p({type:u("conditional"),chip:m(_()),conditions:m(b(R))}),W=p({type:u("light"),entity:m(g()),name:m(g()),content_info:m(g()),icon:m(g()),use_light_color:m(f()),tap_action:m(k),hold_action:m(k),double_tap_action:m(k)}),F=p({type:u("template"),tap_action:m(k),hold_action:m(k),double_tap_action:m(k),content:m(g()),icon:m(g()),icon_color:m(g()),entity_id:m(y([g(),b(g())]))}),J=v((e=>{if(e&&"object"==typeof e&&"type"in e)switch(e.type){case"action":return q;case"back":return D;case"entity":return G;case"menu":return U;case"weather":return L;case"conditional":return T;case"light":return W;case"template":return F}return p()})),K=C(w,p({chips:b(J),alignment:m(g())}));let H=class extends o{setConfig(e){$(e,K),this._config=e}get _title(){return this._config.title||""}get _theme(){return this._config.theme||""}render(){if(!this.hass||!this._config)return s``;if(this._subElementEditorConfig)return s`
                <mushroom-sub-element-editor
                    .hass=${this.hass}
                    .config=${this._subElementEditorConfig}
                    @go-back=${this._goBack}
                    @config-changed=${this._handleSubElementChanged}
                >
                </mushroom-sub-element-editor>
            `;const e=E(this.hass);return s`
            <div class="card-config">
                <mushroom-alignment-picker
                    .label="${e("editor.card.chips.alignment")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                    .hass=${this.hass}
                    .value=${this._config.alignment}
                    .configValue=${"alignment"}
                    @value-changed=${this._valueChanged}
                >
                </mushroom-alignment-picker>
            </div>
            <mushroom-chips-card-chips-editor
                .hass=${this.hass}
                .chips=${this._config.chips}
                @chips-changed=${this._valueChanged}
                @edit-detail-element=${this._editDetailElement}
            ></mushroom-chips-card-chips-editor>
        `}_valueChanged(e){var t,i,o;if(!this._config||!this.hass)return;const s=e.target,n=s.configValue||(null===(t=this._subElementEditorConfig)||void 0===t?void 0:t.type),a=null!==(o=null!==(i=s.checked)&&void 0!==i?i:e.detail.value)&&void 0!==o?o:s.value;if("chip"===n||e.detail&&e.detail.chips){const t=e.detail.chips||this._config.chips.concat();"chip"===n&&(a?t[this._subElementEditorConfig.index]=a:(t.splice(this._subElementEditorConfig.index,1),this._goBack()),this._subElementEditorConfig.elementConfig=a),this._config=Object.assign(Object.assign({},this._config),{chips:t})}else n&&(a?this._config=Object.assign(Object.assign({},this._config),{[n]:a}):(this._config=Object.assign({},this._config),delete this._config[n]));l(this,"config-changed",{config:this._config})}_handleSubElementChanged(e){var t;if(e.stopPropagation(),!this._config||!this.hass)return;const i=null===(t=this._subElementEditorConfig)||void 0===t?void 0:t.type,o=e.detail.config;if("chip"===i){const e=this._config.chips.concat();o?e[this._subElementEditorConfig.index]=o:(e.splice(this._subElementEditorConfig.index,1),this._goBack()),this._config=Object.assign(Object.assign({},this._config),{chips:e})}else i&&(""===o?(this._config=Object.assign({},this._config),delete this._config[i]):this._config=Object.assign(Object.assign({},this._config),{[i]:o}));this._subElementEditorConfig=Object.assign(Object.assign({},this._subElementEditorConfig),{elementConfig:o}),l(this,"config-changed",{config:this._config})}_editDetailElement(e){this._subElementEditorConfig=e.detail.subElementConfig}_goBack(){this._subElementEditorConfig=void 0}};e([t({attribute:!1})],H.prototype,"hass",void 0),e([a()],H.prototype,"_config",void 0),e([a()],H.prototype,"_subElementEditorConfig",void 0),H=e([i(x)],H);export{H as ChipsCardEditor};
