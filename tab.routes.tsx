import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import Inicio from '../screens/Inicio';
import Novo from '../screens/Novo';
import Perfil from '../screens/Perfil';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: 'black',
                },
                headerStyle: {
                    backgroundColor: 'black',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Tab.Screen
                name="Inicio"
                component={Inicio}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: 'Inicio',
                }}
            />
            <Tab.Screen
                name="Novo"
                component={Novo}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'Novo',
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    tabBarLabel: 'Perfil',
                }}
            />
        </Tab.Navigator>
    );
}
