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
  { category: "Rap Songs", icon: "./img/hipHop.gif" },
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
        `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`,
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
    img: "https://yt3.googleusercontent.com/XthcxR-kx7i1klhmf93n9mJvVpml6DRL_75iBcfghsaW99V8hTMAS0KIxijBFIE_aCWWZSfMug=s900-c-k-c0x00ffffff-no-rj",
    singer: "Habib Wahid",
    category: "Best Songs of Habib Wahid",
  },
  {
    img: "https://i.pinimg.com/736x/7b/7f/65/7b7f654e5179df025975027e1958577e.jpg",
    singer: "MC STAN",
    category: "Best Songs of MC STAN",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxsbI54ktokVplA0TyHavrhVOeXMXD7uihCH-ABRGX8C7yHGy-",
    singer: "Momina Mustehsan",
    category: "Best Songs of Momina Mustehsan",
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
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTHYJSmaCdcDDhvzqJ55_qaLqymevlOjUw_tvPWYeZnp29XguVx",
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
      `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`,
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
    title:
      "Long Distance Love | Coke Studio Bangla | Season 3 | Ankan X Afrin | Shuvendu",
    channelTitle: "Coke Studio Bangla",
    description:
      "In a world where voices cross oceans in seconds and connection is only a click away...",
    publishedAt: "2025-09-10T14:30:48Z",
    thumbnail: "https://i.ytimg.com/vi/sqJ2QhjBQaw/mqdefault.jpg",
    videoId: "sqJ2QhjBQaw",
  },

  {
    title: "Pal Pal Lyrics - Afusic prod. by AliSoomroMusic",
    channelTitle: "Vibe Bird",
    description:
      "Pal Pal Lyrics - Afusic prod. by AliSoomroMusic Credits: Song name: Pal Pal Album: Pal Pal Singer: Afusic Lyrics: Afusic Music: ...",
    publishedAt: "4/1/2025",
    thumbnail: "https://i.ytimg.com/vi/HdZK0uJyfqM/mqdefault.jpg",
    videoId: "HdZK0uJyfqM",
  },

  {
    title: "Srotoshinni | ENCORE | Lyrics | স্রোতস্বিনী",
    channelTitle: "ENCORE",
    description: "Serene and captivating Bengali lyrics.",
    publishedAt: "2024-04-15",
    thumbnail: "https://i.ytimg.com/vi/F0_jwKzCDC0/mqdefault.jpg",
    videoId: "F0_jwKzCDC0",
  },
  {
    title:
      "Patar Bashori | Coke Studio Bangla | Season 4 | Ishaan x Sunidhi | Adit Rahman",
    channelTitle: "Coke Studio Bangla",
    description:
      "Melodies travel farther than words ever can. Though they fade with time, their echoes remain. Panam Nagar is one such echo, ...",
    publishedAt: "2026-07-25",
    thumbnail: "https://i.ytimg.com/vi/YxJjFjP0crs/mqdefault.jpg",
    videoId: "YxJjFjP0crs",
  },
  {
    title: "Ariyan - Amay Kadao | Official Lyric Video",
    channelTitle: "Ariyan Chowdhury",
    description:
      '"Amay Kadao" OUT NOW EVERYWHERE (Spotify, Apple Music, SoundCloud, iTunes, etc.). Official debut lyric video.',
    publishedAt: "2023-01-12",
    thumbnail: "https://i.ytimg.com/vi/BvlX-BriY9M/mqdefault.jpg",
    videoId: "BvlX-BriY9M",
  },
  {
    title:
      "Tomar Obhishare (Lyrics) | Arifur Rahman Jony | তোমার অভিসারে | Lyrics Video",
    channelTitle: "Fahad Mahmud 3.0",
    description: "Lyrics video of Tomar Obhishare by Arifur Rahman Jony.",
    publishedAt: "2026-07-28",
    thumbnail: "https://i.ytimg.com/vi/z3CYgwLdFzo/mqdefault.jpg",
    videoId: "z3CYgwLdFzo",
  },
  {
    title:
      "Sawari si surat jo tanne tadpaye re thumak thumak matke (Lyrics) Udi Udi - Aneesh Poojari, Sarkar",
    channelTitle: "Good Vibes",
    description:
      "Good Vibes – Your go-to channel for uplifting and positive music! Enjoy lyric videos of feel-good songs across genres that spread ...",
    publishedAt: "2026-06-04",
    thumbnail: "https://i.ytimg.com/vi/45Xxav1jaJ0/mqdefault.jpg",
    videoId: "45Xxav1jaJ0",
  },

  {
    title: "MILLIONAIRE SONG",
    channelTitle: "T-Series",
    description: "Yo Yo Honey Singh full video song.",
    publishedAt: "2024-08-26T05:30:08Z",
    thumbnail: "https://i.ytimg.com/vi/XO8wew38VM8/mqdefault.jpg",
    videoId: "XO8wew38VM8",
  },
  {
    title: "Shaky",
    channelTitle: "Sanju Rathod SR",
    description: "Marathi pop anthem.",
    publishedAt: "2025-04-22T09:21:13Z",
    thumbnail: "https://i.ytimg.com/vi/sUf2PtEZris/mqdefault.jpg",
    videoId: "sUf2PtEZris",
  },
  {
    title: "Chuttamalle",
    channelTitle: "T-Series Telugu",
    description: "Devara movie song.",
    publishedAt: "2024-08-05T11:34:12Z",
    thumbnail: "https://i.ytimg.com/vi/5vsOv_bcnhs/mqdefault.jpg",
    videoId: "5vsOv_bcnhs",
  },
  {
    title: "BESOS - Shreya Ghoshal",
    channelTitle: "Shreya Ghoshal",
    description: "Lyrical video.",
    publishedAt: "2025-05-18",
    thumbnail: "https://i.ytimg.com/vi/RWIRKf-Z_qM/mqdefault.jpg",
    videoId: "RWIRKf-Z_qM",
  },
  {
    title: "Aasa Kooda",
    channelTitle: "Think Music India",
    description: "Lyrics video.",
    publishedAt: "2025-06-10T05:33:49Z",
    thumbnail: "https://i.ytimg.com/vi/a3Ue-LN5B9U/mqdefault.jpg",
    videoId: "a3Ue-LN5B9U",
  },
  {
    title: "Khoobsurat Lyrics - Stree 2",
    channelTitle: "Vibe Bird",
    description: "Lyrics video.",
    publishedAt: "2024-08-10",
    thumbnail: "https://i.ytimg.com/vi/spl0PfQDRjk/mqdefault.jpg",
    videoId: "spl0PfQDRjk",
  },
  {
    title: "PHURR Official Song",
    channelTitle: "Ishtar Music",
    description: "Party anthem of 2025.",
    publishedAt: "2025-11-14T05:30:06Z",
    thumbnail: "https://i.ytimg.com/vi/TzqIEE8bEdU/mqdefault.jpg",
    videoId: "TzqIEE8bEdU",
  },
  {
    title: "Aaj Ki Raat Lyrics - Stree 2",
    channelTitle: "Vibe Bird",
    description: "Lyrics video.",
    publishedAt: "2024-07-25T13:10:25Z",
    thumbnail: "https://i.ytimg.com/vi/G-FjwlwvK24/mqdefault.jpg",
    videoId: "G-FjwlwvK24",
  },
  {
    title: "MITRAZ - Muskurahat | Lyrical Video | Unied Studios",
    channelTitle: "Unied Studios",
    description:
      "MITRAZ - Muskurahat | Lyrical Video | Unied Studios Hit the to join the notification squad! Lets get this video to 100 likes !",
    publishedAt: "2022-06-28T08:24:24Z",
    thumbnail: "https://i.ytimg.com/vi/G068mtnQeyw/mqdefault.jpg",
    videoId: "G068mtnQeyw",
  },
  {
    title: "Aram Aata Hai Deedar Se Tere",
    channelTitle: "LOFI Music Vibes",
    description: "Lofi vibes track.",
    publishedAt: "2022-07-08T13:53:58Z",
    thumbnail: "https://i.ytimg.com/vi/uilRUXA4FS4/mqdefault.jpg",
    videoId: "uilRUXA4FS4",
  },

  {
    title: "Barbaad Song | Saiyaara",
    channelTitle: "YRF",
    description: "Emotional Bollywood song.",
    publishedAt: "2025-06-10",
    thumbnail: "https://i.ytimg.com/vi/0v5eHPfy5Lk/mqdefault.jpg",
    videoId: "0v5eHPfy5Lk",
  },
  {
    title: "Samjho Na",
    channelTitle: "Aditya Rikhari",
    description: "Indie Hindi song.",
    publishedAt: "2022-02-15",
    thumbnail: "https://i.ytimg.com/vi/JnsdxAZel-Y/mqdefault.jpg",
    videoId: "JnsdxAZel-Y",
  },

  {
    title:
      "Arz Kiya Hai - Anuv Jain X Lost Stories | (Lyrics) | Coke Studio Bharat",
    channelTitle: "THE LYRICIST",
    description:
      "Audio Credits: Song: Arz Kiya Hai Singer: Anuv Jain Written: Anuv Jain Composed: Anuv Jain Additional Production & Additional ...",
    publishedAt: "2025-08-27T11:58:09Z",
    thumbnail: "https://i.ytimg.com/vi/wgSTTkpVTmM/mqdefault.jpg",
    videoId: "wgSTTkpVTmM",
  },
  {
    title:
      "AADAT (Official Video): YO YO HONEY SINGH | AP DHILLON | VAANI KAPOOR | 51 GLORIOUS DAYS | BHUSHAN K",
    channelTitle: "T-Series",
    description:
      "Presenting The Official Video Song “Aadat” From The Year's Biggest Musical Phenomenon - “51 Glorious Days”, by Yo Yo Honey ...",
    publishedAt: "2025-12-22T05:30:08Z",
    thumbnail: "https://i.ytimg.com/vi/lcw4TDMBjZA/mqdefault.jpg",
    videoId: "lcw4TDMBjZA",
  },
  {
    title:
      "Ehsaas (Video) Faheem Abdullah | Duha Shah | Vaibhav Pani | Muzammil Ibrahim | Vinali Bhatnagar",
    channelTitle: "Universal Music India",
    description:
      "Fresh off the chart-busting success of Ishq, Faheem Abdullah is back with yet another heartfelt melody - “Ehsaas”. Presenting the ...",
    publishedAt: "2025-04-16T05:30:04Z",
    thumbnail: "https://i.ytimg.com/vi/C3njz8sf4aM/mqdefault.jpg",
    videoId: "C3njz8sf4aM",
  },
  {
    title:
      "Majboor | Sheheryar Rehan x Zoha Waseem | Music Video 2025 | Aap ka he kehna banta",
    channelTitle: "Sheheryar Rehan",
    description:
      "Aap Ka Hee Kehna Banta, Keh Do Na Spotify - https://tinyurl.com/spotifymajboor বাংলাদেশের সকল ...",
    publishedAt: "2025-09-12T10:30:54Z",
    thumbnail: "https://i.ytimg.com/vi/zaFGQEIcetM/mqdefault.jpg",
    videoId: "zaFGQEIcetM",
  },
  {
    title:
      "Finding Her - Kushagra & Vanshika Kashyap (Lyrics) | Lyrical Bam Hindi",
    channelTitle: "LYRICAL BAM HINDI",
    description:
      "Finding Her - Kushagra & Vanshika Kashyap (Lyrics) | Lyrical Bam Hindi Lyrics: Jaana Tu Aata Nahi Sapno Se Jata Nahi Mil Jaye ...",
    publishedAt: "2025-03-07T10:30:19Z",
    thumbnail: "https://i.ytimg.com/vi/jsqJ0v2tQw8/mqdefault.jpg",
    videoId: "jsqJ0v2tQw8",
  },
  {
    title: "Nahin Milta - Bayaan | Lyrics | Retro Harmonics",
    channelTitle: "Retro Harmonics",
    description:
      "Original song's link https://www.youtube.com/watch?v=umsrQSA2iOM Note: All credit goes to the original artist.",
    publishedAt: "2020-07-09T21:39:50Z",
    thumbnail: "https://i.ytimg.com/vi/8zCvgWeDqf4/mqdefault.jpg",
    videoId: "8zCvgWeDqf4",
  },

  {
    title:
      "Ke ab kuch hosh nahi hai Tu mujhko pila degi kya (Lyrics) Paaro - Aditya Rikhari",
    channelTitle: "Good Vibes",
    description:
      "Good Vibes – Your go-to channel for uplifting and positive music! Enjoy lyric videos of feel-good songs across genres that spread ...",
    publishedAt: "2025-04-08T04:38:05Z",
    thumbnail: "https://i.ytimg.com/vi/nUUnndYpneE/mqdefault.jpg",
    videoId: "nUUnndYpneE",
  },

  {
    title:
      "Dil Lagana Mana Tha (Official MV) Krish & Kishore Mondal | Kunaal V, Devv S | Sanam Johar Ashi Singh",
    channelTitle: "RDC Melodies",
    description:
      "Dil Lagana Mana Tha (Official MV) Krish & Kishore Mondal | Kunaal V, Devv S | Sanam Johar Ashi Singh About the ...",
    publishedAt: "2026-01-16T12:00:18Z",
    thumbnail: "https://i.ytimg.com/vi/55BS8QO5C9o/mqdefault.jpg",
    videoId: "55BS8QO5C9o",
  },

  {
    title:
      "Shorbonash | সর্বনাশ | Nobel Mahmud | Shuvo Hamim | Official Lyrics Video | Smoke Tube",
    channelTitle: "Smoke Tube",
    description:
      "Shorbonash | সর্বনাশ | Nobel Mahmud | Shuvo Hamim | Official Lyrics Video | Bangla Rap 2024 | Smoke Tube Thanks for ...",
    publishedAt: "2024-04-28T15:59:58Z",
    thumbnail: "https://i.ytimg.com/vi/7osi8mh-ad0/mqdefault.jpg",
    videoId: "7osi8mh-ad0",
  },

  {
    title: "AUR - Tu hai kahan (Lyrics)",
    channelTitle: "Vibe Music",
    description:
      "AUR - Tu hai kahan Stream/Download: https://spotify.link/Vx27hu2KUDb • AUR • • https://www.instagram.com/aurmusic_ (Lyrics): ...",
    publishedAt: "2023-10-18T14:04:42Z",
    thumbnail: "https://i.ytimg.com/vi/8GkPMG8IwBQ/mqdefault.jpg",
    videoId: "8GkPMG8IwBQ",
  },

  {
    title:
      "MERI ZINDAGI HAI TU - OST | BILAL ABBAS | HANIA AAMIR | ASIM AZHAR | SABRI SISTERS | ARY DIGITAL",
    channelTitle: "ARY Digital HD",
    description:
      "AUDIO: MERI ZINDAGI HAI TU - OST | BILAL ABBAS | HANIA AAMIR | ASIM AZHAR | SABRI SISTERS | ARY DIGITAL Watch all ...",
    publishedAt: "2025-11-18T11:17:13Z",
    thumbnail: "https://i.ytimg.com/vi/myJ7x029Ves/mqdefault.jpg",
    videoId: "myJ7x029Ves",
  },

  {
    title:
      "DIDHA - দ্বিধা | BORBAAD | SHAKIB KHAN | PRITOM HASAN | IDHIKA PAUL",
    channelTitle: "Pritom Hasan",
    description: "কখনো রোদ তুমি, কখনো জোৎস্না...",
    publishedAt: "2025-03-14T13:01:05Z",
    thumbnail: "https://i.ytimg.com/vi/jFHnz-B2Kas/mqdefault.jpg",
    videoId: "jFHnz-B2Kas",
  },
  {
    title: "Beni Khuley বেণী খুলে habib wahid New Video Song",
    channelTitle: "Ovijit Dey",
    description: "music #bangla #2023 #habibwahid Beni Khuley ...",
    publishedAt: "2023-04-05T06:24:45Z",
    thumbnail: "https://i.ytimg.com/vi/v6KFnWap6rY/mqdefault.jpg",
    videoId: "v6KFnWap6rY",
  },
  {
    title:
      "Shibu, Hasan Raheem & Umair - 10 E 10 (Official Lyrics Video) | #freshsound",
    channelTitle: "#freshsound",
    description:
      "Shibu, Hasan Raheem & Umair - 10 E 10 (Official Lyrics Video) | #freshsound Beat Produced by Umair & Shibu Written by Shibu ...",
    publishedAt: "2026-05-07T17:59:06Z",
    thumbnail: "https://i.ytimg.com/vi/ZiRRCrju_jE/mqdefault.jpg",
    videoId: "ZiRRCrju_jE",
  },
  {
    title: "Tanveer Evan - Akash (আকাশ) | Official Music Video",
    channelTitle: "Tanveer Evan.",
    description:
      "Akash - a feeling you can't hold, but can't let go of. In this deeply emotional journey, Tanveer Evan paints a picture of longing, ...",
    publishedAt: "2026-04-24T06:00:25Z",
    thumbnail: "https://i.ytimg.com/vi/VNA-Ujp-opI/mqdefault.jpg",
    videoId: "VNA-Ujp-opI",
  },
  {
    title:
      "Jaane Kyun (Lyrics) | Tanveer Evan | @TanveerEvan | Broken | Lyrics Video",
    channelTitle: "Band Lost Lyrics",
    description:
      "Jaane Kyun (Lyrics) | Tanveer Evan | Lyrics Video @BandLostLyrics @TanveerEvan ...",
    publishedAt: "2024-07-07T09:00:06Z",
    thumbnail: "https://i.ytimg.com/vi/BmjeIftRgzU/mqdefault.jpg",
    videoId: "BmjeIftRgzU",
  },
  {
    title:
      "Mon Bojhe na || Bangla new sad song || Tanveer Evan er song || It's FAHIM ꨄ World ツ",
    channelTitle: "It's FAHIM ꨄ World ツ",
    description:
      "bangla_lyrical_song #It'sFAHIMꨄWorldツ #mon_bojhena#tanveerevan #bangla_lofi_remix #bangla_song #bangla_newsong ...",
    publishedAt: "2021-09-22T03:59:46Z",
    thumbnail: "https://i.ytimg.com/vi/xgN-QkJNOMc/mqdefault.jpg",
    videoId: "xgN-QkJNOMc",
  },
  {
    title:
      "Avijog (Lyrics) | Tanveer Evan | অভিযোগ | Piran Khan | Official Lyrics Video",
    channelTitle: "Band Lost Lyrics",
    description:
      "Avijog (Lyrics) | Tanveer Evan | অভিযোগ | Piran Khan| Best Friend | Lyrics Video @BandLostLyrics @TanveerEvan ...",
    publishedAt: "2025-08-15T08:30:06Z",
    thumbnail: "https://i.ytimg.com/vi/9XrCeDlrgNI/mqdefault.jpg",
    videoId: "9XrCeDlrgNI",
  },
  {
    title:
      "Sheesha (Official Music Video) | Mitta Ror ft. Swara Verma | Sorab Bedi | Niharika Tiwari",
    channelTitle: "Sony Music India",
    description:
      "The internet has spoken and we have listened. The real owners of the song have all assembled together! Watch Sorab Bedi and ...",
    publishedAt: "2026-03-19T04:30:07Z",
    thumbnail: "https://i.ytimg.com/vi/aRNfSqsgrgE/mqdefault.jpg",
    videoId: "aRNfSqsgrgE",
  },

  {
    title: "Keh de - Banjaare I (Official Video)",
    channelTitle: "MindvsHeart Music",
    description:
      "Singer name : Ankhit Shivam Back vocal : Manika Siddiqui Music : Raag Priyom Distributed by MindvsHeart Music through ...",
    publishedAt: "2026-04-12T15:30:15Z",
    thumbnail: "https://i.ytimg.com/vi/WX2uG8TkrGg/mqdefault.jpg",
    videoId: "WX2uG8TkrGg",
  },
  {
    title:
      "JALA JALA | জ্বালা জ্বালা | PRINCE VIDEO SONG| SHAKIB KHAN | TASNIA FARIN |RUNA LAILA & PRITOM HASAN",
    channelTitle: "Pritom Hasan",
    description:
      "Turn up the heat this Eid with the electrifying song 'Jala Jala' from the upcoming Bangla film Prince! ✨ A high-energy item track ...",
    publishedAt: "2026-03-20T17:00:05Z",
    thumbnail: "https://i.ytimg.com/vi/yxz4FQCtXgA/mqdefault.jpg",
    videoId: "yxz4FQCtXgA",
  },
  {
    title: "Saahel - Baarish Mein Phir (Official Music Video)",
    channelTitle: "Saahel",
    description:
      "For inquiries - saahellmusic@gmail.com Instagram - @saahellmusic Stream 'Baarish Mein Phir' Here ...",
    publishedAt: "2025-08-12T06:30:32Z",
    thumbnail: "https://i.ytimg.com/vi/BOT2xL1-p6Q/mqdefault.jpg",
    videoId: "BOT2xL1-p6Q",
  },
  {
    title: 'GURU RANDHAWA - "AZUL" MV',
    channelTitle: "Guru Randhawa",
    description:
      "Official Video for AZUL perfomed by Guru Randhawa and Anshika Pandey Song - AZUL Singer - Guru Randhawa Lyrics - Guru ...",
    publishedAt: "2025-08-06T05:30:04Z",
    thumbnail: "https://i.ytimg.com/vi/vB0V3iCSzQw/mqdefault.jpg",
    videoId: "vB0V3iCSzQw",
  },
  {
    title:
      "Ishqa Ve - Zeeshan Ali | Yuvraj Tung | Seerat Mast | Sandeep Aulakh | Latest Punjabi Songs 2025",
    channelTitle: "OpenMic Studios",
    description:
      "A soulful, heart-wrenching ballad that captures the beauty of falling in love and the quiet sorrow of being torn apart by life's cruel ...",
    publishedAt: "2025-08-20T01:30:11Z",
    thumbnail: "https://i.ytimg.com/vi/j18MRhEfmPk/mqdefault.jpg",
    videoId: "j18MRhEfmPk",
  },
  {
    title:
      "Klanto Shorir | ক্লান্ত শরীর | Shamiul Shezan | New Bangla Song 2024 | Official Lyric Video",
    channelTitle: "Shamiul Shezan",
    description:
      'Shamiul Shezan Presents New bangla sad Song 2024 "Klanto Shorir (ক্লান্ত শরীর)" . Hope You all love it.',
    publishedAt: "2024-07-30T13:16:40Z",
    thumbnail: "https://i.ytimg.com/vi/m_UygJMlY4g/mqdefault.jpg",
    videoId: "m_UygJMlY4g",
  },
  {
    title: "Anuv Jain - Husn (Lyrics)",
    channelTitle: "THE LYRICIST",
    description:
      "Audio Credits: Song - Husn Singer - Anuv Jain Music production - Angad Bahra, PUNA Recorded, Mixed and Mastered - Angad ...",
    publishedAt: "2023-12-02T07:10:00Z",
    thumbnail: "https://i.ytimg.com/vi/tzSXjwkFnVc/mqdefault.jpg",
    videoId: "tzSXjwkFnVc",
  },

  {
    title:
      "Arijit Singh, White Noise Collectives, Amitabh Bhattacharya - Sitaare (Lyric Video)",
    channelTitle: "SonyMusicIndiaVEVO",
    description:
      "Sitaare Sitaare, Mile hain Sitaare! ⭐ Some stories are meant to be – celebrating one of those stories frozen in time, 'Sitaare' is ...",
    publishedAt: "2026-01-08T06:30:34Z",
    thumbnail: "https://i.ytimg.com/vi/cpDyLJkhg0I/mqdefault.jpg",
    videoId: "cpDyLJkhg0I",
  },
  {
    title:
      "Oyshee ft. Black Zang - ‘Noakhailla Maiya’ | নোয়াখাইল্লা মাইয়া | Official Music Video",
    channelTitle: "Oyshee",
    description:
      'Oyshee presents the new song, "Noakhailla Maiya". Lyrics by Oyshee & Black Zang. Artists: Oyshee ft. Black Zang. Directed by ...',
    publishedAt: "2026-05-25T13:00:30Z",
    thumbnail: "https://i.ytimg.com/vi/IqMYoiKbOPo/mqdefault.jpg",
    videoId: "IqMYoiKbOPo",
  },
  {
    title:
      "Ban Ja Tu Official Video | Charan Preet x Badshah ft Ahsii | One for your playlist and drives",
    channelTitle: "Badshah",
    description:
      "Ban Ja Tu by Charan & Badshah ft. Ahsii is here to set new trends. A track made for your playlists, late-night drives & party vibes.",
    publishedAt: "2026-05-25T05:30:12Z",
    thumbnail: "https://i.ytimg.com/vi/mCKbvedLakE/mqdefault.jpg",
    videoId: "mCKbvedLakE",
  },
  {
    title: "ISHQ - Faheem Abdullah, Rauhan Malik (Lyrics) | #trending",
    channelTitle: "Axjuu",
    description:
      "Lyrics - Main aa likkhoon tu aa jaaye Main baith likkhoon tu aa baithe Mere shaane par sar rakhe tu Main neend kahoon tu so ...",
    publishedAt: "2024-08-01T11:30:19Z",
    thumbnail: "https://i.ytimg.com/vi/gKD1AhmpOoU/mqdefault.jpg",
    videoId: "gKD1AhmpOoU",
  },
  {
    title:
      "CHAND MAMA - চাঁদ মামা | BORBAAD | SHAKIB KHAN | PRITOM HASAN | NUSRAT JAHAN | DOLA RAHMAN",
    channelTitle: "Pritom Hasan",
    description:
      "Presenting the most awaited SONG OF THE YEAR 'CHAND MAMA - চাঁদ মামা' Lyrics, Composition & Music: Pritom ...",
    publishedAt: "2025-03-28T13:49:57Z",
    thumbnail: "https://i.ytimg.com/vi/qznaQ8dJC2s/mqdefault.jpg",
    videoId: "qznaQ8dJC2s",
  },
];
originalVideos.sort(() => Math.random() - 0.5);

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
      bottomPlay.classList.add("z-[99]");
      bottomPlay.classList.remove("z-10");

      selectedSongs();

      playerSection.style.display = nowPlayingSection.style.display = "block";
      document.title = item.title;

      if (player) player.destroy();
      boxPlayer();
      nowPlay();
      createPlayer(videos[current].videoId, loopMode);

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

  previous.style.color = current === 0 ? "#35404eb0" : "#35404e";

  playBox.innerHTML = `
  <span class="relative">

  <img class="w-[80px] h-[50px] rounded-md shadow-xl" src="${
    videos[current].thumbnail
  }" alt="">

                  <div
                    id="loaderWrapper"
                    style="background: rgb(0 0 0 / 65%)"
                    class="flex justify-center items-center w-full h-full absolute top-0 rounded-md"
                  >
                    <span id="loader"></span>
                  </div>
                </span>

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
        100,
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
        100,
      );

      videos = [...originalVideos];
      isClicked = true;
      initialSetup(
        "#262626",
        "#fff",
        "#fff",
        "#000",
        `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`,
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

let loopMode = "off";

function createPlayer(videoId, loopType = "off") {
  const videoIds = videos.map((v) => v.videoId);
  let vars = { playlist: videoIds.join(",") };

  if (loopType === "off") vars = { loop: 1, playlist: videoIds.join(",") };
  else if (loopType === "on") vars = { loop: 1, playlist: videoId };

  if (player) player.destroy();

  player = new YT.Player("player", {
    videoId: videoId,
    playerVars: vars,

    events: {
      onReady: () => {
        duration = player.getDuration();
        playPause();
        nextPreviousPlayer();
        // ✅ Load full playlist initially
        player.loadPlaylist(videoIds, current);

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
    bottomPlay.classList.add("z-[99]");
    bottomPlay.classList.remove("z-10");
    videos = [...originalVideos];
    isClicked = true;
    initialSetup(
      "#262626",
      "#fff",
      "#fff",
      "#000",
      `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`,
    );
  }
};

searchBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (searchBar.value !== "") {
      fetchFunction(searchBar.value);
      musicList.scrollTo(0, 0);
      bottomPlay.classList.add("z-[99]");
      bottomPlay.classList.remove("z-10");
      videos = [...originalVideos];
      isClicked = true;
      initialSetup(
        "#262626",
        "#fff",
        "#fff",
        "#000",
        `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`,
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

  Nowsong.innerHTML = `${videos[current].title}`;
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
    `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`,
  );
};

// Initial setup for all musics view

videos = [...originalVideos];

initialSetup(
  "#262626",
  "#fff",
  "#fff",
  "#000",
  `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`,
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
  if (loopMode === "off") {
    loopMode = "on";
    loop.style.color = "rgb(0 197 197)";
  } else {
    loopMode = "off";
    loop.style.color = "#3b3b3b";
  }
  createPlayer(videos[current].videoId, loopMode);
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
    if (loopMode === "on") {
      // ✅ Keep the same current video
      player.loadVideoById(videos[current].videoId);
      player.playVideo();
    } else if (loopMode === "off") {
      player.nextVideo();
    } else {
      player.nextVideo();
    }
  }

  if (e.data === YT.PlayerState.PLAYING) {
    isPlaying = true;
    overlay.style.visibility = "visible";
    musicSlider.style.visibility = "visible";
    playOrPause.innerHTML = `<ion-icon name="pause-circle-sharp"></ion-icon>`;
    duration = player.getDuration();

    // ✅ Sync index only if NOT in loop single
    if (loopMode !== "on") {
      let idx = player.getPlaylistIndex();
      if (idx !== -1 && idx !== undefined) {
        current = idx;
      }
    }

    nextPreviousPlayer();
  }

  if (e.data === YT.PlayerState.PAUSED) {
    isPlaying = false;
    overlay.style.visibility = "hidden";
    musicSlider.style.visibility = "hidden";
    playOrPause.innerHTML = `<ion-icon name="play-circle"></ion-icon>`;
  }
  if (e.data === YT.PlayerState.BUFFERING) {
    loaderWrapper.style.visibility = "visible";
    overlay.style.visibility = "hidden";
  }
}

// ======= PREVIOUS =======
previous.onclick = function () {
  if (loopMode === "single") {
    player.loadVideoById(videos[current].videoId);
    player.playVideo();
  } else {
    player.previousVideo();
  }
};

// ======= NEXT =======
next.onclick = function () {
  player.nextVideo();
};

// Tabs of SideBar

let isClicked = true;

function initialSetup(btnBg1, btnColor1, btnBg2, btnColor2, menuHeaderText) {
  if (player && isPlaying === true) {
    player.pauseVideo();
    overlay.style.visibility = "hidden";
    musicSlider.style.visibility = "hidden";
  }
  musicList.scrollTo(0, 0);
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
      `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`,
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
      `<img src="./img/favorite.gif" class="w-[24px] mr-[7px]"/> Favorite`,
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
  bottomPlay.classList.remove("z-[99]");
  bottomPlay.classList.add("z-10");
};

// Menu close button
closeMenu.onclick = function () {
  sideBar.classList.remove("sideActive");
  bottomPlay.classList.add("z-[99]");
  bottomPlay.classList.remove("z-10");
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
    `<img class="w-[24px] mr-[7px]" src="./img/music.gif" /> All Musics`,
  );
};
let currentLyrics = null;
let typingTimer = null;

/* ---------- VIEW TOGGLE ---------- */
function showLyricsView() {
  document.querySelector(".lyricsSearchResults").style.display = "none";
  document.getElementById("searchView").classList.add("hidden");
  document.getElementById("lyricsView").classList.remove("hidden");
}

function showSearchView() {
  document.querySelector(".lyricsSearchResults").style.display = "none";
  document.getElementById("lyricsView").classList.add("hidden");
  document.getElementById("searchView").classList.remove("hidden");
}

/* ---------- SEARCH INPUT ---------- */
document.getElementById("searchLyricsBar").addEventListener("input", (e) => {
  clearTimeout(typingTimer);
  const query = e.target.value.trim();
  const list = document.querySelector(".lyricsSearchResults");

  if (!query) {
    list.innerHTML = "";
    list.style.display = "none";
    return;
  }

  list.style.display = "block";
  list.innerHTML = `
    <li class="p-3 mt-12 text-gray-400 text-center">
      <ion-icon name="sync-outline" class="animate-spin"></ion-icon><br>
      Loading...
    </li>
  `;

  typingTimer = setTimeout(() => searchSongs(query), 500);
});

/* ---------- SEARCH API ---------- */
async function searchSongs(query) {
  const list = document.querySelector(".lyricsSearchResults");

  try {
    const res = await fetch(
      `https://lrclib.net/api/search?track_name=${encodeURIComponent(query)}`,
    );
    const data = await res.json();

    list.innerHTML = "";

    if (!Array.isArray(data) || data.length === 0) {
      list.innerHTML = `<li class="p-3 mt-12 text-gray-400 text-center">No result found</li>`;
      return;
    }

    data.forEach((song) => {
      const li = document.createElement("li");
      li.className =
        "p-3 cursor-pointer hover:bg-gray-100 flex justify-between items-center";

      li.innerHTML = `
        <span>${song.trackName} - ${song.artistName}</span>
        <ion-icon name="chevron-forward-sharp"></ion-icon>
      `;

      li.onclick = () => {
        // set lyrics image
        const lyrImg = document.getElementById("lyrImg");
        lyrImg.innerHTML = `
    <img
      class="
         w-[180px] h-[100px]
         md:w-[220px] md:h-[180px]
         rounded-md shadow-md
         object-cover"
      src="https://lyrics.lyricfind.com/SongPlaceHolder.svg"
      alt="Lyrics Cover"
    />
  `;

        // fetch lyrics
        fetchLyrics(song);
      };

      list.appendChild(li);
    });
  } catch {
    list.innerHTML = `<li class="p-3 text-red-400 text-center">Failed to load</li>`;
  }
}

