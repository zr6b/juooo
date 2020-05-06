import stage from '../../state/stage'
import stageType from '../../actionType/stage'
export default function (state=stage,{type,payload}) {
    // console.log(payload,type,55555)
    state = JSON.parse(JSON.stringify(state))
    if(type=stageType.ADD_STAGE)
        state.stageInfo=payload
    return state
}