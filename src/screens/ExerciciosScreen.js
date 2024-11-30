import { View, Text, FlatList, Pressable, Alert } from 'react-native';
import styles from '../styles/styles';
import { CardQuestion } from '../components/CardQuestion';
import {
  countExerciciosCertos,
  countExerciciosFeitos,
  getExercicios,
  updateAcertouStatus,
  updateFeitoStatus,
} from '../api/bancoDeDados';
import { useState, useEffect, useCallback, useContext } from 'react';
import { MainContext } from '../context/MainContext';

export default function ExerciciosScreen() {
  const [exercicios, setExercicios] = useState([]);
  const [exerciciosCertos, setExerciciosCertos] = useState(0);
  const [exerciciosFeitos, setExerciciosFeitos] = useState(0);
  const { state, authContext } = useContext(MainContext);
  const { flag } = authContext;

  const fetchData = useCallback(async () => {
    try {
      const exercicios = await getExercicios(state.user.id);
      setExercicios(exercicios);
      
      const certos = await countExerciciosCertos(state.user.id);
      setExerciciosCertos(certos);
      
      const feitos = await countExerciciosFeitos(state.user.id);
      setExerciciosFeitos(feitos);
    } catch (error) {
      console.error('Erro ao buscar os dados dos exercícios:', error);
    }
  }, [state.user.id]);

  useEffect(() => {
    fetchData();
  }, [fetchData, state.flag]);

  const corrigeExercicio = (resposta, item) => {
    if (resposta.correta === true) {
      updateAcertouStatus(item.id, true);
      updateFeitoStatus(item.id, true);
      flag();
      return item.feedback.mensagens.acerto;
    } else {
      updateFeitoStatus(item.id, true);
      flag();
      return item.feedback.mensagens.erro;
    }
  };

  const mostrarStats = (type) => {
    const ids = exercicios
      .filter(ex => ex[type] === true)
      .map(ex => ex.id)
      .join(', ');
    
    const title = type === 'acertou' ? 'Exercícios Feitos com Sucesso' : 'Exercícios Feitos';
    Alert.alert(title, ids || 'Nenhum exercício encontrado');
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Pressable
          style={styles.statButton}
          onPress={() => mostrarStats('acertou')}>
          <Text style={styles.statText}>Acertos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#32cd32' }]}>
            {exerciciosCertos}
          </Text>
        </Pressable>
        <Pressable
          style={styles.statButton}
          onPress={() => mostrarStats('feito')}>
          <Text style={styles.statText}>Feitos</Text>
          <Text style={[styles.statNumber, { backgroundColor: '#a0522d' }]}>
            {exerciciosFeitos}
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={exercicios}
        renderItem={({ item, index }) => (
          <CardQuestion
            handlePress={corrigeExercicio}
            item={item}
            index={index}
            total={exercicios.length}
          />
        )}
        keyExtractor={item => item.id.toString()}
        pagingEnabled
        horizontal
        snapToAlignment="center"
        contentContainerStyle={styles.flatListContainer}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </View>
  );
}
