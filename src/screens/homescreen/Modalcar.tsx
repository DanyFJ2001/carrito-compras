import React from 'react';
import { FlatList, Modal, Text,  TouchableOpacity,  useWindowDimensions, View } from 'react-native';
import { Car, Product } from '../HomeScreen';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/Apptheme';
import { PRIMARY_COLOR } from '../../common/constans';



//interface - props
interface Props {
    isVisible: boolean;
    setShowModal: () => void; //función para cerrar el modal
    car: Car[]; 
    carrocero:()=>void; //arreglo con la lista de productos del carrito

}


export const ModalCar = ({ isVisible, car, setShowModal,carrocero }: Props) => {
    const { width } = useWindowDimensions();
    //uncion para calcular el total
    const totalPay = () => {
        //ACUMULADOR 
        let total: number = 0;
        car.forEach(product => {
            total += product.price * product.totalQuantity

        });
        return total;
    }
    //
    const handleSendInfo = () => {
        //cerrar el modal
        setShowModal();
        carrocero();
    }
    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.contentPrincipal}>
                <View style={{
                    ...styles.contentModal,
                    width: width * 0.80
                }}>
                    <View style={styles.headModal}>
                        <Text style={styles.titleModal}>Mis Productos</Text>
                        <View style={styles.iconCard}>
                            <Icon
                                name='cancel'
                                size={27}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={styles.headerTable}>
                        <Text>Producto</Text>
                        <View style={styles.headerInformation}>

                            <Text
                                style={
                                    {
                                        ...styles.textInformation,
                                        marginHorizontal: 10
                                    }}>
                                Prec.</Text>
                            <Text style={
                                {
                                    ...styles.textInformation,
                                    marginHorizontal: 10
                                }}>Cant.</Text>
                            <Text style={
                                {
                                    ...styles.textInformation,
                                    marginHorizontal: 10
                                }}>Total</Text>
                        </View>
                    </View>

                    <FlatList
                        data={car}
                        renderItem={({ item }) =>
                            <View style={styles.headerTable}>

                                <Text >{item.name}</Text>
                                <View style={styles.headerInformation}>
                                    <Text style={{ marginHorizontal: 10 }}>
                                        {item.price.toFixed(2)}</Text>
                                    <Text style={{ marginHorizontal: 27 }}>
                                        {item.totalQuantity}</Text>
                                    <Text style={{ marginHorizontal: 10 }}>
                                        {(item.price * item.totalQuantity).toFixed(2)}</Text>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.id.toString()} />

                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={styles.textTotalPay}>
                            TOTAL A PAGAR :{totalPay().toFixed(2)}
                        </Text>
                    </View>
                  <TouchableOpacity
                  onPress={handleSendInfo}
                  style={styles.buttonAddCar}>
                    
                        <Text style={styles.textButtonAddCar}>COMPRAR</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
