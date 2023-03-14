import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const TextScreen = () => {
    const [text, setText] = useState("");
    const [password, setPassword] = useState("")
    
  return (
    <View>
      
      <TextInput 
      value = {text}
      onChangeText = {newValue => setText(newValue)}
      autoCorrect = {false}
      style = {styles.input} />
      <Text >{text}</Text>
      <TextInput 
      value = {password}
      onChangeText = { newValue => setPassword(newValue)}
      autoCorrect = {false}
      style = {styles.input} />
      {password.length < 5 ? <Text>password is less than 5 words</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "blue",
        borderWidth: 2
    }
})

export default TextScreen