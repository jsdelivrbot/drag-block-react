import React, { Component } from 'react';
import PrevList from '../containers/PrevList';
import DetailList from '../containers/DetailList';
import DragElement from '../containers/DragElement';

const App = () => {
	return (
		<div className="clearfix">
      <PrevList />
      <DetailList />
      <DragElement />
    </div>
	)
}

export default App;