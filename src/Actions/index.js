export const addTodo = (text, id) => ({
    type: "ADD_TODO",
    id,
    text
})

export const toggleTodo1 = (id) => ({

    type:"TOOGLE_TODO",
    id,

})