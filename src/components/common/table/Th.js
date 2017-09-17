import React from 'react';
import { generate } from 'randomstring';

const Th = (props) => {
	return ( <th key={ generate(9) }>{props.data}</th>);
};

export default Th;