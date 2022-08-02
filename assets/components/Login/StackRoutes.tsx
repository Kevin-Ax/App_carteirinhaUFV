import { createStackNavigator } from 'react-navigation-stack';
import TelaCadastro from '../cadastro/TelaCadastro';
import TelaLogin from './TelaLogin';
import TelaMain from '../Main/TelaMain';

export default createStackNavigator({
    Login: TelaLogin,
    Cadastro: TelaCadastro,
    Main: TelaMain
  }, {
    initialRouteName: 'Inbox',
  });