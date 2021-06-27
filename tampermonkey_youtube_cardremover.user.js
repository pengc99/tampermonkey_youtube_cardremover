// ==UserScript==
// @name         YouTube - CardRemover
// @version      1.2
// @description  Remove YouTube end video cards overlay on top of videos
// @author       pengc99
// @namespace    https://github.com/pengc99/tampermonkey_youtube_cardremover
// @updateURL    https://raw.githubusercontent.com/pengc99/tampermonkey_youtube_cardremover/main/tampermonkey_youtube_cardremover.js
// @downloadURL  https://raw.githubusercontent.com/pengc99/tampermonkey_youtube_cardremover/main/tampermonkey_youtube_cardremover.js
// @require      https://cdn.jsdelivr.net/gh/CoeJoder/waitForKeyElements.js@v1.2/waitForKeyElements.js
// @include      http://www.youtube.com/*
// @include      https://www.youtube.com/*
// @include      http://youtube.com/*
// @include      https://youtube.com/*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABJElEQVRIie2WTYrCQBBGn4MTVypkMTDOicSNXkMzXtIZf0BFcKFr9QSJ+7joirRJRzTpRkE/KEi+dOqliuok8NarqQMcgNhy7IH2NfDeATSJnQ6qpMDxDV0pozPvwzEoV9UcP92Jssp08mEV3wuuAb/AFDhKTIAA8Mo8SDKBJv0AK/Kndgm0CuS9uqCWgg4AH6gDXWAj/gJz5YXBQy6rWwNf2vWmBh/YBM+0pOsceE/8iU1wJL4vMBO8IV5oExyKX5dzE9x3AZ6K39W8NDyQ47FNcJJ0gxokEzyJvk2wh9qnMbBFDVID1d5Au28OfNoEg3o5LLmsTo858F0g700LPNSWGqMmPQL+Ue01VWoNXFSZvE/3PXb9J5Kp+M8ha+Qw91tPqBNQe7BEabp3fAAAAABJRU5ErkJggg==
// @grant
// ==/UserScript==

var cardElement = "ytp-ce-element";

function removeCards () {
    console.log("## Entered removeCards()");
    while (document.getElementsByClassName(cardElement).length != 0) {
        console.log("## Removing " + cardElement);
        document.getElementsByClassName(cardElement)[0].remove();
    }
}

waitForKeyElements ("div." + cardElement, removeCards);
