import { Fragment } from "react";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/colors";
import { Coordinate } from "../types/types";



interface SnakeProps{
    snake: Coordinate[];
}


export default function Snake( { snake }: SnakeProps): JSX.Element{
    return(
        <></>
    );
}

const styles = StyleSheet.create({
    snake: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: Colors.primary,
        position: "absolute",
    }
})