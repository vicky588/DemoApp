/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import MainScreen from './src/storeScreen.tsx/mainSceen';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <MainScreen />
      </View>
    </Provider>
  );
};

export default App;
