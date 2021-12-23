const homepage_post_id = document.querySelector('#homepage_post_id').getAttribute('data-post-id');

   // document.addEventListener("load", ()=>{
        fetch("/api/comment")
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            for (let index = 0; index < data.length; index++) {
   
                let commentDiv = document.querySelector(`#comments-${data[index].post_id}`);
                let comment = document.createElement("P");
                //comment.setAttribute("class", "comments")
                //comment.setAttribute("id", `commentId-${data[index].id}`)
                comment.innerText = `${data[index].user.name}'s comment : ${data[index].body} made on ${data[index].date_created}`
                let updateCommentBtn = document.createElement("BUTTON");
                let updateAnchorTag = document.createElement("A");
                updateCommentBtn.innerText= "Update Comment"
                updateCommentBtn.setAttribute("data-comment-id",data[index].id)
                updateAnchorTag.append(updateCommentBtn);
                updateAnchorTag.setAttribute("href",`/editComment/${data[index].id}`)
                
                let deleteCommentBtn = document.createElement("BUTTON");
                deleteCommentBtn.innerText= "Delete Comment"
                deleteCommentBtn.setAttribute("data-comment-id",data[index].id)



                comment.append(updateAnchorTag)
                comment.append(deleteCommentBtn)

                
                deleteCommentBtn.addEventListener("click",(e)=>{
                    let comment_id = e.target.getAttribute('data-comment-id');
                    fetch(`/api/comment/${comment_id}`, {
                        method: 'DELETE',
                        
                    }).then(()=>{
                        window.location.replace('/')
                    })
                })
                
                commentDiv.append(comment)

                
            }
        })
   // })