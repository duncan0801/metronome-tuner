import React from "react";
import "../styles/metronome.css";

function Metronome() {
	let bpm;
	let playing = false;
	return (
		<div className="metronome">
            <div className="slider">
                <p>{bpm} BPM</p>
                <input type="range" min="60" max="240" />
            </div>
            <button>{playing ? "stop" : "start"}</button>
        </div>
    )
}

export default Metronome;
