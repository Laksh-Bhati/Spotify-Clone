console.log('Welcome To Spotify')

//Initialising the variables
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songName = Array.from(document.getElementsByClassName('songName'));
let songs = [
    {songName: "Warriors Ft. Imagine Dragons", filePath: "Songs/1.mp3", coverPath: "Songs Cover Photo/1.jpg", songLength: "3:25"},
    {songName: "Till I Collapse | Eminem", filePath: "Songs/2.mp3", coverPath: "Songs Cover Photo/2.jpg", songLength: "4:57"},
    {songName: "Fight Back | NEFFEX", filePath: "Songs/3.mp3", coverPath: "Songs Cover Photo/3.jpg", songLength: "3:20"},
    {songName: "Rise | League of Legends", filePath: "Songs/4.mp3", coverPath: "Songs Cover Photo/4.jpg", songLength: "3:12"},
    {songName: "Remember The Name", filePath: "Songs/5.mp3", coverPath: "Songs Cover Photo/5.jpg", songLength: "3:50"},
    {songName: "Grateful | NEFFEX", filePath: "Songs/6.mp3", coverPath: "Songs Cover Photo/6.jpg", songLength: "3:02"},
    {songName: "Prassthanm Title Track", filePath: "Songs/7.mp3", coverPath: "Songs Cover Photo/7.jpg", songLength: "3:37"},
    {songName: "Aarambh | Piyush Mishra", filePath: "Songs/8.mp3", coverPath: "Songs Cover Photo/8.jpg", songLength: "4:56"},
    {songName: "Bolo Har Har Har | Shivaay", filePath: "Songs/9.mp3", coverPath: "Songs Cover Photo/9.jpg", songLength: "4:56"},
    {songName: "Play With Fire", filePath: "Songs/10.mp3", coverPath: "Songs Cover Photo/10.jpg", songLength: "4:56"},
]

songItems.forEach((Element, i)=>{
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    Element.getElementsByClassName("timestamp")[0].innerText = songs[i].songLength;
})

//Handling play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

// const makeAllPlays = ()=>{
//     eelement.classList.add('fa-pause-circle');
//     element.classList.remove('fa-play-circle');
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//     })
// }

Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // makeAllPlays();
        songIndex = parseInt(e.target.id);
        // e.target.classList.remove('fa-play-circle');
        // e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// let media = document.getElementById("songItem");
// const playPromise = media.play();
// if (playPromise !== null){
//     playPromise.catch(() => { media.play(); })
// }

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=7){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 1
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})