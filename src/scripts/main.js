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
					title.classList.add('title');
					root.appendChild(title);
					
					// Description
					var desc = document.createElement('p');
					desc.innerText = this.getAttribute('description');
					desc.classList.add('desc');
					root.appendChild(desc);
					
					// Date
					var date = document.createElement('span');
					date.innerText = this.getAttribute('date');
					date.classList.add('date');
					root.appendChild(date);
					
					// Author
					var author = document.createElement('span');
					author.innerText = this.getAttribute('author');
					author.classList.add('author');
					root.appendChild(author);
					
					this.style.display = 'block';
					
					
					
				}
			}
		})
	});
}

function createArticles(containerId, data) {
	var container = document.getElementById(containerId);
	
	for (var i = 0; i < data.length; i++) {
		var li = document.createElement('li');
		var article = document.createElement('great-article');
		for (var j in data[i]) {
			var content = data[i][j];
			console.log(i, j, content);
			article.setAttribute(j, content);
		}
		li.appendChild(article);
		container.appendChild(li);
	}
	
}

var dataArticles = [
	{
		title: 'Titre1',
		description: 'Tralalalalalalalala',
		date: '01-09-2016',
		author: 'Bidule'
	}, {
		title: 'Titre2',
		description: 'Tralalalalalalalalalalalalalalalala',
		date: '02-09-2016',
		author: 'Bidule'
	}, {
		title: 'Titre3',
		description: 'Tralalalalalalalalalalalalalalalalalalalalalalalala',
		date: '03-09-2016',
		author: 'Bidule'
	}
];

createArticles('article-list', dataArticles);
registerArticleElement();