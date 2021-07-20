import {ActionType} from '../action-type'

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSIORIES;
}
interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSIORIES_SUCCESS;
    payload:string[];
}
interface SearchRepositoriesErrorAction {
    type:ActionType.SEARCH_REPOSIORIES_ERROR ;
    payload:string ;
}
export type Action = SearchRepositoriesAction | SearchRepositoriesSuccessAction | SearchRepositoriesErrorAction