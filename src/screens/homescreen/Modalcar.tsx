import React from 'react';
import { FlatList, Image, Modal, Text, TouchableOpacity, useWindowDimensions, View, StyleSheet } from 'react-native';
import { Car } from '../HomeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../common/constans';
import { styles } from '../../theme/Apptheme';

// Interface - Props
interface Props {
    isVisible: boolean;
    setShowModal: () => void; 
    car: Car[];
    carrocero: () => void; }

export const ModalCar = ({ isVisible, car, setShowModal, carrocero }: Props) => {
    const { width } = useWindowDimensions();

    // Función para calcular el total
    const totalPay = () => {
        let total: number = 0;
        car.forEach(product => {
            total += product.price * product.totalQuantity;
        });
        return total;
    };

    // Función para manejar la compra
    const handleSendInfo = () => {
        setShowModal();
        carrocero();
    };

    return (
        <Modal visible={isVisible} animationType='fade' transparent={true}>
            <View style={styles.modalContainer}>
                <View style={{
                    ...styles.modalContent,
                    width: width * 0.80
                }}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Mis Productos</Text>
                        <View style={styles.closeButtonContainer}>
                            <Icon
                                name='cancel'
                                size={27}
                                color={PRIMARY_COLOR}
                                onPress={setShowModal} />
                        </View>
                    </View>
                    <View style={styles.tableHeader}>
                        <Text style={styles.tableHeaderTitle}>Producto</Text>
                        <View style={styles.tableHeaderInfo}>
                            <Text style={styles.infoText}>Prec.</Text>
                            <Text style={styles.infoText}>Cant.</Text>
                            <Text style={styles.infoText}>Total</Text>
                        </View>
                    </View>

                    <FlatList
                        data={car}
                        renderItem={({ item }) => (
                            <View style={styles.productRow}>
                                <Image
                                    source={{ uri: item.pathImage }}
                                    style={styles.productImage}
                                />
                                <View style={styles.productDetails}>
                                    <Text style={styles.productName}>{item.name}</Text>
                                    <View style={styles.productData}>
                                        <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
                                        <Text style={styles.productQuantity}>{item.totalQuantity}</Text>
                                        <Text style={styles.productTotal}>{(item.price * item.totalQuantity).toFixed(2)}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />

                    <View style={styles.totalAmountContainer}>
                        <Text style={styles.totalAmountText}>
                            TOTAL A PAGAR: ${totalPay().toFixed(2)}
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={handleSendInfo}
                        style={styles.purchaseButton}>
                        <Text style={styles.purchaseButtonText}>COMPRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};