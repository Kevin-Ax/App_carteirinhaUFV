import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "./assets/components/Login/TelaLogin";
import TelaCadastro from "./assets/components/cadastro/TelaCadastro";
import TelaMain from './assets/components/Main/TelaMain';

const Stack = createNativeStackNavigator()


function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen name="Login"
                    component={TelaLogin}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Cadastro"
                    component={TelaCadastro}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name="Main"
                    component={TelaMain}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default App;