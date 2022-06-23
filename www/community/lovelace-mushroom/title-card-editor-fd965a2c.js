import{a as e,o as t,b as i,s as o,e as a,f as s,$ as l,n,_ as r,h as c,t as u,i as f,a3 as d}from"./mushroom-a5aee8f6.js";import{s as h}from"./localize-32a7779c.js";import"./mushroom-textarea-37cef3e4.js";import{b as g,c as p}from"./editor-styles-498e9f20.js";import"./mwc-textfield-base-9070c458.js";import"./if-defined-d53f5798.js";const m=e(g,t({title:i(o()),subtitle:i(o())}));let v=class extends a{setConfig(e){s(e,m),this._config=e}render(){var e,t;if(!this.hass||!this._config)return l``;const i=h(this.hass);return l`
            <div class="card-config">
                <mushroom-textarea
                    .label="${i("editor.card.title.title")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                    .value=${null!==(e=this._config.title)&&void 0!==e?e:""}
                    .configValue=${"title"}
                    @keydown=${this._ignoreKeydown}
                    @input=${this._valueChanged}
                    dir="ltr"
                    autogrow
                    autocapitalize="none"
                    autocomplete="off"
                    spellcheck="false"
                ></mushroom-textarea>
                <mushroom-textarea
                    .label="${i("editor.card.title.subtitle")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                    .value=${null!==(t=this._config.subtitle)&&void 0!==t?t:""}
                    .configValue=${"subtitle"}
                    @keydown=${this._ignoreKeydown}
                    @input=${this._valueChanged}
                    dir="ltr"
                    autogrow
                    autocapitalize="none"
                    autocomplete="off"
                    spellcheck="false"
                ></mushroom-textarea>
            </div>
        `}_ignoreKeydown(e){e.stopPropagation()}_valueChanged(e){var t,i;if(!this._config||!this.hass)return;const o=e.target,a=null!==(i=null!==(t=o.checked)&&void 0!==t?t:e.detail.value)&&void 0!==i?i:o.value;if(this[`_${o.configValue}`]===a)return;let s;o.configValue&&(a?s=Object.assign(Object.assign({},this._config),{[o.configValue]:a}):(s=Object.assign({},this._config),delete s[o.configValue])),n(this,"config-changed",{config:s})}static get styles(){return p}};r([c({attribute:!1})],v.prototype,"hass",void 0),r([u()],v.prototype,"_config",void 0),v=r([f(d)],v);export{v as TitleCardEditor};
