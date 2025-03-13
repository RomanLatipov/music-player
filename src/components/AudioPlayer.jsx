import "./AudioPlayer.css"
import { useState } from "react";
export default function AudioPlayer() {
    
    const musicArray = ["Danger - 2241", "Adventure Club vs DallasK - Crash 2.0", "TheFatRat - Fly Away feat. Anjulie"];
    const [currentTime, setCurrentTime] = useState("0:00");
    const [endTime, setEndTime] = useState("0:00")
    
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
            setIndex(musicArray.length-1);
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
                    <input type="range" min="0" max="100" value="0"></input>
                </div>
                <small class="fulltime">{endTime}</small>
            </div>
	    </div>
	<audio id="audio" onLoadedData={() => {
        setTime(setEndTime, audio.duration);
		document.querySelector("#slider").setAttribute("max", audio.duartion);
    }}
    onEnded={() => nextSong(index+1)}
    onTimeUpdate={() => timeupdate()}
    >
		<source src={`${musicArray[0]}.mp3`}></source> 
	</audio>
    </>)
}