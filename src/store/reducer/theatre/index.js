import theatreInit from '../../state/theatre'
import theatreType from '../../actionType/theatre'
export default function (state=theatreInit,{type,payload}) {
    state = JSON.parse(JSON.stringify(state));
    if(type === theatreType.CHANGE_THEATRE_LIST){
        state.theatre_list = payload
    }
    return state
}