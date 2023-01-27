import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePage} from '@/pages/HomePage';
import {SearchPage} from '@/pages/SearchPage';
import {DetailPage} from '@/pages/DetailPage';
import {VideoPlayerPage} from '@/pages/VideoPlayerPage';
import {StartPage} from '@/pages/StartPage';
import {LoginPage} from '@/pages/LoginPage';
import {RegisterPage} from '@/pages/RegisterPage';
import {AccountComponent} from '@/components/RegisterComponent/AccountComponent';
import {HelpPage} from '@/pages/HelpPage';
import {SuccessComponent} from '@/components/RegisterComponent/AccountComponent/SuccessComponent';
import {EndSuccessComponent} from '@/components/RegisterComponent/AccountComponent/EndSuccessComponent';
import {SplashScreen} from '@/pages/SplashScreen';

const Stack = createNativeStackNavigator();
const NavigationRoute = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={SearchPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayerPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Start"
          component={StartPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AccountRegister"
          component={AccountComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Help"
          component={HelpPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SuccessAccount"
          component={SuccessComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EndAccount"
          component={EndSuccessComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationRoute;
