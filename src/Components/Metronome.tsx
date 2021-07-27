import React, { ChangeEvent, SyntheticEvent, useEffect } from "react";
import useStore from "../store";
import "../styles/metronome.css";
import Sound from "react-Sound"


type HandleBpmChange = (event: ChangeEvent<HTMLInputElement>) => void;
type HandlePlaybackToggle = (event: SyntheticEvent) => void;
const audio1 = new Sound("../Audio/click.mp3");
function Metronome() {

	let playing = useStore((state) => state.playing);
	let setPlaying = useStore((state) => state.setPlaying);
	let bpm = useStore((state) => state.bpm);
	let setBpm = useStore((state) => state.setBpm);

	
	// let audio2 = new Audio(click2)


	const handlePlaybackToggle: HandlePlaybackToggle = (event) => {
		setPlaying()
        audio1.play()
	};
	const handleBpmChange: HandleBpmChange = (event) => {
		setBpm(Number(event.target.value));
	};

	return (
		<div className="metronome">
			<audio>
				<source src="../Audio.click.mp3"></source>
			</audio>
			<div className="slider">
				<p>{bpm} BPM</p>
				<input
					onChange={handleBpmChange}
					type="range"
					min="60"
					max="240"
					name="bpm"
					value={bpm}
				/>
			</div>
            <button onClick={handlePlaybackToggle}>{playing ? "stop" : "start"}</button>
		</div>
	);
}

export default Metronome;
