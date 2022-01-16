import React from "react";
import { Route } from "react-router-dom";

// Layout
import HomeLayout from "../layouts/Homepage.layouts";

function HomeLayoutHoc({ component: Component, ...rest }) {  // Spread the components props and store all the other props in 'rest'
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <HomeLayout>
            <Component {...props} />  
            {/* Basically we are passing children components in a component. */}
          </HomeLayout>
        )}
      />
    </>
  );
}

export default HomeLayoutHoc;