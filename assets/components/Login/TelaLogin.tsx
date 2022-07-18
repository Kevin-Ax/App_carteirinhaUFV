import { Button, TextInput, View, StyleSheet } from 'react-native';

function TelaLogin(){
    return(
        <View style={style.container}>
            <TextInput
                placeholder='Matricula'
                maxLength={40}
            />
            <Button title='Login'></Button>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#ffd700'
    }
})

export default TelaLogin;