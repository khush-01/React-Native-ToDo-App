import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

function App() {

  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState('');

  const addNote = () => {
    if (note.length !== 0) {
      var notesCpy = notes;
      notesCpy.push(note);
      setNotes(notes);

      setNote('');
    }
  }

  const removeNote = (index) => {
    var notesCpy = notes;
    notesCpy = notesCpy.slice(0, index).concat(notesCpy.slice(index+1));
    setNotes(notesCpy);
  }

  return (
    <View style={{backgroundColor: '#a9f1df', height: deviceHeight}}>
      <Text style={styles.heading}>To-Do App</Text>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <TextInput
        onChangeText={setNote}
        value={note}
        placeholder='Enter the task'
        style={styles.inputField}
        />
        <View>
          <TouchableOpacity onPress={addNote}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        {(notes.length === 0) ? (
          <Text style={{fontSize: 22, marginTop: 15, textAlign: 'center'}}>
            No task added...
          </Text>) : (
          <View style={{alignItems: 'center', marginTop: 10}}>
          {notes.map((note, index) =>
            <View key={index}>
              <TouchableOpacity onPress={() => removeNote(index)}>
                <Text style={styles.tasks}>{note}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>)}  
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    color: '#233e8b',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 35,
    textAlign: 'center',
    width: deviceWidth,
  },
  inputField: {
    borderColor: 'black',
    borderRadius: 20,
    borderWidth: 1,
    fontSize: 18,
    paddingLeft: 15,
    width: 250,
  },
  plus: {
    backgroundColor: '#ffffc7',
    borderRadius: 30,
    fontSize: 28,
    height: 40,
    textAlign: 'center',
    width: 40
  },
  tasks: {
    borderRadius: 15,
    borderWidth: 2,
    fontSize: 20,
    marginTop: 10,
    paddingLeft: 11,
    paddingVertical: 2,
    width: deviceWidth * 0.95,
  }
})

export default App;
