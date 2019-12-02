const filmReducer = (prevState = {
    datalist: [],
}, action) => {
    let {type, payload} = action
    console.log(action)
    var newState = {...prevState }
    console.log(payload)
    switch (type) {
        case "dataIn":
            this.state.datalist = payload
            return newState
        default:
            return prevState
    }



}
export default filmReducer