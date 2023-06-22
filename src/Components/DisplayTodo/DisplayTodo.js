import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'
import { STYLES } from './DisplayTodoStyles'
import { toggleTodo1 } from '../../Actions'

const DisplayTodo = ({ Todo, toggleTodo }) => {
    console.log(Todo)

    return (
        <View style={STYLES.mainCont} >
            <FlatList
                data={Todo}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={STYLES.todoCont} onPress={() => toggleTodo(item.id)} >
                            <Text style={STYLES.todoText(item.completed)}>{item.text}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    )
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => dispatch(toggleTodo1(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo)
