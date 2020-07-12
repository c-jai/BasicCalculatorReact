import React from "react";
import Key from "./Key";
export default function NumberPad({ handleClick }) {
	return (
		<div id='numberPad'>
			<div>
				<Key value={1} handleClick={handleClick} />
				<Key value={2} handleClick={handleClick} />
				<Key value={3} handleClick={handleClick} />
			</div>
			<div>
				<Key value={4} handleClick={handleClick} />
				<Key value={5} handleClick={handleClick} />
				<Key value={6} handleClick={handleClick} />
			</div>
			<div>
				<Key value={7} handleClick={handleClick} />
				<Key value={8} handleClick={handleClick} />
				<Key value={9} handleClick={handleClick} />
			</div>
			<div>
				<Key value='.' handleClick={handleClick} />
				<Key value={0} handleClick={handleClick} />
				<Key value='del' handleClick={handleClick} />
			</div>
		</div>
	);
}
