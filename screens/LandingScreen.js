import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, ScrollView, Pressable, } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faEye } from '@fortawesome/free-solid-svg-icons/faEye';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
// import { createItem } from '../app/firebase';
import { VITE_API_KEY } from '@env';

const Stack = createStackNavigator();

const LandingStack = () => {
    console.log('1111111111111', process.env.VITE_API_KEY)
    console.log('222222222', VITE_API_KEY)

    return (
        <NavigationContainer independent="true">

            <Stack.Navigator>
                <Stack.Screen
                    name="Landing page"
                    component={LandingPage}
                    options={{
                        title: 'Landing page',
                    }}
                />

                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{
                        title: 'Login',
                    }}
                />


                <Stack.Screen
                    name="Signup"
                    component={SignupScreen}
                    options={{
                        title: 'Signup',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

const LandingPage = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.container}>
                    <View>
                        <View style={{ width: 100, height: 100, borderRadius: 100, backgroundColor: "navy", alignSelf: "center" }}></View>
                        <Text style={{ fontSize: 50, color: "navy", textAlign: "center" }}>coosmos</Text>
                        <Text style={{ width: 300, textAlign: "center", fontSize: 16 }}>Descubre conexiones reales a través de la astrologia. ¿Estás list@?</Text>
                    </View>

                    <View style={{ gap: 15 }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Login')}
                        >
                            <Text style={styles.buttonText}>Inicia sesión</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                        >
                            <Text style={styles.textButtonText}>¿No tienes cuenta? Crea una nueva</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView >
    );
};


const LoginScreen = () => {
    const [email, setEmail] = useState("c")
    const [password, setPassword] = useState('b')
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <View style={{ width: 250, alignSelf: "center", gap: 20, flex: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 24, color: "navy" }}>¡Hola de nuevo!</Text>
                        <TextInput name="email" label="Inserta tu correo electrónico" placeholder="correo electrónico" onChangeText={(e) => setEmail(e)} />
                        <View>
                            <TextInput name="contraseña" label="Inserta tu contraseña" placeholder="contraseña" onChangeText={(e) => setPassword(e)} />
                            {/* <FontAwesomeIcon icon={faEye} style={{ position: "absolute", top: 42, right: 15 }} /> */}
                            <Text style={{ fontSize: 12 }}>¿Has olvidado tu contraseña?</Text>
                        </View>
                        <TouchableOpacity
                            style={{ ...styles.button, marginBottom: 30 }}
                            onPress={console.log(1)}>
                            <Text style={styles.buttonText}>Inicia sesión</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ position: "absolute", bottom: 10, alignSelf: "center", }}>Sobre coosmos</Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

const SignupScreen = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: "white" }}>

                    <View style={{ width: 250, alignSelf: "center", gap: 20, flex: 1, justifyContent: "center" }}>
                        <Text style={{ fontSize: 40, color: "navy", textAlign: "center" }}>1/3</Text>

                        <Text style={{ fontSize: 24, color: "navy" }}>¡Crea tu nueva cuenta!</Text>
                        <TextInput name="name"
                            label="Inserta tu email"
                            placeholder="Correo"
                            onChangeText={(e) => setEmail(e)}
                        />
                        <View>
                            <TextInput name="Password" label="" placeholder="Contraseña" onChangeText={(e) => setPassword(e)} />
                        </View>
                        <Pressable
                            style={{ ...styles.button, width: 40, alignSelf: "center", marginBottom: 30 }}
                            onPress={() => { /*createItem({ email, password })*/ }}        >
                            <Text style={styles.buttonText}>
                                {/* <FontAwesomeIcon icon={faArrowRight} style={{ position: "absolute", bottom: 45, right: 15, color: "white" }} /> */}
                            </Text>
                        </Pressable>
                    </View>

                    <View><Text style={{ position: "absolute", bottom: 10, alignSelf: "center", }}>Sobre coosmos</Text></View>
                </View>
            </ScrollView >
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },

    button: {
        backgroundColor: 'navy',
        padding: 10,
        borderRadius: 5,

        // width: 300
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: "center",

    },

    textButtonText: {
        fontSize: 16,
        color: 'black',
        textDecorationLine: 'underline',
        alignSelf: "center"
    },

    textInput: { backgroundColor: "white", borderColor: "navy", borderWidth: 1, borderRadius: 8, paddingLeft: 10, padding: 5, marginTop: 10, marginBottom: 10 }
});

export default LandingStack;