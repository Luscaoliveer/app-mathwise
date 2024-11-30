import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

export function PizzaChart({ data }) {
  const handleSlicePress = (item) => {
    // Exibe a fatia clicada com informações detalhadas
    alert(`Você clicou em: ${item.label}\nValor: ${item.value}`);
  };

  return (
    <View style={styles.container}>
      <PieChart
        data={data}
        radius={100}  // Define o raio do gráfico para dar mais espaço ao layout
        innerRadius={60}  // Cria um espaço vazio no centro (gráfico em forma de anel)
        strokeWidth={10}  // Adiciona a espessura ao contorno das fatias
        duration={800}  // Tempo da animação para transição suave
        showText={true}  // Exibe as porcentagens dentro de cada fatia
        textSize={14}  // Tamanho do texto exibido dentro das fatias
        onPressItem={handleSlicePress}  // Ativa a interatividade ao clicar nas fatias
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    marginVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 15, // Borda arredondada para o gráfico
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});
