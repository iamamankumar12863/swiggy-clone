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
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from 'react-redux'
import { addToFavorite, getCategory, toggleButton } from "../actions/product.action";
import { getProducts } from "../actions/product.action";

const Products = (props) => {
    const [refreshing, setRefreshing] = useState(true)
    const [heartColor, setHeartColor] = useState('grey')
    const navigation = useNavigation();
    const products = useSelector((state) => state.products);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    const data = products.product

    const styles = StyleSheet.create({
        container: {
            height: 120,
            width: '95%',
            backgroundColor: '#FFF',
            borderRadius: 6,
            elevation: 2,
            margin: 5,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
        image: {
            height: 100,
            width: 120,
            borderRadius: 100,
            marginTop: 5
        },
    });

    const click = (data) => {
        console.log(data)
    }


    const renderItemComponent = (data) =>

        <TouchableOpacity style={styles.container} onPress={() => click(data)}>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image style={styles.image} source={{ uri: data.item.image }} />
                </View>
                <View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 20, marginTop: 5 }}>4.5 <Icon name="star" size={15} color='#b3b300' /></Text>
                            <Icon
                                style={{
                                    marginLeft: 'auto',
                                    marginTop: 5,
                                    marginRight:'5%'
                                }}
                                name="heart"
                                size={20}
                                color={data.item.status === 1 ? 'red' : 'grey'}
                                onPress={() => dispatch(addToFavorite(data.item.id))}

                            />
                        </View>
                        <Text style={{ marginLeft: 20, marginTop: 5, fontWeight: '800', fontSize: 16 }}>{data.item.name}</Text>
                        <Text style={{ marginLeft: 20, marginTop: 5, fontWeight: '800', fontSize: 14, fontStyle: 'italic', color: '#8c8c8c' }}>fast food</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 20, marginTop: 10, fontWeight: 'bold', fontSize: 16 }}>RS. 500</Text>
                        {
                             data.item.buttonValue === undefined || data.item.buttonValue ===0 ?
                                <TouchableOpacity
                                    style={{
                                        width: 90,
                                        height: 30,
                                        borderRadius: 5,
                                        backgroundColor: '#7a7a52',
                                        marginLeft: '16%',
                                        marginTop: 5,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}
                                    onPress={() => dispatch(toggleButton(data.item.id, "plus"))}
                                >
                                    <Text
                                        style={{
                                            color: 'white',
                                            elevation: 5,
                                        }}
                                    >Add Product</Text>
                                </TouchableOpacity> :
                                <View style={{flexDirection:'row',marginLeft:'18%'}}>
                                    <TouchableOpacity
                                        style={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: 5,
                                            backgroundColor: '#7a7a52',
                                            marginLeft: '16%',
                                            marginLeft:'auto',
                                            marginTop: 5,
                                            // justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                        onPress={() => dispatch(toggleButton(data.item.id, "minus"))}
                                    >
                                        <Text
                                            style={{
                                                color: 'white',
                                                elevation: 5,
                                                fontSize:20
                                            }}
                                        >-</Text>
                                    </TouchableOpacity>
                                    <Text style={{fontSize:18,alignSelf:'center',margin:5}}>{data.item.buttonValue}</Text>
                                    <TouchableOpacity
                                        style={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: 5,
                                            backgroundColor: '#7a7a52',
                                            // marginLeft: '16%',
                                            marginTop: 5,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                        onPress={() => dispatch(toggleButton(data.item.id, "plus"))}
                                    >
                                        <Text
                                            style={{
                                                color: 'white',
                                                elevation: 5,
                                                fontSize:20
                                            }}
                                        >+</Text>
                                    </TouchableOpacity>
                                </View>

                        }
                    </View>
                </View>
            </View>
        </TouchableOpacity>


    return (
        <View
            style={{
                width: '98%',
                backgroundColor: 'white',
                marginLeft: 'auto',
                marginRight: 'auto',
                elevation: 1,
                borderRadius: 5,
            }}>
            <FlatList
                data={data}
                renderItem={item => renderItemComponent(item)}
                keyExtractor={(item, index) => item.id.toString()}
                refreshing={refreshing}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Products


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    }
})

