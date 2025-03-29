import "./AudioPlayer.css"
import { useState } from "react";
export default function AudioPlayer({musicArray, srcChange, setSrcChange, isPlaying, setPlaying}) {
    if (srcChange === true) {
        loadSong(0);
        setSrcChange(false);
    }
    // const musicArray = ["Danger - 2241", "Adventure Club vs DallasK - Crash 2.0", "TheFatRat - Fly Away feat. Anjulie"];
    
    const [index, setIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState("0:00");
    const [endTime, setEndTime] = useState("0:00");
    const [slider, setSlider] = useState(0);
    const [volume, setVolume] = useState(50);
    const [volumeIcon, setVolumeIcon] = useState(`volume_down`);
    const [volumeMuted, setVolumeMuted] = useState(false);
    const [shuffle, setShuffle] = useState(false);

    function playSong() {
        // const audio = document.querySelector("#audio");
        if (isPlaying === false) {
            audio.play();
            setPlaying(true);
        }
        else {
            audio.pause();
            setPlaying(false);
        }
    }
    function switchTrack() {
        if (isPlaying === true) {
            audio.play();
        }
    }
    function loadSong(songId) {
        // const audio = document.querySelector("#audio");
        audio.src = `/songs/${musicArray[songId]}.mp3`;
	    audio.load();
        switchTrack();
    }
    function prevSong(songId) {
        setSlider(0);
        if (songId < 0) {
            songId = musicArray.length-1
        }
        setIndex(songId);
        loadSong(songId);
        switchTrack();
    }
    function nextSong(songId) {
        setSlider(0);
        if (shuffle) {
            songId = Math.floor(Math.random() * musicArray.length);
        }
        else {
            if(songId > musicArray.length-1) {
                songId = 0;
            }
        }
        setIndex(songId);
        loadSong(songId);
        switchTrack();
    }
    function setTime(output, input) {
        const minutes = Math.floor(input / 60);
        const seconds = Math.floor(input % 60);
        (seconds < 10) ? output(minutes + ":0" + seconds) : output(minutes + ":" + seconds);
    }
    function timeupdate() {
        const currentAudioTime = Math.floor(audio.currentTime);
	    // const timePercentge = (currentAudioTime / audio.duration) * 100 + "%";
        setTime(setCurrentTime, currentAudioTime);
        let time = audio.currentTime / audio.duration * 100;
        setSlider((isNaN(time)) ? 0 : time);
    }
    function customSlider(value) {
        setSlider(value);
        const val = (value / audio.duration) * 100 + "%";
        // const time = (isNaN(value)) ? 0 : audio.duration * (value/100);
        // progress.style.width = val;
        // thumb.style.left = val;
        
        setTime(setCurrentTime, value);
        audio.currentTime = audio.duration * (value / 100);
    }
    function customVolumeSlider(value) {
        audio.volume = value/100;
        (value > 50) ? setVolumeIcon(`volume_up`) : (value == 0) ? setVolumeIcon(`volume_off`) : setVolumeIcon(`volume_down`);            
    }

    return(<>
        <audio id="audio" onLoadedData={() => setTime(setEndTime, audio.duration)} onEnded={() => nextSong(index+1)} onTimeUpdate={() => timeupdate()}>
            <source src={`songs/${musicArray[0]}.mp3`}></source> 
        </audio>
    	<div className="player">
            <button onClick={() => prevSong(index-1)}>
                <span class="material-symbols-outlined">
                    fast_rewind
                </span>
            </button>
            <button onClick={() => {
                setPlaying((isPlaying) => !isPlaying);
                playSong();
            }}>
                <span class="material-symbols-outlined">
                    {(!isPlaying) ? `play_arrow` : `pause` }
                </span>
            </button>
            <button onClick={() => nextSong(index+1)}>
                <span class="material-symbols-outlined">
                    fast_forward
                </span>
            </button>
            <button onClick={() => setShuffle(!shuffle)}>
                <span class="material-symbols-outlined">
                    shuffle
                </span>
            </button>
            <small class="time">{currentTime}</small>
            <div id="slider">
                <input type="range" min="0" max="100" value={slider} onInput={event => customSlider(event.target.value)}></input>
            </div>
            <small class="fulltime">{endTime}</small>
            <button class="volume-icon" onClick={() => {
                setVolumeMuted(!volumeMuted);
                volumeMuted ? customVolumeSlider(volume) : customVolumeSlider(0);
            }}>
                <span class="material-symbols-outlined">
                    {volumeIcon}
                </span>
            </button>
            <div>
                <input type="range" min="0" max="100" value={volumeMuted ? 0 : volume} class="slider" onInput={event => {
                    customVolumeSlider(event.target.value);
                    setVolume(event.target.value);
                }}></input>
            </div>
        </div>
    </>)
}