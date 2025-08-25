function musicFilterAndSingerDiv(item) {
  fetchFunction(item.category);
  searchBar.value = item.category;

  if (window.innerWidth <= 1070) {
    sideBar.classList.add("sideActive");
  } else {
    sideBar.classList.remove("sideActive");
  }
}

// ===== MUSIC FILTER =====
let musicFilter = [
  { category: "Musify Custom Collection", icon: "./img/edit.gif" },
  {
    category: `Love Mashup ${new Date().getFullYear()}`,
    icon: "./img/in-love.gif",
  },
  { category: "pop Songs", icon: "./img/hipHop.gif" },
  { category: "Lo-Fi", icon: "./img/relaxed.gif" },
  { category: "New Tranding Songs", icon: "./img/crown.gif" },
  {
    category: `Heartbreak Mashup ${new Date().getFullYear()}`,
    icon: "./img/broken-heart.gif",
  },
];

musicFilter.forEach((item) => {
  let musicFilterLi = document.createElement("li");
  musicFilterLi.innerHTML = `
    <div class="text-center fle justify-center items-center"> 
      <img class="w-[50px] mx-auto mb-4" src=${item.icon} alt="" />
      <h4 class="text-xs">${item.category}</h4>
    </div>`;
  musicFilterLi.className = "musicFilterLi";
  musicFilterUl.appendChild(musicFilterLi);

  musicFilterLi.onclick = function () {
    if (item.category === "Musify Custom Collection") {
      window.location.reload();
    } else {
      isClicked = true;
      initialSetup(
        "#262626",
        "#fff",
        "#fff",
        "#000",
        `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`
      );
      musicFilterAndSingerDiv(item);
    }
  };
});

// ===== SINGER ARRAY =====
let singerArray = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTtIUfRpLxw64GItX0L_pDamelqxEdZaSGxJG_KGLgGsj3e68",
    singer: "Arijit Singh",
    category: "Best Songs of Arijit Singh",
  },
  {
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTbY0IOte619L7InmLY6LF3m5k5-zHzvlVfWhHZk7s0hNHEQNPv",
    singer: "Tahsan Khan",
    category: "Best Songs of Tahsan Khan",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzzxJgVoqIb6UslF7LCqoa1HaVCgl37NNDGGx730wXQMY2nXV",
    singer: "Tanvir Evan",
    category: "Best Songs of Tanvir Evan",
  },
  {
    img: "https://a10.gaanacdn.com/gn_img/artists/21GWwrR3pk/1GWwknpWpk/size_m_1738236865.jpg",
    singer: "Atif Aslam",
    category: "Best Songs of Atif Aslam",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrR0tOgcC-2yD4721O2A8POz10rXdvc6GiMj_RJuKL6TkpWk8vkTGpk-oja5ohACfA7I0&usqp=CAU",
    singer: "Pritom Hasan",
    category: "Best Songs of Pritom Hasan",
  },
  {
    img: "https://a10.gaanacdn.com/gn_img/artists/Rz4W87v3xD/Rz4W8ppWxD/size_m_1716893509.webp",
    singer: "Neha Kakkar",
    category: "Best Songs of Neha Kakkar",
  },
  {
    img: "https://a10.gaanacdn.com/gn_img/artists/w4MKPDOKoj/4MKPgoQgbo/size_m_1742211226.webp",
    singer: "Honey Singh",
    category: "Best Songs of Honey Singh",
  },
  {
    img: "https://static.spotboye.com/uploads/baadshah-new-song-let-it-go_48da6a7a5d9fe2ce2102ecd05c1c354b_thumbnail.jpg",
    singer: "Badshah",
    category: "Best Songs of Badshah",
  },
  {
    img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQClj_RuRBYu21vzHpq9-3dX67QMmrUkYz2XV7kPC4r6CPqThtn",
    singer: "Shreya Ghoshal",
    category: "Best Songs of Shreya Ghoshal",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHhMsjP3Bu9fGXCUBQ0VdSPY7LObh82DQOw&s",
    singer: "Armaan Malik",
    category: "Best Songs of Armaan Malik",
  },
];

singerArray.sort(() => Math.random() - 0.5);

singerArray.forEach((item) => {
  let singerDiv = document.createElement("div");
  singerDiv.innerHTML = `
    <div class="owlImgContainer w-[75px] rounded-lg overflow=hidden mr-[12px]">
      <img class="rounded-lg" src=${item.img} alt="">
    </div>
    <h4 class="singerName text-shadow-lg text-shadow-gray-300">${item.singer}</h4>`;
  singerDiv.className = "item";
  owlDiv.appendChild(singerDiv);

  singerDiv.onclick = function () {
    isClicked = true;
    initialSetup(
      "#262626",
      "#fff",
      "#fff",
      "#000",
      `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`
    );
    musicFilterAndSingerDiv(item);
  };
});

// *************************************

