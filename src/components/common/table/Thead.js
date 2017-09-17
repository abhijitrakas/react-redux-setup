import React from 'react';
import Row from './Row';
import { generate } from 'randomstring';

const Thead = (props) => {
	return (
		<thead><Row titles={props.titles} /></thead>
	);
};

export default Thead;