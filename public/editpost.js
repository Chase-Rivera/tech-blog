const editPostHandle = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#editPost').value.trim();
    const  description= document.querySelector('#editPostDesc').value.trim();
    const post_id = document.querySelector('.edit-post-form').getAttribute('post-id');
    if (name && description) {
        const response = await fetch(`/api/post/${post_id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, description}),
            headers: {
                'Content-type': 'application/json',
            }
        });
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Unable to edit post');
        }
    }
};



document
    .querySelector('.edit-post-form')
    .addEventListener('submit', editPostHandle);

/*

*/