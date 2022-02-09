import { StatusBar, StyleSheet, Text, View, TextInput, Dimensions,ScrollView, PlatformColor } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {AppLoading } from 'expo';
import React,  { Component } from 'react';
import TodoList from './components/TodoList';


//get() method to acquire any device’s width and height.
const { height, width } = Dimensions.get("window");



export default class App extends Component {
 

    //Adding a local State
  state = {
    newTodoItem: ''
  }
 
  
  //define a controller function that will read the value from and update the local state.
  newTodoItemController = textValue => {
    console.log(textValue);
    this.setState({
      newTodoItem: textValue
    });
  }
  
  render() {
    return (


      <LinearGradient style={styles.container} colors={['#DA4453', '#89216B']}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.appTitle}>Todo App</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={'Add an item!'}
            value={newTodoItem}
            onChangeText={(text) => this.newTodoItemController(textValue)}
            placeholderTextColor={'#999'}
            returnKeyType={'done'}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.listContainer}>
           <TodoList textValue={'TodoItem'} />
          </ScrollView>
        </View>

      </LinearGradient>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: '300',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(50,50,50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 5
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24
  },
  listContainer :{
    alignItems: 'center',
  }
});
