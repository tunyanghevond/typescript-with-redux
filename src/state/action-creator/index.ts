 import axios from "axios";
 import {Dispatch} from 'redux';
 import { Action } from "../actions";
 import { ActionType } from "../action-type";

 export const searchRepositories = (term: string) => {
     return async (dispatch:Dispatch<Action>) => {
         dispatch({
            type: ActionType.SEARCH_REPOSIORIES
         })
         try {
             const {data} =  await axios.get('https://registry.npmjs.org/-/v1/search',{
                 params: {
                    text:term
                 }
             });
             const names = data.objects.map((result:any) => result.package.name )
            dispatch({
                type: ActionType.SEARCH_REPOSIORIES_SUCCESS,
                payload:names,
            })
              
         } catch (error) {
             dispatch({
                type:ActionType.SEARCH_REPOSIORIES_ERROR,
                payload:error.message,
             })
         }

     };
 };