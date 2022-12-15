import { useState } from "react";

import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";

import api from "../../services/api";

export function Home() {
  const [cepInfo, setCepInfo] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  });
  const [cepSearch, setCepSearch] = useState("");

  const getCep = async () => {
    try {
      const response = await api.get(`${cepSearch}/json/`);
      setCepInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
      <TouchableOpacity style={styles.button} onPress={getCep}>
        <Text style={styles.buttonText}>Consultar CEP</Text>
      </TouchableOpacity>

      <View style={styles.cepCard}>
        <Text style={styles.cepCardTitle}>As informações do CEP são:</Text>
        <Text style={styles.cepCardText}>CEP: {cepInfo.cep}</Text>
        <Text style={styles.cepCardText}>Logradouro: {cepInfo.logradouro}</Text>
        <Text style={styles.cepCardText}>Complemento: {cepInfo.complemento}</Text>
        <Text style={styles.cepCardText}>Bairro: {cepInfo.bairro}</Text>
        <Text style={styles.cepCardText}>Cidade: {cepInfo.localidade}</Text>
        <Text style={styles.cepCardText}>Estado: {cepInfo.uf}</Text>
      </View>
    </View>
  );
}
