import React from "react";

type actionType = {
    type: string
}

export type stateType = {
    collapsed: boolean
}


export const reducers = (state: stateType , action: actionType ): stateType => {
    switch (action.type){
        case "TOGGLE-COLLAPSED":
            return {
                ...state,
                collapsed: !state.collapsed
            }
    }
    return state
}

