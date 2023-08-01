/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const CourseDetailScreen = ({ route }) => {
  const { slug } = route.params;
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/couses/${slug}`)
      .then(response => {
        setCourse(response.data);
      })
      .catch(error => {
        console.error('Error fetching course detail:', error);
      });
  }, [slug]);

  if (!course) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.courseName}>{course.name}</Text>
      <Text style={styles.courseDescription}>{course.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  courseName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  courseDescription: {
    fontSize: 16,
    color: '#333',
  },
});

export default CourseDetailScreen;
