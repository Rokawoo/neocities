document.addEventListener("DOMContentLoaded", function () {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://www.scmplayer.net/script.js";

  var config = {
    skin: 'https://rokawoo.neocities.org/css/music_player.css',
    volume: 35,
    autoplay: false,
    shuffle: false,
    repeat: 1,
    placement: 'bottom',
    showplaylist: false,
    playlist: [
      { title: 'Thousands - Dream Isle', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/Thousands_-_Dream_Isle_128_kbps.mp3'},
      { title: 'Loran - Ever Lane', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/Ever_Lane.mp3'},
      { title: 'LOVE IS ORANGE MEGIDDO MIX - Orange Lounge', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/LOVE_IS_ORANGE_MEGIDDO_MIX_-_Orange_Lounge.mp3'},
      { title: 'spellcasting - happy face when i think about how wonderful it all is!', url: 'https://files.catbox.moe/4elh5v.mp3'},
      { title: 'WOCADO - It\'s a great day I\'m feeling good', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/Its_a_great_day_Im_feeling_good_-_Motivational_Video_by_WOCADO.mp3'},
      { title: 'OTOMEROID - Vivinos ( English Cover FT: Webemez )', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/En.Gudanglagu456.cc_OTOMEROID_-_Vivinos__English_Cover_FT__Webemez_.mp3'},
      { title: 'GEZEBELLE GABURGABLY - Still Dreaming', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/Still_Dreaming.mp3'},
      { title: 'Elan Noon - Could It Be ☆ sped up', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/Elan_Noon_-_Could_It_Be__sped_up.mp3'},
      { title: 'Reverse 1999 - ReReReRegulus', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/ReReReRegulus.mp3'},
      { title: 'Will Wood - That\'s Enough, Let\'s Get You Home', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/Will_Wood_-_Lyrics__Thats_Enough_Lets_Get_You_Home.mp3'},
      { title: 'tallyhall - You & Me', url: 'https://www.cs.drexel.edu/~ays36/Media/Audio/Personal_Site/You__Me.mp3'},
    ]
  };

  script.setAttribute("data-config", JSON.stringify(config));
  document.body.appendChild(script);
});
