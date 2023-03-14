import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


const CounterScreen =() => {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => {
        setCounter(counter + 1);
    }
    const descreaseCounter = () => {
        if(counter <= 0) {
            return;
        }
        setCounter(counter - 1);
    }
    return(
        <View>
            <Button onPress={increaseCounter} title = "Increase Count" />
            <Button onPress={descreaseCounter} title = "Decrease Count" />
            <Text style = {styles.text}>Current count is- {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: "center"
    }
})

export default CounterScreen;



/*

const reducer = (state, action) => {

}
*/

/*
const [state, dispatch] = useReducer(reducer, {counter: 0})


*/