/*
 * SVGTag.js
 * https://github.com/Wildtyto/SVGTag.js
 *
 * Copyright (c) 2018 Wildtyto
 * Licensed under the MIT licenses.
 */

(function (SVGTag) {

    "use strict";

    (function () {

        SVGTag = window.SVGTag = SVGTag || _getInitialClass();

    }());

    function _getInitialClass() {

        SVGTagClass.prototype.scan = _staticScan;
        SVGTagClass.prototype.new = _staticNew;
        return new SVGTagClass();

    }

    function SVGTagClass() {

        this.list = [];

    }

    function _staticScan() {

        var _originList = [].slice.call(document.querySelectorAll("img[svg-tag], object[svg-tag]"));
        while ( _originList.length ) _updateSVGContent(_originList.shift());

    }

    function _staticNew(_elementWithSVG) {

        _updateSVGContent(_elementWithSVG);

    }

    function _updateSVGContent(_elementWithSVG) {

        var _url = _elementWithSVG.src || _elementWithSVG.data;
        _readSVGFile(_url, _onCallback);

        function _onCallback(_response) {
            var _tempElement = document.createElement("div");
            _tempElement.innerHTML = _response;
            var _svg = _tempElement.querySelector("svg");
            if ( !_svg ) return;
            var _parentElement = _elementWithSVG.parentNode;
            _parentElement.insertBefore(_svg, _elementWithSVG);
            _parentElement.removeChild(_elementWithSVG);
            SVGTag.list.push(_svg);
        }

    }

    function _readSVGFile(_url, _callback) {

        if ( !_url ) return;
        if ( !_callback ) return;
        var _xhttp = new XMLHttpRequest();
        _xhttp.onreadystatechange = _onReadyStateChange;
        _xhttp.open("GET", _url, true);
        _xhttp.send();

        function _onReadyStateChange() {
            if ( _xhttp.readyState !== 4 ) return;
            var _response = _xhttp.responseText;
            if ( _xhttp.status === 200 ) _onSuccess(_response);
            else _onError(_response);
        }

        function _onSuccess(_response) {
            _callback(_response);
        }

        function _onError() {
            _callback();
        }

    }

}(window.SVGTag));