const anxietyRelief = {
    title: "Calm your anxiety",
    videoID: "zPyg4N7bcHM",
    imgUrl: "https://i.pinimg.com/originals/21/64/82/216482acc7b72fd454dff34c272cecf3.gif"
};

setTimeout(() => {document.querySelector(".musicInfo").innerText = 'robin\'s lofi station'}, 27000);


function opacitydown() {
    document.querySelector("#albArt").style.opacity = '50%'
}
function opacityup() {
    document.querySelector("#albArt").style.opacity = '100%'
}
function songChanger(videoidpara, songTitle, albumart) {
    document.querySelector('#video').src = "https://youtube.com/embed/" + videoidpara + "?autoplay=1&controls=0&showinfo=0&autohide=1";
    
    
    document.querySelector(".musicInfo").innerText = songTitle;
    document.querySelector("#albArt").src = albumart;
    document.querySelector("#albArt").style.opacity = '100%'
}
// function songStoper() {
//     document.querySelector('iframe').src = "https://youtube.com/embed/" + "0" + "?autoplay=1&controls=0&showinfo=0&autohide=1";
// }



