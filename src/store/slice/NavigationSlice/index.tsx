import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null
};

export const NavigationSlice = createSlice( {
    name: "TravelNavigation",
    initialState: initialState,
    reducers: {
        setOrigin: ( state, action ) => { state.origin = action.payload; },
        setDestination: ( state, action ) => { state.destination = action.payload; },
        setTravelTimeInformation: ( state, action ) => { state.travelTimeInformation = action.payload; },
    }
} );


export const selectOrigin = ( state:any ) => state.nav.origin;
export const selectDestination = ( state:any ) => state.nav.origin;
export const selectTravelTimeInformation = ( state:any ) => state.nav.origin;

export const { setOrigin, setDestination, setTravelTimeInformation } = NavigationSlice.actions;

export default NavigationSlice.reducer;