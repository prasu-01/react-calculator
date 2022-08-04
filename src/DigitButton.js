import { ACTIONS } from './App';

const DigitButton = (props) => {
    const {dispatch, digit} = props;
        return (
         <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: {digit} })}>
             {digit}
         </button>
        );
 }


export default DigitButton;


