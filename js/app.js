(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
        }
    };
    function fullVHfix() {
        const fullScreens = document.querySelectorAll("[data-fullscreen]");
        if (fullScreens.length && isMobile.any()) {
            window.addEventListener("resize", fixHeight);
            function fixHeight() {
                let vh = .01 * window.innerHeight;
                document.documentElement.style.setProperty("--vh", `${vh}px`);
            }
            fixHeight();
        }
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window.onload = function() {
        function countChild() {
            const brithdayChild = new Date("October 12 2023 15:30:00");
            const daysVal = document.querySelector(".brithday-children__days .brithday-children__val");
            const hoursVal = document.querySelector(".brithday-children__hours .brithday-children__val");
            const minutesVal = document.querySelector(".brithday-children__minutes .brithday-children__val");
            const secondsVal = document.querySelector(".brithday-children__seconds .brithday-children__val");
            function declOfNum(number, titles) {
                let cases = [ 2, 0, 1, 1, 1, 2 ];
                return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
            }
            const daysText = document.querySelector(".brithday-children__days .brithday-children__text");
            const hoursText = document.querySelector(".brithday-children__hours .brithday-children__text");
            const minutesText = document.querySelector(".brithday-children__minutes .brithday-children__text");
            const secondsText = document.querySelector(".brithday-children__seconds .brithday-children__text");
            const timeCount = function() {
                let now = new Date;
                let leftUntil = brithdayChild - now;
                let brithdayDays = Math.floor(leftUntil / 1e3 / 60 / 60 / 24);
                let brithdayHours = Math.floor(leftUntil / 1e3 / 60 / 60) % 24;
                let brithdayMinuts = Math.floor(leftUntil / 1e3 / 60) % 60;
                let brithdaySeconds = Math.floor(leftUntil / 1e3) % 60;
                daysVal.textContent = brithdayDays;
                hoursVal.textContent = brithdayHours;
                minutesVal.textContent = brithdayMinuts;
                secondsVal.textContent = brithdaySeconds;
                daysText.textContent = declOfNum(brithdayDays, [ "день", "дня", "дней" ]);
                hoursText.textContent = declOfNum(brithdayHours, [ "час", "часа", "часов" ]);
                minutesText.textContent = declOfNum(brithdayMinuts, [ "минута", "минуты", "минут" ]);
                secondsText.textContent = declOfNum(brithdaySeconds, [ "секунда", "секунды", "секунд" ]);
            };
            timeCount();
            setInterval(timeCount, 1e3);
        }
        countChild();
        function brithdayLena() {
            const lenaBrithday = new Date("June 07 2023 00:00:00");
            const lenaDaysVal = document.querySelector(".brithday-lena__days .brithday-lena__val");
            const lenaHoursVal = document.querySelector(".brithday-lena__hours .brithday-lena__val");
            const lenaMinutesVal = document.querySelector(".brithday-lena__minutes .brithday-lena__val");
            const lenaSecondsVal = document.querySelector(".brithday-lena__seconds .brithday-lena__val");
            function declOfNum(number, titles) {
                let cases = [ 2, 0, 1, 1, 1, 2 ];
                return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
            }
            const lenaDaysText = document.querySelector(".brithday-lena__days .brithday-lena__text");
            const lenaHoursText = document.querySelector(".brithday-lena__hours .brithday-lena__text");
            const lenMminutesText = document.querySelector(".brithday-lena__minutes .brithday-lena__text");
            const lenaSecondsText = document.querySelector(".brithday-lena__seconds .brithday-lena__text");
            function lenaTimeCount() {
                let lenaNow = new Date;
                let lenaLeftUntil = lenaBrithday - lenaNow;
                let lenaBrithdayDays = Math.floor(lenaLeftUntil / 1e3 / 60 / 60 / 24);
                let lenaBrithdayHours = Math.floor(lenaLeftUntil / 1e3 / 60 / 60) % 24;
                let lenaBrithdayMinutes = Math.floor(lenaLeftUntil / 1e3 / 60) % 60;
                let lenaBrithdaySeconds = Math.floor(lenaLeftUntil / 1e3) % 60;
                lenaDaysVal.textContent = lenaBrithdayDays;
                lenaHoursVal.textContent = lenaBrithdayHours;
                lenaMinutesVal.textContent = lenaBrithdayMinutes;
                lenaSecondsVal.textContent = lenaBrithdaySeconds;
                lenaDaysText.textContent = declOfNum(lenaBrithdayDays, [ "день", "дня", "дней" ]);
                lenaHoursText.textContent = declOfNum(lenaBrithdayHours, [ "час", "часа", "часов" ]);
                lenMminutesText.textContent = declOfNum(lenaBrithdayMinutes, [ "минута", "минуты", "минут" ]);
                lenaSecondsText.textContent = declOfNum(lenaBrithdaySeconds, [ "секунда", "секунды", "секунд" ]);
            }
            lenaTimeCount();
            setInterval(lenaTimeCount, 1e3);
        }
        brithdayLena();
        function brithdayAnton() {
            const antonBrithday = new Date("August 23 2023 00:00:00");
            const antonDaysVal = document.querySelector(".brithday-anton__days .brithday-anton__val");
            const antonHoursVal = document.querySelector(".brithday-anton__hours .brithday-anton__val");
            const antonMinutesVal = document.querySelector(".brithday-anton__minutes .brithday-anton__val");
            const antonSecondsVal = document.querySelector(".brithday-anton__seconds .brithday-anton__val");
            function declOfNum(number, titles) {
                let cases = [ 2, 0, 1, 1, 1, 2 ];
                return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
            }
            const antonDaysText = document.querySelector(".brithday-anton__days .brithday-anton__text");
            const antonHoursText = document.querySelector(".brithday-anton__hours .brithday-anton__text");
            const antonMinutesText = document.querySelector(".brithday-anton__minutes .brithday-anton__text");
            const antonSecondsText = document.querySelector(".brithday-anton__seconds .brithday-anton__text");
            function antonTImeCount() {
                let antonNow = new Date;
                let antonLeftUntil = antonBrithday - antonNow;
                let antonBrithdayDays = Math.floor(antonLeftUntil / 1e3 / 60 / 60 / 24);
                let antonBrithdayHours = Math.floor(antonLeftUntil / 1e3 / 60 / 60) % 24;
                let antonBrithdayMinutes = Math.floor(antonLeftUntil / 1e3 / 60) % 60;
                let antonBrithdaySeconds = Math.floor(antonLeftUntil / 1e3) % 60;
                antonDaysVal.textContent = antonBrithdayDays;
                antonHoursVal.textContent = antonBrithdayHours;
                antonMinutesVal.textContent = antonBrithdayMinutes;
                antonSecondsVal.textContent = antonBrithdaySeconds;
                antonDaysText.textContent = declOfNum(antonBrithdayDays, [ "день", "дня", "дней" ]);
                antonHoursText.textContent = declOfNum(antonBrithdayHours, [ "час", "часа", "часов" ]);
                antonMinutesText.textContent = declOfNum(antonBrithdayMinutes, [ "минута", "минуты", "минут" ]);
                antonSecondsText.textContent = declOfNum(antonBrithdaySeconds, [ "секунда", "секунды", "секунд" ]);
            }
            antonTImeCount();
            setInterval(antonTImeCount, 1e3);
        }
        brithdayAnton();
    };
    window["FLS"] = true;
    isWebp();
    fullVHfix();
})();