import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../../../Screens/Home/Home'
import Mobile from '../../../Screens/Mobile/Mobile'
import Electronics from '../../../Screens/Electronics/Electronics'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader'
import CartScreen from '../../../Screens/CartScreen/CartScreen'

const Stack = createNativeStackNavigator()

const MainNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerRight: () => <CustomHeader />
            }}
        >
            <Stack.Screen
                name='Home'
                component={Home}
            />
            <Stack.Screen
                name='Electronics'
                component={Electronics}

            />
            <Stack.Screen
                name='Mobile'
                component={Mobile}

            />
            <Stack.Screen
                name='CartScreen'
                component={CartScreen}

            />
        </Stack.Navigator>
    )
}

export default MainNavigation

const styles = StyleSheet.create({})