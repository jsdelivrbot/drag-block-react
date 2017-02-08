import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevBlock from '../components/PrevBlock';
import Logo from '../components/Logo';
import dispatchProps from '../actions';
import { BLOCK_DRAG_START } from '../constants';

class PrevList extends Component {
  render() {
    const { blocks, onDragStart, onDragEnd } = this.props;
    return(
        <div className="left">
            <Logo />
            <ul className="blocks-nav">
                {blocks.map(block => (
                <PrevBlock 
                    key={block.id} 
                    block={block} 
                    onDragStart={() =>  onDragStart(block.id)}
                    onDragEnd={() =>  onDragEnd(block.id)}
                    />
                ) )}
            </ul>
        </div>
      );
  }
};

const mapStateToProps = (state) => {
  return {
    blocks: state.blocks,
  }
}

export default connect(mapStateToProps, dispatchProps)(PrevList);

