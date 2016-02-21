/*
 * Harpoon for Instagram
 * Copyright (c) 2016 Angelo Licastro
 * See LICENSE and README.md.
 */

(function () {
    'use strict';

    chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
        if (/http(s)?:\/\/(www\.)?instagram\.com\/p\/.+/.test(tab.url)) {
            chrome.pageAction.show(tab.id);
        } else {
            chrome.pageAction.hide(tab.id);
        }
    });

    chrome.pageAction.onClicked.addListener(function (tab) {
        chrome.tabs.executeScript(null, {
            file: 'contentscript.js'
        });
    });
}());
