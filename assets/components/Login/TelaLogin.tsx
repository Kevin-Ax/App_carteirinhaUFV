import { TextInput, View, StyleSheet, Text, Image, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Feather } from '@expo/vector-icons';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


function TelaLogin({ navigation }: { navigation: any }) {
    const firebaseConfig = {
        apiKey: "AIzaSyCtX4u1irhuLyTnMLtTkjRFf3SMiXrDSJE",
        authDomain: "carteirinhadigitalufv.firebaseapp.com",
        projectId: "carteirinhadigitalufv",
        storageBucket: "carteirinhadigitalufv.appspot.com",
        messagingSenderId: "1028685218957",
        appId: "1:1028685218957:web:54a794a1920785ceca0ec4"
    };

    // Initialize Firebase
    const firebase = initializeApp(firebaseConfig);
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [errorLogin, setErrorLogin] = useState(false)


    const loginFirebase = () => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, user, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("LOGADO")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

    useEffect(() => {

    }, [])

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={style.container}>
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
                value={user}
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
                value={password}
            />

            {
                errorLogin === true ?
                    <View style={style.warningAlert}>
                        <Feather name="alert-circle" size={24} color="black" style={style.wargningIcon} />
                        <Text style={style.warningText}>Email ou senha inválidos</Text>
                    </View>
                    :
                    <View></View>
            }


            {user == "" || password == ""
                ?
                <TouchableOpacity
                    disabled={true}
                    style={style.button}>
                    <Text style={style.TextButton}>Login</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity
                    style={style.button}
                    onPress={loginFirebase}>
                    <Text style={style.TextButton}>Login</Text>
                </TouchableOpacity>
            }


            <Text style={style.Text2}
            >Não tem conta ainda?
                <Text
                    style={style.TextButton2} onPress={() => navigation.navigate('Cadastro')}>
                    Fazer /Cadastro
                </Text>
            </Text>

        </KeyboardAvoidingView >
    );
}


//Css da página
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

export default TelaLogin;