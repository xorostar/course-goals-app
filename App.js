import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, SetIsAddMode] = useState(false);

  const addCourseGoal = (courseGoal) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: courseGoal },
    ]);
  };

  const removeCourseGoal = (id) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((courseGoal) => courseGoal.id != id)
    );
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => SetIsAddMode(true)} />
      <GoalInput
        setVisibility={SetIsAddMode}
        visible={isAddMode}
        onAddGoal={addCourseGoal}
      />
      {courseGoals.length ? (
        <FlatList
          style={styles.listContainer}
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem
              onCourseGoalDelete={removeCourseGoal}
              courseGoal={itemData.item}
            />
          )}
        />
      ) : (
        <Text
          style={{
            marginTop: 8,
            padding: 16,
            textAlign: 'center',
          }}
        >
          No Goals Added
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  listContainer: {
    marginTop: 8,
  },
});
