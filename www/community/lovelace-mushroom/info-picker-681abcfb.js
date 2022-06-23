import{_ as e,h as t,i as s,e as o,O as i,$ as a,r as l}from"./mushroom-a5aee8f6.js";import{s as r}from"./localize-32a7779c.js";import"./mushroom-select-6b50439e.js";let u=class extends o{constructor(){super(...arguments),this.label="",this.configValue="",this.infos=[...i]}_selectChanged(e){const t=e.target.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:"default"!==t?t:""}}))}render(){const e=r(this.hass);return a`
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
                    ${e("editor.form.info_picker.values.default")}
                </mwc-list-item>
                ${this.infos.map((t=>{return a`
                        <mwc-list-item .value=${t}>
                            ${e(`editor.form.info_picker.values.${t}`)||(s=t,s.charAt(0).toUpperCase()+s.slice(1))}
                        </mwc-list-item>
                    `;var s}))}
            </mushroom-select>
        `}static get styles(){return l`
            mushroom-select {
                width: 100%;
            }
        `}};e([t()],u.prototype,"label",void 0),e([t()],u.prototype,"value",void 0),e([t()],u.prototype,"configValue",void 0),e([t()],u.prototype,"infos",void 0),e([t()],u.prototype,"hass",void 0),u=e([s("mushroom-info-picker")],u);
