import { StyleSheet, Dimensions } from "react-native";

const { height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    btn:{
        backgroundColor: "#aaffee",
        borderColor: "#aaaa00",
        borderWidth: 2,
        padding: width * 0.02,
        borderRadius: width * 0.02,
        marginTop: height * 0.02,
    },
})