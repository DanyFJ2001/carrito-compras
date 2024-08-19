import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native'
import { styles } from '../../theme/Apptheme'
import { Car } from '../HomeScreen';
interface Props {
    car: Car[]; 
}

export const Prueba = ({car}: Props) => {
  return (
    <FlatList
                        data={car}
                        renderItem={({ item }) => (
                            <View style={styles.productRow}>
                              
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
   
  )
}
