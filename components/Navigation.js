import React from "react";
import { FiSettings } from "react-icons/fi";

function Navigation({ setOpenSetting }) {
	return (
		<nav className="pt-5 text-white flex justify-between w-11/12 mx-auto">
			<div className="flex items-center gap-1 cursor-pointer">
				<h1 className="text-3xl font-bold">FocusTime</h1>
			</div>
			<FiSettings
				className="text-2xl cursor-pointer "
				onClick={() => setOpenSetting((value) => !value)}
			/>
		</nav>
	);
}
export default React.memo(Navigation);
