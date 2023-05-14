import {putuser} from './actions'
const initaluserdetails={
    username:"-",
    job:""
  };

const reducer=(state=initaluserdetails,action)=>{
    switch(action.type){
        case 'PUTUSER':
            return {...state,username:action.payload.username,job:action.payload.job};
        default:
            return state;
        
    }
}
export default reducer;