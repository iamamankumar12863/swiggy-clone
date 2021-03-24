import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'

const PopularCategory = (props) => {
    const [refreshing, setRefreshing] = useState(true)
    const navigation = useNavigation();
    const categories = useSelector((state) => state.categories);

   const data = categories.category
    // console.log(data)

    const styles = StyleSheet.create({
        container: {
            height: 100,
            width: 100,
            backgroundColor: '#FFF',
            borderRadius: 6,
            elevation: 5,
            margin: 5,
        },
        image: {
            height: 100,
            width: 100,
            borderRadius: 4,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    });

    const click = (data) => {
        console.log(data.id)
    }

    return (
        <View
            style={{
                width: '98%',
                // height: 140,
                backgroundColor: 'white',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 10,
                elevation: 1,
                borderRadius: 5,
                marginBottom:15,
            }}>
            <Text style={{ margin: 2, fontWeight: 'bold' }}>Categories</Text>
            <View style={{
                flexDirection:'row',
                flexWrap:'wrap',
                margin:5,
                // justifyContent:'flex-start',
                marginLeft:10
            }}>
                {
                    data.map((list) => (
                        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Products',{
                            name:list.name
                        })}>
                            <Image style={styles.image} source={{ uri: list.image }} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default PopularCategory

