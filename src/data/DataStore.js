import { createStore } from "redux";
import { ShopRecucer } from "./ShopReducer";

export const SportsStoreDataStore = createStore(ShopRecucer);