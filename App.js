import React, {useState} from 'react';
import {View,Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/header';
import ListItem from './components/listItem';
import AddItem from './components/addItem';


const App = () =>{
  const [items, setItems] = useState([
    {id:Math.random(), text: 'milk'},
    {id:Math.random(), text: 'rice'},
    {id:Math.random(), text: 'coke'},
    {id:Math.random(), text: 'sugar'},
    {id:Math.random(), text: 'salt'}
  ])

  const deleteItem = (id) =>{
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    })
  }

  const addItem = (text) =>{
    if(!text){
      Alert.alert('Error', 'please enter an item...',{text: 'Ok'})
    }else{
      setItems(prevItems => {
        return [{id:Math.random(),text},...prevItems]
      })
    }
  }

  return(
    <View style={styles.container}>
      <Header title= 'Shopping List'/>
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => (
       <ListItem item={item} deleteItem={deleteItem}/>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop: 60
  },
})
export default App;