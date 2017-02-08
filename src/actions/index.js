import { BLOCK_DRAG_START, BLOCK_DRAG_END } from '../constants';

const dispatchProps = (dispatch) => {
	return {
        onDragStart: (id) => {
            
            dispatch({
                type: BLOCK_DRAG_START,
                id
            })
        },
        onDragEnd: (id) => {
            dispatch({
                type: BLOCK_DRAG_END,
                id
            })
        }
    }
}

export default dispatchProps;