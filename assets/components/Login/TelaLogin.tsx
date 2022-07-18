import { Button, TextInput, View } from 'react-native';

function TelaLogin(){
    return(
        <View>
            <TextInput
                placeholder='Matricula'
                maxLength={40}
            />
            <Button title='Login'></Button>
        </View>
    );
}

export default TelaLogin;