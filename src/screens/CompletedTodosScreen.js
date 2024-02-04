import React from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { toggleComplete, deleteTodo } from "../Redux/slices/todoSlice";

const CompletedTodosScreen = () => {
  const dispatch = useDispatch();
  const completedTodos = useSelector((state) =>
    state.todo.todos.filter((todo) => todo.completed)
  );
  const { height, width } = useWindowDimensions();

  const handleDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  const handleToggleComplete = (todoId) => {
    dispatch(toggleComplete(todoId));
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.taskList}
        data={completedTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity
              onPress={() => {
                // Handle navigation or other actions if needed
              }}
              style={{ flex: 1 }}
            >
              <Text style={styles.taskTitle}>{item.title}</Text>
              <Text>{item.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Ionicons name="trash-bin" size={24} color="#791dc9" />
            </TouchableOpacity>

            <TouchableOpacity
              style={{ paddingLeft: width * 0.05 }}
              onPress={() => handleToggleComplete(item.id)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  taskList: {
    marginTop: 16,
    width: "100%",
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    padding: 10,
    borderColor: "#878787",
    borderWidth: 0.6,
    borderRadius: 12,
  },
  taskTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
});

export default CompletedTodosScreen;
