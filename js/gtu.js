'use: strict';
/**
 * Simple replacements for jQuery functions + utilities
 * Compatibility: IE9+, Safari, Chrome, FF, Edge
 */
(function () {
    function Selection(selectors) {
        this.elements = document.querySelectorAll(selectors);
        return this;
    }
    Selection.prototype.each = function(fn) {
        this.elements.forEach(fn);
        return this;
    }
    Selection.prototype.addClass = function(classes) {
        return this.each(function (element) {
            element.classList.add(classes);
        });
    }
    Selection.prototype.removeClass = function(classes) {
        return this.each(function (element) {
            if (!classes) {
                element.className = '';
            } else {
                element.classList.add(classes);
            }
        });
    }

    Selection.prototype.val = function(value) {
        return this.each(function (element) {
            element.value = value;
        });
    }

    Selection.prototype.on = function(type, listener, useCapture) {
        return this.each(function (element) {
            element.addEventListener(type, listener, useCapture);
        });
    }

    Selection.prototype.click = function(listener, useCapture) {
        return this.on('click', listener, useCapture);
    }

    window.gtu = function(selectors) {
        return new Selection(selectors);
    }

    // https://stackoverflow.com/a/9899701/6849315
    gtu.ready = function (fn) {
        // see if DOM is already available
        if (document.readyState === "complete" || document.readyState === "interactive") {
            // call on next available tick
            setTimeout(fn, 1);
        } else {
            document.addEventListener("DOMContentLoaded", fn);
        }
    }

    gtu.getParameterByName = function (name, url) {
        if (!url) {
            url = window.location.href;
        }
        name = name.replace(/[[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    gtu.addClass = function (selectors, classes) {
        document.querySelectorAll(selectors).forEach(function (element) {
            element.classList.add(classes);
        });
    }

})();
