const newPostHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#newPostName').value.trim();
    const description = document.querySelector('#newPostContent').value.trim();
    if (name && description) {
        const response = await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({ name, description}),
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
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);