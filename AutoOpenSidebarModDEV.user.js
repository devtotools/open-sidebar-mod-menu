// ==UserScript==
// @name Automatically open the Mod panel on DEV.
// @namespace https://dev.to
// @version 0.3
// @description Automatically open the Mod panel on DEV.
// @author Thomas Bnt
// @icon https://icons.duckduckgo.com/ip3/dev.to.ico
// @match https://dev.to/*
// @homepageURL https://github.com/devtotools/open-devto-panel-sidebar-mod
// @updateURL    https://raw.githubusercontent.com/devtotools/open-devto-panel-sidebar-mod/main/AutoOpenSidebarModDEV.user.js
// @downloadURL  https://raw.githubusercontent.com/devtotools/open-devto-panel-sidebar-mod/main/AutoOpenSidebarModDEV.user.js
// @grant window.onurlchange
// @noframes
// ==/UserScript==

// See at https://github.com/forem/forem/blob/main/app/javascript/actionsPanel/initializeActionsPanelToggle.js#L19

(function() {
    'use strict';
document
      .getElementById('mod-actions-menu-btn-area')
      .classList.remove('hidden');
    document
      .getElementsByClassName('mod-actions-menu')[0]
      .classList.toggle('showing');
})();
