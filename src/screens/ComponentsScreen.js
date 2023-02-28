import React from "react"
import { Text, StyleSheet, View } from "react-native"

const ComponentsScreen = () => { 
    const fname = "Nishant"
    return (
        <View>
             <Text style={styles.textStyle}>Getting started with React native</Text>
            <Text style={styles.fnameStyle }>Hi there my name is {fname }</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    fnameStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen;