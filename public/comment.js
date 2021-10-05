const newComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#newComment').value.trim();
    const post_id = document.querySelector('.postdisplay').getAttribute('post-id');

    if (comment && post-id) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment, post_id}),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Unable to post comment');
        }
    }
};

document
    .querySelector('.new-comment')
    .addEventListener('submit', newComment);