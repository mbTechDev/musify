let playOrPause = document.getElementById("playOrPause");
let player, duration;
let current = 0;

let originalVideos = [
  {
    title:
      "Maanu - Jhol (Acoustic) | Annural Khalid | Abdullah Siddiqui | Asfand",
    thumbnail: "https://i.ytimg.com/vi/BWczaSneA0Q/mqdefault.jpg",
    videoId: "BWczaSneA0Q",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Dill Se (Official Hindi Song) | AI BeatFusion Studio | 3.3M+ Views",
    thumbnail: "https://i.ytimg.com/vi/_X7l0wVmPRo/mqdefault.jpg",
    videoId: "_X7l0wVmPRo",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "ISHQ - Faheem Abdullah, Rauhan Malik (Lyrics) | #trending",
    thumbnail: "https://i.ytimg.com/vi/gKD1AhmpOoU/mqdefault.jpg",
    videoId: "gKD1AhmpOoU",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Anuv Jain - HUSN (Official Video)",
    thumbnail: "https://img.youtube.com/vi/gJLVTKhTnog/mqdefault.jpg",
    videoId: "gJLVTKhTnog",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Khan khan choodi khanke rahu heer teri banke tu raanjha mera jiya re (Lyrics) BESOS - Shreya Ghoshal",
    thumbnail: "https://img.youtube.com/vi/RWIRKf-Z_qM/mqdefault.jpg",
    videoId: "RWIRKf-Z_qM",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "NISSHASH - নিঃশ্বাস | VIDEO SONG | BORBAAD | SHAKIB KHAN",
    thumbnail: "https://i.ytimg.com/vi/VHz3srJjAV4/mqdefault.jpg",
    videoId: "VHz3srJjAV4",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Saiyaara Lyrics - Tanishk Bagchi, Faheem Abdullah, Arslan Nizami • saiyara tu to badla nahi hai",
    thumbnail: "https://i.ytimg.com/vi/HQp0DwtTP18/mqdefault.jpg",
    videoId: "HQp0DwtTP18",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "CHAND MAMA - চাঁদ মামা | BORBAAD | SHAKIB KHAN | PRITOM HASAN | NUSRAT JAHAN | DOLA RAHMAN",
    thumbnail: "https://i.ytimg.com/vi/qznaQ8dJC2s/mqdefault.jpg",
    videoId: "qznaQ8dJC2s",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Sai Abhyankkar - Aasa Kooda (Lyrics Video) | Sai Smriti | Thejo Bharathwaj | Preity Mukundhuan",
    thumbnail: "https://i.ytimg.com/vi/1kam_b86MGc/mqdefault.jpg",
    videoId: "1kam_b86MGc",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Laage Ura Dhura – Pritom Hasan ft. Debosrie Antara (Bangla)",
    thumbnail: "https://i.ytimg.com/vi/f53nqIBzii8/mqdefault.jpg",
    videoId: "f53nqIBzii8",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Badnaamiyan (Lyrical) | Hate Story IV | Urvashi Rautela | Karan Wahi | Armaan Malik",
    thumbnail: "https://i.ytimg.com/vi/cR9FSU29qqc/mqdefault.jpg",
    videoId: "cR9FSU29qqc",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Tomake Bhalobeshe Lyrics (তোমাকে ভালোবেসে) - Taandob | Arindom, Shirsha Chakraborty | Shakib Khan",
    thumbnail: "https://i.ytimg.com/vi/EmqCnLeYiiI/mqdefault.jpg",
    videoId: "EmqCnLeYiiI",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Tomake Chai Lyrics (তোমাকে চাই) - Arijit Singh, Arindom |",
    thumbnail: "https://i.ytimg.com/vi/MztVV0noiWg/mqdefault.jpg",
    videoId: "MztVV0noiWg",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Tanveer Evan - Bhool Na Jaana ( Slowed & Revarb ) Memories Are Forever | HR Lofi",
    thumbnail: "https://i.ytimg.com/vi/MYVATDyAU_M/mqdefault.jpg",
    videoId: "ZkOOCQ-FQt0",

    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Mushk | OST | Lyrical Video | MD Productions",
    thumbnail: "https://i.ytimg.com/vi/i0gIGnq5adg/mqdefault.jpg",
    videoId: "i0gIGnq5adg",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Xefer x Muza - Jhumka (Official Music Video)",
    thumbnail: "https://i.ytimg.com/vi/LolUVl3nSu4/mqdefault.jpg",
    videoId: "LolUVl3nSu4",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Srotoshinni | ENCORE | Lyrics | স্রোতস্বিনী",
    thumbnail: "https://i.ytimg.com/vi/F0_jwKzCDC0/mqdefault.jpg",
    videoId: "F0_jwKzCDC0",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita",
    thumbnail: "https://i.ytimg.com/vi/9c1NIrAqXe4/mqdefault.jpg",
    videoId: "9c1NIrAqXe4",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Afusic - Pal Pal (Official Music Video) Prod. @AliSoomroMusic",
    thumbnail: "https://i.ytimg.com/vi/KkIxm6TQdzU/mqdefault.jpg",
    videoId: "KkIxm6TQdzU",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Laal Pari (Full Video) | Yo Yo Honey Singh | Sajid Nadiadwala | Tarun Mansukhani",
    thumbnail: "https://i.ytimg.com/vi/DtXoMZAvWyo/mqdefault.jpg",
    videoId: "DtXoMZAvWyo",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Aaj Ki Raat Lyrics - Stree 2 | Sachin-Jigar, Madhubanti Bagchi, Divya Kumar",
    thumbnail: "https://i.ytimg.com/vi/xUa4uhD7e0A/mqdefault.jpg",
    videoId: "xUa4uhD7e0A",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "MILLIONAIRE SONG (Full Video): @YoYoHoneySingh | GLORY | BHUSHAN KUMAR",
    thumbnail: "https://i.ytimg.com/vi/XO8wew38VM8/mqdefault.jpg",
    videoId: "XO8wew38VM8",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Purnota || পূর্ণতা || Warfaze ||Album: Shotto",
    thumbnail: "https://i.ytimg.com/vi/KmDLj7i06KY/mqdefault.jpg",
    videoId: "KmDLj7i06KY",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Bikhra (Lyrics)| AW LYRICS #abdulhannan #lyrics #bikhra",
    thumbnail: "https://i.ytimg.com/vi/lLSS4Kj3gCc/mqdefault.jpg",
    videoId: "lLSS4Kj3gCc",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Tanveer Evan - Jaane Kyun (Reprise Version)",
    thumbnail: "https://i.ytimg.com/vi/EX9EqrYr8Zo/mqdefault.jpg",
    videoId: "EX9EqrYr8Zo",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Raanjhan | Do Patti | Kriti Sanon, Shaheer Sheikh | Parampara Tandon | Sachet-Parampara",
    thumbnail: "https://i.ytimg.com/vi/lBvbNxiVmZA/mqdefault.jpg",
    videoId: "lBvbNxiVmZA",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title:
      "Shaky Shaky - Sanju Rathod FT. Isha Malviya (Lyrics) | Lyrical Bam Marathi",
    thumbnail: "https://i.ytimg.com/vi/zMkb2_XpT_E/mqdefault.jpg",
    videoId: "zMkb2_XpT_E",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
  {
    title: "Samjho Na - Aditya Rikhari ||",
    thumbnail: "https://i.ytimg.com/vi/JnsdxAZel-Y/mqdefault.jpg",
    videoId: "JnsdxAZel-Y",
    favorite: `<ion-icon name="heart-outline"></ion-icon>`,
  },
];

let fav = JSON.parse(localStorage.getItem("fav")) || [];
let isPlaying = false;
let isMuted = false;
let isLooped = false;
let videos = [];

originalVideos.sort(() => Math.random() - 0.5);

// API key
// AIzaSyDUR8uyyL2l56apdcSB7RQBs7Kr20k-hUM

function fetchFunction() {
  fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=100&q=${searchBar.value}+"official song full"+music&videoCategoryId=10&key=AIzaSyDUR8uyyL2l56apdcSB7RQBs7Kr20k-hUM`
  )
    .then((res) => res.json())

    .then((data) => {
      originalVideos = data.items.map((item) => {
        let isFavorited = fav.some((f) => f.videoId === item.id.videoId);

        return {
          title: item.snippet.title,
          thumbnail: item.snippet.thumbnails.medium.url,
          videoId: item.id.videoId,
          favorite: isFavorited
            ? `<ion-icon style="color: #d35656;" name="heart-outline"></ion-icon>`
            : `<ion-icon name="heart-outline"></ion-icon>`,
          isfavorite: isFavorited,
        };
      });

      videos = [...originalVideos];

      function checkFavorites() {
        videos.forEach((video) => {
          const isFav = fav.some((f) => f.videoId === video.videoId);
          video.isfavorite = isFav;
          video.favorite = isFav
            ? `<ion-icon style="color: #d35656;" name="heart-outline"></ion-icon>`
            : `<ion-icon name="heart-outline"></ion-icon>`;
        });
      }

      checkFavorites();

      LoadVideo();
    });
}

// fetchFunction();
search.onclick = function () {
  if (searchBar.value !== "") {
    fetchFunction();

    videos = [...originalVideos];
    checkFavorites();

    setTimeout(() => {
      message.style.display = videos.length === 0 ? "block" : "none";
    }, 1000);

    LoadVideo();

    allMusics.style.background = "#262626 ";
    allMusics.style.color = "#fff";
    favoriteMusics.style.background = "#fff";
    favoriteMusics.style.color = "#000";
    navHeader.innerHTML = `<ion-icon name="musical-notes"></ion-icon> All Musics`;

    musicBox.style.display = "none";
    player.pauseVideo();
    document.title = "mb Tech - Musify";
  }
};

function checkFavorites() {
  videos.forEach((video) => {
    const isFav = fav.some((f) => f.videoId === video.videoId);
    video.isfavorite = isFav;
    video.favorite = isFav
      ? `<ion-icon style="color: #d35656;" name="heart-outline"></ion-icon>`
      : `<ion-icon name="heart-outline"></ion-icon>`;
  });
}
function createPlayer(videoId) {
  player = new YT.Player("player", {
    videoId: videoId,

    events: {
      onReady: () => {
        duration = player.getDuration();
        if (isPlaying) {
          player.playVideo();
          overlay.style.visibility = "visible";
          playOrPause.innerHTML = `<ion-icon name="pause-circle-sharp"></ion-icon>`;
          playOrPause.style.color = "#a75d5d";
        } else {
          player.pauseVideo();
          overlay.style.visibility = "hidden";
          playOrPause.innerHTML = `<ion-icon name="play-circle"></ion-icon>`;
          playOrPause.style.color = "#3b3b3b";
        }

        setInterval(() => {
          if (player && player.getCurrentTime) {
            musicSlider.value = (player.getCurrentTime() / duration) * 100;
          }
        }, 500);
      },
      onStateChange: onPlayerStateChange,
    },
  });
}

function boxPlayer() {
  box.innerHTML = `
    <img src="${videos[current].thumbnail}" alt="">
    <h5 style="padding: 12px;">${videos[current].title}</h5>
  `;

  const favorite = musicBox.querySelector(".favorite");
  favorite.innerHTML = videos[current].favorite;

  favorite.onclick = function () {
    videos[current].isfavorite = !videos[current].isfavorite;

    if (videos[current].isfavorite) {
      videos[
        current
      ].favorite = `<ion-icon style="color: #d35656;" name="heart-outline"></ion-icon>`;
      fav.push(videos[current]);
      setTimeout(() => {
        alert("Song Added");
      }, 100);
    } else {
      setTimeout(() => {
        alert("Song Removed");
      }, 100);
      videos[current].favorite = `<ion-icon name="heart-outline"></ion-icon>`;
      fav = fav.filter((f) => f.videoId !== videos[current].videoId);
      videos = [...originalVideos];
      checkFavorites();
      musicBox.style.display = "none";
      headPhone.style.display = "block";
      document.title = "mb Tech - Musify";
      player.pauseVideo();

      setTimeout(() => {
        message.style.display = videos.length === 0 ? "block" : "none";
      }, 1000);

      LoadVideo();
      allMusics.style.background = "#262626 ";
      allMusics.style.color = "#fff";
      favoriteMusics.style.background = "#fff";
      favoriteMusics.style.color = "#000";
      navHeader.innerHTML = `<ion-icon name="musical-notes"></ion-icon> All Musics`;
    }

    localStorage.setItem("fav", JSON.stringify(fav));
    favorite.innerHTML = videos[current].favorite;

    if (navHeader.innerText.includes("Favorite")) {
      videos = [...fav];
      musicList.innerHTML = "";
      setTimeout(() => {
        message.style.display = videos.length === 0 ? "block" : "none";
      }, 100);
      LoadVideo();
    }
  };
}

function LoadVideo() {
  musicList.innerHTML = "";
  videos.forEach((item, index) => {
    let musicsLi = document.createElement("li");
    musicsLi.innerHTML = `
      <img src="${item.thumbnail}" alt="">
      <small style="padding: 12px;">${item.title}</small>
    `;
    musicsLi.className = "musicsLi";
    musicList.appendChild(musicsLi);

    musicsLi.addEventListener("click", function () {
      current = index;
      musicBox.style.display = "block";
      headPhone.style.display = "none";

      if (window.innerWidth <= 768) {
        songPlayers.style.display = "none";
        allMusics.style.display = "none";
        favoriteMusics.style.display = "none";
        logo.style.display = "block";
      } else {
        songPlayers.style.display = "block";
        logo.style.display = "block";
      }

      document.title = item.title;

      if (player) player.destroy();

      boxPlayer();

      musicSlider.oninput = () => {
        player.seekTo((musicSlider.value / 100) * duration, true);
      };

      createPlayer(videos[current].videoId);
    });
  });
}
// Initial setup for all musics view
allMusics.style.background = "#262626 ";
allMusics.style.color = "#fff";
navHeader.innerHTML = `<ion-icon name="musical-notes"></ion-icon> All Musics`;
favoriteMusics.style.background = "#fff";
favoriteMusics.style.color = "#000";

videos = [...originalVideos];
checkFavorites();
musicBox.style.display = "none";
headPhone.style.display = "block";
document.title = "mb Tech - Musify";

setTimeout(() => {
  message.style.display = videos.length === 0 ? "block" : "none";
}, 1000);

LoadVideo();

// Event listener for showing all musics
allMusics.addEventListener("click", function () {
  videos = [...originalVideos];
  checkFavorites();
  musicBox.style.display = "none";

  if (window.innerWidth > 780) {
    headPhone.style.display = "block";
  } else {
    headPhone.style.display = "none";
  }

  document.title = "mb Tech - Musify";

  setTimeout(() => {
    message.style.display = videos.length === 0 ? "block" : "none";
  }, 1000);

  LoadVideo();

  allMusics.style.background = "#262626 ";
  allMusics.style.color = "#fff";
  favoriteMusics.style.background = "#fff";
  favoriteMusics.style.color = "#000";
  navHeader.innerHTML = `<ion-icon name="musical-notes"></ion-icon> All Musics`;

  if (player) player.pauseVideo();
});

// Event listener for showing favorite musics
favoriteMusics.addEventListener("click", function () {
  videos = [...fav];
  checkFavorites();
  musicBox.style.display = "none";

  if (window.innerWidth > 780) {
    headPhone.style.display = "block";
  } else {
    headPhone.style.display = "none";
  }

  document.title = "mb Tech - Musify";

  setTimeout(() => {
    message.style.display = videos.length === 0 ? "block" : "none";
  }, 1000);

  LoadVideo();

  allMusics.style.background = "#fff";
  allMusics.style.color = "#000";
  favoriteMusics.style.background = "#262626 ";
  favoriteMusics.style.color = "#fff";
  navHeader.innerHTML = `<ion-icon name="heart-circle-sharp"></ion-icon> Favorite`;

  if (player) player.pauseVideo();
});

// Play/pause button toggle
playOrPause.onclick = function () {
  isPlaying = !isPlaying;
  if (player) {
    if (isPlaying) {
      player.unMute();
      player.playVideo();
      overlay.style.visibility = "visible";
      playOrPause.innerHTML = `<ion-icon name="pause-circle-sharp"></ion-icon>`;
      playOrPause.style.color = "#a75d5d";
    } else {
      player.pauseVideo();
      overlay.style.visibility = "hidden";
      playOrPause.innerHTML = `<ion-icon name="play-circle"></ion-icon>`;
      playOrPause.style.color = "#3b3b3b";
    }
  }
};

// Mute/unmute toggle
muteOrUnmute.addEventListener("click", function () {
  isMuted = !isMuted;
  if (player) {
    if (isMuted) {
      player.mute();
      muteOrUnmute.innerHTML = `<ion-icon name="volume-mute"></ion-icon>`;
    } else {
      player.unMute();
      muteOrUnmute.innerHTML = `<ion-icon name="volume-high"></ion-icon>`;
    }
  }
});

// Loop toggle
loop.addEventListener("click", function () {
  isLooped = !isLooped;
  loop.style.color = isLooped ? "#d35656" : "#3b3b3b";
});

// Helper function to setup next or previous video player
function nextPreviousPlayer() {
  if (player) player.destroy();
  document.title = videos[current].title;

  boxPlayer();
  createPlayer(videos[current].videoId);
}

// Handle YouTube player state changes
function onPlayerStateChange(e) {
  if (e.data === YT.PlayerState.ENDED) {
    if (isLooped) {
      player.seekTo(0);
      player.playVideo();
    } else {
      current++;
      if (current >= videos.length) current = 0;
      nextPreviousPlayer();
    }
  }
}

// Previous track button
previous.addEventListener("click", function () {
  if (current > 0) {
    current--;
    nextPreviousPlayer();
  }
});

// Next track button
next.addEventListener("click", function () {
  current++;
  if (current === videos.length) {
    current = 0;
  }
  nextPreviousPlayer();
});

// Menu open button
menu.onclick = function () {
  songPlayers.style.display = "block";
  logo.style.display = "none";
  allMusics.style.display = "block";
  favoriteMusics.style.display = "block";
  headPhone.style.display = "none";
  musicBox.style.display = "none";
};

// Menu close button
closeMenu.onclick = function () {
  songPlayers.style.display = "none";
  logo.style.display = "block";
  allMusics.style.display = "none";
  favoriteMusics.style.display = "none";

  if (isPlaying) {
    headPhone.style.display = "none";
    musicBox.style.display = "block";
  } else if (!isPlaying && document.title === videos[current].title) {
    headPhone.style.display = "none";
    musicBox.style.display = "block";
  } else {
    headPhone.style.display = "block";
    musicBox.style.display = "none";
  }
};
