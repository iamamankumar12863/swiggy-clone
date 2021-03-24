import React from "react";
import {
    SafeAreaView,
    ScrollView,
} from "react-native";
import Carousel from "../Layout/Carousel";
import PopularCategory from "../Layout/PopularCategory";
import Header from "../Layout/Header";
import ProductList from '../Layout/ProductList'
import Category from '../Layout/Category'

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ margin: 0, padding: 0, flex: 1, backgroundColor: '#f2f2f2' }}>
            <Header />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Carousel />
                <ProductList name="Product" />
                <PopularCategory name="Top Categories" />
                <ProductList name="Favorite" />
                <Category />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen