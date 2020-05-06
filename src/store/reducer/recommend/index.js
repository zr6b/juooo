import recommed from '../../state/recommed'
export default function (state=recommed) {
    state = JSON.parse(JSON.stringify(state))
    return state
}