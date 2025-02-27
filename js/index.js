function displayComments() {
  const commentList = document.getElementById("comment-list");
  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  commentList.innerHTML = "";
  comments.forEach((comment) => {
    const li = document.createElement("li");
    li.classList.add("comment-item");
    li.innerHTML = `
      <div class="comment-author">
        <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
        <span>방문자</span>
      </div>
      <div class="comment-content">
        ${comment}
      </div>
    `;
    commentList.appendChild(li);
  });
}

function saveComment() {
  const commentInput = document.getElementById("commentInput");
  const commentText = commentInput.value.trim();

  if (commentText) {
    const comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(commentText);

    localStorage.setItem("comments", JSON.stringify(comments));
    displayComments();

    commentInput.value = "";
    alert("댓글이 등록되었습니다!");
  }
}

document.addEventListener("DOMContentLoaded", displayComments);
document.getElementById("submitComment").addEventListener("click", saveComment);

document.getElementById("resetComment").addEventListener("click", () => {
  document.getElementById("commentInput").value = "";
});
