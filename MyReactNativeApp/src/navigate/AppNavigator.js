/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CourseListScreen from './CourseListScreen';
import CourseDetailScreen from './CourseDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CourseList" component={CourseListScreen} options={{ title: 'List of Courses' }} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} options={{ title: 'Course Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
