import{_ as e,h as t,i as o,e as s,$ as l,r as a}from"./mushroom-a5aee8f6.js";import{s as i}from"./localize-32a7779c.js";import"./mushroom-select-6b50439e.js";let r=class extends s{constructor(){super(...arguments),this.label="",this.configValue=""}_selectChanged(e){const t=e.target.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:"default"!==t?t:""}}))}render(){const e=i(this.hass);return l`
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
                    ${e("editor.form.layout_picker.values.default")}
                </mwc-list-item>
                <mwc-list-item .value=${"vertical"}>
                    ${e("editor.form.layout_picker.values.vertical")}
                </mwc-list-item>
                <mwc-list-item .value=${"horizontal"}>
                    ${e("editor.form.layout_picker.values.horizontal")}
                </mwc-list-item>
            </mushroom-select>
        `}static get styles(){return a`
            mushroom-select {
                width: 100%;
            }
        `}};e([t()],r.prototype,"label",void 0),e([t()],r.prototype,"value",void 0),e([t()],r.prototype,"configValue",void 0),e([t()],r.prototype,"hass",void 0),r=e([o("mushroom-layout-picker")],r);
