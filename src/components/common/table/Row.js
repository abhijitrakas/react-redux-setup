import React from 'react';
import Th from './Th';
import { generate } from 'randomstring';

const Row = (props) => {
	let data = [];
	let count = 999;
	const v = props.titles;
	for (let i in v) {
		data[count] = v[i];
		count++;
	}
	return <tr key={ generate(7) }>{data.map((title, i) => <Th key={ generate(8) } data={title} />)}</tr>;
};

export default Row;