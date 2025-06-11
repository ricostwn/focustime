import React from "react";

function About() {
	return (
		<div className="w-11/12 mx-auto mt-36 text-white p-5">
			<div>
				<h1 className="text-xl sm:text-2xl font-medium">
					<span className="border-b-4 border-red-400 ">What</span> is FocusTime?
				</h1>
				<p className="mt-5 tracking-wide opacity-70 text-lg">
					FocusTime is a customizable Pomodoro timer that works in your browser. 
					The goal of the app is to help you focus on whatever task you’re working on, 
					such as studying, writing, or coding.
				</p>
			</div>
			<div className="mt-5">
				<h1 className="text-xl sm:text-2xl font-medium">
					<span className="border-b-4 border-red-400 ">What</span> is Pomodoro Technique?
				</h1>
				<p className="mt-5 tracking-wide opacity-70 text-lg">
					The Pomodoro Technique is created by Francesco Cirillo for a more
					productive way to work and study. The technique uses a timer to break
					down work into intervals, traditionally 25 minutes in length,
					separated by short breaks. Each interval is known as a pomodoro, from
					the Italian word for 'tomato', after the tomato-shaped kitchen timer
					that Cirillo used as a university student.
				</p>
			</div>
			<div className="mt-5">
				<h1 className="text-xl sm:text-2xl font-medium">
					<span className="border-b-4 border-red-400 ">How</span> to do a pomodoro timer?
				</h1>
				<p className="mt-5 tracking-wide opacity-70 text-lg break-words">
					1. Type the task you want to work on in the task section.<br />
					2. Set a timer for 25 minutes (1 Pomodoro session).<br />
					3. Work on the task until the timer goes off.<br />
					4. Take a 5-minute break.<br />
					5. Repeat steps 2–4 four times.<br />
					6. After 4 Pomodoro sessions, take a long break (15–30 <br />
					   <span className="ml-6 inline-block">minutes</span>).
				</p>
			</div>
		</div>
	);
}

export default React.memo(About);
