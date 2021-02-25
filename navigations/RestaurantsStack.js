import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Restaurants from "../screens/Restaurants";

const Stack = createStackNavigator();

export default function RestaurantsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{ title: "Restaurantes" }}
      />
      {/* <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ title: "Favoritos" }}
      />
      <Stack.Screen
        name="top-restaurants"
        component={TopRestaurants}
        options={{ title: "Top" }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{ title: "Buscar" }}
      />
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta" }}
      /> */}
    </Stack.Navigator>
  );
}
