import hotShowList from "../../../state/hotShow";
import juoooType from "../../../actionType/juooo"
export default function (state=hotShowList,{type,payload}) {
    // console.log(111)
    state = JSON.parse(JSON.stringify(state));
    if(type === juoooType.CHANGE_HOTSHOW_LIST){
        // console.log(1111,payload);
        state.hotShowList=payload
        // console.log(state)
    }
    
    return state;
}