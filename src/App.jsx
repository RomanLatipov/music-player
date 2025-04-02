import './App.css';
import AudioPlayer from './components/AudioPlayer';
import PrimaryDisplay from './components/PrimaryDisplay';
import Playlist from './components/Playlist';
import TempComp from './components/TempComp';
import { useState } from 'react';

function App() {
  const [currentSongs, setCurrentSong] = useState([]);
  const [srcChange, setSrcChange] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [homeOrPlaylist, setHomeOrPlaylist] = useState(true);

  return (
    <>
    <div id="sidebar">
      <button onClick={() => setHomeOrPlaylist(true)}>Home</button>
      <br></br>
      <button onClick={() => setHomeOrPlaylist(false)}>Playlists</button>
      <Playlist />
    </div>
    {/* <div id="header"></div> */}
    <div id="homeDisplay">
      {homeOrPlaylist ? <PrimaryDisplay songSetter={setCurrentSong} setSrcChange={setSrcChange}/> : <TempComp />}
      
    </div>
    <div id="bottom-bar">
      <AudioPlayer musicArray={currentSongs} srcChange={srcChange} setSrcChange={setSrcChange} isPlaying={isPlaying} setPlaying={setPlaying}/>
    </div>
    </>
  )
}

export default App
