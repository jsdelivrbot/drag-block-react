import { 
    BLOCK_DRAG_START, 
    BLOCK_DRAG_END,
    BLOCK_DRAG
} from '../constants';

const dispatchProps = (dispatch) => {
	return {
        onDragStart: (id) => {
            
            dispatch({
                type: BLOCK_DRAG_START,
                id
            })
        },
        onDrag: ({id, clientY, width}) => {
            
            dispatch({
                type: BLOCK_DRAG,
                id,
                clientY,
                width
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
