import React, { useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './pages/Index'
import HomeScreen from './Screens/HomeScreen'
import { useDispatch } from 'react-redux'
import { getCategory } from "./actions/category.action";
import { Provider } from "react-redux";
import store from './store/Store'


const Stack = createStackNavigator();


const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategory());
    console.log('Appppppppppppp')
  }, [])

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Products" component={Products} />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />  */}
      </Stack.Navigator>
    </NavigationContainer>

  )
}

console.disableYellowBox = true;


const Appp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Appp