let originalVideos = [
  {
    title:
      "Maanu - Jhol (Acoustic) | Annural Khalid | Abdullah Siddiqui | Asfand",
    thumbnail: "https://i.ytimg.com/vi/BWczaSneA0Q/mqdefault.jpg",
    videoId: "BWczaSneA0Q",
    description:
      "Maanu's 'Jhol (Acoustic)' is a soulful and serene acoustic rendition of the original song. Featuring Annural Khalid, Abdullah Siddiqui, and Asfand, this track offers a heartfelt performance with beautiful harmonies. It's a perfect song for unwinding and enjoying a calm musical moment.",
    publishedAt: "2025-02-02",
    channelTitle: "Maanu",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Dill Se (Official Hindi Song) | AI BeatFusion Studio | 3.3M+ Views",
    thumbnail: "https://i.ytimg.com/vi/_X7l0wVmPRo/mqdefault.jpg",
    videoId: "_X7l0wVmPRo",
    description:
      "I was unable to find metadata for this video. The provided data for this entry is not accurate. Please check the video ID and try again.",
    publishedAt: "2025-06-10",
    channelTitle: "AI BeatFusion Studio",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "ISHQ - Faheem Abdullah, Rauhan Malik (Lyrics) | #trending",
    thumbnail: "https://i.ytimg.com/vi/gKD1AhmpOoU/mqdefault.jpg",
    videoId: "gKD1AhmpOoU",
    description:
      "This is the official lyrical video for 'ISHQ' by Faheem Abdullah and Rauhan Malik. The song has been trending for its beautiful melody and emotional lyrics. It is a popular track with over 47 million views.",
    publishedAt: "2024-03-09",
    channelTitle: "Artiste First",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Anuv Jain - HUSN (Official Video)",
    thumbnail: "https://i.ytimg.com/vi/gJLVTKhTnog/mqdefault.jpg",
    videoId: "gJLVTKhTnog",
    description:
      "Anuv Jain's 'HUSN' is an official music video that has garnered over 221 million views. It's a popular track known for its heartfelt lyrics and captivating visuals. This is a must-listen for fans of indie and pop music.",
    publishedAt: "2023-12-01",
    channelTitle: "Anuv Jain",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Khan khan choodi khanke rahu heer teri banke tu raanjha mera jiya re (Lyrics) BESOS - Shreya Ghoshal",
    thumbnail: "https://i.ytimg.com/vi/RWIRKf-Z_qM/mqdefault.jpg",
    videoId: "RWIRKf-Z_qM",
    description:
      "This lyrical video features the popular song 'Besos' by Shreya Ghoshal. The song includes the catchy lines 'Khan khan choodi khanke rahu heer teri banke tu raanjha mera jiya re' and has been a favorite among many listeners.",
    publishedAt: "2025-05-18",
    channelTitle: "Shreya Ghoshal",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      " Taandob Title Track | SHAKIB KHAN | SHIFAT ABDULLAH ABIR | TANVIR AHMED|SVF Alpha-i |Deepto| Chorki",
    thumbnail: "https://i.ytimg.com/vi/UtynhHq7uHU/mqdefault.jpg",
    videoId: "UtynhHq7uHU",
    description:
      "মেগাস্টার শাকিব খানের ক্যারিয়ারের ২৬ বছর পূর্তিতে এলো তান্ডবের ...",
    publishedAt: "5/28/2025",
    channelTitle: "Chorki",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Saiyaara Lyrics - Tanishk Bagchi, Faheem Abdullah, Arslan Nizami • saiyara tu to badla nahi hai",
    thumbnail: "https://i.ytimg.com/vi/wiaP9cAosgw/mqdefault.jpg",
    videoId: "wiaP9cAosgw",
    description:
      "This is a lyrical video for the song 'Saiyaara' featuring music by Tanishk Bagchi and vocals by Faheem Abdullah and Arslan Nizami. The song has gained significant popularity with over 4 million views.",
    publishedAt: "2025-06-11",
    channelTitle: "Vibe Bird",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "CHAND MAMA - চাঁদ মামা | BORBAAD | SHAKIB KHAN | PRITOM HASAN | NUSRAT JAHAN | DOLA RAHMAN",
    thumbnail: "https://i.ytimg.com/vi/qznaQ8dJC2s/mqdefault.jpg",
    videoId: "qznaQ8dJC2s",
    description:
      "This is the video song for 'Chand Mama' from the movie 'Borbaad' featuring Shakib Khan, Pritom Hasan, and Nusrat Jahan. The song is a huge hit with over 53 million views, a vibrant beat, and great choreography.",
    publishedAt: "2025-03-28",
    channelTitle: "Pritom Hasan",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Sai Abhyankkar - Aasa Kooda (Lyrics Video) | Sai Smriti | Thejo Bharathwaj | Preity Mukundhuan",
    thumbnail: "https://i.ytimg.com/vi/a3Ue-LN5B9U/mqdefault.jpg",
    videoId: "a3Ue-LN5B9U",
    description:
      "I was unable to find metadata for this video. The provided data for this entry is not accurate. Please check the video ID and try again.",
    publishedAt: "2025-06-10T05:33:49Z",
    channelTitle: "Think Music India",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Laage Ura Dhura – Pritom Hasan ft. Debosrie Antara (Bangla)",
    thumbnail: "https://i.ytimg.com/vi/f53nqIBzii8/mqdefault.jpg",
    videoId: "f53nqIBzii8",
    description:
      "This is the popular music video for the song 'Laage Ura Dhura' from the movie 'Toofan', featuring Pritom Hasan and Debosrie Antara. The song has become a massive hit, accumulating over 305 million views.",
    publishedAt: "2024-05-28",
    channelTitle: "SVF Music",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Badnaamiyan (Lyrical) | Hate Story IV | Urvashi Rautela | Karan Wahi | Armaan Malik",
    thumbnail: "https://i.ytimg.com/vi/cR9FSU29qqc/mqdefault.jpg",
    videoId: "cR9FSU29qqc",
    description:
      "I was unable to find metadata for this video. The provided data for this entry is not accurate. Please check the video ID and try again.",
    publishedAt: "2018-02-27",
    channelTitle: "T-Series",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Tomake Bhalobeshe Lyrics (তোমাকে ভালোবেসে) - Taandob | Arindom, Shirsha Chakraborty | Shakib Khan",
    thumbnail: "https://i.ytimg.com/vi/EmqCnLeYiiI/mqdefault.jpg",
    videoId: "EmqCnLeYiiI",
    description:
      "This is the lyrical video for 'Tomake Bhalobeshe' from the movie 'Taandob', featuring Arindom and Shirsha Chakraborty. The song has been a popular track with fans.",
    publishedAt: "2025-06-29",
    channelTitle: "Tanveer Evan",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Tomake Chai Lyrics (তোমাকে চাই) - Arijit Singh, Arindom |",
    thumbnail: "https://i.ytimg.com/vi/MztVV0noiWg/mqdefault.jpg",
    videoId: "MztVV0noiWg",
    description:
      "This is a lyrical video for 'Tomake Chai', sung by Arijit Singh and composed by Arindom. The video showcases the beautiful lyrics of the song.",
    publishedAt: "2024-11-17",
    channelTitle: "Tanveer Evan",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Tanveer Evan - Bhool Na Jaana ( Slowed & Revarb ) Memories Are Forever | HR Lofi",
    thumbnail: "https://i.ytimg.com/vi/MYVATDyAU_M/mqdefault.jpg",
    videoId: "MYVATDyAU_M",
    description:
      "I was unable to find metadata for this video. The provided data for this entry is not accurate. Please check the video ID and try again.",
    publishedAt: "2025-06-10T05:33:49Z",
    channelTitle: "HR Lofi",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Mushk | OST | Lyrical Video | MD Productions",
    thumbnail: "https://i.ytimg.com/vi/i0gIGnq5adg/mqdefault.jpg",
    videoId: "i0gIGnq5adg",
    description:
      "The official OST for 'Mushk' by Ali Zafar. This lyrical video showcases the emotional and heartfelt theme of the series, receiving over 400,000 views.",
    publishedAt: "2020-11-12",
    channelTitle: "Ali Zafar",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Xefer x Muza - Jhumka (Official Music Video)",
    thumbnail: "https://i.ytimg.com/vi/LolUVl3nSu4/mqdefault.jpg",
    videoId: "LolUVl3nSu4",
    description:
      "This is the official music video for 'Jhumka' by Xefer and Muza. The song is a huge hit with over 150 million views, celebrated for its catchy tune and vibrant music video.",
    publishedAt: "2023-01-27",
    channelTitle: "Xefer",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Srotoshinni | ENCORE | Lyrics | স্রোতস্বিনী",
    thumbnail: "https://i.ytimg.com/vi/F0_jwKzCDC0/mqdefault.jpg",
    videoId: "F0_jwKzCDC0",
    description:
      "This lyrical video features the song 'Srotoshinni' by ENCORE. The track, a favorite among listeners, has over 1.7 million views, and is known for its serene and captivating lyrics.",
    publishedAt: "2024-04-15",
    channelTitle: "ENCORE",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Dhun Song | Saiyaara | Ahaan Panday, Aneet Padda | Mithoon | Arijit Singh | In cinemas now",
    thumbnail: "https://i.ytimg.com/vi/cUmUOb7j3dc/mqdefault.jpg",
    videoId: "cUmUOb7j3dc",
    description:
      "Book your tickets now: https://bookmy.show/Saiyaara | https://link.district.in/DSTRKT/psaiyaara When love hurts, music heals.",
    publishedAt: "7/1/2025",
    channelTitle: "YRF",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Barbaad Song | Saiyaara | Ahaan Panday, Aneet Padda | The Rish | Jubin Nautiyal | In Cinemas Now",
    thumbnail: "https://i.ytimg.com/vi/0v5eHPfy5Lk/mqdefault.jpg",
    videoId: "0v5eHPfy5Lk",
    description:
      "Book your tickets now: https://bookmy.show/Saiyaara | https://link.district.in/DSTRKT/psaiyaara Who says love can't consume you ...",
    publishedAt: "6/10/2025",
    channelTitle: "YRF",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Khoobsurat Lyrics - Stree 2 | Sachin-Jigar, Vishal Mishra",
    thumbnail: "https://i.ytimg.com/vi/spl0PfQDRjk/mqdefault.jpg",
    videoId: "spl0PfQDRjk",
    description:
      "Khoobsurat Lyrics - Stree 2 | Sachin-Jigar, Vishal Mishra Song: Khoobsurat Singer: Vishal Mishra, Sachin-Jigar Lyrics: Amitabh ...",
    publishedAt: "8/10/2024",
    channelTitle: "Vibe Bird",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "EMIWAY BANTAI - PAISA PAISA | ( MUSIC BY TONY JAMES ) | OFFICIAL MUSIC VIDEO",
    thumbnail: "https://i.ytimg.com/vi/l2Qi31JfXvc/mqdefault.jpg",
    videoId: "l2Qi31JfXvc",
    description:
      "About The Song :- Presenting Paisa Paisa! Recreated by Emiway Bantai, laced with hard verses and flow like no other, this Paisa ...",
    publishedAt: "6/16/2025",
    channelTitle: "Emiway Bantai",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Paisa hai to badi badi baatein | Trading Motivational Video Song | Farzi",
    thumbnail: "https://i.ytimg.com/vi/zHdlI2fVR24/mqdefault.jpg",
    videoId: "zHdlI2fVR24",
    description:
      "Paisa hai to badi badi baatein | Trading Motivational Video Song | Farzi paisa hai to paisa hai to badi badi baatein paisa hai to ...",
    publishedAt: "10/16/2023",
    channelTitle: "The Thief of Dalal Street",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },

  {
    title: "Coke Studio | Season 14 | Pasoori | Ali Sethi x Shae Gill",
    thumbnail: "https://i.ytimg.com/vi/5Eqb_-j3FDA/mqdefault.jpg",
    videoId: "5Eqb_-j3FDA",
    description:
      "Let's transcend boundaries and bridge distances through compassion, love and identity. #Pasoori #RealMagic ...",
    publishedAt: "2/7/2022",
    channelTitle: "Coke Studio Pakistan",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },

  {
    title:
      "Uyi Amma - Azaad | Aaman D, Rasha Thadani| Madhubanti Bagchi,Amit Trivedi,Amitabh| Bosco| Abhishek K",
    thumbnail: "https://i.ytimg.com/vi/FZLadzn5i6Q/mqdefault.jpg",
    videoId: "FZLadzn5i6Q",
    description:
      "SUBSCRIBE to Zee Music Company - https://bit.ly/2yPcBkS To Stream & Download Full Song: Spotify - https://spoti.fi/3Po1CCU ...",
    publishedAt: "1/4/2025",
    channelTitle: "Zee Music Company",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Chuttamalle Lyrics - DEVARA | NTR | Janhvi Kapoor | Anirudh Ravichander | Shilpa Rao",
    thumbnail: "https://i.ytimg.com/vi/exLJkAYRb9w/mqdefault.jpg",
    videoId: "exLJkAYRb9w",
    description:
      "Here's #Chuttamalle from Devara Part - 1 ft. NTR, Janhvi Kapoor. Written & Directed by Koratala Siva. The Film's music is ...",
    publishedAt: "11/17/2024",
    channelTitle: "RAINBOW TRENDS",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Tum Tum - Video Song (Hindi) | Enemy | Vishal | Arya | Anand Shankar | Vinod Kumar | Thaman S",
    thumbnail: "https://i.ytimg.com/vi/Q38f4frs8yc/mqdefault.jpg",
    videoId: "Q38f4frs8yc",
    description:
      "Miss attending weddings? Don't worry we have an amazing song 'Tum Tum' (Hindi) from Enemy that you can dance to. Get ready ...",
    publishedAt: "1/3/2022",
    channelTitle: "Divo Music Hindi",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Tumi Bristi Cheyecho Bole | ( তুমি বৃষ্টি চেয়েছো বলে ) | Mahtim sakib | New Lyrical Song 2024",
    thumbnail: "https://i.ytimg.com/vi/4vPKLGz0bU4/mqdefault.jpg",
    videoId: "4vPKLGz0bU4",
    description:
      'Today, we have brought to you a beautiful song "Tumi bristi cheyecho bole " ( তুমি বৃষ্টি চেয়েছো বলে ) from ...',
    publishedAt: "8/1/2024",
    channelTitle: "ABACUS ORIGINALS",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Alingone Lyrics (আলিঙ্গনে) Habib Wahid Bangla Song 2019",
    thumbnail: "https://i.ytimg.com/vi/9HQiANh8soI/mqdefault.jpg",
    videoId: "9HQiANh8soI",
    description:
      "Alingone Song Is Sung by Habib Wahid Bangla Song 2019 Featuring: Muna Gauchan. Alingone Bengali Lyrics written by Ratim ...",
    publishedAt: "4/4/2020",
    channelTitle: "Lyrics Media",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "ONUVOBE | অনুভবে | Shakir Zaman | Raian Afridi | New Bangla Song 2019 | Official Lyrical Video",
    thumbnail: "https://i.ytimg.com/vi/hoHwaDSnxjE/mqdefault.jpg",
    videoId: "hoHwaDSnxjE",
    description:
      "Subscribe to my channel and Enjoy more Bengali Music Videos. ONUVOBE Lyrics : বদ্ধ দেয়ালে জমানো ...",
    publishedAt: "11/17/2019",
    channelTitle: "SHAKIR ZN",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Onuvobe | অনুভবে | Lofi Remix | Shakir Zaman | Raian Afridi | NabruNation",
    thumbnail: "https://i.ytimg.com/vi/MydHs6k6Mg4/mqdefault.jpg",
    videoId: "MydHs6k6Mg4",
    description:
      'I\'ve created a Lofi version of "ONUVOBE" by @shakirzn14 & Raian Afridi. If you enjoyed it, please leave a like and hit the ...',
    publishedAt: "4/28/2025",
    channelTitle: "NabruNation",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Ishq Hai Mashup | Naresh Parmar | Sahiba | Arijit Singh | Vishal Mishra",
    thumbnail: "https://i.ytimg.com/vi/ipfrW9jYGwI/mqdefault.jpg",
    videoId: "ipfrW9jYGwI",
    description:
      "Ishq Hai Mashup | Naresh Parmar | Sahiba | Arijit Singh | Vishal Mishra Music - Naresh Parmar Visual - Naresh Parmar If you like ...",
    publishedAt: "1/12/2025",
    channelTitle: "Naresh Parmar",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "তোমার পিছু ছাড়বো না || Tomar Pichu Charbo Na || Nahid Hassan || Lyrics Video",
    thumbnail: "https://i.ytimg.com/vi/yPg-BKrBt7E/mqdefault.jpg",
    videoId: "yPg-BKrBt7E",
    description:
      "তোমার পিছু ছাড়বো না || Tomar Pichu Charbo Na || Nahid Hassan || Lyrics Video Facebook Page: ...",
    publishedAt: "5/9/2023",
    channelTitle: "SG MUSIC POINT",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Koi Sehri Babu - Shruti Rane (Lyrics) | Lyrical Bam Hindi",
    thumbnail: "https://i.ytimg.com/vi/XhlYxb-ZuyI/mqdefault.jpg",
    videoId: "XhlYxb-ZuyI",
    description:
      "Koi Sehri Babu - Shruti Rane (Lyrics) | Lyrical Bam Hindi Song Credits:- Singer:- Shruti Rane Original Lyricist:- Anand Bakshi ...",
    publishedAt: "5/5/2025",
    channelTitle: "LYRICAL BAM HINDI",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "O Sajna (Official Video) - Badshah X DIVINE X Nikhita Gandhi | Ek THA RAJA",
    thumbnail: "https://i.ytimg.com/vi/JRKk7gxcpMc/mqdefault.jpg",
    videoId: "JRKk7gxcpMc",
    description:
      "Listen Now On Spotify : https://open.spotify.com/track/3YVbYgFSd2Whua4QUiIjUc Jiosaavn ...",
    publishedAt: "4/23/2024",
    channelTitle: "Badshah",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },

  {
    title: "Afusic - Pal Pal (Official Music Video) Prod. @AliSoomroMusic",
    thumbnail: "https://i.ytimg.com/vi/KkIxm6TQdzU/mqdefault.jpg",
    videoId: "KkIxm6TQdzU",
    description:
      "I was unable to find metadata for this video. The provided data for this entry is not accurate. Please check the video ID and try again.",
    publishedAt: "2025-02-18",
    channelTitle: "AFUSIC",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Laal Pari (Full Video) | Yo Yo Honey Singh | Sajid Nadiadwala | Tarun Mansukhani",
    thumbnail: "https://i.ytimg.com/vi/DtXoMZAvWyo/mqdefault.jpg",
    videoId: "DtXoMZAvWyo",
    description:
      "This is a lyrical video for 'Laal Pari' by Yo Yo Honey Singh and Simar Kaur. This is a popular track with over 2.1 million views.",
    publishedAt: "2025-05-12",
    channelTitle: "T-Series",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Aaj Ki Raat Lyrics - Stree 2 | Sachin-Jigar, Madhubanti Bagchi, Divya Kumar",
    thumbnail: "https://i.ytimg.com/vi/xUa4uhD7e0A/mqdefault.jpg",
    videoId: "xUa4uhD7e0A",
    description:
      "This is a lyrical video for 'Aaj Ki Raat' from the movie 'Stree 2', composed by Sachin-Jigar. The song is sung by Madhubanti Bagchi and Divya Kumar.",
    publishedAt: "2024-07-24",
    channelTitle: "Saregama India Ltd",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "MILLIONAIRE SONG (Full Video): @YoYoHoneySingh | GLORY | BHUSHAN KUMAR",
    thumbnail: "https://i.ytimg.com/vi/XO8wew38VM8/mqdefault.jpg",
    videoId: "XO8wew38VM8",
    description:
      "This is the full video for the 'Millionaire Song' by Yo Yo Honey Singh. From the album 'Glory', this track is a massive hit with over 395 million views.",
    publishedAt: "2024-08-26",
    channelTitle: "T-Series",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Coke Studio | Season 14 | Kana Yaari | Kaifi Khalil x Eva B x Abdul Wahab Bugti",
    thumbnail: "https://i.ytimg.com/vi/zQDAi8tI-cU/mqdefault.jpg",
    videoId: "zQDAi8tI-cU",
    description:
      "Come join us on this journey of friendship, love, and betrayal #CokeStudio #Season14 #KanaYaari Listen on Spotify: ...",
    publishedAt: "1/19/2022",
    channelTitle: "Coke Studio Pakistan",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Bikhra (Lyrics)| AW LYRICS #abdulhannan #lyrics #bikhra",
    thumbnail: "https://i.ytimg.com/vi/lLSS4Kj3gCc/mqdefault.jpg",
    videoId: "lLSS4Kj3gCc",
    description:
      "I was unable to find metadata for this video. The provided data for this entry is not accurate. Please check the video ID and try again.",
    publishedAt: "2023-02-11",
    channelTitle: "AW LYRICS",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Tanveer Evan - Jaane Kyun (Reprise Version)",
    thumbnail: "https://i.ytimg.com/vi/EX9EqrYr8Zo/mqdefault.jpg",
    videoId: "EX9EqrYr8Zo",
    description:
      "I was unable to find metadata for this video. The provided data for this entry is not accurate. Please check the video ID and try again.",
    publishedAt: "2025-06-10T05:33:49Z",
    channelTitle: "Tanveer Evan",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Raanjhan | Do Patti | Kriti Sanon, Shaheer Sheikh | Parampara Tandon | Sachet-Parampara",
    thumbnail: "https://i.ytimg.com/vi/lBvbNxiVmZA/mqdefault.jpg",
    videoId: "lBvbNxiVmZA",
    description:
      "This is the full video of 'Raanjhan' from the movie 'Do Patti', starring Kriti Sanon and Shaheer Sheikh. The song is sung by Parampara Tandon and composed by Sachet-Parampara. It has been a huge hit, with over 313 million views.",
    publishedAt: "2024-11-20",
    channelTitle: "T-Series",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title:
      "Tu Ishq Hai Toh Main Baahon Mein Hoon (Lyrics) Tu Hain Toh Main Hoon - Arijit Singh, Afsana Khan",
    thumbnail: "https://i.ytimg.com/vi/44jQh6vAl-4/mqdefault.jpg",
    videoId: "44jQh6vAl-4",
    description:
      "Subscribe and press ( ) to join the Notification Squad and stay updated with new uploads Follow Me: ...",
    publishedAt: "1/31/2025",
    channelTitle: "Good Vibes",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Wildfires - Shaky Shaky (Official Music Video) ft. Sanju Rathod",
    thumbnail: "https://i.ytimg.com/vi/lY8o03L0swc/mqdefault.jpg",
    videoId: "lY8o03L0swc",
    description:
      "Music video by Wildfires performing Shaky Shaky (Official Music Video).Wildfires.",
    publishedAt: "7/28/2025",
    channelTitle: "WildfiresVEVO",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Samjho Na - Aditya Rikhari ||",
    thumbnail: "https://i.ytimg.com/vi/JnsdxAZel-Y/mqdefault.jpg",
    videoId: "JnsdxAZel-Y",
    description:
      "This is the Indie Release version of the song 'Samjho Na' by Aditya Rikhari. The song is a hit among indie music fans, with over 1 million views.",
    publishedAt: "2022-02-15",
    channelTitle: "Aditya Rikhari",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
  {
    title: "Akshath - Nadaaniyan (Official Video) Aisha Ahmed",
    thumbnail: "https://i.ytimg.com/vi/gPpQNzQP6gE/mqdefault.jpg",
    videoId: "gPpQNzQP6gE",
    description:
      "You guys gave the song so much love, that we had to do a video, to its truest nadaan depiction. Hope it makes you smile :) Follow ...",
    publishedAt: "6/26/2024",
    channelTitle: "Akshath",
    favorite: "<ion-icon name='heart-outline'></ion-icon>",
  },
];

let fav = JSON.parse(localStorage.getItem("fav")) || [];
let isPlaying = false;
let isMuted = false;
let isLooped = false;
let videos = [];
let player, duration;
let current = 0;

// originalVideos.sort(() => Math.random() - 0.5);

// ======= FETCH FUNCTION  =======

function fetchFunction(val) {
  const query = encodeURIComponent(`${val} official song full`);
  const apiKey = "AIzaSyDUR8uyyL2l56apdcSB7RQBs7Kr20k-hUM";

  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=50&q=${query}&videoCategoryId=10&key=${apiKey}`;

  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      videos = data.items?.length
        ? data.items.map((item) => {
            const favStatus = fav.some((f) => f.videoId === item.id.videoId);
            return {
              title: item.snippet.title,
              description: item.snippet.description,
              publishedAt: item.snippet.publishedAt,
              channelTitle: item.snippet.channelTitle,
              thumbnail: item.snippet.thumbnails.medium.url,
              videoId: item.id.videoId,
              favorite: favStatus
                ? `<ion-icon style="color:rgb(0 197 197);" name="heart-outline"></ion-icon>`
                : `<ion-icon name="heart-outline"></ion-icon>`,
              isfavorite: favStatus,
            };
          })
        : [...originalVideos];
      if (data.items?.length) originalVideos = [...videos];
      checkFavorites();
      setTimeout(() => {
        message.style.display = videos.length === 0 ? "block" : "none";
      }, 50);
      LoadVideo();
    })
    .catch((err) => {
      console.error("Error fetching videos:", err);
      videos = [...originalVideos];
      checkFavorites();
      setTimeout(() => {
        message.style.display = videos.length === 0 ? "block" : "none";
      }, 50);
      LoadVideo();
    });
}

function checkFavorites() {
  videos.forEach((video) => {
    let isFav = fav.some((f) => f.videoId === video.videoId);
    video.isfavorite = isFav;
    video.favorite = isFav
      ? `<ion-icon style="color: rgb(0 197 197);" name="heart-outline"></ion-icon>`
      : `<ion-icon name="heart-outline"></ion-icon>`;
  });
}

// ======= LOAD VIDEO FUNCTION =======

function LoadVideo() {
  musicList.innerHTML = ""; // Clear music list

  videos.forEach((item, index) => {
    let musicsLi = document.createElement("li");

    // New badge =====

    let pubDate = new Date(item.publishedAt),
      currentDate = new Date(),
      badgeText = "";

    // Show "New" if published within last 3 months of current year

    if (
      pubDate.getFullYear() === currentDate.getFullYear() &&
      currentDate.getMonth() - pubDate.getMonth() <= 3
    )
      badgeText = "New";

    // songsList ========
    let strArrayOfTitle = item.title.slice(0, 50).split("").join("");

    musicsLi.innerHTML =
      window.innerWidth <= 1070
        ? `
        <div class="flex items-center">
          <img src="${item.thumbnail}" alt="">
          <small title="${
            item.title
          }" style="padding: 0px 12px;">${strArrayOfTitle}
            <b style="display:${
              item.title.length >= 35 ? "inline-block" : "none"
            };">. . .</b>
          </small>
        </div>
        <br>
        <span id="newBadge" style="display:${
          badgeText ? "inline-block" : "none"
        };">${badgeText}</span>
      `
        : `
        <img src="${item.thumbnail}" alt="">
        <small title="${item.title}" style="padding: 0px 12px;">
          ${strArrayOfTitle} 
          <b style="display:${
            item.title.length >= 35 ? "inline-block" : "none"
          };">. . .</b>
        
          <br>
          <span id="newBadge" style="display:${
            badgeText ? "inline-block" : "none"
          };">${badgeText}</span>
        </small>
      `;

    musicsLi.className = "musicsLi transition-all musicsLiSmallScreen";
    musicList.appendChild(musicsLi);

    musicsLi.onclick = function () {
      current = index;
      sideBar.classList.remove("sideActive");

      selectedSongs();

      playerSection.style.display = nowPlayingSection.style.display = "block";
      document.title = item.title;

      if (player) player.destroy();
      boxPlayer();
      nowPlay();
      createPlayer(videos[current].videoId);

      // Seek control
      musicSlider.oninput = () =>
        player.seekTo((musicSlider.value / 100) * duration, true);
    };
  });
}

// ======= BOX PLAYER =======

function boxPlayer() {
  // Short title

  let strArray = videos[current].title.slice(0, 20).split("");

  // Disable previous Btn if playing first video

  previous.style.color = current === 0 ? "rgb(189 189 189)" : "#35404e";

  playBox.innerHTML = `
  <img class="w-[80px] h-[50px] rounded-md shadow-xl" src="${
    videos[current].thumbnail
  }" alt="">
  <div class="playboxSongName block pl-2">
    <p>
      <b>${strArray.join("")}</b>
      <span class="text-xl">...</span>
    </p>
    <small class="text-[#686868]">Official Song</small>
  </div>
