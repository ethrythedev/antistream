// ==UserScript==
// @name         AntiStream Classroom
// @namespace    http://classroom.google.com
// @version      1.0
// @description  STOP USING THE STREAM
// @author       me!!
// @match        https://classroom.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=classroom.google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.onload = function () {
        setInterval(function(){
            if(window.location.href.includes('https://classroom.google.com/c/') && !(window.location.href.includes('/details'))) {
                var mySubString = window.location.href.substring(
                    window.location.href.indexOf("c/") + 1,
                    window.location.href.lastIndexOf(window.location.href.slice(-1))
                );
                window.location.href = 'https://classroom.google.com/w'+mySubString+window.location.href.slice(-1)+'/t/all';
            }
        }, 500);
    }
})();
