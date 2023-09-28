import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createStackNavigator();

const StackNav = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
);

export default StackNav;