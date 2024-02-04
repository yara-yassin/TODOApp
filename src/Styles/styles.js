import { StyleSheet } from "react-native";
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
export default styles;
