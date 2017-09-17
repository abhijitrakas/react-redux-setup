import React from 'react';
import Td from './Td';
import { generate } from 'randomstring';

const Tr = (props) => {
	let data = [];
	let count = 9999;
	const v = props.data;
	for (let i in v) {
		data[count] = v[i];
		count++;
	}
	return <tr key={ generate(10) }>{data.map((v, i) => <Td key={generate(11)} data={v} />)}</tr>;
};

export default Tr;