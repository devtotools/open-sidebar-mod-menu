// ==UserScript==
// @name Automatically open the Mod panel on DEV.
// @namespace https://dev.to
// @version 0.6
// @description Automatically open the Mod panel on DEV.
// @author Thomas Bnt
// @icon https://icons.duckduckgo.com/ip3/dev.to.ico
// @match https://dev.to/*
// @match https://community.codenewbie.org/*
// @match https://forem.dev/*
// @match https://community.ops.io/*
// @match https://community.interledger.org/*
// @match https://www.wasm.builders/*
// @match https://community.webcomponents.dev/*
// @match https://forem.julialang.org/*
// @match https://community.tidelift.com/*
// @match https://www.coss.community/*
// @match https://www.metapunk.to/*
// @match https://www.joinforest.com/*
// @match https://the.community.club/*
// @match https://www.thismmalife.com/*
// @match https://www.1vibe.com/*
// @match https://www.flowstate.to/*
// @match https://aws.newbie.tips/*
// @match https://www.developmenthackers.com/*
// @homepageURL https://github.com/devtotools/open-sidebar-mod-menu
// @updateURL    https://raw.githubusercontent.com/devtotools/open-sidebar-mod-menu/main/AutoOpenSidebarMenu.user.js
// @downloadURL  https://raw.githubusercontent.com/devtotools/open-sidebar-mod-menu/main/AutoOpenSidebarMenu.user.js
// @grant window.onurlchange
// @noframes
// ==/UserScript==

// See at https://github.com/forem/forem/blob/main/app/javascript/actionsPanel/initializeActionsPanelToggle.js#L19

(function () {
  "use strict";

  // If in the URL we have ?preview=, don't open the menu
  if (window.location.href.indexOf("?preview=") > -1) return false;

  document
    .getElementById("mod-actions-menu-btn-area")
    .classList.remove("hidden");
  document
    .getElementsByClassName("mod-actions-menu")[0]
    .classList.toggle("showing");
})();
