import { Pressable, TextInput, View, StyleSheet, Text, Image } from 'react-native';

function TelaLogin(){
    return(
        <View style={style.container}>
            <Image
                source={{uri:'https://dci.ufv.br/wp-content/uploads/2018/02/800x600-sem_inscricao.png'}}
                style={style.logo}
                >
            </Image>
            <Text
                style={style.Text}>
                Matricula
            </Text>
            <TextInput
                style = {style.inputText}
                placeholder='Matricula'
            />
            <Text
                style={style.Text}>
                Senha
            </Text>
            <TextInput
                style = {style.inputText}
                placeholder='Senha'
            />
            <Pressable style={style.button}>
                <Text
                    style={style.TextButton}>
                    Login
                </Text>
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#ffd700'
    },
    logo:{
        alignSelf:'center',
        width:'62%',
        height:'20%',
        marginTop:-130,
        marginBottom:60
    },
    inputText:{
        alignSelf:'center',
        justifyContent:'center',
        width:'60%',
        height:'4%',
        backgroundColor:'white',
        marginVertical:'4%',
        borderRadius:60
    },
    Text:{
        alignSelf:'center',
        color:'white',
        fontSize:22,
    },
    TextButton:{
        alignSelf:'center',
        color:'white',
        fontSize:22,
    },
    button:{
        alignSelf:'center',
        width:'60%',
        height:'4.88%',
        backgroundColor:'red',
        color:'white',
        borderRadius:60
    }
})

export default TelaLogin;