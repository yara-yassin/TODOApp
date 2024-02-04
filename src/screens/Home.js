import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleComplete } from "../Redux/slices/todoSlice";

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.todos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTask = () => {
    if (!title.trim() && !description.trim()) {
      alert("Title and Description cannot be empty!");
    } else if (!title.trim() && description.trim()) {
      alert("Title cannot be empty!");
    } else if (title.trim() && !description.trim()) {
      alert("Description cannot be empty!");
    } else {
      const existingTodo = tasks.find(
        (task) =>
          task.title.toLowerCase() === title.toLowerCase() &&
          task.description.toLowerCase() === description.toLowerCase()
      );
      if (existingTodo) {
        alert("Todo already exists!");
      } else {
        dispatch(addTodo({ title, description }));
        setTitle("");
        setDescription("");
      }
    }
  };

  const deleteTask = (taskId) => {
    dispatch(deleteTodo(taskId));
  };

  const checkComplete = (taskId) => {
    dispatch(toggleComplete(taskId));
  };

  const { height, width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>TODO App</Text>

      <TextInput
        onChangeText={(text) => setTitle(text)}
        placeholder="Title"
        value={title}
        style={styles.input}
      />

      <TextInput
        onChangeText={(text) => setDescription(text)}
        placeholder="Description"
        value={description}
        style={styles.input}
      />

      <TouchableOpacity onPress={addTask} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 16,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 0.5,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderColor: "#878787",
    marginTop: 10,
  },
  addButton: {
    width: "45%",
    height: 40,
    backgroundColor: "#791dc9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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
