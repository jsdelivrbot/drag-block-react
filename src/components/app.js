import React, { Component } from 'react';
import PrevList from '../containers/PrevList';
import DetailList from '../containers/DetailList';

const App = () => {
	return (
		<div className="clearfix">
      <PrevList />
      <DetailList />
    </div>
	)
}

export default App;