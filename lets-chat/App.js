import React from 'react';
import Main from './components/Main';
import Chat from './components/Chat';
// Import React Navigation
import { createStackNavigator } from 'react-navigation-stack';
import{createAppContainer} from 'react-navigation';

// Create the navigator
const navigator = createStackNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});
// Export it as the root component
const App = createAppContainer(navigator)
export default App