import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECUNDARY_COLOR } from "../common/constans";


//Gestionar los estilos
export const styles = StyleSheet.create({
    globalTitle: {
        color: SECUNDARY_COLOR,
        fontSize: 27,
        paddingHorizontal: 30,
        paddingVertical: 30,
        fontWeight: 'bold'
    },
    contentBody: {
        backgroundColor: SECUNDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 40
    },
    button2: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)', 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        top:100},
    titleHeaderBody: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    textBody: {
        fontSize: 15
    },
    inputText: {
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10
    },
    contentInput: {
        marginTop: 30,
        gap: 10
    },
    button: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 30
    },
    buttonText: {
        color: SECUNDARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    iconPassword:{
        position:'absolute',
        right:20,
        zIndex:1, 
        marginTop:10
    },
    textRedirection:{
        marginTop:30,
        fontSize:16,
        color:PRIMARY_COLOR,
        fontWeight:'bold',
        textAlign:'center'
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        top:-200
      },
     
      buttonText1: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
});