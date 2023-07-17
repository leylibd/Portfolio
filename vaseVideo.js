console.log("test hello");
var video = document.getElementById("video");
// var videoContainer = document.getElementById("video-container");

var observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5
};

var observer = new IntersectionObserver(handleIntersection, observerOptions);

function handleIntersection(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      video.play();
    } else {
      video.pause();
    }
  });
}

observer.observe(video);