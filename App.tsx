import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
    return(
        <View style={styles.container}>
        <View style={styles.acima}>
        <Image source={
        require("./src/imagens/facebook.png")}>
        </Image>
        <Text style={styles.facebook}>Facebook</Text>
        </View>

    <View style={styles.input}>
    <TextInput
    placeholder="E-mail"
    placeholderTextColor ="#A19FA1"
    style={styles.campo}>
    </TextInput>
    <TextInput
    placeholder="Password"
    placeholderTextColor="#A19FA1"
    style={styles.campo}>                    
    </TextInput>
    <View style={styles.tanto}>
    <Text style={{textAlign:"center",
    color:"white",
    fontSize: 24,
    fontFamily: "Roboto",
}}>
    Log In
    </Text>
    </View>
    </View>
            
    <View style={styles.fds}>
    <Text style={styles.texto}>Sing Up for FaceBook</Text>        
    </View>

    <StatusBar style="auto" />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#465CB1",
        textAlign: "center",
        justifyContent: "space-between",
    },
    acima:{
        flex: 1,
        alignItems: "center",
        marginBottom: 31,
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 92,
        marginRight: 61,
    },
    facebook:{
        fontSize: 42.11,
        color: "white",
        marginLeft: 15,
    },
    input:{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 10,
    },
    campo:{
        backgroundColor: "#FFFFFF",
        height: 49,
        width: 319,
        marginBottom: 21,
        paddingHorizontal: 11,
    },
    TextInput:{
        color: "#A19FA1",
        flex: 1,
        paddingRight: 21,
        fontSize: 17,
        fontFamily: "Roboto",
    },
    tanto:{
        width: 320,
        height: 48,
        textAlign: "center",
        backgroundColor: "#213873",
        justifyContent: "center",
    },
    texto:{
        color: "#FFFFFF",
        textAlign: "center",
    },
    fds:{
        justifyContent: "center", 
        marginBottom: 120,
        marginTop: 100,
    },
});