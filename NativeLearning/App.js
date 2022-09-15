import React,{useState} from 'react';

import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Task from './components/Task';



export default function App(){
  const [task,setTask]= useState()
  const [taskItems,setTaskItems]= useState([])

  const handleAddTask = () => {
    // console.log(task);
    setTaskItems([...taskItems,task])
    setTask(null)

  }

  const completeTask = (index) => {
    let tasks = [...taskItems]
    tasks.splice(index,1)
    setTaskItems(tasks)
  }

  return (
    <View style={styles.container}>
      {/* header} */}
      <View style={styles.header}>
        <Text style={styles.headertext}>
          TODO APP
        </Text>

        <View style={styles.items}>
          {/* {tasks here} */}
          {
            taskItems.map((item,idx) => {
                return (
                  <TouchableOpacity key={idx} onPress={() => completeTask(idx)}>
                    <Task text={item}/>
                  </TouchableOpacity>
                )
            })
          }

          {/*  */}
          {/* <Task text={'Task 1'}/>
          <Task text={'Task 2'}/> */}
        </View>

      </View>

      {/* {add a new task} */}

      <KeyboardAvoidingView 
      behavior={Platform.OS==="ios"?"padding":"height"}
      style={styles.AddTask}
      >
        <TextInput style={styles.input} placeholder={"Add a task"} value={task} onChangeText={text=>setTask(text)}/>
        
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.add}>
            <Text style={styles.icon}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>  
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E8EAED',
  },
  header:{
    paddingTop: 80,
    paddingHorizontal:20,
  },
  headertext:{
    fontSize:24,
    fontWeight:'bold',
  },
  items:{
    marginTop:30,
  },
  AddTask:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  add:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#C0C0C0',
    borderWidth:1,
  },
  icon:{},
      
});

