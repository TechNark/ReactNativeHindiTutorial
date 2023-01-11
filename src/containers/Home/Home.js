import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import styles from './styles';

const Home = props => {
  return (
    <SafeAreaView>
      <View style={styles.titleContainer}>
        <Text style={styles.titleStyle}>Sample App</Text>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('Counter')}
        style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>Counter</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('List')}
        style={styles.buttonStyle}>
        <Text style={styles.buttonTextStyle}>List</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
