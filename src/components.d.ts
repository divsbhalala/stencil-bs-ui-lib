/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import {
  VirtualNode,
} from './components/cwc-list/cwc-list-interfaces';
import {
  BootstrapThemeColor,
} from './common/bootstrap-theme-color.type';
import {
  HostElement,
} from '@stencil/core';
import {
  BootstrapThemeColor as BootstrapThemeColor2,
  IBreadcrumbItem,
} from './common/index';

import {
  StencilComponent as CwcDropdown
} from './components/cwc-dropdown/cwc-dropdown';

declare global {
  interface HTMLCwcDropdownElement extends CwcDropdown, HTMLElement {
  }
  var HTMLCwcDropdownElement: {
    prototype: HTMLCwcDropdownElement;
    new (): HTMLCwcDropdownElement;
  };
  interface HTMLElementTagNameMap {
    "cwc-dropdown": HTMLCwcDropdownElement;
  }
  interface ElementTagNameMap {
    "cwc-dropdown": HTMLCwcDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "cwc-dropdown": JSXElements.CwcDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface CwcDropdownAttributes extends HTMLAttributes {
      dropdownPlacement?: any;
      offsetString?: string;
      triggerOverflow?: boolean;
    }
  }
}


import {
  CwcList as CwcList
} from './components/cwc-list/cwc-list';

declare global {
  interface HTMLCwcListElement extends CwcList, HTMLElement {
  }
  var HTMLCwcListElement: {
    prototype: HTMLCwcListElement;
    new (): HTMLCwcListElement;
  };
  interface HTMLElementTagNameMap {
    "cwc-list": HTMLCwcListElement;
  }
  interface ElementTagNameMap {
    "cwc-list": HTMLCwcListElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "cwc-list": JSXElements.CwcListAttributes;
    }
  }
  namespace JSXElements {
    export interface CwcListAttributes extends HTMLAttributes {
      addClass?: string;
      addClassEven?: string;
      addClassFirst?: string;
      addClassLast?: string;
      addClassOdd?: string;
      bindToList?: boolean;
      bottomOffset?: number;
      debounce?: number;
      itemAs?: string;
      items?: object[];
      template?: VirtualNode;
      wrapperClass?: string;
    }
  }
}


import {
  CwcMultiselect as CwcMultiselect
} from './components/cwc-multiselect/cwc-multiselect';

declare global {
  interface HTMLCwcMultiselectElement extends CwcMultiselect, HTMLElement {
  }
  var HTMLCwcMultiselectElement: {
    prototype: HTMLCwcMultiselectElement;
    new (): HTMLCwcMultiselectElement;
  };
  interface HTMLElementTagNameMap {
    "cwc-multiselect": HTMLCwcMultiselectElement;
  }
  interface ElementTagNameMap {
    "cwc-multiselect": HTMLCwcMultiselectElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "cwc-multiselect": JSXElements.CwcMultiselectAttributes;
    }
  }
  namespace JSXElements {
    export interface CwcMultiselectAttributes extends HTMLAttributes {
      data?: any[];
      idValue?: string;
      minSearchLength?: number;
      placeholder?: string;
      searchKey?: string;
    }
  }
}


import {
  CwcTag as CwcTag
} from './components/cwc-tag/cwc-tag';

declare global {
  interface HTMLCwcTagElement extends CwcTag, HTMLElement {
  }
  var HTMLCwcTagElement: {
    prototype: HTMLCwcTagElement;
    new (): HTMLCwcTagElement;
  };
  interface HTMLElementTagNameMap {
    "cwc-tag": HTMLCwcTagElement;
  }
  interface ElementTagNameMap {
    "cwc-tag": HTMLCwcTagElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "cwc-tag": JSXElements.CwcTagAttributes;
    }
  }
  namespace JSXElements {
    export interface CwcTagAttributes extends HTMLAttributes {
      classes?: string;
      closable?: boolean;
      imgLink?: string;
      limitTo?: number;
      link?: string;
      onCloseData?: any;
      removeOnClose?: boolean;
      rounded?: boolean;
      tagType?: BootstrapThemeColor;
      text?: string;
    }
  }
}


import {
  CwcTypeahead as CwcTypeahead
} from './components/cwc-typeahead/cwc-typeahead';

