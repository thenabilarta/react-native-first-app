import React, { useState } from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTodoList = () => {
    setTodoList([...todoList, todoItem]);
  };

  return (
    <View>
      <Header />
      <ScrollView style={styles.container}>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Enter todo Item"
            onChangeText={(text) => setTodoItem(text)}
            value={todoItem}
          />
          <Button title="Add Todo" onPress={addTodoList} />
        </View>
        <View>
          {todoList.map((t, index) => (
            <View key={index} style={styles.todoItem}>
              <Text>{t}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  textInput: {
    padding: 10,
    borderColor: 'black',
    marginBottom: 20,
    borderWidth: 1,
  },
  todoItem: {
    marginTop: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});
