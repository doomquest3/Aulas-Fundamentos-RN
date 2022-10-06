import React,{useState} from "react"
import {View, Text, Button, StyleSheet} from "react-native"
import { Todo } from "./Todo"

const TodoList =()=>{
    const [title, setTittle] = useState("Lista de Tarefas")

return(
    <View style={{width:"80%", marginBottom:60}}>
        <Text  style={[styles.align, styles.font]}>{title}</Text>
        <Todo  name={"primeira tarefa"}></Todo>
        <Todo name={"Segunda tarefa"}></Todo>
        <Button title="Alterar" onPress={()=>setTitle("Minha lista")}></Button>
    </View>
)
}

const styles = StyleSheet.create({
    align:{
        alignSelf:"center"
    },
    font:{
        fontSize:20,
        fontWeight:"bold"
    }
})

export {TodoList}