/* ---------- CHART SONGS ARRAY ---------- */
const chartSongs = [
  {
    id: "8245591",
    song: "Khola Janala",
    artists: "Tahsin Ahmed, Ahmed Shakib",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUppCToUrxo91agZeO1W7joytQRkn3U2j6w&s",
  },
  {
    id: "21935191",
    song: "Pal Pal",
    artists: "Afusic and Ali Soomro Music",
    img: "https://i.scdn.co/image/ab67616d0000b27385c5968be0d0d9c545241124",
  },

  {
    id: "22123983",
    song: "Shaky",
    artists: "Sanju Rathod And G-SPXRK",
    img: "https://source.boomplaymusic.com/group10/M00/06/30/4b234bb9b4b34eb3863d884715b8f20eH3000W3000_320_320.jpg",
  },

  {
    id: "22530723",
    song: "Saiyaara",
    artists: "Tanishk Bagchi, Faheem Abdullah",
    img: "https://upload.wikimedia.org/wikipedia/en/4/40/Saiyaara_title_track.png",
  },
  {
    id: "23913530",
    song: "Sahiba",
    artists: "Aditya Rikhari",
    img: "https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/MKPDBlBrKo/size_m.jpg",
  },
  {
    id: "23594560",
    song: "Kobitar Gaan",
    artists: "Hasan Joy",
    img: "https://i.scdn.co/image/ab67616d00001e023ad4fc61cbf1d6ba1228b9dc",
  },
];

