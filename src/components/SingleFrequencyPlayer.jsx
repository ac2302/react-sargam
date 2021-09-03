import React, { useState } from "react";

function SingleFrequencyPlayer() {
	const [f, setF] = useState(244);
    const [duration, setDuration] = useState(2.5);

	return (
		<div>
			<h3>{f}</h3>
			<input
				type="range"
				min="20"
				max="20000"
				defaultValue="440"
				onChange={(e) => setF(e.target.value)}
			/>

			<h3>{duration}</h3>
			<input
				type="range"
				min="0"
				max="5"
				defaultValue={duration}
				onChange={(e) => setDuration(e.target.value)}
			/>

			<button
				onClick={() => {
					var context = new (window.AudioContext ||
						window.webkitAudioContext)();
					var osc = context.createOscillator(); // instantiate an oscillator
					osc.type = "sine"; // this is the default - also square, sawtooth, triangle
					osc.frequency.value = f; // Hz
					osc.connect(context.destination); // connect it to the destination
					osc.start(); // start the oscillator
					osc.stop(context.currentTime + duration); // stop 2 seconds after the current time
				}}
			>
				play
			</button>
		</div>
	);
}

export default SingleFrequencyPlayer;
