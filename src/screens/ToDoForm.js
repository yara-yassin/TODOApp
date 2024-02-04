import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/slices/todoSlice";
import styles from "../Styles/styles";
export default function ToDoForm({ navigation }) {
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
  return (
    <>
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
    </>
  );
}