declare global {
  interface HTMLCwcTypeaheadElement extends CwcTypeahead, HTMLElement {
  }
  var HTMLCwcTypeaheadElement: {
    prototype: HTMLCwcTypeaheadElement;
    new (): HTMLCwcTypeaheadElement;
  };
  interface HTMLElementTagNameMap {
    "cwc-typeahead": HTMLCwcTypeaheadElement;
  }
  interface ElementTagNameMap {
    "cwc-typeahead": HTMLCwcTypeaheadElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "cwc-typeahead": JSXElements.CwcTypeaheadAttributes;
    }
  }
  namespace JSXElements {
    export interface CwcTypeaheadAttributes extends HTMLAttributes {
      data?: any[];
      idValue?: string;
      minSearchLength?: number;
      placeholder?: string;
      searchKey?: string;
    }
  }
}


import {
  FclImage as FclImage
} from './components/fcl-image/fcl-image';

declare global {
  interface HTMLFclImageElement extends FclImage, HTMLElement {
  }
  var HTMLFclImageElement: {
    prototype: HTMLFclImageElement;
    new (): HTMLFclImageElement;
  };
  interface HTMLElementTagNameMap {
    "fcl-image": HTMLFclImageElement;
  }
  interface ElementTagNameMap {
    "fcl-image": HTMLFclImageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fcl-image": JSXElements.FclImageAttributes;
    }
  }
  namespace JSXElements {
    export interface FclImageAttributes extends HTMLAttributes {
      brokenUrl?: any;
      height?: any;
      src?: any;
      width?: any;
    }
  }
}


import {
  FclVideoPLayer as FclVideoPlayer
} from './components/fcl-video-player/fcl-video-player';

declare global {
  interface HTMLFclVideoPlayerElement extends FclVideoPlayer, HTMLElement {
  }
  var HTMLFclVideoPlayerElement: {
    prototype: HTMLFclVideoPlayerElement;
    new (): HTMLFclVideoPlayerElement;
  };
  interface HTMLElementTagNameMap {
    "fcl-video-player": HTMLFclVideoPlayerElement;
  }
  interface ElementTagNameMap {
    "fcl-video-player": HTMLFclVideoPlayerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fcl-video-player": JSXElements.FclVideoPlayerAttributes;
    }
  }
  namespace JSXElements {
    export interface FclVideoPlayerAttributes extends HTMLAttributes {
      controls?: boolean;
      poster?: string;
    }
  }
}


import {
  MyCheckbox as MyCheckbox
} from './components/my-checkbox/my-checkbox';

declare global {
  interface HTMLMyCheckboxElement extends MyCheckbox, HTMLElement {
  }
  var HTMLMyCheckboxElement: {
    prototype: HTMLMyCheckboxElement;
    new (): HTMLMyCheckboxElement;
  };
  interface HTMLElementTagNameMap {
    "my-checkbox": HTMLMyCheckboxElement;
  }
  interface ElementTagNameMap {
    "my-checkbox": HTMLMyCheckboxElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-checkbox": JSXElements.MyCheckboxAttributes;
    }
  }
  namespace JSXElements {
    export interface MyCheckboxAttributes extends HTMLAttributes {
      for?: string;
      id?: string;
      title?: string;
      value?: boolean;
    }
  }
}


import {
  MyDropdown as MyDropdown
} from './components/my-dropdown/my-dropdown';

declare global {
  interface HTMLMyDropdownElement extends MyDropdown, HTMLElement {
  }
  var HTMLMyDropdownElement: {
    prototype: HTMLMyDropdownElement;
    new (): HTMLMyDropdownElement;
  };
  interface HTMLElementTagNameMap {
    "my-dropdown": HTMLMyDropdownElement;
  }
  interface ElementTagNameMap {
    "my-dropdown": HTMLMyDropdownElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-dropdown": JSXElements.MyDropdownAttributes;
    }
  }
  namespace JSXElements {
    export interface MyDropdownAttributes extends HTMLAttributes {
      for?: string;
      id?: string;
      title?: string;
      value?: string;
    }
  }
}


import {
  MyDynamicForm as MyDynamicForm
} from './components/my-dynamic-form/my-dynamic-form';

declare global {
  interface HTMLMyDynamicFormElement extends MyDynamicForm, HTMLElement {
  }
  var HTMLMyDynamicFormElement: {
    prototype: HTMLMyDynamicFormElement;
    new (): HTMLMyDynamicFormElement;
  };
  interface HTMLElementTagNameMap {
    "my-dynamic-form": HTMLMyDynamicFormElement;
  }
  interface ElementTagNameMap {
    "my-dynamic-form": HTMLMyDynamicFormElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-dynamic-form": JSXElements.MyDynamicFormAttributes;
    }
  }
  namespace JSXElements {
    export interface MyDynamicFormAttributes extends HTMLAttributes {
      ajv?: any;
      form?: any;
      schema?: any;
    }
  }
}


