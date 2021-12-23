const newCommentHandler = async (event) => {
    event.preventDefault();

    const body = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('.comment-form').getAttribute('post-id');
  

    fetch("/api/comment")
    .then(response => response.json)
    .then((data) => {
        console.log(data);
        // commentDiv = document.querySelector.
    })

    if (body && post_id) {
        const response = await fetch(`/api/comment`, {
            method: 'POST',
            body: JSON.stringify({ body, post_id }),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(`/`);
        } else {
            alert('Unable to post comment');
        }
    }
};

document
    .querySelector('.comment-form')
    .addEventListener('submit', newCommentHandler);

    const homepage_post_id = document.querySelector('#homepage_post_id').getAttribute('data-post-id');