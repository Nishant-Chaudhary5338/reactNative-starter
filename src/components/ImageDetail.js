import React from "react";
import { Image, Text, View } from "react-native";

const ImageDetail = ({title, imageSource }) => { 
    return (
        <View>
            <Image style={{height: 100, width: 100} } source={imageSource} />
            <Text>{title }</Text>
        </View>
    );
}

export default ImageDetail;