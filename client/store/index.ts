// import {createStore } from "redux";
// import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
// import {reducer, RootState} from "./reducers";
//
// const makeStore:MakeStore<RootState> = (context:Context) => createStore(reducer);
//
// export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

// create a makeStore function
import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {createStore} from "redux";
import {reducer, RootState} from "./reducers";


const makeStore: MakeStore<RootState>
    = (context: Context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, {debug: true});

