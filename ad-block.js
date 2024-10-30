// ==UserScript==
// @name         Dumbify’s Ad Blocker Script
// @namespace    https://github.com/Ensif-Dev/
// @version      1.0.0
// @description  Removes common ad elements from web pages.
// @author
// @license      CC BY 4.0; https://creativecommons.org/licenses/by/4.0/
// @homepageURL  https://dumbify.com/blog/Blocking-Ads-With-Tampermonkey
// @supportURL   https://github.com/Ensif-Dev/Block-Ads-With-Tampermonkey/issues
// @updateURL    https://raw.githubusercontent.com/Ensif-Dev/Block-Ads-With-Tampermonkey/main/ad-block.js
// @downloadURL  https://raw.githubusercontent.com/Ensif-Dev/Block-Ads-With-Tampermonkey/main/ad-block.js
// @match        *://*/*
// @grant        none
// ==/UserScript==
(function () {
  "use strict";

  const adSelectors = [".advertisement", ".ad-container", ".sponsored-content", '[class*="ad-"]', '[id*="ad-"]', '[class*="advertisement"]', ".google-ad", ".dfp-ad"];

  function removeAds() {
    adSelectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((element) => {
        element.style.display = "none";
      });
    });
  }

  // Initial removal
  removeAds();

  // Check every 10 seconds for new ads
  setInterval(removeAds, 10000);
})();
