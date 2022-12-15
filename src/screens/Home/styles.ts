import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  button: {
    marginTop: 16,
    width: "50%",
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center",
  },
  cepCard: {
    backgroundColor: "#2A2634",
    width: "100%",
    height: 200,
    borderRadius: 5,
    padding: 16,
    marginTop: 16,
  },
  cepCardTitle: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cepCardText: {
    color: "#FFF",
    fontSize: 16,
  },
});
