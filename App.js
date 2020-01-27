import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Fla } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }; 

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>

      <View>
        <ScrollView>
        {courseGoals.map((goal) => 
          <View style={styles.listItem}>
            <Text key={goal}>{goal}</Text>
          </View>
        )}
      </ScrollView>
    </View>
    </View>
  );
};


const styles = StyleSheet.create ({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  input: {
    width: '50%', 
    borderColor: 'red',
    borderBottomColor: 'green', 
    borderBottomWidth: 1,
    padding: 20,
  },
  listItem: {
    padding: 20,
    backgroundColor: '#ccc',
    borderColor: 'red',
    borderWidth: 1
  },
});
