(function() {
		function MakeBelieveElement(DOMElements, length) {
			this.elements = DOMElements;
			this.length = length;

			this.nextSiblings = function(){
				var siblings = [];

				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					if(currentElement.nextElementSibling) {
						siblings.push(currentElement.nextElementSibling);
					}
				}
				return new MakeBelieveElement(siblings, siblings.lenght);
			};

			this.parent = function(){
				var parent = [];
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					if(currentElement.parentNode) {
						parent.push(currentElement.parentNode);
					}
				}
				return new MakeBelieveElement(parent, parent.lenght);
			}

			this.grandParent = function(){
				return this.parent().parent();

			}

			this.ancestor = function(){
				return this.parent().parent().parent();
			}

			this.data = function(key, value) {
				for (var i = 0; i < this.elements.length; i++) {
					this.elements[i].dataset[key] = value;
				}
				return this;
			};

			this.onClick = function (callback) {
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					currentElement.addEventListener('click', function (evt) {
     				callback(evt);
					}, false);
				}
			};

			this.insertText = function(value){
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					currentElement.innerHTML = value;
				}
			};

			this.append = function(value) {
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					if(value.nodeName){
						currentElement.append(value);
					}else{
						 currentElement.insertAdjacentHTML('beforeend', value);
					}

				}
			};

			this.prepend = function(value) {
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					if(value.nodeName){
						currentElement.prepend(value);
					}else{
						 currentElement.insertAdjacentHTML('afterbegin', value);
					}

				}
			};

			this.delete = function(value) {
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					currentElement.remove(value);
				}
			};

			this.css = function(property, value) {
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					currentElement.style[property] = value;
				}
			};

			this.toggleClass = function(value) {
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					currentElement.classList.toggle(value);
				}
			};

			this.onSubmit = function (callback) {
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					currentElement.addEventListener('submit', function (evt) {
						callback(evt);
					}, false);
				}
			};

			this.onInput = function (callback) {
				for (var i = 0; i < this.elements.length; i++) {
					var currentElement = this.elements[i];
					currentElement.addEventListener('input', function (evt) {
						callback(evt);
					}, false);
				}
			};



		};

		var innerMakeBelieve = function (query) {
			var elements = document.querySelectorAll(query);
			if (elements) {
				return new MakeBelieveElement(elements, elements.length);
			}
			return {};
		};

		window.__ = innerMakeBelieve;
})();
//document.addEventListener('DOMContentLoaded', function (event){
	//var inputs = __('#my-form');

	//var grandparent = __('#password').grandParent();
	//var idgrandparent = __('#password').grandParent('#grandfather');
	//var emptygrandparent = __('#password').grandParent('#unknownId');
	//var formParent = __('#password').parent('my-form');
	//console.log(grandparent);
	//__('#password').onClick(function (evt) {
	//	console.log(evt.target.value);
	//__('#shakespeare-novel').insertText('To be, or not to be: this is the question');
	/*__('.the-appender').append('<p>I am an appennded paragraph!</p>');
	__('.the-appender').append(
		document.createElement('p')
		.appendChild(
			document.createTextNode('I am an appended paragraph!')
		)
	);
	__('.the-prepender').prepend('<p>I am an prepended paragraph!</p>');
	__('.the-prepender').prepend(
		document.createElement('p')
		.appendChild(
			document.createTextNode('I am an prepended paragraph!')
		)
	);*/
	//__('.some-div h2').delete();
	//__('.elemToChange').toggleClass('someclass');
	//__('#my-form').onSubmit(function(evt){
		//	console.log(evt.target.value);
	//});
});
