import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { Todo } from "./Todo";

const TodoList = () => {
  const [titulo, setTitulo] = useState("Lista de tarefas")
  return (
    <View>
      <Text>{titulo}</Text>
      <Todo name={"Fazer Café!"} />
      <Todo name={"Lavar a louça"} />
      <Button title="Alterar" onPress={()=>setTitulo("Lista de tarefas diárias")}></Button>
    </View>
  );
};


/*

  const TITLE = "Título"

  class Example extends React.PureComponent {
      render (){
          return(
              <>
                  <Helmet>
                      <title>
                          {TITLE}
                      </title>
                  </Helmet>
              </>
          )
      }
  }

*/

export {TodoList}
