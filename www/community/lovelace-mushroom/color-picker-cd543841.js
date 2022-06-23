import{_ as e,h as o,i as t,e as s,$ as l,Q as i,T as a,U as r,V as c,r as n}from"./mushroom-a5aee8f6.js";import{s as u}from"./localize-32a7779c.js";import"./mushroom-select-6b50439e.js";let m=class extends s{constructor(){super(...arguments),this.label="",this.configValue=""}_selectChanged(e){const o=e.target.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:"default"!==o?o:""}}))}render(){const e=u(this.hass);return l`
            <mushroom-select
                .icon=${Boolean(this.value)}
                .label=${this.label}
                .configValue=${this.configValue}
                @selected=${this._selectChanged}
                @closed=${e=>e.stopPropagation()}
                .value=${this.value||"default"}
                fixedMenuPosition
                naturalMenuWidth
            >
                <mwc-icon slot="icon">${this.renderColorCircle(this.value||"grey")}</mwc-icon>
                <mwc-list-item value="default">
                    ${e("editor.form.color_picker.values.default")}
                </mwc-list-item>
                ${i.map((e=>l`
                        <mwc-list-item .value=${e} graphic="icon">
                            ${a(e)}
                            <mwc-icon slot="graphic">${this.renderColorCircle(e)}</mwc-icon>
                        </mwc-list-item>
                    `))}
            </mushroom-select>
        `}renderColorCircle(e){return l`
            <span
                class="circle-color"
                style=${r({"--main-color":c(e)})}
            ></span>
        `}static get styles(){return n`
            mushroom-select {
                width: 100%;
            }
            .circle-color {
                display: block;
                background-color: rgb(var(--main-color));
                border-radius: 10px;
                width: 20px;
                height: 20px;
            }
        `}};e([o()],m.prototype,"label",void 0),e([o()],m.prototype,"value",void 0),e([o()],m.prototype,"configValue",void 0),e([o()],m.prototype,"hass",void 0),m=e([t("mushroom-color-picker")],m);
