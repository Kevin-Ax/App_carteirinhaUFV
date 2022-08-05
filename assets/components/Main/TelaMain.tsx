import { TouchableOpacity, View,  StyleSheet, Text, Image, KeyboardAvoidingView, Platform, Linking } from 'react-native';
import Barcode from "@kichiyaki/react-native-barcode-generator";
import { useState } from 'react';

function TelaMain() {

    const [matCode, setMatCode] = useState("")  //Variável para pegar a matricula 

    function goToSapiens(){
        Linking.openURL("https://sso.acesso.ufv.br/auth/login?service=https%3A%2F%2Fsso.acesso.ufv.br%2Fauth%2Foauth2.0%2FcallbackAuthorize%3Fclient_id%3Dguardiao_cas_usuario%26redirect_uri%3Dhttps%253A%252F%252Fsso.guardiao.ufv.br%252Fauth%252Flogin%253Fclient_name%253Dpessoa%26response_type%3Dcode%26client_name%3DCasOAuthClient")
    }

    function goToMoodle(){
        Linking.openURL("https://ava.ufv.br/login/index.php")
    }

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
                style={style.Saudations}
                >Olá Zé!
            </Text>
            <Barcode 
                style={style.BarCode} 
                value={"102027"} //Pegar matricula do Usuário
                format="CODE39"
            />
            <Text style={style.buttonsView}>
                <TouchableOpacity 
                    style={style.buttonSapies}
                    onPress={goToSapiens} 
                    ><Text
                        style={style.Text}
                        >Sapiens
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={style.buttonMoodle}
                onPress={goToMoodle}
                    ><Text
                        style={style.Text}
                        >Moodle
                    </Text>
                </TouchableOpacity>
            </Text>
            <Text
                style={style.TextFooter}
                >Todos os direitos reservados aos aluos de ciência da computação @Kevin_Alexandre, @PauloDezengrine, e @João
            </Text>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#e6be8a',
    },
    logo: {
        alignSelf: 'center',
        width: '65%',
        height: '15%',
        marginBottom: 130,
    },
    background: {
        alignSelf: 'center',
        width: '100%',
        height: '81%',
        marginTop: -460,
        borderRadius: 80,
    },
    Text:{
        alignSelf: 'center',
        color: 'white',
        fontSize: 26,
        marginTop: 15,
        paddingTop: 50,

    },
    TextFooter:{
        fontSize:8,
        fontStyle:'italic',
        color:'black',
        alignSelf:'center',
        paddingTop:80
    },
    Title: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 28,
        marginTop: -100
    },
    BarCode:{
        alignSelf:'center',
        width:'65%',
    },
    Saudations:{
        fontSize:24,
        alignSelf:'center',
        paddingTop:120,
        paddingBottom:10,
        marginRight:160,
    },
    buttonsView:{
        alignSelf:'center',
        flexDirection:'row',
        height:'20%',
        alignContent:'space-between',
        marginTop:10
    },
    buttonSapies:{
        alignSelf: 'center',
        width: '35%',
        height: '28.7%',
        backgroundColor: '#545F77',
        borderRadius: 60,
        marginRight:22.5
    },
    buttonMoodle:{
        alignSelf: 'center',
        width: '35%',
        height: '28.7%',
        backgroundColor: '#A33B39',
        borderRadius: 60,
        marginLeft:22.5
    }
})

export default TelaMain;