import React from 'react'
import { View, Text,StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const navigation = useNavigation()
    return (
        <View style={{ width: '100%', height: 50, backgroundColor: 'black' }}>
            <StatusBar backgroundColor='black' />
            <View style={{ flexDirection: 'row' }}>
                <Icon name="mail-reply" size={30} color="white" style={{ margin: 7 }} onPress={()=> navigation.goBack()} />
                <Text style={{ color: 'white', fontSize: 20, margin: 7, fontWeight: 'bold' }}>{props.name}</Text>
                <Icon name="cart-plus" size={40} color="white" style={{ marginLeft: 'auto', margin: 7,marginRight:10 }} />
            </View>
        </View>
    )
}

export default Header
