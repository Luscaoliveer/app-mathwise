export function getVideoAulas() {
  return [
    {
      id: 1,
      titulo: 'Sistema de Equações - Introdução',
      videoId: '2fJ0UfxYEOY',
    },
    {
      id: 2,
      titulo:
        'Sistema de Equações - Método de Substituição',
      videoId: 'kUpxzYf-Iz4',
    },
    {
      id: 3,
      titulo: 'Sistema de Equações - Método de Substituição com Exemplo',
      videoId: '70SIKC2pDcc',
    },
    {
      id: 4,
      titulo: 'Sistemas de Equações - Método de Adição',
      videoId: 'R2mYeSBiwW8',
    },
    {
      id: 5,
      titulo: 'Sistema de Equações - Método de Adição com Exemplo',
      videoId: 'U_735SRkPvA',
    },
  ];
}

export const getNivelAprendizado = perc => {
  return escalaAprendizado.find(nivel => {
    return perc >= nivel.criterio[0] && perc <= nivel.criterio[1];
  });
};

const escalaAprendizado = [
  {
    nivel: 'Novato dos Sistemas',
    criterio: [0, 40],
    descricao: 'Você está começando a entender o conceito de sistemas de equações. Continue praticando!',
  },
  {
    nivel: 'Resolutor de Substituições',
    criterio: [41, 60],
    descricao: 'Você já sabe como aplicar o método da substituição. Continue desafiando-se!',
  },
  {
    nivel: 'Mestre das Igualdades',
    criterio: [61, 80],
    descricao: 'Excelente! Você já domina os métodos de substituição e redução. Está pronto para sistemas mais complexos.',
  },
  {
    nivel: 'Perito em Sistemas Lineares',
    criterio: [81, 90],
    descricao: 'Você já é um especialista! Resolve sistemas com facilidade e precisão.',
  },
  {
    nivel: 'Lenda dos Sistemas de Equações',
    criterio: [91, 100],
    descricao: 'Você é uma lenda no domínio dos sistemas de equações! Parabéns pelo desempenho excepcional.',
  },
];

export const exerciciosInicial = [
  {
    id: 1,
    videoAulaID: [],
    trancado: false,
    feito: false,
    acertou: false,
    pergunta: 'Resolva o sistema pelo método da substituição:\nx + y = 6\nx − y = 2',
    imagem: '',
    tipo: 'múltipla escolha',
    nivel_dificuldade: 'facil',
    respostas: [
      { id: 'a', texto: 'x = 4, y = 2', correta: true },
      { id: 'b', texto: 'x = 5, y = 1', correta: false },
      { id: 'c', texto: 'x = 3, y = 3', correta: false },
      { id: 'd', texto: 'x = 2, y = 4', correta: false },
    ],
    explicacao: 'Substitua y por x-2 em uma das equações para encontrar os valores.',
    feedback: {
      mensagens: {
        acerto: 'Parabéns, você acertou!',
        erro: 'Reveja os passos da substituição para resolver o sistema.',
      },
    },
  },

];
