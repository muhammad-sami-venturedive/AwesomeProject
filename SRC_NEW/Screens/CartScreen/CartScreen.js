import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Products from '../../Components/Products/Products'
import { connect } from 'react-redux'
import { REMOVE_FROM_CART } from '../../Redux/Actions/ActionTypes/ActionTypes'

const CartScreen = ({ cartItems, removeFromCart }) => {
    return (
        <View style={styles.mainCont} >
            {cartItems.length > 0 ? (<Products products={cartItems} onPressHandler={removeFromCart} />) : <Text>No Item In Cart</Text>
            }
        </View>

    )
}



const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (product) => dispatch({ type: REMOVE_FROM_CART, payload: product })
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)


const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
    },
})