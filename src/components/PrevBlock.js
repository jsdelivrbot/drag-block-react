import React from 'react';

const PrevBlock = ({
	block,
	onDragStart,
	onDragEnd
}) => (
	<li data-id={block.id} 
		className="blocks-nav__item"
		onDragStart={onDragStart} 
		onDragEnd={onDragEnd} 
		draggable="true" 
		>
      <div className="block-line"></div>
  </li>
)

export default PrevBlock;