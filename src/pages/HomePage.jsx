import React, { useEffect } from "react"; // Whenever you load the homepage, you want the action to be called(restaurant redux). It will show all the restaurants in the area. To do so, we use useEffect
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"; // Dispatch the action in Reducers

// redux actions
import { getRestaurant } from "../redux/reducers/restaurant/restaurant.action";

// components
import Delivery from "../components/Delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";

function HomePage() {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  return (
    <>
      <div className="my-5">
        {type === "delivery" && <Delivery />}
        {type === "dining" && <Dining />}
        {type === "night" && <NightLife />}
        {type === "nutri" && <Nutrition />}
      </div>
    </>
  );
}

export default HomePage;