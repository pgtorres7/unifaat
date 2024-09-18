import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Perfil from '../screens/Perfil';
import Novo from '../screens/Novo';

const Stack = createNativeStackNavigator();

export default function StackRoutes (){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
                name ="home"
                component={Novo}
            />
            <Stack.Screen
                name ="user"
                component={Perfil}
            />
        </Stack.Navigator>
    )
}