/* ---------- RENDER CHART ---------- */
const chartList = document.getElementById("chartList");

chartSongs.forEach((item, index) => {
  const li = document.createElement("li");

  li.className =
    "bg-gray-50 m-2 md:flex items-center gap-3 p-3 border border-gray-200 shadow-sm rounded-md cursor-pointer text-xs text-center md:text-left hover:bg-gray-100";

  li.innerHTML = `
    <img src="${item.img}"
      class="w-[44px] h-[44px] border border-gray-400 shadow rounded mb-2 md:mb-0 mx-auto md:mx-0" />
    <div>
      <h1>${item.song}</h1>
      <p class="text-gray-400 mt-1 text-[9px] sm:text-xs">${item.artists}</p>
    </div>
  `;

  li.onclick = () => handleChartSelect(index);
  chartList.appendChild(li);
});

/* ---------- CHART CLICK ---------- */
function handleChartSelect(index) {
  const item = chartSongs[index];
  if (!item) return;

  fetch(`https://lrclib.net/api/get/${item.id}`)
    .then((res) => res.json())
    .then((data) => {
      const lines = data?.plainLyrics
        ? data.plainLyrics.split("\n").filter(Boolean)
        : ["Lyrics not available"];

      currentLyrics = {
        title: item.song,
        artist: item.artists,
        lines,
      };
      let lyrImg = document.getElementById("lyrImg");
      lyrImg.innerHTML = `<img
                      class="
         w-[100px] h-[100px]8         md:w-[220px] md:h-[180px]
         rounded-md shadow-md
         object-cover"
                      src=${item.img}
                      alt=""
                    />`;
      renderLyrics();
      showLyricsView();
    })
    .catch(() => alert("Lyrics not available"));
}

