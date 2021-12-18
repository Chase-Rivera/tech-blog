


const deletePostHandler = async (event) => {
    event.preventDefault();

    const post_id = document.querySelector('#dltPostBtn').getAttribute('post-id');
    if (post_id) {
        const response = await fetch(`/api/post/${post_id}`, {
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
    .querySelector('#dltPostBtn')
    .addEventListener('click', deletePostHandler);