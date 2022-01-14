import { ActionTypes } from "./Types";

export const ShopRecucer = (storeData, action) => {

    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataTypes]: action.payload.dataTypes
            };
        default:
            return storeData || {};
    }
}