/* ---------- FETCH SEARCH LYRICS ---------- */
async function fetchLyrics(song) {
  try {
    const res = await fetch(`https://lrclib.net/api/get/${song.id}`);
    const data = await res.json();

    const lines = data?.plainLyrics
      ? data.plainLyrics.split("\n").filter(Boolean)
      : ["Lyrics not available"];

    currentLyrics = {
      title: song.trackName,
      artist: song.artistName,
      lines,
    };

    renderLyrics();
    showLyricsView();
  } catch {
    alert("Lyrics not available");
  }
}

/* ---------- RENDER LYRICS ---------- */
function renderLyrics() {
  const box = document.getElementById("lyricsBox");
  const song = document.getElementById("song");
  const artists = document.getElementById("artists");

  song.textContent = currentLyrics.title;
  artists.textContent = ` Artists : ${currentLyrics.artist}`;

  box.innerHTML = `
    <h2 class="font-semibold mb-1">${currentLyrics.title}</h2>
    <p class="text-xs text-gray-500">${currentLyrics.artist}</p>
    <hr class="mt-4 mb-6 text-gray-200" />
  `;

  currentLyrics.lines.forEach((line, i) => {
    const p = document.createElement("p");
    p.className = "text-sm text-gray-600";
    p.textContent = line;
    p.style.marginBottom = (i + 1) % 4 === 0 ? "18px" : "6px";
    box.appendChild(p);
  });

  box.innerHTML += `
    <hr class="mt-6 text-gray-200" />
    <p class="text-xs text-gray-400 mt-2">Lyrics provided by LRCLIB</p>
  `;
}

/* ---------- DOWNLOAD ---------- */
function downloadLyrics() {
  html2canvas(document.getElementById("lyricsBox")).then((canvas) => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = currentLyrics.title + ".png";
    link.click();
  });
}
