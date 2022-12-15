import { useState } from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function Home() {
  const [cepInfo, setCepInfo] = useState({});
  const [cepSearch, setCepSearch] = useState("");

  function handleCepSearch(cep: string) {
    console.log(cep);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CEP"
        placeholderTextColor="#6B6B6B"
        value={cepSearch}
        onChangeText={(cep) => setCepSearch(cep)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Consultar CEP</Text>
      </TouchableOpacity>

      <View style={styles.cepCard}>
        <Text style={styles.cepCardTitle}>As informações do CEP são:</Text>
        <Text style={styles.cepCardText}>CEP: {cepInfo.cep}</Text>
        <Text style={styles.cepCardText}>Logradouro: {cepInfo.logradouro}</Text>
        <Text style={styles.cepCardText}>Bairro: {cepInfo.bairro}</Text>
        <Text style={styles.cepCardText}>Cidade: {cepInfo.localidade}</Text>
        <Text style={styles.cepCardText}>Estado: {cepInfo.uf}</Text>
      </View>
    </View>
  );
}
