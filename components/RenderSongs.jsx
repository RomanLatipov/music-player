import Song from "./Song";
export default function RenderSongs({songsArray, songSetter, setSrcChange}) {
    const songs = songsArray.map(song => <Song key={song.id} title={song.title} songSetter={songSetter} setSrcChange={setSrcChange}/>)
    return(<>
        {songs}
    </>)
}