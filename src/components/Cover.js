import coverVideo from "../assets/video-cover.mp4";
import './Cover.css'

export function Cover() {
    return (
        <div className="cover__container">
            <video className="cover__video" src={coverVideo} autoPlay muted loop ></video>
            <h1 className="cover__h1">El pollo que tanto esperabas</h1>
            <p className="cover__p">¡Finalmente ha llegado!</p>
        </div>
    )
}