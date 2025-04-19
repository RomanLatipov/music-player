import './App.css';
import AudioPlayer from './components/AudioPlayer';
import PrimaryDisplay from './components/PrimaryDisplay';
import DisplayPlaylists from './components/DisplayPlaylists';
import RenderPlaylists from './components/RenderPlaylists';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0);
  const [currentSongs, setCurrentSong] = useState([]);
  const [srcChange, setSrcChange] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [homeOrPlaylist, setHomeOrPlaylist] = useState(true);
  const [playlistId, setPlaylistId] = useState("");

  return (<>
    <div id="sidebar">
      <button onClick={() => setHomeOrPlaylist(true)}>Home</button>
      <br></br>
      <DisplayPlaylists setHomeOrPlaylist={setHomeOrPlaylist} setPlaylistId={setPlaylistId}/>
    </div>
    <div id="homeDisplay">
      {homeOrPlaylist 
        ? 
        <PrimaryDisplay songSetter={setCurrentSong} setSrcChange={setSrcChange} setIndex={setIndex} setPlaying={setPlaying}/> 
        : 
        <RenderPlaylists playlistId={playlistId} currentSongs={currentSongs} songSetter={setCurrentSong} setSrcChange={setSrcChange} setIndex={setIndex} setPlaying={setPlaying}/>
      }
    </div>
    <div id="bottom-bar">
      <AudioPlayer musicArray={currentSongs} srcChange={srcChange} setSrcChange={setSrcChange} isPlaying={isPlaying} setPlaying={setPlaying} index={index} setIndex={setIndex}/>
    </div>
  </>)
}

export default App
