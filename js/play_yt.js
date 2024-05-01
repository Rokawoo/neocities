(function () {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();

let player;

function onYouTubeIframeAPIReady() {
    const videoLink = document.getElementById('player').getAttribute('data-video-id');

    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: videoLink,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'enablejsapi': 1,
            'modestbranding': 1,
            'showinfo': 0,
            'rel': 0
        },
        events: {
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        window.location.href = document.getElementById('next-page-link').getAttribute('href');
    }
}
