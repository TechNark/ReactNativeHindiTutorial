import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Button,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Counter = props => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = async () => {
    setCounter(counter + 1);
    await AsyncStorage.setItem('CounterValue', JSON.stringify(counter + 1));
  };

  const decrementCounter = async () => {
    setCounter(counter - 1);
    await AsyncStorage.setItem('CounterValue', JSON.stringify(counter - 1));
  };

  const getAsyncValue = async () => {
    const valueData = await AsyncStorage.getItem('CounterValue');
    console.log('valueData', valueData);
    setCounter(JSON.parse(valueData));
  };

  useEffect(() => {
    getAsyncValue();
  }, []);

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          position: 'absolute',
          top: 80,
          left: 20,
          zIndex: 1,
        }}
        onPress={() => props.navigation.goBack()}>
        <Image
          style={{
            width: 20,
            height: 20,
          }}
          source={require('../../assets/images/back.png')}
        />
      </TouchableOpacity>
      <Text style={styles.mainTextStyle}>My Counter App</Text>

      <View
        style={{
          height: '100%',
          justifyContent: 'center',
          width: '90%',
          alignSelf: 'center',
        }}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => decrementCounter()}>
            <View style={styles.iconStyle}>
              <Image source={require('../../assets/images/minus.png')} />
            </View>
          </TouchableOpacity>

          <Text style={styles.valueStyle}>{counter}</Text>

          <TouchableOpacity onPress={() => incrementCounter()}>
            <View style={styles.iconStyle}>
              <Image source={require('../../assets/images/plus.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Counter;
