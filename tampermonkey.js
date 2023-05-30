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

// WORK IS LICENSED UNDER MOZILLA PUBLIC LICENSE
// https://github.com/ethrythedev/antistream/blob/main/LICENSE

(function() {
    'use strict';

    window.onload = function () {
        setInterval(function(){
            if(window.location.href.includes('https://classroom.google.com/c/') && !(window.location.href.includes('/details')) && !(window.location.href.includes('/all'))) {
                var mySubString = window.location.href.substring(
                    window.location.href.indexOf("c/") + 1,
                    window.location.href.lastIndexOf(window.location.href.slice(-1))
                );
                window.location.href = 'https://classroom.google.com/w'+mySubString+window.location.href.slice(-1)+'/t/all';

                const newAlert = document.createElement('div');
                newAlert.style.bottom = '10px';
                newAlert.style.right = '10px';
                newAlert.style.width = '200px';
                newAlert.style.height = '100px';
                newAlert.style.color = 'white';
                newAlert.style.backgroundColor = 'gray';
                newAlert.style.position = 'fixed';
                newAlert.style.zindex = '999999999999';
                newAlert.style.fontSize = '18px';
                newAlert.style.padding = '10px';
                newAlert.style.borderRadius = '5px';
                newAlert.innerText = 'The stream is for announcements ONLY! Get off the stream!';
                document.body.appendChild(newAlert);
            }
            if(window.location.href.includes('https://classroom.google.com/u/0/c/') && !(window.location.href.includes('/details')) && !(window.location.href.includes('/all'))) {
                var mySubString2 = window.location.href.substring(
                    window.location.href.indexOf("c/") + 1,
                    window.location.href.lastIndexOf(window.location.href.slice(-1))
                );
                window.location.href = 'https://classroom.google.com/u/0/w'+mySubString2+window.location.href.slice(-1)+'/t/all';

                alert("The stream is for announcements ONLY! Get off the stream!");

                const newAlert = document.createElement('div');
                newAlert.style.bottom = '10px';
                newAlert.style.right = '10px';
                newAlert.style.width = '250px';
                newAlert.style.height = '100px';
                newAlert.style.color = 'white';
                newAlert.style.backgroundColor = 'gray';
                newAlert.style.position = 'fixed';
                newAlert.style.zindex = '999999999999';
                newAlert.style.fontSize = '18px';
                newAlert.style.padding = '10px';
                newAlert.style.borderRadius = '5px';
                newAlert.innerText = 'The stream is for announcements ONLY! Get off the stream!';
                document.body.appendChild(newAlert);
            }
        }, 500);
    }
})();
