import {ActionType} from '../action-type';
import {Action} from '../actions';

const initialState = {
    loading:false,
    error: null,
    data: []
};

interface RepositoriesState {
    loading:boolean;
    error: string | null;
    data: string[];
};


const reducer = (state:RepositoriesState = initialState, actoin:Action):RepositoriesState => {
    switch(actoin.type){
        case ActionType.SEARCH_REPOSIORIES:
        return {loading:true, error:null, data:[]};
        case ActionType.SEARCH_REPOSIORIES_SUCCESS:  
        return {loading:false,error:null, data: actoin.payload}; 
        case ActionType.SEARCH_REPOSIORIES_ERROR :
        return {loading:false,error:actoin.payload, data:[]}; 
        default:
        return state ;
    }

}; 
export default reducer;