import {
  MyInput as MyInput
} from './components/my-input/my-input';

declare global {
  interface HTMLMyInputElement extends MyInput, HTMLElement {
  }
  var HTMLMyInputElement: {
    prototype: HTMLMyInputElement;
    new (): HTMLMyInputElement;
  };
  interface HTMLElementTagNameMap {
    "my-input": HTMLMyInputElement;
  }
  interface ElementTagNameMap {
    "my-input": HTMLMyInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-input": JSXElements.MyInputAttributes;
    }
  }
  namespace JSXElements {
    export interface MyInputAttributes extends HTMLAttributes {
      for?: string;
      format?: any;
      id?: string;
      title?: string;
      value?: any;
    }
  }
}


import {
  ScbAlert as ScbAlert
} from './components/scb-alert/scb-alert';

declare global {
  interface HTMLScbAlertElement extends ScbAlert, HTMLElement {
  }
  var HTMLScbAlertElement: {
    prototype: HTMLScbAlertElement;
    new (): HTMLScbAlertElement;
  };
  interface HTMLElementTagNameMap {
    "scb-alert": HTMLScbAlertElement;
  }
  interface ElementTagNameMap {
    "scb-alert": HTMLScbAlertElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "scb-alert": JSXElements.ScbAlertAttributes;
    }
  }
  namespace JSXElements {
    export interface ScbAlertAttributes extends HTMLAttributes {
      animatable?: boolean;
      dismissible?: boolean;
      onDismiss?: (hostEl: HostElement) => void;
      show?: boolean;
      type?: string;
    }
  }
}


import {
  ScbBadge as ScbBadge
} from './components/scb-badge/scb-badge';

declare global {
  interface HTMLScbBadgeElement extends ScbBadge, HTMLElement {
  }
  var HTMLScbBadgeElement: {
    prototype: HTMLScbBadgeElement;
    new (): HTMLScbBadgeElement;
  };
  interface HTMLElementTagNameMap {
    "scb-badge": HTMLScbBadgeElement;
  }
  interface ElementTagNameMap {
    "scb-badge": HTMLScbBadgeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "scb-badge": JSXElements.ScbBadgeAttributes;
    }
  }
  namespace JSXElements {
    export interface ScbBadgeAttributes extends HTMLAttributes {
      link?: string;
      pill?: boolean;
      type?: BootstrapThemeColor;
    }
  }
}


import {
  ScbBreadcrumb as ScbBreadcrumb
} from './components/scb-breadcrumb/scb-breadcrumb';

declare global {
  interface HTMLScbBreadcrumbElement extends ScbBreadcrumb, HTMLElement {
  }
  var HTMLScbBreadcrumbElement: {
    prototype: HTMLScbBreadcrumbElement;
    new (): HTMLScbBreadcrumbElement;
  };
  interface HTMLElementTagNameMap {
    "scb-breadcrumb": HTMLScbBreadcrumbElement;
  }
  interface ElementTagNameMap {
    "scb-breadcrumb": HTMLScbBreadcrumbElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "scb-breadcrumb": JSXElements.ScbBreadcrumbAttributes;
    }
  }
  namespace JSXElements {
    export interface ScbBreadcrumbAttributes extends HTMLAttributes {
      items?: IBreadcrumbItem[];
    }
  }
}


import {
  ScbDialog as ScbDialog
} from './components/scb-dialog/scb-dialog';

declare global {
  interface HTMLScbDialogElement extends ScbDialog, HTMLElement {
  }
  var HTMLScbDialogElement: {
    prototype: HTMLScbDialogElement;
    new (): HTMLScbDialogElement;
  };
  interface HTMLElementTagNameMap {
    "scb-dialog": HTMLScbDialogElement;
  }
  interface ElementTagNameMap {
    "scb-dialog": HTMLScbDialogElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "scb-dialog": JSXElements.ScbDialogAttributes;
    }
  }
  namespace JSXElements {
    export interface ScbDialogAttributes extends HTMLAttributes {
      animation?: boolean;
      centered?: boolean;
      content?: string;
      optBackdrop?: any;
      optFocus?: boolean;
      optKeyboard?: boolean;
      optShow?: boolean;
      size?: string;
      title?: string;
    }
  }
}


