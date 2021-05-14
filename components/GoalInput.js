import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ setVisibility, visible, onAddGoal }) => {
  const [courseGoal, setCourseGoal] = useState('');

  const handleCourseGoalInput = (value) => {
    setCourseGoal(value);
  };

  const addCourseGoal = () => {
    if (courseGoal) {
      onAddGoal(courseGoal);
      setCourseGoal('');
      setVisibility(false);
    }
  };

  const closeModal = () => {
    setCourseGoal('');
    setVisibility(false);
  };

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          value={courseGoal}
          onChangeText={handleCourseGoalInput}
        />
        <View style={{ width: '100%' }}>
          <Button title='ADD' onPress={addCourseGoal} />
          <View style={{ marginTop: 8 }}>
            <Button color='#dc3545' title='Cancel' onPress={closeModal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 40,
    paddingHorizontal: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderColor: 'black',
    padding: 10,
    borderWidth: 1,
    marginBottom: 8,
  },
});

export default GoalInput;
