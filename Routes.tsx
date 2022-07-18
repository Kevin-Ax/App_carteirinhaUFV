import { Router, Scene } from 'react-native-router-flux'
import TelaLogin from './assets/components/Login/TelaLogin';
import TelaCadastro from './assets/components/cadastro/TelaCadastro';
import TelaMain from './assets/components/Main/TelaMain';

function Routes(){
    return(
        <Router>
            <Scene key='root'>
            <Scene key = "TelaLogin" component = {TelaLogin} title = "TelaLogin" initial = {true} />
            <Scene key = "Cadastro" component = {TelaCadastro} title = "Cadastro" />
            <Scene key = "TelaPrincipal" component = {TelaMain} title = "TelaPrincipal" />
            </Scene>
        </Router>
    );
}

export default Routes;