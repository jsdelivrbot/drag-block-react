import { 
		BLOCK_DRAG_START,
		BLOCK_DRAG,
		BLOCK_DRAG_END,
		APP_LOADED
} from '../constants';

const blocks = (state = [], action) => {
	const newBlocks = [];
	switch(action.type) {
		case APP_LOADED:
			state.forEach((block, i) => {
				newBlocks[i] = {
					...block,
					top: action.blocks.filter(b => b.id == block.id ? b.top : false)[0].top};
			});

			return newBlocks;
		case BLOCK_DRAG_START:
			state.forEach((block, i) => {
				newBlocks[i] = {
					...block,
					isDrag:block.id === action.id ? true : false};
			});
			return newBlocks;
		case BLOCK_DRAG:
			console.log(action);
			return state;
		case BLOCK_DRAG_END: 
			state.forEach((block, i) => {
				newBlocks[i] = {
					...block,
					isDrag:block.id === action.id ? false : false};
			});

			return newBlocks;
		default:
			return state;
	}
}

export default blocks;