`;

  let favorite = musicBox.querySelector(".favorite");
  favorite.innerHTML = videos[current].favorite;

  favorite.onclick = () => {
    let video = videos[current];
    video.isfavorite = !video.isfavorite;

    if (video.isfavorite) {
      video.favorite = `<ion-icon style="color: rgb(0 197 197);" name="heart-outline"></ion-icon>`;
      fav.push(video);
      setTimeout(
        () =>
          Swal.fire({
            title: "Song Added Successfully",
            icon: "success",
          }),
        100
      );
    } else {
      video.favorite = `<ion-icon name="heart-outline"></ion-icon>`;
      fav = fav.filter((f) => f.videoId !== video.videoId);
      setTimeout(
        () =>
          Swal.fire({
            title: "Song Removed",
            icon: "warning",
          }),
        100
      );

      videos = [...originalVideos];
      isClicked = true;
      initialSetup(
        "#262626",
        "#fff",
        "#fff",
        "#000",
        `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`
      );
    }

    localStorage.setItem("fav", JSON.stringify(fav));
    checkFavorites();
    setTimeout(() => {
      message.style.display = videos.length === 0 ? "block" : "none";
    }, 50);
    favorite.innerHTML = video.favorite;
  };
}

// ======= CREATE PLAYER FUNCTION =======
function createPlayer(videoId) {
  let videoIds = videos.map((v) => v.videoId);
  if (player) {
    player.destroy();
  }
  player = new YT.Player("player", {
    videoId: videoId,

    events: {
      onReady: () => {
        duration = player.getDuration();
        playPause();

        player.loadPlaylist([videos[current].videoId], current);

        // if (!isLooped) {
        //   // Load full playlist starting from "current"
        //   player.loadPlaylist(videoIds, current);
        // } else {
        //   // Load only the current video as a single-item playlist
        //   player.loadPlaylist([videos[current].videoId], 0);
        // }

        let savedVolume = localStorage.getItem("vol") || 100;

        if (player) {
          player.setVolume(Number(savedVolume));
          volume.value = Number(savedVolume);

          volume.onchange = function () {
            let newVol = window.innerWidth <= 500 ? 100 : this.value;

            player.setVolume(newVol);
            this.value = newVol;

            localStorage.setItem("vol", newVol);
          };
        }

        // Handle mute/unmute

        if (isMuted) {
          player.mute();
          muteOrUnmute.innerHTML = `<ion-icon name="volume-mute" class="mb-[-6px]"></ion-icon>`;
        } else {
          player.unMute();
          muteOrUnmute.innerHTML = `<ion-icon name="volume-high" class="mb-[-6px]"></ion-icon>`;
        }

        // Update music slider
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

submit.onclick = function () {
  if (searchBar.value !== "") {
    fetchFunction(searchBar.value);

    videos = [...originalVideos];
    isClicked = true;
    initialSetup(
      "#262626",
      "#fff",
      "#fff",
      "#000",
      `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`
    );
  }
};

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (searchBar.value !== "") {
      fetchFunction(searchBar.value);

      videos = [...originalVideos];
      isClicked = true;
      initialSetup(
        "#262626",
        "#fff",
        "#fff",
        "#000",
        `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`
      );
    }
  }
});

// ======= INITIAL LOAD =======

// nowPlayingSection

function nowPlay() {
  nowPlayingSection.style.display = "block";

  nowPlayingImg.innerHTML = `
    <img
      class="rounded-lg shadow-2xl w-full h-full"
      src="https://i.ytimg.com/vi/${videos[current].videoId}/maxresdefault.jpg"
      alt=""
    />
  `;

  song.innerHTML = `${videos[current].title}`;
  description.innerHTML = `${videos[current].description}`;
  from.innerHTML = `${videos[current].channelTitle}`;

  let date = new Date(videos[current].publishedAt);
  publishedAt.innerHTML = date.toLocaleDateString();
}

from.onclick = function () {
  fetchFunction(videos[current].channelTitle);
  searchBar.value = videos[current].channelTitle;

  if (window.innerWidth <= 1070) {
    sideBar.classList.add("sideActive");
  } else {
    sideBar.classList.remove("sideActive");
  }

  videos = [...originalVideos];
  isClicked = true;
  initialSetup(
    "#262626",
    "#fff",
    "#fff",
    "#000",
    `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`
  );
};

// Initial setup for all musics view

videos = [...originalVideos];

initialSetup(
  "#262626",
  "#fff",
  "#fff",
  "#000",
  `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`
);

checkFavorites();
setTimeout(() => {
  message.style.display = videos.length === 0 ? "block" : "none";
}, 100);
LoadVideo();
boxPlayer();

// Play/pause button toggle

function playPause() {
  if (player) {
    if (isPlaying) {
      player.playVideo();
      overlay.style.visibility = "visible";
      musicSlider.style.visibility = "visible";

      playOrPause.innerHTML = `<ion-icon name="pause-circle-sharp"></ion-icon>`;
    } else {
      player.pauseVideo();
      overlay.style.visibility = "hidden";
      musicSlider.style.visibility = "hidden";

      playOrPause.innerHTML = `<ion-icon name="play-circle"></ion-icon>`;
    }
  }
}

playOrPause.onclick = function () {
  isPlaying = !isPlaying;
  playPause();
};

// Mute/unmute toggle

muteOrUnmute.onclick = function () {
  isMuted = !isMuted;

  if (player) {
    if (isMuted) {
      player.mute();
      muteOrUnmute.innerHTML = `<ion-icon name="volume-mute" class="mb-[-6px]"></ion-icon>`;
    } else {
      player.unMute();
      muteOrUnmute.innerHTML = `<ion-icon name="volume-high" class="mb-[-6px]"></ion-icon>`;
    }
  }
};

// Loop toggle

loop.onclick = function () {
  isLooped = !isLooped;
  loop.style.color = isLooped ? "rgb(0 197 197)" : "#3b3b3b";
};

// Helper function to setup next or previous video player

// Highlight selected song

function selectedSongs() {
  const active = musicList.querySelector("ul li.activeSong");
  if (active) active.classList.remove("activeSong");

  const newActive = musicList.querySelector(`ul li:nth-child(${current + 1})`);
  if (newActive) newActive.classList.add("activeSong");
}

// Handle YouTube player state changes

function nextPreviousPlayer() {
  selectedSongs();
  document.title = `▶️ ${videos[current].title}`;
  boxPlayer();
  nowPlay();
}

function onPlayerStateChange(e) {
  if (e.data === YT.PlayerState.ENDED) {
    if (isLooped) {
      // Loop the current video
      player.loadVideoById(videos[current].videoId);
      nextPreviousPlayer();
      player.seekTo(0);
      player.playVideo();
    } else {
      // Move to the next video
      current = (current + 1) % videos.length;
      player.loadPlaylist([videos[current].videoId], current); // ✅ use loadVideoById instead of full playlist
      player.playVideo();
      nextPreviousPlayer();
    }
  }

  if (e.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    overlay.style.visibility = "hidden";
    musicSlider.style.visibility = "hidden";
    playOrPause.innerHTML = `<ion-icon name="play-circle"></ion-icon>`;
  }

  if (e.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    overlay.style.visibility = "visible";
    musicSlider.style.visibility = "visible";
    playOrPause.innerHTML = `<ion-icon name="pause-circle-sharp"></ion-icon>`;

    // ✅ Update duration when a new video starts
    duration = player.getDuration();

    // ✅ Keep current index synced (works with both playlists and single loads)
    // let idx = player.getPlaylistIndex();
    // if (idx !== -1 && idx !== undefined) {
    //   current = idx;
    // }

    nextPreviousPlayer();
  }
}

// Previous track button

previous.onclick = function () {
  // if (player && !isLooped) {
  //   player.previousVideo();
  // } else {
  //   alert("gkdf");
  // }
  if (isLooped) {
    // Loop the current video
    player.loadVideoById(videos[current].videoId);
    nextPreviousPlayer();
    player.seekTo(0);
    player.playVideo();
  } else {
    // Move to the next video
    current = (current - 1) % videos.length;
    player.loadPlaylist([videos[current].videoId], current); // ✅ use loadVideoById instead of full playlist
    player.playVideo();
    nextPreviousPlayer();
  }
};

// Next track button

next.onclick = function () {
  // if (player && !isLooped) {
  //   player.nextVideo();
  // } else {
  //   alert("gkdf");
  // }

  if (isLooped) {
    // Loop the current video
    player.loadVideoById(videos[current].videoId);
    nextPreviousPlayer();
    player.seekTo(0);
    player.playVideo();
  } else {
    // Move to the next video
    current = (current + 1) % videos.length;
    player.loadPlaylist([videos[current].videoId], current); // ✅ use loadVideoById instead of full playlist
    player.playVideo();
    nextPreviousPlayer();
  }
};

// Tabs of SideBar

let isClicked = true;

function initialSetup(btnBg1, btnColor1, btnBg2, btnColor2, menuHeaderText) {
  if (player && isPlaying === true) {
    player.pauseVideo();
    overlay.style.visibility = "hidden";
    musicSlider.style.visibility = "hidden";
  }

  checkFavorites();
  setTimeout(() => {
    message.style.display = videos.length === 0 ? "block" : "none";
  }, 50);
  LoadVideo();

  document.title = "mb Tech - Musify";
  playerSection.style.display = "none";
  nowPlayingSection.style.display = "none";
  menuHeader.innerHTML = `${menuHeaderText}`;
  allMusics.style.background = `${btnBg1}`;
  allMusics.style.color = `${btnColor1}`;
  favoriteMusics.style.background = `${btnBg2}`;
  favoriteMusics.style.color = `${btnColor2}`;
}

allMusics.onclick = function () {
  isClicked = !isClicked;

  if (isClicked) {
    videos = [...originalVideos];
    initialSetup(
      "#262626",
      "#fff",
      "#fff",
      "#000",
      `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`
    );
  }
};

favoriteMusics.onclick = function () {
  isClicked = !isClicked;

  if (isClicked === false) {
    videos = [...fav];
    initialSetup(
      "#fff",
      "#000",
      "#262626",
      "#fff",
      `<img src="./img/favorite.gif" class="w-[24px] mr-[7px]"/> Favorite`
    );
  }
};

// Scrolling Function

function handleScroll(scrollTop) {
  if (scrollTop > 100) {
    header.style.background = "#ffffffff";
    header.style.boxShadow =
      "0 5px 20px rgb(0 9 128 / 4%), 0 7px 18px rgb(0 9 128 / 5%)";
  } else {
    header.style.background = "none";
    header.style.boxShadow = "none";
  }
}

wrapper.addEventListener("scroll", function () {
  handleScroll(wrapper.scrollTop);
});

window.addEventListener("scroll", function () {
  handleScroll(window.scrollY);
});

// Menu open button
menu.onclick = function () {
  sideBar.classList.add("sideActive");
};

// Menu close button
closeMenu.onclick = function () {
  sideBar.classList.remove("sideActive");
};

// Recognition

let recognition;
let textOfSpeech;

let speakButtons = document.querySelectorAll(".speak");

speakButtons.forEach((button) => {
  button.onclick = function () {
    recognition = new webkitSpeechRecognition();

    recognition.lang = selectLang.value === "bn" ? "bn-BD" : "en-US";
    if (!recognition) {
      alert("Not Supported In Your Browser");
    }
    recognition.interimResults = true;

    speakingDiv.innerHTML = `
      <div>
        <div
          style="animation: animatedVoice 2s infinite"
          class="shadow-inner shadow-xl border border-cyan-500 rounded-full"
        >
          <img
            class="w-[100px] border border-cyan-500 shadow-inner shadow-xl rounded-full"
            src="./img/speak.png"
            alt=""
          />
        </div>
        <h1 class="mt-6 text-center">Listening...</h1>
      </div>
    `;

    recognition.onresult = (e) => {
      speakingText.innerHTML = e.results[0][0].transcript;
      textOfSpeech = e.results[0][0].transcript;
      speakAgainBtn.style.display = "none";
      search.style.display = "block";
      speakAgainBtn.style.display = "block";
    };

    recognition.onspeechend = () => {
      recognition.stop();
      speakingDiv.innerHTML = `
        <div>
          <div class="shadow-inner shadow-xl border rounded-full">
            <img
              class="w-[100px] border border shadow-inner shadow-xl rounded-full"
              src="./img/speakAgain.png"
              alt=""
            />
          </div>
          <h1 class="mt-6 text-center">Speak Again</h1>
        </div>
      `;
      speakAgainBtn.style.display = "block";
    };

    recognition.onend = () => {
      speakingDiv.innerHTML = `
        <div>
          <div class="shadow-inner shadow-xl border rounded-full">
            <img
              class="w-[100px] border border shadow-inner shadow-xl rounded-full"
              src="./img/speakAgain.png"
              alt=""
            />
          </div>
          <h1 class="mt-6 text-center">Speak Again</h1>
        </div>
      `;
      speakAgainBtn.style.display = "block";
    };

    modalOfSpeach.style.display = "flex";
    sideBar.style.display = "none";
    recognition.start();
    speakingText.innerHTML = "Your Text Will Show Here.";
    speakAgainBtn.style.display = "none";
    search.style.display = "none";
  };
});

function initialRecognitionSetup() {
  if (recognition) {
    recognition.stop();
    modalOfSpeach.style.display = "none";
    speakingText.innerHTML = "Your Text Will Show Here.";
    speakAgainBtn.style.display = "none";
    search.style.display = "none";
  }
  speakAgainBtn.style.display = "none";
  search.style.display = "none";
}

stopSpeking.onclick = function () {
  sideBar.style.display = "block";
  initialRecognitionSetup();
};

search.onclick = function () {
  sideBar.style.display = "block";

  initialRecognitionSetup();

  fetchFunction(textOfSpeech);
  searchBar.value = textOfSpeech;

  if (window.innerWidth <= 1070) {
    sideBar.classList.add("sideActive");
  } else {
    sideBar.classList.remove("sideActive");
  }

  videos = [...originalVideos];
  isClicked = true;
  initialSetup(
    "#262626",
    "#fff",
    "#fff",
    "#000",
    `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`
  );
};
