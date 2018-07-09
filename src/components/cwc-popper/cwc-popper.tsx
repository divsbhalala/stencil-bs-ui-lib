import {Component, Element, HostElement, Prop, State, Method} from '@stencil/core';
import Popper, {Placement} from 'popper.js';

@Component({
    tag: 'cwc-popper',
    styleUrl: 'cwc-popper.scss'
})
export class CwcPopper {
    btn: any;
    content: Element;
    mouse: any;
    openState: boolean = false;

    @Element() el: HostElement;

    @Prop() refid: string;
    @Prop() placement: Placement = 'top';
    @Prop() trigger: string = 'click';
    @Prop() arrow: boolean = false;
    @Prop() closeable: boolean = true;

    @State() tooltip: Popper;

    componentDidLoad() {
        if (this.refid) {
            this.btn = document.getElementById(this.refid);
        } else {
            this.mouse = {pageX: 0, pageY: 0};
            const ref = {
                getBoundingClientRect: () => {
                    return {
                        top: this.mouse.pageY,
                        right: this.mouse.pageX,
                        bottom: this.mouse.pageY,
                        left: this.mouse.pageX,
                        width: 0,
                        height: 0
                    };
                },
                clientWidth: 0,
                clientHeight: 0,
            };
            this.btn = ref;
        }

        this.content = this.el.children[0].children[0];
        if (this.arrow) {
            const caretEl = document.createElement('div');
            caretEl.className = "popper__arrow";
            caretEl.innerHTML = "&nbsp;";
            const att = document.createAttribute("x-arrow");       // Create a "arrow" attribute
            att.value = "left";
            caretEl.setAttributeNode(att);
            this.content.appendChild(caretEl);
        }
        if (this.refid) {
            const popperDropdown = document.querySelector("cwc-popper");
            const trigger = this.trigger === 'hover' ? 'mouseover' : this.trigger;
            this.btn.addEventListener(trigger, () =>  this.open());
            popperDropdown.addEventListener(trigger, () =>  this.open());
            this.close();

            popperDropdown.addEventListener("mouseup", (event) => {
                event.stopPropagation();
            });
            if (trigger !== "click") {
                this.btn.addEventListener("mouseleave", () => this.close());
                popperDropdown.addEventListener("mouseleave", () => {
                    this.close();
                })
            } else {
                document.addEventListener("mouseup", (event) => {
                    if (event.target !== this.btn) {
                        this.close();
                    }
                });
            }

        } else {
            this.content.classList.add("mouse-popper");
            this.open();
        }
    }

    componentWillUpdate() {
        this.openState
            ? this.content.classList.add("show")
            : this.content.classList.remove("show");
    }

    @Method()
    open() {
        this.openState = true;
        this.content.classList.add("show");
        this.content.classList.add("popper");
        this.content.classList.add(this.placement);
        const self = this;
        this.tooltip = new Popper(this.btn, this.content, {
            placement: this.placement,
            modifiers: {
                flip: {
                    behavior: ['left', 'bottom', 'top']
                },

            },
            onCreate({instance}) {
                if (!self.refid) {
                    document.onmousemove = ({pageX, pageY}) => {
                        self.mouse = {pageX, pageY};
                        instance.scheduleUpdate();
                    };
                }

            }
        });
    }

    @Method()
    close() {
        this.openState = false
        if (this.tooltip && this.tooltip.destroy && this.closeable) {
            this.content.classList.remove("show");
            this.tooltip.destroy();
        }
    }

    @Method()
    toggle() {
        this.openState
            ? this.close()
            : this.open()
    }

    render() {
        return ( <div class="popper">
            <slot name="dropdown-menu"></slot>
        </div> )
    }
}