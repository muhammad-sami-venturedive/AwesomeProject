import { StyleSheet } from 'react-native'

export const STYLES = StyleSheet.create({
    mainCont: {
        flex: 1,
        backgroundColor: 'pink',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // flexDirection:'row',

    },
    todoCont:{
        padding:10,
        backgroundColor:'white',
        marginVertical:5
    },  
    todoText: (completed) => ({
        textDecorationLine: completed ? 'line-through' : 'none',

    })
})