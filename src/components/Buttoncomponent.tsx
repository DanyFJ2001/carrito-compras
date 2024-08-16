
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/Apptheme';

//interface - props
interface Props {
    textButton: string;
    onPress: () => void;    
}

export const ButtonComponent = ({ textButton, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}>
            <Text style={styles.buttonText}>{textButton}</Text>
        </TouchableOpacity>
    )
}