import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Image,
    Text,
    TouchableOpacity
} from "react-native";

const data = [
    {
        id: 1, name: 'Fried Fish', image: 'https://i.ibb.co/8XVT0Wh/Untitled-design-12.png'
    },
    {
        id: 2, name: 'Fried Rice', image: 'https://i.ibb.co/KXTbMGv/Untitled-design-11.png'
    },
    {
        id: 3, name: 'Chicken Biryani', image: 'https://i.ibb.co/n6W5rxp/Untitled-design-10.png'
    },
    {
        id: 4, name: 'Burger King', image: 'https://i.ibb.co/LCxrcsz/Fresh-Vegetable-2.png'
    },
    {
        id: 5, name: 'Fresh Tomato', image: 'https://i.ibb.co/KD3sqpf/Fresh-Vegetable.png'
    },
    {
        id: 6, name: 'Fried Rice', image: 'https://i.ibb.co/72X3zYR/Fresh-Vegetable-1.png'
    }
]


const PopularCategory = (props) => {
    const [refreshing, setRefreshing] = useState(true)

    const styles = StyleSheet.create({
        container: {
            height: 100,
            width: 160,
            backgroundColor: '#FFF',
            borderRadius: 6,
            elevation: 2,
            margin: 5,

        },
        image: {
            height: 100,
            width: 160,
            borderRadius: 4,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    });

    const click = (data) => {
        console.log(data.index)
    }

    const renderItemComponent = (data) =>
        <TouchableOpacity style={styles.container} onPress={() => click(data)}>
            <Image style={styles.image} source={{ uri: data.item.image }} />
        </TouchableOpacity>


    return (
        <View
            style={{
                width: '98%',
                height: 140,
                backgroundColor: 'white',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 10,
                elevation:1,
                borderRadius:5,
            }}>
            <Text style={{ margin: 2, fontWeight: 'bold' }}>{props.name}</Text>
            <FlatList
                data={data}
                renderItem={item => renderItemComponent(item)}
                keyExtractor={(item, index) => item.id.toString()}
                refreshing={refreshing}
                horizontal={true}
            />
        </View>
    )
}

export default PopularCategory

