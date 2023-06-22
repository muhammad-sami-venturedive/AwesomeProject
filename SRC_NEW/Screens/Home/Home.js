import { StyleSheet, Button, View } from 'react-native'
import React from 'react'

const Home = ({ navigation }) => {
  return (
    <View style={styles.mainCont} >
      <Button title='Mobile' onPress={() => navigation.navigate('Mobile') } />
      <Button title='Electronics' onPress={() => navigation.navigate('Electronics')} />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  mainCont: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    
  }
})