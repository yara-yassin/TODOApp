import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ToDoDetails = ({ route }) => {
  const { details } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title: {details.title}</Text>
      <Text style={styles.description}>Description: {details.description}</Text>
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
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 17,
    color: "#555",
  },
});

export default ToDoDetails;
