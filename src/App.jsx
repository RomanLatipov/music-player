import './App.css'
import AudioPlayer from './components/AudioPlayer'
import Main from './components/Main'
import { useState } from 'react'

function App() {
  const [currentSongs, setCurrentSong] = useState([]);
  const [srcChange, setSrcChange] = useState(false);
  const [isPlaying, setPlaying] = useState(false);

  return (
    <>
    <div id="sidebar"></div>
    <div id="header"> </div>
    <div id="main">
      <Main songSetter={setCurrentSong} setSrcChange={setSrcChange}/>
    </div>
    <div id="bottom-bar">
      <AudioPlayer musicArray={currentSongs} srcChange={srcChange} setSrcChange={setSrcChange} isPlaying={isPlaying} setPlaying={setPlaying}/>
    </div>
    </>
  )
}

export default App
