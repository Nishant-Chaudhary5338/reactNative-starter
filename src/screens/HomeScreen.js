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
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
