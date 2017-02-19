import { 
		BLOCK_DRAG,
		BLOCK_DRAG_END
} from '../constants';

const dragElement = (state = {}, action) => {
	const { id, clientY, width } = action;
	switch(action.type) {
		case BLOCK_DRAG:
			return {
				id,
				top:clientY,
				width
			};
		case BLOCK_DRAG_END:
			return {};
		default:
			return state;
	}
}

export default dragElement;