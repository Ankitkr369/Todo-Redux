 import * as types from'./actionTypes';

 const getTodosRequest=()=>{
    return{
        type:types.GET_TODOS_REQUEST
    }
 }
 const getTodosSuccess=()=>{
    return{
        type:types.GET_TODOS_SUCCESS
    }
 }
 const getTodosError=()=>{
    return{
        type:types.GET_TODOS_ERROR
    }
 }

 export{getTodosError,getTodosSuccess,getTodosRequest}
