function openVideo(videoSrc) {
    var modal = document.getElementById("videoModal");
    var video = document.getElementById("modalVideo");
    video.src = videoSrc;
    modal.style.display = "flex";
    video.play();
  }
  
  function closeVideo() {
    var modal = document.getElementById("videoModal");
    var video = document.getElementById("modalVideo");
    video.pause();
    video.currentTime = 0; // Reset video playback
    modal.style.display = "none";
  }
 // Select the Tiny Slider container
document.querySelector('.my-slider').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
      const videoSrc = event.target.getAttribute('data-video-src');
      openVideo(videoSrc);
    }
  });
   