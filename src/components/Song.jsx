export default function Song({title, songSetter, setSrcChange}) {
    return(<>
        <h1 onClick={() => {
            songSetter([title]);
            setSrcChange(true);
        }}>{title}</h1>
    </>)
}