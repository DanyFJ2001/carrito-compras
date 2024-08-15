import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../theme/Apptheme';
import { TitleComponent } from '../components/Components';
import { SECUNDARY_COLOR } from '../common/constans';
import { BodyComponent } from '../components/Bodycomponent';
import { CardProduct } from './homescreen/CardProduct';
import { ModalCar } from './homescreen/Modalcar';



//interface - producto
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//interface - arreglo del carrito de compras
export interface Car {
    id: number;
    name: string;
    price: number;
    totalQuantity: number;
}

export const HomeScreen = () => {
    //arreglo de productos
    const products: Product[] = [
        { id: 1, name: 'Michu 85 Gr', price: 18, stock: 5, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/172206697_M.jpg' },
        { id: 2, name: 'NutraPro Gatos ', price: 17.00, stock: 6, pathImage: 'https://purina.com.ec/sites/default/files/styles/simple_card/public/2022-11/cat-chow-gatitos-wet_1.png.webp?itok=fL-To08F' },
        { id: 3, name: 'Pedigree Adult ', price: 20.00, stock: 6, pathImage: 'https://www.ubuy.ec/productimg/?image=aHR0cHM6Ly9pNS53YWxtYXJ0aW1hZ2VzLmNvbS9hc3IvOWI5OWYxZjctZTE0My00NDAzLTljODMtNGU1N2UyOGU1YmM3Ljc2ZTMxZWRjNTU5ZmQ0MTdiZjA0MWY4NjVlZWY4NWVlLmpwZWc.jpg' },
        { id: 4, name: 'Purina Pro ', price: 25.00, stock: 7, pathImage: 'https://products.blains.com/600/84/846057.jpg' },
        { id: 5, name: 'Meow Mix Original ', price: 20.00, stock: 3, pathImage: 'https://i.ebayimg.com/images/g/B0YAAOSwo4xhRJBr/s-l500.jpg' },
        { id: 7, name: 'Hills Science ', price: 18.00, stock: 7, pathImage: 'https://image.chewy.com/is/image/catalog/48900_MAIN._AC_SS300_V1720196503_.jpg' },
        { id: 8, name: 'Royal Canin ', price: 31.00, stock: 3, pathImage: 'https://cdn.royalcanin-weshare-online.io/PyEua2QBaxEApS7LivtQ/v34/16-kitten-b1-ru?fm=jpg&auto=compress' },
    ];

    //hook useState: manipular el estado del arreglo de productos
    const [productsState, setProductsState] = useState(products);

    //hook useSate: manipulas el estado del arreglo del carrito de compras
    const [car, setCar] = useState<Car[]>([]);

    //hook useState: manipular la visualización del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //función para actualizar el stock de productos
    const changeStockProduct = (idProduct: number, quantity: number) => {
        //generar un nuevo arreglo con las actualizaciones del stock
        const updateStock = productsState.map(product => product.id === idProduct
            ? { ...product, stock: product.stock - quantity }
            : product);
        //Actualizar el productsState
        setProductsState(updateStock);
        //llamar la función para agregar al carrito
        addProduct(idProduct, quantity);
    }

    //función para agregar los productos al carrito
    const addProduct = (idProduct: number, quantity: number) => {
        //Buscar el producto que se agregará en el carrito
        const product = productsState.find(product => product.id === idProduct);
        //Controlar si el producto no ha sido encontrado
        if (!product) {
            return;
        }
        //Si el producto ha sido encontrado - generar nuevo objeto producto
        const newProductCar: Car = {
            id: product.id,
            name: product.name,
            price: product.price,
            totalQuantity: quantity
        }
        //Agregar en el arreglo del carrito
        setCar([...car, newProductCar]);
        //console.log(car);
    }


    return (
        <View>



            <View style={styles.contentHeaderHome}>
                <TitleComponent title='Productos' />
                <Image
                    source={require('../imagenes/78.jpg')}
                    style={styles.perrito}
                />
                <View style={styles.iconCardHome}>

                    <Text style={styles.textIconCard}>{car.length}</Text>

                    <Icon
                        name='shopping-cart'
                        size={33}
                        color={SECUNDARY_COLOR}
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} changeStockProduct={changeStockProduct} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponent>
            <ModalCar isVisible={showModal} car={car} setShowModal={() => setShowModal(!showModal)} />


        </View>

    )
}