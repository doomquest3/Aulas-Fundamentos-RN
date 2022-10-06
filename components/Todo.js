import React from 'react';
import {View, Text, Button} from 'react-native';

const Todo = (props)=>{
    return(
        <View style={[style.item,{margin:8,padding:8}]}>
            <Text>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        flexDirection:"row",
        JustifyContent: "space-between",
        alignItems:"center",
        borderColor:"grey",
        borderRadius:5,
        backgroundColor:"whitesmoke"
    }
})

export{Todo}