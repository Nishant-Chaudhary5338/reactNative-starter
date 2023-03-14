import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello worlds HomeScreen</Text>
      <Button
        onPress={()=> navigation.navigate("Components")}
        title="Go to components demo"
      />
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List demo</Text>
      </TouchableOpacity>
      <Button
        onPress={()=> navigation.navigate("Image")}
        title="Go to image screen"
      />
      <Button 
      title="Go to Counter Screen"
      onPress={()=> navigation.navigate("Counter")}
      />
      <Button 
      title = "Go to Button Screen"
      onPress = {()=> navigation.navigate("Color")}
      />
      <Button 
      title = "Go to Square Screen"
      onPress = {()=> navigation.navigate("Square")}
      />
      <Button 
      title = "Go to Text Screen"
      onPress = {()=> navigation.navigate("Text")}
      />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
