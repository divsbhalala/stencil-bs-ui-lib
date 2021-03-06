// import { Component } from '@stencil/core';

// @Component({
//     tag: 'stencil-bootstrap-demo',
// })
// export class StencilBootstrapDemo {
//     cards: any[] = [
//         {
//             cardHeaderId: 'navbarHeading',
//             cardBodyId: 'navbarCollapse',
//             cardHeaderContent: 'Navbar Component',
//             cardBodyContent: '<navbar-page></navbar-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'cwc-dnd-heading',
//             cardBodyId: 'cwc-dnd-collapse',
//             cardHeaderContent: 'DragAndDrop Component',
//             cardBodyContent: '<cwc-dnd-page></cwc-dnd-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'resolution-info-heading',
//             cardBodyId: 'resolution-info-collapse',
//             cardHeaderContent: 'Resolution Info Component',
//             cardBodyContent: '<resolution-info-page></resolution-info-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'momentHeading',
//             cardBodyId: 'momentCollapse',
//             cardHeaderContent: 'Moment Component',
//             cardBodyContent: '<moment-page></moment-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'collapseHeading',
//             cardBodyId: 'collapseCollapse',
//             cardHeaderContent: 'Collapse Component',
//             cardBodyContent: '<collapse-page></collapse-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'tooltipHeading',
//             cardBodyId: 'tooltipCollapse',
//             cardHeaderContent: 'Tooltip Component',
//             cardBodyContent: '<tooltip-page></tooltip-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'videoHeaderId',
//             cardBodyId: 'videoCollapse',
//             cardHeaderContent: 'Video Component',
//             cardBodyContent: '<video-player-page></video-player-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'alertHeaderId',
//             cardBodyId: 'alertCollapse',
//             cardHeaderContent: 'Alert Component',
//             cardBodyContent: '<alerts-page></alerts-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'badgeHeaderId',
//             cardBodyId: 'badgeCollapse',
//             cardHeaderContent: 'Badge Component',
//             cardBodyContent: '<badge-page></badge-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'breadcrumbHeaderId',
//             cardBodyId: 'breadcrumbCollapse',
//             cardHeaderContent: 'Breadcrumb Component',
//             cardBodyContent: '<breadcrumb-page></breadcrumb-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'dropdownHeaderId',
//             cardBodyId: 'dropdownCollapse',
//             cardHeaderContent: 'Dropdown Component',
//             cardBodyContent: '<dropdown-page></dropdown-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'fclImageHeaderId',
//             cardBodyId: 'fclImageCollapse',
//             cardHeaderContent: 'Fcl Image Component',
//             cardBodyContent: '<fcl-image-page></fcl-image-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'formHeaderId',
//             cardBodyId: 'formCollapse',
//             cardHeaderContent: 'Form Component',
//             cardBodyContent: '<form-page></form-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'listHeaderId',
//             cardBodyId: 'listCollapse',
//             cardHeaderContent: 'List Component',
//             cardBodyContent: '<list-page></list-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'multiselectHeaderId',
//             cardBodyId: 'multiselectCollapse',
//             cardHeaderContent: 'Multiselect Component',
//             cardBodyContent: '<multiselect-page></multiselect-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'tabsHeaderId',
//             cardBodyId: 'tabsCollapse',
//             cardHeaderContent: 'Tabs Component',
//             cardBodyContent: '<tabs-page></tabs-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'tagHeaderId',
//             cardBodyId: 'tagCollapse',
//             cardHeaderContent: 'Tag Component',
//             cardBodyContent: '<tag-page></tag-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'markdownHeaderId',
//             cardBodyId: 'markdownCollapse',
//             cardHeaderContent: 'Markdown Component',
//             cardBodyContent: '<markdown-page></markdown-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'progressBarHeaderId',
//             cardBodyId: 'progressBarCollapse',
//             cardHeaderContent: 'Progress bar Component',
//             cardBodyContent: '<progress-bar-page></progress-bar-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'typeaHeadHeaderId',
//             cardBodyId: 'typeaHeadCollapse',
//             cardHeaderContent: 'Typeahead Component',
//             cardBodyContent: '<typeahead-page></typeahead-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'scheduleHeaderId',
//             cardBodyId: 'scheduleCollapse',
//             cardHeaderContent: 'Schedule Component',
//             cardBodyContent: '<schedule-page></schedule-page>',
//             showOnInit: false
//         },
//         {
//             cardHeaderId: 'mwsSliderHeaderId',
//             cardBodyId: 'mwsSliderCollapse',
//             cardHeaderContent: 'Slider Component',
//             cardBodyContent: '<mwc-slider-page></mwc-slider-page>',
//             showOnInit: false
//         },        
//         {
//             cardHeaderId: 'cwcAvatarHeaderId',
//             cardBodyId: 'cwcAvatarCollapse',
//             cardHeaderContent: 'Avatar Component',
//             cardBodyContent: '<avatar-page></avatar-page>',
//             showOnInit: false
//         },                
//     ];

//     render() {
//         return (
//             <div class="container-fluid">
//                 <div class="row">
//                     <div class="col-12 text-center">
//                         <h1>Web Components for Bootstrap 4 Beta</h1>
//                         <p>Built with <a href="https://stenciljs.com" target="blank">Stencil</a> &lt;3</p>
//                     </div>
//                 </div>
//                 <div class="row">
//                     <div class="col-lg-12">
//                         <scb-collapse collapseid="mainCollapse" items={this.cards}></scb-collapse>
//                     </div>
//                 </div>
//                 <sticky-page></sticky-page>                                              
//             </div>                    
//         );
//     }
// }
