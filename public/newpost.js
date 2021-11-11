const newPost = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#newPost').value.trim();
    const content = document.querySelector('#newPostContent').value.trim();
    if (name && content) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ name, content}),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Unable to create post');
        }
    }
};

document
    .querySelector('.new-post')
    .addEventListener('submit', newPost);