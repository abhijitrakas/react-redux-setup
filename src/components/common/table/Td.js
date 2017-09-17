import React from 'react';
import { generate } from 'randomstring';

const Td = (props) => {
	return <td key={ generate(12) }>{props.data}</td>
};

export default Td;