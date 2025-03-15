import "./AudioPlayer.css"
import { useState } from "react";
export default function AudioPlayer() {
    const musicArray = ["Danger - 2241", "Adventure Club vs DallasK - Crash 2.0", "TheFatRat - Fly Away feat. Anjulie"];
    const [currentTime, setCurrentTime] = useState("0:00");
    const [endTime, setEndTime] = useState("0:00");
    const [slider, setSlider] = useState(0);
    const [volume, setVolume] = useState(50);
    const [volumeIcon, setVolumeIcon] = useState(`volume_down`);
    
    const [isPlaying, setPlaying] = useState(false);
    const [index, setIndex] = useState(0);
    // const [src, setSrc] = useState(`../public/${musicArray[index]}.mp3`);

    function playSong() {
        const audio = document.querySelector("#audio");
        if(isPlaying === false) {
            audio.play();
            setPlaying(true);
        }
        else {
            audio.pause();
            setPlaying(false);
        }
    }
    function switchTrack() {
        if(isPlaying === true) {
            audio.play();
        }
    }
    function loadSong(songId) {
        const audio = document.querySelector("#audio");
        audio.src = `../${musicArray[songId]}.mp3`;
	    audio.load();
    }
    function prevSong(songId) {
        if(songId < 0) {
            songId = musicArray.length-1
        }
        setIndex(songId);
        loadSong(songId);
        switchTrack();
    }
    function nextSong(songId) {
        if(songId > musicArray.length-1) {
            songId = 0;
        }
        setIndex(songId);
        loadSong(songId);
        switchTrack();
    }
    function setTime(output, input) {
        const minutes = Math.floor(input / 60);
        const seconds = Math.floor(input % 60);
        if (seconds < 10) {
            output(minutes + ":0" + seconds);
        }
        else {
            output(minutes + ":" + seconds);
        }
    }
    function timeupdate() {
        const currentAudioTime = Math.floor(audio.currentTime);
	    // const timePercentge = (currentAudioTime / audio.duration) * 100 + "%";
        setTime(setCurrentTime, currentAudioTime);
    }
    function customSlider(value) {
        setSlider(value);
        const val = (value / audio.duration) * 100 + "%";
        // const time = (isNaN(audio.duration)) ? 0 : audio.duration * (value/100);
        // progress.style.width = val;
        // thumb.style.left = val;
        
        setTime(setCurrentTime, value);
        audio.currentTime = audio.duration * (value/100);
    }
    function customVolumeSlider(value) {
        setVolume(value);
        audio.volume = value/100;
    }

    return(<>
    	<div className="player">
            <div>
                <button onClick={() => {
                    prevSong(index-1);
                }}>
                    <span class="material-symbols-outlined">
                        fast_rewind
                    </span>
                </button>
                <button onClick={() => {
                    setPlaying((isPlaying) => !isPlaying);
                    playSong();
                }}>
                    <span class="material-symbols-outlined">
                        play_arrow
                    </span>
                </button>
                <button onClick={() => {
                    nextSong(index+1);
                }}>
                    <span class="material-symbols-outlined">
                        fast_forward
                    </span>
                </button>
            </div>
            <div id="inline">
                <button>
                    <span class="material-symbols-outlined">
                        shuffle
                    </span>
                </button>
                <small class="time">{currentTime}</small>
                <div id="slider">
                    <input type="range" min="0" max="100" value={slider} onInput={event => customSlider(event.target.value)}></input>
                </div>
                <small class="fulltime">{endTime}</small>
            </div>
            <div class="volume-slider">
                <div class="volume-icon">
                    <span class="material-symbols-outlined">
                        {volumeIcon}
                    </span>
                </div>

                <div>
                    <input type="range" min="0" max="100" value={volume} class="slider" onInput={event => customVolumeSlider(event.target.value)}></input>
                </div>
		    </div>
	    </div>
	
        <audio id="audio" onLoadedData={() => {
            setTime(setEndTime, audio.duration);
        }}
        onEnded={() => {
            nextSong(index+1);
            setSlider(0);
        }}
        onTimeUpdate={() => {
            timeupdate();
            setSlider((audio.currentTime / audio.duration) * 100);
        }}>
            <source src={`${musicArray[0]}.mp3`}></source> 
        </audio>
    </>)
}