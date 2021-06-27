// ==UserScript==
// @name         YouTube - CardRemover
// @version      1.1
// @description  Remove YouTube cards in videos
// @author       pengc99
// @namespace    https://github.com/pengc99/tampermonkey_youtube_cardremover
// @require https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// @include      http://www.youtube.com/*
// @include      https://www.youtube.com/*
// @include      http://youtube.com/*
// @include      https://youtube.com/*
// @icon         https://github.com/pengc99/tampermonkey_youtube_cardremover/raw/02d3efae4fe6b93b9e368a1c985c71a5e7f8bedd/icons8-no-access-30.png
// @grant
// ==/UserScript==

var cardElement = "ytp-ce-element";

waitForKeyElements ("div." + cardElement, removeCards);
