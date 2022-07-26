import { createStackNavigator } from 'react-navigation-stack';
import TelaCadastro from '../cadastro/TelaCadastro';
import TelaLogin from './TelaLogin';

export default createStackNavigator({
    Login: TelaLogin,
    Cadastro: TelaCadastro,
  }, {
    initialRouteName: 'Inbox',
  });