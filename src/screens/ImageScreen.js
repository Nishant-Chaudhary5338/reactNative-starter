import React from "react";
import { Text, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => { 
    return (
        <View>
            <ImageDetail title = "Forest" imageSource={require('../images/beach.jpg')}/>
            <ImageDetail title = "Mountain" imageSource={require('../../assets/mountain.jpg')} />
            <ImageDetail  title = "Beach" imageSource={require('../../assets/forest.jpg')}/>
        </View>
    );
}

export default ImageScreen;