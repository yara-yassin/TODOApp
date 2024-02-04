// Router.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import CompletedTodosScreen from "../screens/CompletedTodosScreen";
import ToDoDetails from "../screens/ToDoDetails";
import { Ionicons } from "@expo/vector-icons";
import TODO from "../screens/ToDo";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ToDoDetails"
        component={ToDoDetails}
        options={{
          headerTitle: "Details",
        }}
      />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "#791dc9",
          labelStyle: { fontSize: 14 },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="TODO"
          component={TODO}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="progress-clock" color={color} size={size} />
            ),
            tabBarLabel: "In Progress",
            headerTitle: "In Progress TODOs",
          }}
        />
        <Tab.Screen
          name="CompletedTodosScreen"
          component={CompletedTodosScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="checkmark-done" color={color} size={size} />
            ),
            tabBarLabel: "Completed",
            headerTitle: "Completed TODOs",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
