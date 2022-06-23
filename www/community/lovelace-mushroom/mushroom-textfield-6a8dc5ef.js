import{r as e,_ as t,h as i,$ as d}from"./mushroom-a5aee8f6.js";import{s as n,T as a}from"./mwc-textfield-base-9070c458.js";import"./if-defined-d53f5798.js";class r extends a{updated(e){super.updated(e),(e.has("invalid")&&(this.invalid||void 0!==e.get("invalid"))||e.has("errorMessage"))&&(this.setCustomValidity(this.invalid?this.errorMessage||"Invalid":""),this.reportValidity())}renderOutline(){return""}renderIcon(e,t=!1){const i=t?"trailing":"leading";return d`
            <span
                class="mdc-text-field__icon mdc-text-field__icon--${i}"
                tabindex=${t?1:-1}
            >
                <slot name="${i}Icon"></slot>
            </span>
        `}}r.styles=[n,e`
            .mdc-text-field__input {
                width: var(--ha-textfield-input-width, 100%);
            }
            .mdc-text-field:not(.mdc-text-field--with-leading-icon) {
                padding: var(--text-field-padding, 0px 16px);
            }
            .mdc-text-field__affix--suffix {
                padding-left: var(--text-field-suffix-padding-left, 12px);
                padding-right: var(--text-field-suffix-padding-right, 0px);
            }

            input {
                text-align: var(--text-field-text-align);
            }

            /* Chrome, Safari, Edge, Opera */
            :host([no-spinner]) input::-webkit-outer-spin-button,
            :host([no-spinner]) input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            /* Firefox */
            :host([no-spinner]) input[type="number"] {
                -moz-appearance: textfield;
            }

            .mdc-text-field__ripple {
                overflow: hidden;
            }

            .mdc-text-field {
                overflow: var(--text-field-overflow);
            }
        `],t([i({type:Boolean})],r.prototype,"invalid",void 0),t([i({attribute:"error-message"})],r.prototype,"errorMessage",void 0),customElements.define("mushroom-textfield",r);
