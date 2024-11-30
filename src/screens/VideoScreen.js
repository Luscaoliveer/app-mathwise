import { useState, useCallback } from 'react';
import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import styles from '../styles/styles';
import { getVideoAulas } from '../api/dados';

function VideosScreen() {
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const videoAulas = getVideoAulas();
  const width = Dimensions.get('window').width - 30;

  const handleVideoSelect = useCallback(async (videoId) => {
    setIsLoading(false);
    setSelectedVideoId(videoId);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Video Aulas</Text>

      {/* Lista de Vídeos */}
      <FlatList
        data={videoAulas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={localStyles.button}
            onPress={() => handleVideoSelect(item.videoId)}
            activeOpacity={0.7} // Effect when the button is pressed
          >
            <Text style={localStyles.buttonText} numberOfLines={1} ellipsizeMode="tail">
              {item.titulo}
            </Text>
          </TouchableOpacity>
        )}
        style={localStyles.list}
      />

      {/* Carregamento */}
      {isLoading && (
        <View style={localStyles.loadingContainer}>
          <ActivityIndicator size="large" color="#4CAF50" />
        </View>
      )}

      {/* Exibe o Vídeo Selecionado */}
      {selectedVideoId && !isLoading && (
        <View style={localStyles.videoContainer}>
          <YoutubeIframe
            key={selectedVideoId}
            width={width}
            height={200}
            videoId={selectedVideoId}
            onReady={() => setIsLoading(false)} // Quando o vídeo estiver pronto, removemos o carregamento
          />
          <Text style={localStyles.videoTitle}>
            {videoAulas.find((v) => v.videoId === selectedVideoId)?.titulo}
          </Text>
        </View>
      )}
    </View>
  );
}

const localStyles = StyleSheet.create({
  list: {
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#dcdcdc',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Sombra no Android
    transition: 'background-color 0.3s ease', // Transição para o efeito de cor
  },
  buttonText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  videoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#333',
    marginBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
});

export default VideosScreen;
