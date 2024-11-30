import { View, Text, StyleSheet, Image } from "react-native";
import styles from "../styles/styles";

export default function JogosScreen() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: 30, color: '#4CAF50' }]}>Jogos Educativos</Text>
      
      
      
      <Text style={[styles.text, { fontSize: 18, color: '#555', marginTop: 20 }]}>
        Em breve, jogos interativos para aprender se tornarão disponíveis! Fique ligado.
      </Text>
    </View>
  );
}

const customStyles = StyleSheet.create({
  gameImage: {
    width: 150,
    height: 150,
    marginVertical: 30,
  },
});
