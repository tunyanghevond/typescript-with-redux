import { useDispatch } from "react-redux";
import { actionCreatores } from "../state";
import { bindActionCreators } from "redux";

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(actionCreatores,dispatch)
}
