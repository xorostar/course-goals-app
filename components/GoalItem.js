import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const GoalItem = ({ courseGoal, onCourseGoalDelete }) => {
  return (
    <TouchableOpacity onPress={onCourseGoalDelete.bind(this, courseGoal.id)}>
      <View style={styles.listItem}>
        <Text>{courseGoal.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
});

export default GoalItem;
