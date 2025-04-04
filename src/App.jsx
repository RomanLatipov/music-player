import './App.css';
import AudioPlayer from './components/AudioPlayer';
import PrimaryDisplay from './components/PrimaryDisplay';
import DisplayPlaylists from './components/DisplayPlaylists';
import RenderPlaylists from './components/RenderPlaylists';
import { useState } from 'react';

function App() {
  const [currentSongs, setCurrentSong] = useState([]);
  const [srcChange, setSrcChange] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [homeOrPlaylist, setHomeOrPlaylist] = useState(true);
  const [playlistId, setPlaylistId] = useState("");

  return (<>
    <div id="sidebar">
      <button onClick={() => setHomeOrPlaylist(true)}>Home</button>
      <br></br>
      {/* <button onClick={() => setHomeOrPlaylist(false)}>Playlists</button> */}
      <DisplayPlaylists setHomeOrPlaylist={setHomeOrPlaylist} setPlaylistId={setPlaylistId}/>
    </div>
    {/* <div id="header"></div> */}
    <div id="homeDisplay">
      {homeOrPlaylist 
        ? 
        <PrimaryDisplay songSetter={setCurrentSong} setSrcChange={setSrcChange}/> 
        : 
        <RenderPlaylists playlistId={playlistId} songSetter={setCurrentSong} setSrcChange={setSrcChange}/>
      }
    </div>
    <div id="bottom-bar">
      <AudioPlayer musicArray={currentSongs} srcChange={srcChange} setSrcChange={setSrcChange} isPlaying={isPlaying} setPlaying={setPlaying}/>
    </div>
  </>)
}

export default App
