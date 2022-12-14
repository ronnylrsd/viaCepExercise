import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Home(){
    function handleCepSearch(cep: string){
        console.log(cep);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite seu CEP"
                placeholderTextColor="#6B6B6B"
            />

        <TouchableOpacity style={styles.button} onPress={handleCepSearch}>
            <Text style={styles.buttonText}>Consultar CEP</Text>
        </TouchableOpacity>
        </View>
    )
}