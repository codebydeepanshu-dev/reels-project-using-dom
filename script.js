const reels = [
  {
    id: 0,
    username: "deepanshu_ag",
    userProfile:
      "https://plus.unsplash.com/premium_photo-1675695223318-3d555909a8c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    caption: "Learning frontend day by day 🚀",
    likesCount: 1280,
    commentsCount: 245,
    sharesCount: 54,
    isLiked: false,
    isCommentOpen: false,
    isFollowed: false,
    video: "./01.mp4", // empty as requested
  },
  {
    id: 1,
    username: "code_with_rahul",
    userProfile:
      "https://images.unsplash.com/photo-1762656669479-496d6291ef64?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    caption: "Scroll snap explained in 30 seconds 🔥",
    likesCount: 3421,
    commentsCount: 410,
    sharesCount: 120,
    isLiked: true,
    isCommentOpen: false,
    isFollowed: true,
    video: "./02.mp4",
  },
  {
    id: 2,
    username: "frontend_girl",
    userProfile:
      "https://plus.unsplash.com/premium_photo-1765465308206-6d92231b7b71?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    caption: "CSS is fun when you understand it 💙",
    likesCount: 980,
    commentsCount: 88,
    sharesCount: 22,
    isLiked: false,
    isCommentOpen: true,
    isFollowed: false,
    video: "./03.mp4",
  },
  {
    id: 3,
    username: "js_master",
    userProfile: "https://example.com/profile4.jpg",
    caption: "for of vs for in — interview ready 😎",
    likesCount: 2150,
    commentsCount: 300,
    sharesCount: 95,
    isLiked: true,
    isCommentOpen: false,
    isFollowed: true,
    video: "./01.mp4",
  },
  {
    id: 4,
    username: "css_wizard",
    userProfile:
      "https://images.unsplash.com/photo-1761839258830-81f87b1c6d62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
    caption: "Scroll snap + reels = smooth UX ✨",
    likesCount: 1890,
    commentsCount: 210,
    sharesCount: 67,
    isLiked: false,
    isCommentOpen: false,
    isFollowed: false,
    video: "./01.mp4",
  },
  {
    id: 5,
    username: "mern_stack_dev",
    userProfile:
      "https://images.unsplash.com/photo-1767749524669-78d31ee88b8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
    caption: "From HTML to MERN — daily grind 💻",
    likesCount: 3420,
    commentsCount: 480,
    sharesCount: 150,
    isLiked: true,
    isCommentOpen: false,
    isFollowed: true,
    video: "./02.mp4",
  },
  {
    id: 6,
    username: "ui_ux_daily",
    userProfile:
      "https://images.unsplash.com/photo-1761839262867-af53d08b0eb5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
    caption: "Clean UI matters more than animations 🎯",
    likesCount: 980,
    commentsCount: 95,
    sharesCount: 28,
    isLiked: false,
    isCommentOpen: true,
    isFollowed: false,
    video: "./03.mp4",
  },
  {
    id: 7,
    username: "code_with_neha",
    userProfile:
      "https://images.unsplash.com/photo-1761839258420-5c3e2f2e2a74?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D",
    caption: "JavaScript loops explained simply 🔁",
    likesCount: 4100,
    commentsCount: 520,
    sharesCount: 210,
    isLiked: true,
    isCommentOpen: false,
    isFollowed: true,
    video: "./02.mp4",
  },
  {
    id: 8,
    username: "frontend_labs",
    userProfile:
      "https://images.unsplash.com/photo-1761839256601-e768233e25e7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Reels clone using pure HTML CSS JS 🔥",
    likesCount: 2670,
    commentsCount: 340,
    sharesCount: 120,
    isLiked: false,
    isCommentOpen: false,
    isFollowed: false,
    video: "./01.mp4",
  },
  {
    id: 9,
    username: "dev_journey",
    userProfile:
      "https://images.unsplash.com/photo-1767866414304-5824b1263e58?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Consistency beats talent every time 💪",
    likesCount: 1530,
    commentsCount: 180,
    sharesCount: 60,
    isLiked: true,
    isCommentOpen: false,
    isFollowed: true,
    video: "./01.mp4",
  },
];


let allreels = document.querySelector(".all-reels");
function addData(){
var sum = "";
reels.forEach(function (elem, idx) {
  sum += `   <div class="reel">
      <video loop muted autoplay  src="${elem.video}"></video>


      <div class="bottom">
        <div class="user">
          <img class = 'main-img2'src="${elem.userProfile}" alt="">
          <h4>${elem.username}</h4>
          <button>${elem.isFollowed ? "Unfollow" : "followed"}</button>
        </div>
        <h3>${elem.caption} </h3>
 <div class="right">
    <div id =${idx} class="like">
    
    <h4> ${
      elem.isLiked
        ? `<i class="ri-hand-heart-fill icons love"></i>`
        : `<i class="ri-service-fill icons"></i>`
    }
   
  <h6>${elem.likesCount}</h6>
</div>


  <div class="comment">
  <h4><i class="ri-chat-3-line icons"></i></h4>
    
    <h6>${elem.commentsCount}</h6>
  </div>

  <div class="share">
  <h4><i class="ri-share-forward-line"></i></h4>
   
    <h6>${elem.sharesCount}</h6>
  </div>

  <div class="menu">
  <h4>  <i class="ri-menu-search-line icons"></i></h4>
  <h6>${elem.id}</h6>
  
  </div>
</div>

    </div>
`;
});

allreels.innerHTML = sum;






}

addData()


allreels.addEventListener('click',function(dets){
if(!reels[dets.target.id].isLiked ) {
  reels[dets.target.id].likesCount++;
reels[dets.target.id].isLiked = true;
console.log(reels)}
else{
 reels[dets.target.id].likesCount--;
reels[dets.target.id].isLiked = false;
}
addData()
})
 
