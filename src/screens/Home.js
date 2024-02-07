import React from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, complete } from "../Redux/slices/todoSlice";
import styles from "../Styles/styles";
import ToDoForm from "./ToDoForm";

export default function Home({ navigation }) {
  const dispatch = useDispatch();


  const deleteTask = (taskId) => {
    dispatch(deleteTodo(taskId));
  };

  const checkComplete = (taskId) => {
    dispatch(complete(taskId));
  };
  

  const { width } = useWindowDimensions();

  const tasks = useSelector((state) => state.todo.todos);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODO App</Text>

      <ToDoForm />

      <FlatList
        style={styles.taskList}
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ToDoDetails", {
                  details: item,
                });
              }}
              style={{ flex: 1 }}
            >
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Ionicons name="trash-bin" size={24} color="#791dc9" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ paddingLeft: width * 0.05 }}
              onPress={() => checkComplete(item.id)}
            >
              <Ionicons
                name={item.completed ? "checkbox" : "square-outline"}
                size={24}
                color="#791dc9"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
