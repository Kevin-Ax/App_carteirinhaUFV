import { Router, Scene } from 'react-native-router-flux'; 
import TelaLogin from './assets/components/Login/TelaLogin';

function Routes(){
    return(
        <Router>
            <Scene key='root'>
                <Scene key = "TelaLogin" component = {TelaLogin} title = "TelaLogin" initial = {true} />
            </Scene>
        </Router>
    );
}

export default Routes;