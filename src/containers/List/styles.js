import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  mainHeader: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
  },
  flatlistView: {
    flexDirection: 'row',
    borderColor: '#000',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 5,
    paddingVertical: 10,
    borderRadius: 10,
  },
  firstNameStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  parentModalView: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.tranparentBlack,
  },
  modalContainer: {
    backgroundColor: colors.white,
    width: '80%',
    height: '30%',
    alignSelf: 'center',
    top: '30%',
    borderRadius: 10,
  },
  userImageStyle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignSelf: 'center',
    marginVertical: 30,
  },
  userNameStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
  },
  userEmailStyle: {
    fontSize: 14,
    color: colors.grey,
    textAlign: 'center',
    marginTop: 10,
  },
});

export default styles;