import {
  ScbFileInput as ScbFileInput
} from './components/scb-file-input/scb-file-input';

declare global {
  interface HTMLScbFileInputElement extends ScbFileInput, HTMLElement {
  }
  var HTMLScbFileInputElement: {
    prototype: HTMLScbFileInputElement;
    new (): HTMLScbFileInputElement;
  };
  interface HTMLElementTagNameMap {
    "scb-file-input": HTMLScbFileInputElement;
  }
  interface ElementTagNameMap {
    "scb-file-input": HTMLScbFileInputElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "scb-file-input": JSXElements.ScbFileInputAttributes;
    }
  }
  namespace JSXElements {
    export interface ScbFileInputAttributes extends HTMLAttributes {
      accept?: string;
      files?: any[];
      formDataName?: string;
      headers?: string;
      maxFiles?: number;
      maxFileSize?: number;
      method?: string;
      noAuto?: boolean;
      nodrop?: boolean;
      target?: string;
      timeout?: number;
      type?: BootstrapThemeColor;
    }
  }
}


import {
  ScbNavbar as ScbNavbar
} from './components/scb-navbar/scb-navbar';

declare global {
  interface HTMLScbNavbarElement extends ScbNavbar, HTMLElement {
  }
  var HTMLScbNavbarElement: {
    prototype: HTMLScbNavbarElement;
    new (): HTMLScbNavbarElement;
  };
  interface HTMLElementTagNameMap {
    "scb-navbar": HTMLScbNavbarElement;
  }
  interface ElementTagNameMap {
    "scb-navbar": HTMLScbNavbarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "scb-navbar": JSXElements.ScbNavbarAttributes;
    }
  }
  namespace JSXElements {
    export interface ScbNavbarAttributes extends HTMLAttributes {
      bgcolor?: string;
      navbarcolor?: string;
      placement?: string;
      size?: string;
    }
  }
}


import {
  ScbTooltip as ScbTooltip
} from './components/scb-tooltip/scb-tooltip';

declare global {
  interface HTMLScbTooltipElement extends ScbTooltip, HTMLElement {
  }
  var HTMLScbTooltipElement: {
    prototype: HTMLScbTooltipElement;
    new (): HTMLScbTooltipElement;
  };
  interface HTMLElementTagNameMap {
    "scb-tooltip": HTMLScbTooltipElement;
  }
  interface ElementTagNameMap {
    "scb-tooltip": HTMLScbTooltipElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "scb-tooltip": JSXElements.ScbTooltipAttributes;
    }
  }
  namespace JSXElements {
    export interface ScbTooltipAttributes extends HTMLAttributes {
      delay?: any;
      href?: string;
      offset?: string;
      placement?: string;
      target?: string;
      title?: string;
      trigger?: string;
      type?: string;
    }
  }
}


import {
  AlertsPage as AlertsPage
} from './pages/alerts-page/alerts-page';

declare global {
  interface HTMLAlertsPageElement extends AlertsPage, HTMLElement {
  }
  var HTMLAlertsPageElement: {
    prototype: HTMLAlertsPageElement;
    new (): HTMLAlertsPageElement;
  };
  interface HTMLElementTagNameMap {
    "alerts-page": HTMLAlertsPageElement;
  }
  interface ElementTagNameMap {
    "alerts-page": HTMLAlertsPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "alerts-page": JSXElements.AlertsPageAttributes;
    }
  }
  namespace JSXElements {
    export interface AlertsPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  BadgePage as BadgePage
} from './pages/badge-page/badge-page';

declare global {
  interface HTMLBadgePageElement extends BadgePage, HTMLElement {
  }
  var HTMLBadgePageElement: {
    prototype: HTMLBadgePageElement;
    new (): HTMLBadgePageElement;
  };
  interface HTMLElementTagNameMap {
    "badge-page": HTMLBadgePageElement;
  }
  interface ElementTagNameMap {
    "badge-page": HTMLBadgePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "badge-page": JSXElements.BadgePageAttributes;
    }
  }
  namespace JSXElements {
    export interface BadgePageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  BreadcrumbPage as BreadcrumbPage
} from './pages/breadcrumb-page/breadcrumb-page';

