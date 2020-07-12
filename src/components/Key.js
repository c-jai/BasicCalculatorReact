import React from "react";

export default function Key({ value, handleClick }) {
	return <button onClick={() => handleClick(value)}>{value}</button>;
}
