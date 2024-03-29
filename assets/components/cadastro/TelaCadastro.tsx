import { Pressable, TextInput, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

function TelaCadastro({ navigation }: { navigation: any }) {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState(false)

    const cadastro = () => {
        navigation.navigate('Main')
    }

    const erroCadastro = () => {
        setErrorLogin(true)
    }

    return (
        <View style={style.container}>
            <Image
                source={{ uri: 'https://5287aa00874a313e299d-1850966fc307ff23e1e789aeafd2476b.ssl.cf5.rackcdn.com/PostImagem/42240/foto-branca-download-wallpapers-e-onde-usar_o1fcm9aiph1mte1km1f11cs53mng.png' }}
                style={style.background}
            >
            </Image>
            <Image
                source={{ uri: 'https://dci.ufv.br/wp-content/uploads/2018/02/800x600-sem_inscricao.png' }}
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
                style={style.inputText}
                placeholder='Matricula'
                onChangeText={(text) => setUser(text)}
            />
            <Text
                style={style.TextSenha}
            >Senha
            </Text>
            <TextInput
                style={style.inputText}
                secureTextEntry={true}
                placeholder='Senha'
                onChangeText={(text) => setPassword(text)}
            />
            <Text
                style={style.TextSenha}
            >Confirme sua senha
            </Text>
            <TextInput
                style={style.inputText}
                secureTextEntry={true}
                placeholder='Confirme a Senha'
                onChangeText={(text) => setCPassword(text)}
            />

            {
                errorLogin === true ?
                    <View style={style.warningAlert}>
                        <Feather name="alert-circle" size={24} color="black" style={style.wargningIcon} />
                        <Text style={style.warningText}>Preencha todos os campos</Text>
                    </View>
                    :
                    <View></View>
            }

            {user === "" || password === "" || cPassword === ""
                ?
                <TouchableOpacity
                    onPress={erroCadastro}
                    style={style.button}>
                    <Text style={style.TextButton}>Cadastro</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={style.button}
                    onPress={cadastro}>
                    <Text style={style.TextButton}>Cadastro</Text>
                </TouchableOpacity>
            }

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e6be8a'
    },
    logo: {
        alignSelf: 'center',
        width: '65%',
        height: '15%',
        marginTop: -230,
        marginBottom: 150,
    },
    background: {
        alignSelf: 'center',
        width: '100%',
        height: '81%',
        marginTop: -460,
        borderRadius: 80,
        borderr: 10
    },
    inputText: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '60%',
        height: '4%',
        backgroundColor: 'white',
        marginVertical: '4%',
        borderRadius: 60,
        marginBottom: 12,
        paddingLeft: 10
    },
    Title: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 28,
        marginTop: -130
    },
    TextMatricula: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 22,
        marginTop: 15,
        paddingTop: 50,
    },
    TextSenha: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 22,
    },
    Text2: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 14,
    },
    TextButton: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 22
    },
    TextButton2: {
        alignSelf: 'center',
        color: 'blue',
        fontSize: 12,
        textDecorationLine: 'underline',
        marginTop: 16
    },
    button: {
        alignSelf: 'center',
        width: '60%',
        height: '4.88%',
        backgroundColor: '#9b111e',
        color: 'white',
        borderRadius: 60,
        marginTop: 15,
        marginBottom: 20
    },
    button2: {
        width: '60%',
        height: '4.88%',
        marginTop: 8
    },
    warningAlert: {
        color: '#9F6000',
        backgroundColor: '#FEEFB3',
        flexDirection: 'row',
        width: '80%',
        height: '5%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#9F6000',
        borderRadius: 50,
    },
    wargningIcon: {
        marginTop: 7,
        marginLeft: 10,
        width: 30,
    },
    warningText: {
        marginTop: 7,
    }
})

export default TelaCadastro;