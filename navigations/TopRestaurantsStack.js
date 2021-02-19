import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Top from "../screens/TopRestaurants";

const Stack = createStackNavigator();

export default function TopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="top"
        component={Top}
        options={{ title: "Top" }}
      />
      
    </Stack.Navigator>
  );
}
