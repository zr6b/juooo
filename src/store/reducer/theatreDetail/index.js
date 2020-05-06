import theatreDetailInit from '../../state/theatreDetail';
import theatreDetailType from '../../actionType/theatreDetail'
export default function (state=theatreDetailInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === theatreDetailType.CHANGE_LIST){
        state.list = payload
    }
    return state
}