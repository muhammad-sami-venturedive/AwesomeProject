import { Button, Text, View } from 'react-native'
import React, { useState } from 'react'
import { STYLES } from './CounterAppStyles'
import { connect } from 'react-redux'

const CouterApp = (props) => {
    // const [Counter, setCounter] = useState(0)
    console.log(props)
    return (
        <View style={STYLES.mainCont} >
            <Button title='INCREMENT' onPress={props.increment} />
            <Text>{props.counter}</Text>
            <Button title='Decrement' onPress={props.decrement} />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "INCREMENT" }),
        decrement: () => dispatch({ type: "DECREMENT" }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CouterApp)
