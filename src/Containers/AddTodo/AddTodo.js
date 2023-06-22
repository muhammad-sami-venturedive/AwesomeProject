import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { STYLES } from './AddTodoStyles'
import { connect } from 'react-redux'
import DisplayTodo from '../../Components/DisplayTodo/DisplayTodo'
import { addTodo } from '../../Actions'

const AddTodo = (props) => {

    const [Value, setValue] = useState("")

    // console.log(props)
    // console.log(Value)

    const addingTodo = (text) => {
        props.dispatch(addTodo(text, Math.random()))
        setValue('')
    }

    return (
        <View style={STYLES.mainCont} >
            <View style={STYLES.subCont}>

                <TextInput
                    style={STYLES.textInput}
                    placeholder='Add some todo'
                    value={Value}
                    onChangeText={(val) => setValue(val)}
                />
                <Button
                    title='Add'
                    onPress={() => addingTodo(Value)}
                />
            </View>
            <DisplayTodo />
        </View>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(AddTodo)


