const reducer = (oldstate,action) => {

    switch(action.type)
    {
        case "INCREMENT" : 
        return {
            ...oldstate, counter : oldstate.counter + action.payload
        }

        case "DECREMENT" :
            return {
                ...oldstate, counter : oldstate.counter - action.payload
            }

            default : 
            return oldstate
    }
}

export {reducer};