import React from 'react';
import Thead from './Thead';
import Tbody from './Tbody';

const Table = (props) => {
	return (
		<table className={props.classes}>
			<Thead titles={props.titleList} />
			<Tbody data={props.dataSet} />
		</table>
	);
};

export default Table;