import 
	{ BLOCK_DRAG_START,
		BLOCK_DRAG_END } from '../constants';

const blocks = (state = [], action) => {
	const newBlocks = [];
	switch(action.type) {
		case BLOCK_DRAG_START:
			state.forEach((block, i) => {
				newBlocks[i] = {...block,
									isDrag:block.id === action.id ? true : false};
			});
			return newBlocks;
		case BLOCK_DRAG_END: 
			state.forEach((block, i) => {
				newBlocks[i] = {...block,
									isDrag:block.id === action.id ? false : false};
			});

			return newBlocks;
		default:
			return state;
	}
}

export default blocks;