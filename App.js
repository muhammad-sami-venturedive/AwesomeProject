import { Text, View } from 'react-native'
import React from 'react'
import Animation from './src/Animation/Animation'
import CouterApp from './src/CounterApp/CouterApp'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Store from './SRC_NEW/Redux/Store'
import AddTodo from './src/Containers/AddTodo/AddTodo'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigation from './SRC_NEW/Navigation/StackNavigation/MainNavigation/MainNavigation'


const initialState = {
    counter: 0
}

// const reducer = (state = initialState, action) => {
//     console.log(state)
//     switch (action.type) {
//         case 'INCREMENT':
//             return { counter: state.counter + 1 }
//         case 'DECREMENT':
//             return { counter: state.counter - 1 }
//         default:
//             return state;
//     }
// }

// const store = createStore(reducer)   

const App = () => {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <MainNavigation />
            </NavigationContainer>
        </Provider>
    )

    //     < Provider store = { Store } >
    //         <AddTodo />
    // {/* <Text>ehkaf</Text> */ }
    //     </ >

    // <Provider store={store}>
    //     {/* <Animation /> */}
    //     <CouterApp />
    // </Provider>
}

export default App
