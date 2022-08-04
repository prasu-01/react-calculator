import { ACTIONS } from './App';

const OperationButton = (props) => {
    const {dispatch, operation} = props;
   return (
    <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: {operation} })}>
        {operation}
    </button>
   );
}

export default OperationButton;


