<template>
  <app-navigator></app-navigator>
</template>

<script>
import { createAppContainer, createStackNavigator } from 'vue-native-router';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import DicesScreen from './screens/DicesScreen';

const StackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { headerShown: false }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: { headerShown: false }
    },
    Dices: {
      screen: DicesScreen,
      navigationOptions: { headerShown: false }
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppNavigator = createAppContainer(StackNavigator);

export default {
  components: {
    AppNavigator
  }
}
</script>

<style>
</style>
