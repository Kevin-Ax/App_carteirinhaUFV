import { TouchableOpacity, View, StyleSheet, Text, Image, KeyboardAvoidingView, Platform, Linking } from 'react-native';
import Barcode from "@kichiyaki/react-native-barcode-generator";
import { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign, Feather } from '@expo/vector-icons';
function TelaMain() {
    const [credits, setCredit] = useState(54.50)
    const [holder, setHolder] = useState("54.50")
    const [errorCredit, setErrorCredit] = useState(false)
    const [matCode, setMatCode] = useState("")

    function goToSapiens() {
        Linking.openURL("https://sso.acesso.ufv.br/auth/login?service=https%3A%2F%2Fsso.acesso.ufv.br%2Fauth%2Foauth2.0%2FcallbackAuthorize%3Fclient_id%3Dguardiao_cas_usuario%26redirect_uri%3Dhttps%253A%252F%252Fsso.guardiao.ufv.br%252Fauth%252Flogin%253Fclient_name%253Dpessoa%26response_type%3Dcode%26client_name%3DCasOAuthClient")
    }

    function goToMoodle() {
        Linking.openURL("https://ava.ufv.br/login/index.php")
    }

    const newCredit = () => {
        setCredit(parseFloat(holder))
        setErrorCredit(false)
    }

    const discountLunch = () => {
        let newValue = credits - 5.40
        if (newValue < 0) {
            setErrorCredit(true)
        } else {
            setErrorCredit(false)
            let newValue1 = newValue.toFixed(2)
            setCredit(parseFloat(newValue1))
        }
    }
    const discountAlternative = () => {
        let newValue = credits - 2.51
        if (newValue < 0) {
            setErrorCredit(true)
        } else {
            setErrorCredit(false)
            let newValue1 = newValue.toFixed(2)
            setCredit(parseFloat(newValue1))
        }
    }

    // const findValue = async (key) =>{
    //    const code = await useAsyncStorage.getItem(key);
    //    setMatCode(code);
    // }

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
            <View style={style.buttonsView}>

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
            </View>
            <Barcode
                style={style.BarCode}
                // value={findValue('key')}
                value={'102036'}
                format="CODE39"
            />
            <View style={style.CreditDisplay}>

                <Text style={style.Text}>
                    R${credits}
                </Text>

            </View>
            <View style={style.CreditView}>
                <View style={style.CreditButton}>
                    <TextInput style={style.inputText} onChangeText={(text) => setHolder(text)}></TextInput>
                    <TouchableOpacity style={style.EditButton} onPress={newCredit}>

                        <AntDesign name='edit' size={24} color='white' style={style.Icon}></AntDesign>
                    </TouchableOpacity>
                </View>
                <View style={style.CreditButton}>

                    <TouchableOpacity style={style.DiscontButton} onPress={discountLunch}>
                        <Text style={style.Text2}>
                            Descontar           Almoço/Janta
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.EditButton} onPress={discountAlternative}>
                        <Text style={style.Text2}>
                            Descontar                   Café da manhã/MU
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {
                errorCredit === true ?
                    <View style={style.warningAlert}>
                        <Feather name="alert-circle" size={24} color="black" style={style.wargningIcon} />
                        <Text style={style.warningText}>Você não possui créditos suficientes</Text>
                    </View>
                    :
                    <View></View>
            }
        </View >
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
        marginTop: -230,
        marginBottom: 130,
    },
    background: {
        alignSelf: 'center',
        width: '100%',
        height: '81%',
        marginTop: -460,
        borderRadius: 80,
    },
    Text: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 20,
        marginTop: 5,
        paddingTop: 0,
    },
    Text2: {
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        fontSize: 12,
        marginTop: 5,
        paddingTop: 0,
    },
    Title: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 28,
        marginTop: -100
    },
    BarCode: {
        alignSelf: 'center',
        width: '65%',
        borderWidth: 2,
        borderColor: '#A33B39'
    },
    Saudations: {
        fontSize: 24,
        alignSelf: 'center',
        paddingTop: 120,
        paddingBottom: 10,
        marginRight: 160,
    },
    buttonsView: {
        alignSelf: 'center',
        flexDirection: 'row',
        height: '20%',
        alignContent: 'space-between',
        marginTop: 10
    },
    buttonSapies: {
        alignSelf: 'center',
        width: '35%',
        height: '28.7%',
        backgroundColor: '#545F77',
        borderRadius: 60,
        marginRight: 22.5
    },
    buttonMoodle: {
        alignSelf: 'center',
        width: '35%',
        height: '28.7%',
        backgroundColor: '#A33B39',
        borderRadius: 60,
        marginLeft: 22.5
    },
    CreditDisplay: {
        alignSelf: 'center',
        flexDirection: 'column',
        height: '6%',
        width: '50%',
        alignContent: 'space-between',
        backgroundColor: '#A33B39',
        borderRadius: 60,
        textAlign: 'center',
        marginTop: 5
    },
    CreditButton: {
        width: '50%',
        padding: 5,
        margin: 10,
    },
    inputText: {
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
        height: '35%',
        backgroundColor: 'white',
        marginVertical: '4%',
        marginTop: 12,
        marginBottom: 0,
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: '#A33B39'
    },
    CreditView: {
        flexDirection: 'row',
        height: '20%',
        width: '80%',
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
    },
    EditButton: {
        marginTop: 0,
        alignSelf: 'center',
        width: '100%',
        height: '35%',
        backgroundColor: '#545F77',
        borderWidth: 2,
        borderColor: '#A33B39',
        borderTopWidth: 0
    },
    DiscontButton: {
        marginTop: 12,
        alignSelf: 'center',
        width: '100%',
        height: '35%',
        backgroundColor: '#A33B39',
        borderWidth: 2,
        borderColor: '#A33B39',
        borderTopWidth: 0
    },
    Icon: {
        alignSelf: 'center',
        marginTop: 5
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

export default TelaMain;