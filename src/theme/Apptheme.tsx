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
    iconPassword: {
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 10
    },
    textRedirection: {
        marginTop: 30,
        fontSize: 16,
        color: PRIMARY_COLOR,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    contentCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 15
    },
    titleCard: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15
    },
    imageCard: {
        width: 70,
        height: 70
    },
    iconCard: {
        flex: 1,
        alignItems: 'flex-end'
    },
    contentPrincipal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    contentModal: {
        padding: 25,
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    headModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        padding: 10
    },
    titleModal: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
    },
    imageModal: {
        width: 200,
        height: 200,
    },
    contentQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        width: 50,
        height: 50,
        borderRadius: 100,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    textButtonQuantity: {
        color: SECUNDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    },
    buttonAddCar: {
        marginTop: 15,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 5,
        paddingVertical: 10,
        alignItems: 'center'
    },
    textButtonAddCar: {
        color: SECUNDARY_COLOR,
        fontWeight: 'bold'
    },
    messageStock: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#a92424',
        textAlign: 'center'
    },
    contentHeaderHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconCardHome: {
        flex: 1,
        alignItems: 'flex-end',
        paddingHorizontal: 33
    },
    textIconCard: {
        backgroundColor: SECUNDARY_COLOR,
        borderRadius: 20,
        paddingHorizontal: 5,
        fontSize: 13,
        fontWeight: 'bold'
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerInformation: {
        flexDirection: 'row',
    },
    textInformation: {
        marginHorizontal: 10
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
     
      backgroundInicio: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      containerInicio: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      textTitulo: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
      },
      botonAccion: {
        backgroundColor: '#E0E0E0', // Gris claro para combinar con el fondo
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginVertical: 10,
      },
      textoBotonAccion: {
        fontSize: 18,
        color: '#333', // Un tono más oscuro para el texto
      },
      logo:{
        width:150,
        height:150
      },
      logo2:{

        width:300,
        height:300,
        alignItems:"center",
        justifyContent:"center"
      },
      image: {
        width: 150,
        height: 150,
        right: 120
      },
      mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e9dada',
      },
      headerText: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 50,
        color: '#353535',
      },
      buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 50,
      },
      loginButton: {
        flex: 1,
        backgroundColor: '#353535',
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
      },
      loginButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      registerButton: {
        flex: 1,
        backgroundColor: '#FA5A50',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
      },
      registerButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
      },
      footerSection: {
        alignItems: 'center',
        marginTop: 50,
      },
      footerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#353535',
      },
      footerText: {
        fontSize: 16,
        color: '#353535',
        textAlign: 'center',
        marginTop: 10,
      },
      perrito:{
        width:50,
        height:50,
        left:17,
        
      },
      
    textTotalPay: {
        marginTop: 7,
        fontSize: 16,
        fontWeight: 'bold'
    }

});