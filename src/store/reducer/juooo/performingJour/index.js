import performingJourList from "../../../state/performingJour";
import juoooType from "../../../actionType/juooo"
export default function (state=performingJourList,{type,payload}) {
    // console.log(111)
    state = JSON.parse(JSON.stringify(state));
    if(type === juoooType.CHANGE_PERFORMING_JOUR_LIST){
        // console.log(1111,payload);
        state.performingJourList=payload
        // console.log(state)
    }
    
    return state;
}