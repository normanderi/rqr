import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomConfig from './BottomConfig';
import StackNav from '../stack';
import ProfileScreen from '../../screens/ProfileScreen';
import LandingStack from '../../screens/LandingScreen';
import ChatScreen from '../../screens/ChatScreen';

const BottomTab = createBottomTabNavigator();

const BottomNav = () => (
    <BottomTab.Navigator {...BottomConfig}>
        <BottomTab.Screen name="Home" component={StackNav} />
        <BottomTab.Screen name="Perfil" component={ProfileScreen} />
        <BottomTab.Screen name="Landing" component={LandingStack} />
        <BottomTab.Screen name="Chat" component={ChatScreen} />
    </BottomTab.Navigator>
);

export default BottomNav;