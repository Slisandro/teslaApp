import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "fixed",
    top: 50,
    zIndex: 100,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
    width: "100%",
    height: '6%',
    paddingHorizontal: 20,
  },
  logo: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: "contain",
  },
  image: {
    width: '100%',
    height: '100%'
  },
  pressable: {
    width: '25%',
    height: '100%',
  },
  item: {
    height: 40
  }
});

export default styles;
