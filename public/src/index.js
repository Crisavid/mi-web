document.addEventListener('DOMContentLoaded', () => {
    // Funcionalidad del formulario de contacto
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            alert(`Gracias por tu mensaje, ${name}! Te contactaremos pronto a ${email}.`);
        });
    }

    // Funcionalidad del foro
    const newTopicForm = document.getElementById('newTopicForm');
    if (newTopicForm) {
        newTopicForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const title = document.getElementById('topicTitle').value;
            const content = document.getElementById('topicContent').value;
            const topicsList = document.querySelector('ul');
            const newTopic = document.createElement('li');
            newTopic.innerHTML = `<a href="#">${title}</a> - ${content}`;
            topicsList.appendChild(newTopic);
            newTopicForm.reset();
        });
    }

    // Funcionalidad de los comentarios
    const commentForm = document.getElementById('commentForm');
    if (commentForm) {
        commentForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const comment = document.getElementById('comment').value;
            const commentsList = document.getElementById('commentsList');
            const newComment = document.createElement('li');
            newComment.textContent = comment;
            commentsList.appendChild(newComment);
            commentForm.reset();
        });
    }

    // Funcionalidad de búsqueda
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        searchBar.addEventListener('keyup', (event) => {
            const query = event.target.value.toLowerCase();
            const articles = document.querySelectorAll('article');
            articles.forEach(article => {
                const title = article.querySelector('h3').textContent.toLowerCase();
                if (title.includes(query)) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });
        });
    }

    // Funcionalidad de testimonios
    const testimonyForm = document.getElementById('testimonyForm');
    if (testimonyForm) {
        testimonyForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const testimony = document.getElementById('testimony').value;
            const user = document.getElementById('user').value;
            const testimoniesList = document.getElementById('testimonies');
            const newTestimony = document.createElement('blockquote');
            newTestimony.innerHTML = `<p>"${testimony}"</p><footer>- ${user}</footer>`;
            testimoniesList.appendChild(newTestimony);
            testimonyForm.reset();
        });
    }
});
