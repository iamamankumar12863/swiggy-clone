import React from 'react'
import { View, Text,StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <View style={{ width: '100%', height: 100, backgroundColor: 'black' }}>
            <StatusBar backgroundColor='black' />
            <View style={{ flexDirection: 'row' }}>
                <Icon name="bars" size={30} color="white" style={{ margin: 7 }} />
                <Text style={{ color: 'white', fontSize: 20, margin: 7, fontWeight: 'bold' }}>AJ Mart</Text>
                <Icon name="cart-plus" size={40} color="white" style={{ marginLeft: 'auto', margin: 7,marginRight:10 }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ height: 40, width: '30%', backgroundColor: 'white', marginRight: 3, marginLeft: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, color: 'grey' }}>Categories</Text>
                </View>
                <View style={{ height: 40, width: '68%', backgroundColor: 'white',flexDirection:'row' }}>
                    <Icon name="search" size={20} color="#b3b3b3" style={{ margin: 10 }} />
                    <Text style={{color:'#808080',margin:10}}>search for products</Text>
                </View>
            </View>
        </View>
    )
}

export default Header
