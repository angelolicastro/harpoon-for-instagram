/*
 * Harpoon for Instagram
 * Copyright (c) 2016 Angelo Licastro
 * See LICENSE and README.md.
 */

(function () {
    'use strict';

    var video = document.querySelector('meta[property=og\\:video]');
    if (video === null) {
        var imageContent = document.querySelector('meta[property=og\\:image]').getAttribute('content');
        window.open(imageContent + (imageContent.indexOf('?') > -1 ? '&dl=1' : '?dl=1'));
    } else {
        var videoContent = video.getAttribute('content');
        window.open(videoContent + (videoContent.indexOf('?') > -1 ? '&dl=1' : '?dl=1'));
    }
}());
