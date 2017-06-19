define(function(require,exports,module){
	var $ = require('jquery');
	// alert($);
	var showText = function () {
        $('#box').text("hello");
        // alert(11);
    }
    exports.showText = showText;
	// return $;
	// console.log($)
})