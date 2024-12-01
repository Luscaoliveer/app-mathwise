import { Text, View, Pressable, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useCallback, useMemo, useState } from 'react';
import styles from '../styles/styles';

// Função para determinar a cor com base no nível de dificuldade
const getDifficultyColor = (level) => {
  switch (level) {
    case 'facil':
      return '#2E8B57'; // Green
    case 'medio':
      return '#FF6347'; // Orange
    case 'dificil':
      return '#DC143C'; // Red
    default:
      return '#000'; // Default black
  }
};

export const CardQuestion = ({ handlePress, item, index, total }) => {
  // Estado para controlar a cor de fundo da tela com base no resultado
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [modalVisible, setModalVisible] = useState(false); // Controla o modal

  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Calcular a cor da dificuldade apenas quando necessário
  const difficultyColor = useMemo(
    () => getDifficultyColor(item.nivel_dificuldade),
    [item.nivel_dificuldade]
  );

  // Função que trata a resposta e exibe o feedback
  const onPressHandler = useCallback(
    (resposta, item) => {
      const feedback = handlePress(resposta, item); // Retorna o feedback do exercício

      // Atualiza a cor de fundo de acordo com a resposta
      if (resposta.correta) {
        setBackgroundColor('#E6E6FA'); // Cor normal para resposta correta
      } else {
        setBackgroundColor('#ffbfb0'); // Cor vermelha para resposta errada
      }

      setFeedbackMessage(feedback); // Define a mensagem do feedback
      setModalVisible(true); // Exibe o modal
    },
    [handlePress]
  );

  return (
    <View
      style={[ 
        styles.fullScreenItemContainer,
        { backgroundColor: backgroundColor }, // Cor de fundo dinâmica
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
            {index + 1} | {total}{' '}
            {/* Mostra o número do exercício atual e total */}
          </Text>
        </View>

        {/* Indicador de dificuldade */}
        <View
          style={[
            styles.difficultyCircle,
            { backgroundColor: difficultyColor },
          ]}
        >
          <Text style={styles.difficultyText}>{item.nivel_dificuldade}</Text>
        </View>
      </View>

      {/* Pergunta destacada */}
      <Text style={[styles.highlightedQuestion, { color: '#000' }]}>{item.pergunta}</Text>

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

      {/* Modal Customizado */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              width: '80%',
              backgroundColor: '#fff',
              padding: 20,
              borderRadius: 15,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 5 },
              shadowOpacity: 0.2,
              shadowRadius: 10,
              elevation: 5,
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 10 }}>
              {feedbackMessage}
            </Text>
            <Pressable
              onPress={() => setModalVisible(false)}
              style={{
                backgroundColor: '#4682B4',
                paddingVertical: 10,
                borderRadius: 60,
                marginTop: 10,
                alignItems: 'center',
              }}
            >
              <Text style={{ color: '#fff', fontSize: 20 }}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
