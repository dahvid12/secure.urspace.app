import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import LoginAuth from "../screens/LoginAuth";


const screens = {
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Log in',
      headerStyle: {backgroundColor: '#eee'}
    }

  }, 
  SignUpScreen: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Sign Up',
      headerStyle: {backgroundColor: '#eee'}
    }
  },
  LoginAuth: {
    screen: LoginAuth,
    navigationOptions: {
      title: 'Authentication',
      headerStyle: {backgroundColor: '#eee'}
    }

  }, 
  
};

// home stack navigator screens
const homeNavs = createStackNavigator(screens);

export default createAppContainer(homeNavs);
