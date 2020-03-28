import SHOP_DATA from "./shop.data";
import { UserActionTypes } from "../user/user.types";

const INITIAL_STATE = {
    collections : SHOP_DATA 
}

const shopReducer = (state = INITIAL_STATE, action) => { 
    switch (UserActionTypes.type) { 
        default:
            return state;
    }
}

export default shopReducer