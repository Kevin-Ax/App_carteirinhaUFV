import { Router, Scene } from 'react-native-router-flux';
import TelaLogin from './assets/components/Login/TelaLogin';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaCadastro from './assets/components/cadastro/TelaCadastro';


const Stack = createNativeStackNavigator();

function Routes() {
    return (
        //Funções e variáveis auxiliáres da página
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={TelaLogin}
                    options={{ title: 'Login' }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={TelaCadastro}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;