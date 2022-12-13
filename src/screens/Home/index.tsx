import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Home(){
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite seu CEP"
                placeholderTextColor="#6B6B6B"
            />

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Consultar CEP</Text>
        </TouchableOpacity>
        </View>
    )
}