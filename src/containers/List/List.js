import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Image,
  ActivityIndicator,
  Alert,
  Modal,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import colors from '../../utils/colors';

const List = props => {
  const [apiResponse, setAPIResponse] = useState([]);
  const [dataFetching, setDataFetching] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleModalVisibility = item => {
    setModalVisible(true);
    setImage(item.avatar);
    setUserName(`${item.first_name} ${item.last_name}`);
    setUserEmail(item.email);
  };

  const usersList = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => handleModalVisibility(item)}
        style={styles.flatlistView}>
        <Text>{index + 1}.</Text>
        <Image
          style={{width: 60, height: 60, borderRadius: 30, marginLeft: 10}}
          source={{uri: item.avatar}}
        />

        <View style={{flexDirection: 'column', marginTop: 10, marginLeft: 10}}>
          <Text style={styles.firstNameStyle}> {item.first_name}</Text>
          <Text> {item.email}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then(function (response) {
        if (response.status === 200) {
          // console.log('APIResponse', JSON.stringify(response, null, 2));
          setAPIResponse(response.data.data);
          setDataFetching(false);
        } else {
          Alert.alert('An error occured.');
        }
      })
      .catch(function (error) {
        console.log('Error', error);
      });
  }, []);

  return (
    <SafeAreaView>
      {dataFetching === true ? (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000080',
          }}>
          <ActivityIndicator
            // animating={dataFetching}
            color={'#000'}
            size={'large'}
          />
        </View>
      ) : null}

      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          position: 'absolute',
          top: 60,
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
      <Text style={styles.mainHeader}>Users List</Text>
      <FlatList
        data={apiResponse}
        renderItem={({item, index}) => usersList(item, index)}
      />
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.parentModalView}>
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Image
                source={require('../../assets/images/close.png')}
                style={{
                  width: 15,
                  height: 15,
                  alignSelf: 'flex-end',
                  marginRight: 20,
                  marginTop: 20,
                }}
              />
            </TouchableOpacity>
            <Image source={{uri: image}} style={styles.userImageStyle} />
            <Text style={styles.userNameStyle}>{userName}</Text>
            <Text style={styles.userEmailStyle}>{userEmail}</Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default List;
