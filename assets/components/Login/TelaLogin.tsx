import React from 'react'
import { Pressable, TextInput, View, StyleSheet, Text, Image } from 'react-native';

//Implementação da tela de login
const TelaLogin = ( {navigation} ) => {
    return(
        <View style={style.container}>
            <Image
                source={{uri:'https://5287aa00874a313e299d-1850966fc307ff23e1e789aeafd2476b.ssl.cf5.rackcdn.com/PostImagem/42240/foto-branca-download-wallpapers-e-onde-usar_o1fcm9aiph1mte1km1f11cs53mng.png'}}
                style={style.background}
            >
            </Image>
            <Image
                source={{uri:'https://dci.ufv.br/wp-content/uploads/2018/02/800x600-sem_inscricao.png'}}
                style={style.logo}
                >
            </Image>
            <Text
                style={style.Title}
                >Carteirinha Virtual
            </Text>
            <Text
                style={style.TextMatricula}
                >Matricula
            </Text>
            <TextInput
                style = {style.inputText}
                placeholder='Matricula'
            />
            <Text
                style={style.TextSenha}
                >Senha
            </Text>
            <TextInput
                style = {style.inputText}
                secureTextEntry={true}
                placeholder='Senha'
            />
            <Pressable style={style.button}>
                <Text
                    style={style.TextButton}
                    >Login
                </Text>
            </Pressable>
            <Text style={style.Text2}
                >Não tem conta ainda? 
                    <Pressable
                        onPress={navigation.navigate("Cadastro")}
                        style={style.button2}
                        >
                        <Text
                            style={style.TextButton2}
                            >Fazer Cadastro
                        </Text>
                    </Pressable>
            </Text>
        </View>
    );
}


//Css da página
const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#e6be8a'
    },
    logo:{
        alignSelf:'center',
        width:'65%',
        height:'15%',
        marginTop:-230,
        marginBottom:150,
    },
    background:{
        alignSelf:'center',
        width:'100%',
        height:'81%',
        marginTop:-460,
        borderRadius:80,
        borderr:10
    },
    inputText:{
        alignSelf:'center',
        justifyContent:'center',
        width:'60%',
        height:'4%',
        backgroundColor:'white',
        marginVertical:'4%',
        borderRadius:60,
        marginBottom:12
    },
    Title:{
        alignSelf:'center',
        color:'black',
        fontSize:28,
        marginTop:-130
    },
    TextMatricula:{
        alignSelf:'center',
        color:'white',
        fontSize:22,
        marginTop:15,
        paddingTop:50,
    },
    TextSenha:{
        alignSelf:'center',
        color:'white',
        fontSize:22,
    },
    Text2:{
        alignSelf:'center',
        color:'black',
        fontSize:14,
    },
    TextButton:{
        alignSelf:'center',
        color:'white',
        fontSize:22
    },
    TextButton2:{
        alignSelf:'center',
        color:'blue',
        fontSize:12,
        textDecorationLine:'underline',
        marginTop:16
    },
    button:{
        alignSelf:'center',
        width:'60%',
        height:'4.88%',
        backgroundColor:'#9b111e',
        color:'white',
        borderRadius:60,
        marginTop:15,
        marginBottom:20
    },
    button2:{
        width:'60%',
        height:'4.88%',
        marginTop:8
    }
})

export default TelaLogin;