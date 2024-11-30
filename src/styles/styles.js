import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Para dimensões dinâmicas

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc', // Cor de fundo mais suave e agradável
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start', // Alinhamento mais natural
  },
  title: {
    fontSize: 32, // Tamanho grande para o título, com boa legibilidade
    fontWeight: '700', // Peso forte para destaque
    color: '#0056c6', // Cor consistente com o design
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.8, // Aumenta o espaçamento das letras
    fontFamily: 'Roboto', // Fonte mais séria e limpa
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 15,
    borderRadius: 16, // Bordas arredondadas para suavizar o design
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 10, // Efeito de sombra para destacar os itens
    width: width - 40, // Largura dinâmica de acordo com a tela
    justifyContent: 'center',
  },
  item: {
    fontSize: 20,
    color: '#34495e', // Cor mais neutra para o texto
    marginBottom: 15,
    letterSpacing: 0.5,
    fontFamily: 'Roboto',
  },
  optionButton: {
    backgroundColor: '#317de0', // Cor principal consistente para botões
    paddingVertical: 10,
    borderRadius: 120,
    marginVertical: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    transform: [{ scale: 1 }],
    transition: 'transform 0.3s ease', // Efeito de transformação no toque
  },
  optionButtonActive: {
    transform: [{ scale: 1.05 }], // Leve efeito de crescimento ao ser pressionado
  },
  optionText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Roboto',
  },
  fullScreenItemContainer: {
    width: width - 40,
    backgroundColor: '#fff',
    padding: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 12,
  },
  highlightedQuestion: {
    width: '100%',
    fontSize: 26,
    fontWeight: '700',
    color: '#07894a',
    marginBottom: 10,
    textAlign: 'center',
    backgroundColor: '#00bf63',
    padding: 8,
    borderRadius: 10,
    fontFamily: 'Roboto',
  },
  optionsContainer: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  statText: {
    fontSize: 16,
    color: '#fff',
    paddingVertical: 8,
    paddingLeft: 15,
    fontFamily: 'Roboto',
  },
  statNumber: {
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    marginLeft: 15,
    fontFamily: 'Roboto',
  },
  statButton: {
    backgroundColor: '#0056c6', // Cor de destaque para as estatísticas
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    flexDirection: 'row',
    marginBottom: 20,
    marginRight: 15,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  progressIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#9b59b6',
    fontFamily: 'Roboto',
  },
  difficultyCircle: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#07894a',
  },
  difficultyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 30,
  },
  progressBar: {
    width: 150,
    height: 15,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  flatListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemSeparator: {
    width: 40,
  },
  optionSelected: {
    backgroundColor: '#FFEB3B', // Cor amarela para opção selecionada
  },
  optionCorrect: {
    backgroundColor: '#388E3C', // Verde mais intenso para respostas corretas
  },
  optionWrong: {
    backgroundColor: '#F44336', // Vermelho para respostas erradas
  },
  icon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
});
