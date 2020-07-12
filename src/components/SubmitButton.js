import React from "react";
import Key from "./Key";

export default function SubmitButton({ handleClick }) {
	return (
		<div id='submit-button'>
			<Key value='=' handleClick={handleClick} />
		</div>
	);
}
