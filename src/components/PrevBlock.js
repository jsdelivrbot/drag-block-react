import React from 'react';

const PrevBlock = ({
	block
}) => (
	<li data-id={block.id} draggable="true" className="blocks-nav__item">
      <div className="block-line"></div>
  </li>
)

export default PrevBlock;