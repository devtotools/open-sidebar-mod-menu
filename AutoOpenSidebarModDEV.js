// ==UserScript==
// @name         Automaticaly open the Mod panel on DEV.
// @namespace    https://dev.to
// @version      0.1
// @description  Automaticaly open the Mod panel on DEV.
// @author       Thomas Bnt
// @icon         https://icons.duckduckgo.com/ip3/dev.to.ico
// @grant        none
// @noframes
// @include      https://dev.to/*
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