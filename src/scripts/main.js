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
					
					// Date
					var date = document.createElement('span');
					date.innerText = this.getAttribute('date');
					root.appendChild(date);
					
					// Author
					var author = document.createElement('span');
					author.innerText = this.getAttribute('author');
					root.appendChild(author);
					
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