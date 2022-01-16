import { GET_RESTAURANT, GET_SPECIFIC_RESTAURANT } from "./restaurant.type";

const initialState = {  // initial state -> whenever by default a store is created, we need to specify default state, i.e., what all things we mifht store in our particular state/reducer.
  restaurants: [], // Update restaurants array from the data we get from API requests from GET_RESTAURANT
  selectedRestaurant: {},
};

// action = {
//   type: "GET_RESTAURANT",
//   payload: [ ...restaurants ]
//}

const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESTAURANT: // Dependong on the action, perform the given set of code
      return {  // this object = initial state
        ...state,
        restaurants: action.payload,  // payload -> All the different restaurants (in this case) // Set the restaurants data in spreaded state to action.payload values
      };
    case GET_SPECIFIC_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default restaurantReducer;