import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// const ROUTE = "https://countries-pi-deploy.herokuapp.com/"

export const slice = createSlice({
    name: "rootReducer",
    initialState: {
        // countries: [],
    },
    reducers: {
        // getAllCountries(state, action) {
        //     state.countries = action.payload;
        // },
    },
});

    // async actions

// export const getAllCountries = ()=> async(dispatch) => {
//     try {
//         var json = await axios.get(ROUTE +"/products/getAll")
//         dispatch(userSlice.actions.getAllProducts(json.data))

//     } catch (e) {
//         console.log(e)
//     }
// };

// export const { } = slice.actions;

export default slice.reducer;