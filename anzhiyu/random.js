var posts=["2025/07/23/edgeone反代GitHub/","2025/07/20/公告/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };