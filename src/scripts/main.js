function registerArticleElement() {
	var article = document.registerElement('great-article', {
		prototype: Object.create(HTMLElement.prototype, {
			createdCallback: {
				value: function() {
					
					// Root
					var root = this.createShadowRoot();
					
					// Title
					var title = document.createElement('h2');
					title.innerText = this.getAttribute('title');
					root.appendChild(title);
					
					// Description
					var desc = document.createElement('p');
					desc.innerText = this.getAttribute('description');
					root.appendChild(desc);
					
				}
			}
		})
	});
}

function createArticleElement(containerId) {
	var container = document.getElementById(containerId);
	
}

registerArticleElement();
createArticleElement('main');