import{e as i,$ as e,n as s,_ as a,h as o,t as c,i as t,a4 as n}from"./mushroom-a5aee8f6.js";import{c as l}from"./editor-styles-498e9f20.js";let g=class extends i{setConfig(i){this._config=i}render(){return this.hass&&this._config?e`
            <div class="card-config">
                <div class="side-by-side">
                    <ha-icon-picker
                        .label="${this.hass.localize("ui.panel.lovelace.editor.card.generic.icon")} (${this.hass.localize("ui.panel.lovelace.editor.card.config.optional")})"
                        .value=${this._config.icon}
                        .placeholder=${this._config.icon||"mdi:arrow-left"}
                        .configValue=${"icon"}
                        @value-changed=${this._valueChanged}
                    ></ha-icon-picker>
                </div>
            </div>
        `:e``}_valueChanged(i){var e,a;if(!this._config||!this.hass)return;const o=i.target,c=null!==(a=null!==(e=o.checked)&&void 0!==e?e:i.detail.value)&&void 0!==a?a:o.value;o.configValue&&this._config[o.configValue]!==c&&(o.configValue&&(c?this._config=Object.assign(Object.assign({},this._config),{[o.configValue]:c}):(this._config=Object.assign({},this._config),delete this._config[o.configValue])),s(this,"config-changed",{config:this._config}))}static get styles(){return l}};a([o({attribute:!1})],g.prototype,"hass",void 0),a([c()],g.prototype,"_config",void 0),g=a([t(n("back"))],g);export{g as BackChipEditor};
