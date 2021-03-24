import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Image,
    Text,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'


const data = [
    {
        id: 1, name: 'Fried Fish', image: 'https://i.ibb.co/8sns9Jc/Untitled-design-9.png'
    },
    {
        id: 2, name: 'Fried Rice', image: 'https://i.ibb.co/TTyqgXz/Untitled-design-8.png'
    },
    {
        id: 3, name: 'Chicken Biryani', image: 'https://i.ibb.co/W6DsQ56/Untitled-design-7.png'
    },
    {
        id: 4, name: 'Burger King', image: 'https://i.ibb.co/cwyJ70s/Untitled-design-5.png'
    },
    {
        id: 5, name: 'Fresh Tomato', image: 'https://i.ibb.co/5nnSzVn/Untitled-design-6.png'
    },
    {
        id: 6, name: 'Fried Rice', image: 'https://i.ibb.co/TTyqgXz/Untitled-design-8.png'
    }
]


const ProductList = (props) => {
    const [refreshing, setRefreshing] = useState(true)
    

    const styles = StyleSheet.create({
        container: {
            height: 200,
            width: 140,
            backgroundColor: '#FFF',
            borderRadius: 6,
            elevation: 2,
            margin: 5,

        },
        image: {
            height: 100,
            width: 120,
            borderRadius: 4,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 5
        },
    });

    const click = (navigation) => {
        navigation.navigate('Products')
    }

    const renderItemComponent = (data) =>
        <TouchableOpacity style={styles.container}>
            <Image style={styles.image} source={{ uri: data.item.image }} />
            <Text style={{ marginLeft: 20, marginTop: 5, fontWeight: '800', fontSize: 16 }}>{data.item.name}</Text>
            <Text style={{ marginLeft: 20, marginTop: 5, fontWeight: '800', fontSize: 16 }}>RS. 500</Text>
            <TouchableOpacity
                style={{
                    width: '80%',
                    height: 30,
                    borderRadius: 5,
                    backgroundColor: 'green',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 5,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text
                    style={{
                        color: 'white',
                        elevation: 5
                    }}
                >Add Product</Text>
            </TouchableOpacity>
        </TouchableOpacity>


    return (
        <View
            style={{
                width: '98%',
                height: 240,
                backgroundColor: 'white',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 10,
                elevation:1,
                borderRadius:5
            }}>
            <Text style={{ margin: 2, fontWeight: 'bold' }}>{props.name}</Text>
            <FlatList
                data={data}
                renderItem={item => renderItemComponent(item)}
                keyExtractor={(item, index) => item.id.toString()}
                // ItemSeparatorComponent={ItemSeparator}
                refreshing={refreshing}
                horizontal={true}
            // onRefresh={handleRefresh}
            />
        </View>
    )
}

export default ProductList


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})
