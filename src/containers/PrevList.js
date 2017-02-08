import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrevBlock from '../components/PrevBlock';
import Logo from '../components/Logo';

class PrevList extends Component {
  render() {
    const { blocks } = this.props;
    return(
        <div className="left">
            <Logo />
            <ul className="blocks-nav">
                {blocks.map(block => <PrevBlock key={block.id} block={block} /> )}
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

export default connect(mapStateToProps)(PrevList);