declare global {
  interface HTMLBreadcrumbPageElement extends BreadcrumbPage, HTMLElement {
  }
  var HTMLBreadcrumbPageElement: {
    prototype: HTMLBreadcrumbPageElement;
    new (): HTMLBreadcrumbPageElement;
  };
  interface HTMLElementTagNameMap {
    "breadcrumb-page": HTMLBreadcrumbPageElement;
  }
  interface ElementTagNameMap {
    "breadcrumb-page": HTMLBreadcrumbPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "breadcrumb-page": JSXElements.BreadcrumbPageAttributes;
    }
  }
  namespace JSXElements {
    export interface BreadcrumbPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  DiaglogPage as DialogPage
} from './pages/dialog-page/dialog-page';

declare global {
  interface HTMLDialogPageElement extends DialogPage, HTMLElement {
  }
  var HTMLDialogPageElement: {
    prototype: HTMLDialogPageElement;
    new (): HTMLDialogPageElement;
  };
  interface HTMLElementTagNameMap {
    "dialog-page": HTMLDialogPageElement;
  }
  interface ElementTagNameMap {
    "dialog-page": HTMLDialogPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "dialog-page": JSXElements.DialogPageAttributes;
    }
  }
  namespace JSXElements {
    export interface DialogPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StencilComponent as DropdownPage
} from './pages/dropdown-page/dropdown-page';

declare global {
  interface HTMLDropdownPageElement extends DropdownPage, HTMLElement {
  }
  var HTMLDropdownPageElement: {
    prototype: HTMLDropdownPageElement;
    new (): HTMLDropdownPageElement;
  };
  interface HTMLElementTagNameMap {
    "dropdown-page": HTMLDropdownPageElement;
  }
  interface ElementTagNameMap {
    "dropdown-page": HTMLDropdownPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "dropdown-page": JSXElements.DropdownPageAttributes;
    }
  }
  namespace JSXElements {
    export interface DropdownPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  FclImagePage as FclImagePage
} from './pages/fcl-image-page/fcl-image-page';

declare global {
  interface HTMLFclImagePageElement extends FclImagePage, HTMLElement {
  }
  var HTMLFclImagePageElement: {
    prototype: HTMLFclImagePageElement;
    new (): HTMLFclImagePageElement;
  };
  interface HTMLElementTagNameMap {
    "fcl-image-page": HTMLFclImagePageElement;
  }
  interface ElementTagNameMap {
    "fcl-image-page": HTMLFclImagePageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "fcl-image-page": JSXElements.FclImagePageAttributes;
    }
  }
  namespace JSXElements {
    export interface FclImagePageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  FileInputPage as FileInputPage
} from './pages/file-input-page/file-input-page';

declare global {
  interface HTMLFileInputPageElement extends FileInputPage, HTMLElement {
  }
  var HTMLFileInputPageElement: {
    prototype: HTMLFileInputPageElement;
    new (): HTMLFileInputPageElement;
  };
  interface HTMLElementTagNameMap {
    "file-input-page": HTMLFileInputPageElement;
  }
  interface ElementTagNameMap {
    "file-input-page": HTMLFileInputPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "file-input-page": JSXElements.FileInputPageAttributes;
    }
  }
  namespace JSXElements {
    export interface FileInputPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  FormPage as FormPage
} from './pages/form-page/form-page';

declare global {
  interface HTMLFormPageElement extends FormPage, HTMLElement {
  }
  var HTMLFormPageElement: {
    prototype: HTMLFormPageElement;
    new (): HTMLFormPageElement;
  };
  interface HTMLElementTagNameMap {
    "form-page": HTMLFormPageElement;
  }
  interface ElementTagNameMap {
    "form-page": HTMLFormPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "form-page": JSXElements.FormPageAttributes;
    }
  }
  namespace JSXElements {
    export interface FormPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  ListPage as ListPage
} from './pages/list-page/list-page';

