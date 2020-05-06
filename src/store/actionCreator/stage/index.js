import stageType from '../../actionType/stage'
export  function  addStage(payload){
    console.log(payload,stageType.ADD_STAGE,99999)
    return{
        type:stageType.ADD_STAGE,
        payload
    }
}