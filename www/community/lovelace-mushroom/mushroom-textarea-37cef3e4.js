import{r as t,_ as e,p as i,h as o,$ as a,q as r}from"./mushroom-a5aee8f6.js";import{T as s,l,s as d}from"./mwc-textfield-base-9070c458.js";import{l as n}from"./if-defined-d53f5798.js";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */const h=t`.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */,p={fromAttribute:t=>null!==t&&(""===t||t),toAttribute:t=>"boolean"==typeof t?t?"":null:t};class u extends s{constructor(){super(...arguments),this.rows=2,this.cols=20,this.charCounter=!1}render(){const t=this.charCounter&&-1!==this.maxLength,e=t&&"internal"===this.charCounter,i=t&&!e,o=!!this.helper||!!this.validationMessage||i,s={"mdc-text-field--disabled":this.disabled,"mdc-text-field--no-label":!this.label,"mdc-text-field--filled":!this.outlined,"mdc-text-field--outlined":this.outlined,"mdc-text-field--end-aligned":this.endAligned,"mdc-text-field--with-internal-counter":e};return a`
      <label class="mdc-text-field mdc-text-field--textarea ${r(s)}">
        ${this.renderRipple()}
        ${this.outlined?this.renderOutline():this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(e)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(o,i)}
    `}renderInput(){const t=this.label?"label":void 0,e=-1===this.minLength?void 0:this.minLength,i=-1===this.maxLength?void 0:this.maxLength,o=this.autocapitalize?this.autocapitalize:void 0;return a`
      <textarea
          aria-labelledby=${n(t)}
          class="mdc-text-field__input"
          .value="${l(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${n(e)}"
          maxlength="${n(i)}"
          name="${n(""===this.name?void 0:this.name)}"
          inputmode="${n(this.inputMode)}"
          autocapitalize="${n(o)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`}}e([i("textarea")],u.prototype,"formElement",void 0),e([o({type:Number})],u.prototype,"rows",void 0),e([o({type:Number})],u.prototype,"cols",void 0),e([o({converter:p})],u.prototype,"charCounter",void 0);class m extends u{constructor(){super(...arguments),this.autogrow=!1}updated(t){super.updated(t),this.autogrow&&t.has("value")&&(this.mdcRoot.dataset.value=this.value+'=​"')}}m.styles=[d,h,t`
            :host([autogrow]) {
                max-height: 200px;
            }
            :host([autogrow]) .mdc-text-field {
                position: relative;
                min-height: 74px;
                min-width: 178px;
            }
            :host([autogrow]) .mdc-text-field:after {
                content: attr(data-value);
                margin-top: 23px;
                margin-bottom: 9px;
                line-height: 1.5rem;
                min-height: 42px;
                padding: 0px 32px 0 16px;
                letter-spacing: var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);
                visibility: hidden;
                white-space: pre-wrap;
            }
            :host([autogrow]) .mdc-text-field__input {
                position: absolute;
                height: calc(100% - 32px);
            }
            :host([autogrow]) .mdc-text-field.mdc-text-field--no-label:after {
                margin-top: 16px;
                margin-bottom: 16px;
            }
        `],e([o({type:Boolean,reflect:!0})],m.prototype,"autogrow",void 0),customElements.define("mushroom-textarea",m);
