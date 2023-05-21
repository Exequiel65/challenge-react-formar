import {combineReducers} from "redux";
import MyPokemonsReducer from './MyPokemonsRecucer';
export const rootReducer = combineReducers({
   pokedex : MyPokemonsReducer
})