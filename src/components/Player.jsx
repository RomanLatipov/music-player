export default function Player({src}) {
    console.log(src);
    return(
        <audio id="audio">
		    <source src={src}></source> 
	    </audio>
    )
}