declare global {
  interface HTMLListPageElement extends ListPage, HTMLElement {
  }
  var HTMLListPageElement: {
    prototype: HTMLListPageElement;
    new (): HTMLListPageElement;
  };
  interface HTMLElementTagNameMap {
    "list-page": HTMLListPageElement;
  }
  interface ElementTagNameMap {
    "list-page": HTMLListPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "list-page": JSXElements.ListPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ListPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  MultiselectPage as MultiselectPage
} from './pages/multiselect-page/multiselect-page';

declare global {
  interface HTMLMultiselectPageElement extends MultiselectPage, HTMLElement {
  }
  var HTMLMultiselectPageElement: {
    prototype: HTMLMultiselectPageElement;
    new (): HTMLMultiselectPageElement;
  };
  interface HTMLElementTagNameMap {
    "multiselect-page": HTMLMultiselectPageElement;
  }
  interface ElementTagNameMap {
    "multiselect-page": HTMLMultiselectPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "multiselect-page": JSXElements.MultiselectPageAttributes;
    }
  }
  namespace JSXElements {
    export interface MultiselectPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  NavbarPage as NavbarPage
} from './pages/navbar-page/navbar-page';

declare global {
  interface HTMLNavbarPageElement extends NavbarPage, HTMLElement {
  }
  var HTMLNavbarPageElement: {
    prototype: HTMLNavbarPageElement;
    new (): HTMLNavbarPageElement;
  };
  interface HTMLElementTagNameMap {
    "navbar-page": HTMLNavbarPageElement;
  }
  interface ElementTagNameMap {
    "navbar-page": HTMLNavbarPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "navbar-page": JSXElements.NavbarPageAttributes;
    }
  }
  namespace JSXElements {
    export interface NavbarPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StencilBootstrapDemo as StencilBootstrapDemo
} from './pages/stencil-bootstrap-demo/stencil-bootstrap-demo';

declare global {
  interface HTMLStencilBootstrapDemoElement extends StencilBootstrapDemo, HTMLElement {
  }
  var HTMLStencilBootstrapDemoElement: {
    prototype: HTMLStencilBootstrapDemoElement;
    new (): HTMLStencilBootstrapDemoElement;
  };
  interface HTMLElementTagNameMap {
    "stencil-bootstrap-demo": HTMLStencilBootstrapDemoElement;
  }
  interface ElementTagNameMap {
    "stencil-bootstrap-demo": HTMLStencilBootstrapDemoElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "stencil-bootstrap-demo": JSXElements.StencilBootstrapDemoAttributes;
    }
  }
  namespace JSXElements {
    export interface StencilBootstrapDemoAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  TagPage as TagPage
} from './pages/tag-page/tag-page';

declare global {
  interface HTMLTagPageElement extends TagPage, HTMLElement {
  }
  var HTMLTagPageElement: {
    prototype: HTMLTagPageElement;
    new (): HTMLTagPageElement;
  };
  interface HTMLElementTagNameMap {
    "tag-page": HTMLTagPageElement;
  }
  interface ElementTagNameMap {
    "tag-page": HTMLTagPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "tag-page": JSXElements.TagPageAttributes;
    }
  }
  namespace JSXElements {
    export interface TagPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  TolltipPage as TooltipPage
} from './pages/tooltip-page/tooltip-page';

declare global {
  interface HTMLTooltipPageElement extends TooltipPage, HTMLElement {
  }
  var HTMLTooltipPageElement: {
    prototype: HTMLTooltipPageElement;
    new (): HTMLTooltipPageElement;
  };
  interface HTMLElementTagNameMap {
    "tooltip-page": HTMLTooltipPageElement;
  }
  interface ElementTagNameMap {
    "tooltip-page": HTMLTooltipPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "tooltip-page": JSXElements.TooltipPageAttributes;
    }
  }
  namespace JSXElements {
    export interface TooltipPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  StencilComponent as TypeaheadPage
} from './pages/typeahead-page/typeahead-page';

declare global {
  interface HTMLTypeaheadPageElement extends TypeaheadPage, HTMLElement {
  }
  var HTMLTypeaheadPageElement: {
    prototype: HTMLTypeaheadPageElement;
    new (): HTMLTypeaheadPageElement;
  };
  interface HTMLElementTagNameMap {
    "typeahead-page": HTMLTypeaheadPageElement;
  }
  interface ElementTagNameMap {
    "typeahead-page": HTMLTypeaheadPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "typeahead-page": JSXElements.TypeaheadPageAttributes;
    }
  }
  namespace JSXElements {
    export interface TypeaheadPageAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  VideoPlayerPage as VideoPlayerPage
} from './pages/video-player-page/video-player-page';

declare global {
  interface HTMLVideoPlayerPageElement extends VideoPlayerPage, HTMLElement {
  }
  var HTMLVideoPlayerPageElement: {
    prototype: HTMLVideoPlayerPageElement;
    new (): HTMLVideoPlayerPageElement;
  };
  interface HTMLElementTagNameMap {
    "video-player-page": HTMLVideoPlayerPageElement;
  }
  interface ElementTagNameMap {
    "video-player-page": HTMLVideoPlayerPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "video-player-page": JSXElements.VideoPlayerPageAttributes;
    }
  }
  namespace JSXElements {
    export interface VideoPlayerPageAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
