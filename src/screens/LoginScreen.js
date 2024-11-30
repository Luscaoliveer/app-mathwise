import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  Image
} from 'react-native';
import { MainContext } from '../context/MainContext';
import { useContext } from 'react';

const LoginScreen = () => {
  const [isSigninInProgress, setIsSigninInProgress] = useState(false);
  const { authContext } = useContext(MainContext);
  const { signIn } = authContext;

  return (
    <View style={styles.layout}>
      {/* Logo da aplicação */}
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../../assets/logo_matematicando-fundo-transparente.png")} // Substitua com o caminho correto da sua logo
      />

      {/* Exibe o carregamento enquanto o login está sendo processado */}
      {isSigninInProgress && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}

      <Text style={styles.title}>Bem-vindo à MathWise</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      {/* Botão de login */}
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          setIsSigninInProgress(true);
          try {
            await signIn();
          } catch (e) {
            Alert.alert('Erro', e.message);
          } finally {
            setIsSigninInProgress(false);
          }
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  logo: {
    width: 120, // Tamanho da logo
    height: 120, // Tamanho da logo
    marginBottom: 30, // Espaço entre a logo e o título
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50', // Verde para chamar atenção
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
