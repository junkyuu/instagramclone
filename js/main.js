let commentInput = document.getElementById("commentInput");
let postButton = document.getElementsByClassName("postButton")[0];

commentInput.addEventListener("keyup", () => {
    if(commentInput.value){
        postButton.classList.remove("unactivatedPostButton");
        postButton.classList.add("ActivatedPostButton");
    }

    if(!commentInput.value){
        postButton.classList.remove("ActivatedPostButton");
        postButton.classList.add("unactivatedPostButton");
    }
});

postButton.addEventListener("click", () => {
    if(commentInput.value) {
        document.getElementsByClassName("whenPostThisComment")[0].remove();
        //시간 지우기

        let newCommentDiv = document.createElement("div");
        newCommentDiv.className = "instaComment inlineToBlock";
        //div 만들기


        let newCommentSpan = document.createElement("span");
        newCommentSpan.className = "boldFont";
        //span 만들기

        let instaUserName = document.createTextNode("zunky_c ");
        newCommentSpan.appendChild(instaUserName);
        //span에 username넣기

        newCommentDiv.appendChild(newCommentSpan);
        //div에 span넣기

        let comment = commentInput;
        let commentValue = commentInput.value; 
        newCommentDiv.appendChild(document.createTextNode(commentValue));
        //div에 value 넣기

        let commentHeart = document.createElement("img");
        commentHeart.src = "https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png";
        commentHeart.className = "floatRight commentheart";
        commentHeart.alt="commentheart";

        newCommentDiv.appendChild(commentHeart);
        //div에 img 넣기
        

        let commentsSomeoneWrote = document.getElementsByClassName("commentsSomeoneWrote")[0];
        commentsSomeoneWrote.appendChild(newCommentDiv);
        //댓글 란에 div넣기

        let newWhenPostThisComment = document.createElement("div");
        newWhenPostThisComment.className="whenPost inlineToBlock greyFont whenPostThisComment";

        let justNow = document.createTextNode("방금");
        newWhenPostThisComment.appendChild(justNow);

        commentsSomeoneWrote.appendChild(newWhenPostThisComment);

        comment.value ="";
    }
});
