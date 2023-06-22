import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import React from 'react'

const Products = ({ products, cartItems, onPressHandler }) => {
    console.log(cartItems)
    return (
        <View style={styles.mainCont} >
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => onPressHandler(item)}
                        style={styles.subCont}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.color} >Item Name: {item.name}</Text>
                        <Text style={styles.color} >Price: {item.price}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
}


export default connect(mapStateToProps)(Products)


const styles = StyleSheet.create({
    mainCont: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-around',
        // flexDirection: 'row',
    },
    subCont: {
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        margin: 5,
        borderRadius: 10,
    },
    color: {
        color: 'black',
        fontWeight: 'bold',

    }
})