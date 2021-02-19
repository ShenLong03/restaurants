import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Favorites from "../screens/Favorites";

const Stack = createStackNavigator();

export default function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="favorites"
        component={Favorites}
        options={{ title: "Favorites" }}
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
