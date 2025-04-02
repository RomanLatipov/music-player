export default function Song({title, songSetter, setSrcChange}) {
    return(<>
        <div style={{background: "white", width: "15vw"}}onClick={() => {
            songSetter([title]);
            setSrcChange(true);
        }}>{title}
        </div>
    </>)
}