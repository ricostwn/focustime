import React from "react";
import { FiX } from "react-icons/fi";

function ModalSetting({
	pomodoroRef,
	shortBreakRef,
	longBreakRef,
	openSetting,
	setOpenSetting,
	updateTimeDefaultValue,
}) {
	const inputs = [
		{
			value: "Pomodoro",
			ref: pomodoroRef,
			defaultValue: 25,
		},
		{
			value: "Short Break",
			ref: shortBreakRef,
			defaultValue: 5,
		},
		{
			value: "Long Break",
			ref: longBreakRef,
			defaultValue: 10,
		},
	];

	return (
		<>
			<div
				className={`absolute h-full w-full left-0 top-0 bg-black bg-opacity-30 ${
					openSetting ? "" : "hidden"
				}`}
				onClick={() => setOpenSetting(false)}
			></div>
			<div
				className={`max-w-xl bg-white border-2 border-blue-500 absolute sm:w-96 w-11/12 left-1/2 top-1/2 p-5 rounded-xl shadow-lg ${
					openSetting ? "" : "hidden"
				}`}
				style={{
					transform: "translate(-50%,-50%)",
				}}
			>
				<div className="flex justify-between items-center mb-2">
					<h1 className="uppercase font-bold tracking-wider text-blue-600">
						Time setting
					</h1>
					<FiX
						className="text-2xl cursor-pointer text-blue-600 hover:text-red-500 transition"
						onClick={() => setOpenSetting(false)}
					/>
				</div>
				<div className="h-1 w-full bg-blue-200 mt-3 mb-5 rounded"></div>
				<div className="flex gap-5">
					{inputs.map((input, index) => {
						return (
							<div key={index}>
								<h1 className="text-blue-600 text-sm font-semibold mb-1">
									{input.value}
								</h1>
								<input
									defaultValue={input.defaultValue}
									type="number"
									className="w-full bg-blue-50 border border-blue-200 py-2 rounded outline-none text-center text-blue-700 font-bold focus:ring-2 focus:ring-blue-300"
									ref={input.ref}
								/>
							</div>
						);
					})}
				</div>
				<button
					className="bg-blue-500 uppercase w-full mt-5 text-white rounded py-2 font-bold shadow hover:bg-blue-600 transition"
					onClick={updateTimeDefaultValue}
				>
					Save
				</button>
			</div>
		</>
	);
}

export default React.memo(ModalSetting);
