
// document.getElementById('btn-post').addEventListener('click' , function(){
//     const NewComment =document.getElementById('new-comment');
//     const comments=NewComment.value;
    
//     const commentContainer =document.getElementById('comment-container')
//     const p =document.createElement('p')
//     p.innerText=comments;
//     commentContainer.appendChild(p);
//     NewComment.value='';
// })
document.getElementById('btn-post').addEventListener('click',function(){
    const comments=document.getElementById('new-comment')
    const NewComment =comments.value;

    const commentContainer =document.getElementById('comment-container');
    const page =document.createElement('p')
    page.innerText=NewComment;
    commentContainer.appendChild(page)
    comments.value='';
})
