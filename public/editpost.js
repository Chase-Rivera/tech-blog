const editPostHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#editPost').value.trim();
    const content = document.querySelector('#editPostContent').value.trim();
    const post_id = document.querySelector('.editPost').getAttribute('post-id');
    if (name && content) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, content}),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Unable to edit post');
        }
    }
};

const deletePostHandler = async (event) => {
    event.preventDefault();

    const post_id = document.querySelector('.editPost').getAttribute('post-id');
    if (post_id) {
        const response = await fetch(`/api/posts/${post_id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace(`/post`);
        } else {
            alert('Unable to delete post');
        }
    }
};

document
    .querySelector('.edit-post')
    .addEventListener('submit', editPostHandler);

document
    .querySelector('.delete-post')
    .addEventListener('submit', deletePostHandler);