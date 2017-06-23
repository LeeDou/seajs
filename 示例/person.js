define(function(require,exports,module) {
	var init = function() {	
		var person = new Object();
		person.name = "kantle";
		person.age = "22";
		person.sayAge=function() {
			alert(this.age);
		}
		person.sayName=function() {
			alert(this.name);
		}
	}

	module.exports = {
		init:init
	}
})


