define(function (require, exports, module) {
    var changeText = require('changeText');
    var person = require('./person.js');
    
    var $ = require('jquery');
    var showText = function () {
        $('#title').text(changeText.init());
        // alert(11);
    }
    exports.showText = showText; 
})