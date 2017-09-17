import React from 'react';
import Tr from './Tr';
import { generate } from 'randomstring';

const Tbody = (props) => {
	return <tbody>{props.data.map((v, i) => <Tr key={generate(9)} data={v} />)}</tbody>
};

export default Tbody;