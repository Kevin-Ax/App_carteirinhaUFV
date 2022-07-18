import { Router, Scene } from 'react-native-router-flux'
import TelaLogin from './assets/components/Login/TelaLogin';
import TelaCadastro from './assets/components/cadastro/TelaCadastro';
import TelaMain from './assets/components/Main/TelaMain';
import { View } from 'react-native';

function Routes(){
    return(
        <View>
            <Router>
                <Scene key='root'>
                    <Scene key = "TelaLogin" component = {TelaLogin} title = "TelaLogin" initial = {true} />
                </Scene>
            </Router>
        </View>
    );
}

export default Routes;