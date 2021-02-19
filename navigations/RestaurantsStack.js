import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Restaurants from "../screens/Restaurants";
import Favorites from "../screens/Favorites";
import Search from "../screens/Search";
import Account from "../screens/Account";
import TopRestaurants from "../screens/TopRestaurants";

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
