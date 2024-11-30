import { Alert, Text, View, Pressable, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useCallback, useMemo } from 'react';
import styles from '../styles/styles';

// Função para determinar a cor com base no nível de dificuldade
const getDifficultyColor = (level) => {
  switch (level) {
    case 'facil':
      return '#3CB371'; // Green
    case 'medio':
      return '#F0E68C'; // Yellow
    case 'dificil':
      return '#FF6347'; // Red
    default:
      return '#000'; // Default black
  }
};

export const CardQuestion = ({ handlePress, item, index, total }) => {
  // Calcular a cor da dificuldade apenas quando necessário
  const difficultyColor = useMemo(() => getDifficultyColor(item.nivel_dificuldade), [item.nivel_dificuldade]);

  // Função que trata a resposta e exibe o alerta
  const onPressHandler = useCallback(
    (resposta, item) => {
      const feedback = handlePress(resposta, item); // Retorna o feedback do exercício
      Alert.alert('Resultado', feedback); // Exibe o feedback ao usuário
    },
    [handlePress]
  );

  return (
    <View style={{flex:1}}>
      <View
        style={[
          styles.fullScreenItemContainer,
          { backgroundColor: item.feito ? '#bbb' : '#fff' }, // Modifica a cor do fundo dependendo do status 'feito'
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          {/* Barra de progresso */}
          <View style={styles.progressBarContainer}>
            <FontAwesome
              name="tasks"
              size={16}
              color={item.feito && !item.acertou ? 'red' : 'black'} // Cor do ícone de status
            />
            <Text style={styles.progressText}>
              {index + 1} | {total} {/* Mostra o número do exercício atual e total */}
            </Text>
          </View>

          {/* Indicador de dificuldade */}
          <View
            style={[styles.difficultyCircle, { backgroundColor: difficultyColor }]}
          >
            <Text style={styles.difficultyText}>{item.nivel_dificuldade}</Text>
          </View>
        </View>

        {/* Pergunta destacada */}
        <Text style={styles.highlightedQuestion}>{item.pergunta}</Text>

        <View style={styles.optionsContainer}>
          {/* Mapeia as respostas e gera botões para cada uma */}
          {item.respostas.map((resposta, idx) => (
            <Pressable
              key={idx}
              onPress={() => onPressHandler(resposta, item)} // Chama a função de tratamento da resposta
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>{resposta.texto}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};
