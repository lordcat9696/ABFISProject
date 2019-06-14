import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Main from '../../components/Main';
import App from '../../../App';
import ImageScreen from '../../components/camera/ImagePicker';

const MainNavigator = createSwitchNavigator({
    App: {screen: App},
    Image: { screen: ImageScreen },   
});

export default createAppContainer(MainNavigator);
