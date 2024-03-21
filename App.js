import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  
  const student = {
    name: 'Mokopotsa Tshwany',
    studentNumber: '901016550',
    profilePicture: 'cat.jpg',
    Semester: 'Semester2 2024',
    grades: [
      { subject: 'Cpp II', grade: 'A+' },
      { subject: 'Statistics and probability', grade: 'A' },
      { subject: 'Mobile Device Programming', grade: 'A-' },
      { subject: 'computer Science', grade: 'A+'},
      { subject: 'Software Modeling And Analysis', grade: 'A+'},
    ],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.holimo}>
        <Text style={styles.studentName}>Name: {student.name}</Text>
        <Text style={styles.studentNumber}>Student Number: {student.studentNumber}</Text>
        <Image source={require("./cat.jpg")}style={styles.profilePicture}/>
        <Text style={styles.currentSemester}>Current Semester: {student.currentSemester}</Text>
      </View>
      <View style={styles.gradesContainer}>
        <Text style={styles.grades}>Semester Grades</Text>
        {student.grades.map((grade, index) => (
          <View key={index} style={styles.gradeItem}>
            <Text style={styles.items}>{grade.subject}: {grade.grade}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'pink',
    alignItems: 'center',
    height: 1200,
    justifyContent: 'center',
  },

  studentNumber: {
    color: 'black',
    fontSize: 30,
    marginBottom: 5,
    paddingTop: 20,
  },

  profilePicture: {
    height: 300,
    width: 300,
    borderRadius: 10,
    marginBottom: 10,
    paddingTop: 20,
  },

  holimo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  studentName: {
    color: 'brown',
    fontSize: 28,
    fontWeight: 'bolder',
    marginBottom: 5,
  },

  currentSemester: {
    color: 'black',
    fontSize: 27,
    marginBottom: 10, 
  },

  gradeItem: {
    color: 'black',
    paddingTop: 15,
    marginBottom: 5,
    alignItems: 'center', 
  },

  gradesContainer: {
    paddingTop: 20,
    color: 'black',
    marginBottom: 20,
  },

  grades: {
    color: 'black',
    fontSize: 29,
    fontWeight: 'bolder',
    marginBottom: 10,
    alignItems: 'center', 
  },

  items: {
    color: 'black',
    fontSize: 25,
  },

});

export default ProfileScreen;