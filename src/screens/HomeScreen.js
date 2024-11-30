import { Button, Text, View, Image } from 'react-native';
import styles from '../styles/styles';

export default function HomeScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize: 32 }]}>Que bom ter você de volta!</Text>
      <Text style={[styles.text, { fontSize: 15, marginTop: 20 }]}>
        Explore recomendações personalizadas de vídeo-aulas e exercícios,
        além de um menu com navegação rápida para facilitar seu aprendizado.
      </Text>

      {/* Logo */}
      <Image
        source={require("../../assets/logo_matematicando-fundo-transparente.png")}
        style={{ width: 100, height: 100, marginTop: 20 }}
        resizeMode="contain"
      />

      {/* Espaço antes do botão */}
      <View style={{ marginTop: 30 }} />

      <Button
        title="Iniciar Exercícios"
        onPress={() => {
          navigation.navigate('Exercícios');
        }}
      />
    </View>
  );
}
