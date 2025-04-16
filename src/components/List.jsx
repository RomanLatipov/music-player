export default function List({id, name, handlePostToPlaylist, song}) {

    return(<>
        <button style={{width: "160px"}} onClick={()=> {
            handlePostToPlaylist(id, song);
        }}>{name}</button>
    </>)
}