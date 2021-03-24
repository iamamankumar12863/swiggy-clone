import React from 'react'
import { ScrollView } from 'react-native'
import { SafeAreaView, } from 'react-native'
import Header from './Header'
import Products from '../Screens/Products'

function Index({ route }) {
    const { name } = route.params;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header name={name} />
            <ScrollView>
                <Products />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Index
