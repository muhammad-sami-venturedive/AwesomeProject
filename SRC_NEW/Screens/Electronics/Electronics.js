import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Products from '../../Components/Products/Products'
import { Electronics as ElectronicsData } from '../../Data/Data'
import { connect } from 'react-redux'
import { ADD_TO_CART } from '../../Redux/Actions/ActionTypes/ActionTypes'

const Electronics = ({ products, addtoCart }) => {
  return (
    <View style={styles.mainCont} >
      <Products products={ElectronicsData} onPressHandler={addtoCart} />
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
    addtoCart: (product) => dispatch({ type: ADD_TO_CART, payload: product })
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Electronics)


const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // flexDirection: 'row',
  },
})