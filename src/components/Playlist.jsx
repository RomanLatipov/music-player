export default function Playlist({playlist, setHomeOrPlaylist, setPlaylistId}) {

   const name = Object.keys(playlist)[1];
   const id = playlist.id;
   
    return(<>
        <h1 style={{background: "white"}} onClick={() => {
            setHomeOrPlaylist(false);
            setPlaylistId(id);
        }}>{name}</h1>
    </>)
}