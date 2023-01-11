import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.black,
    paddingBottom: 20,
  },
  buttonTextStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.white,
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.tranparentBlack,
  },
  buttonStyle: {
    width: '90%',
    height: 70,
    borderRadius: 20,
    backgroundColor: colors.orange,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});

export default styles;
