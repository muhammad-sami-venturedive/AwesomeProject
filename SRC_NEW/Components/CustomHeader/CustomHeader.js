import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CustomHeader = ({ cartItems }) => {
  const navigation = useNavigation()
  console.log(cartItems)

  return (
    <View>
      <View style={styles.chip}>
        <Text style={styles.text} >{cartItems.length}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
        <Image source={require("../../Assets/Images/carticon.png")} style={{ width: 30, height: 30, marginRight: 10, }} />
      </TouchableOpacity>
    </View>
  )
}


const mapStateToProps = (state) => {
  return {
    cartItems: state
  }
}

// const mapDispatchToProps = (dispatch) => {
//     // return
// }

export default connect(mapStateToProps)(CustomHeader)

const styles = StyleSheet.create({
  chip: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'rgba(95,197,123,0.95)',
    right: 15,
    bottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  text: {
    color: 'white',
    // fontSize:16
  }

})