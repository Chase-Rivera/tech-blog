let url = window.location.href
let comment_id = url.charAt(url.length-1);

document.querySelector('#updateBtn').addEventListener('click',async (e)=>{
    e.preventDefault();
    
    let body = document.querySelector("#comment").value
    if (body) {
        const response = await fetch(`/api/comment/${comment_id}`, {
            method: 'PUT',
            body: JSON.stringify({body, id:comment_id}),
            headers: {
                'Content-type': 'application/json',
            }
        });
        if (response.ok) {
            document.location.replace(`/`);
        } else {
            alert('Unable to edit comment');
        }
    }
})