import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './views/Home'
import CreateScreen from './views/Create'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Create: {screen: CreateScreen}
});

const App = createAppContainer(MainNavigator);

export default App;