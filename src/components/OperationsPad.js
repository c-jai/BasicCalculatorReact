import React from "react";
import Key from "./Key";
export default function OperationsPad({ handleClick }) {
	return (
		<div id='operationsPad'>
			<div>
				<Key value='+' handleClick={handleClick} />
			</div>
			<div>
				<Key value='-' handleClick={handleClick} />
			</div>
			<div>
				<Key value='/' handleClick={handleClick} />
			</div>
			<div>
				<Key value='*' handleClick={handleClick} />
			</div>
		</div>
	);
}
