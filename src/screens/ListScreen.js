import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => { 
    const friends = [
        { name: "frnd #1", age: 20 },
        { name: "frnd #2", age: 22 },
        { name: "frnd #3", age: 24 },
        { name: "frnd #4", age: 26 },
        { name: "frnd #5", age: 28 },
        { name: "frnd #6", age: 30 },
        { name: "frnd #7", age: 32 },
        { name: "frnd #8", age: 34 },
        { name: "frnd #9", age: 36 },
        { name: "frnd #10", age: 38 },
        { name: "frnd #11", age: 40 }
    ]
    return (
        <View>
            <FlatList
                // for hiding scrollbar => showsVerticalScrollIndicator={false }
                keyExtractor={(friend)=> friend.name}
                data={friends}
                renderItem = {({item }) => { 
                    return <View style={{ fontSize: 20, marginVertical: 50, display: "flex" }}>
                        <Text>{item.name }</Text>
                        <Text>{item.age }</Text>
                    </View>
                }}
            />
        </View>
    )

    
}

export default ListScreen;