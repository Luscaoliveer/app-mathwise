import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import EstatisticasScreen from '../screens/EstatisticasScreen';
import ExerciciosScreen from '../screens/ExerciciosScreen';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Ocultar o título da tela
        tabBarActiveTintColor: '#e91e63', // Cor do ícone ativo
        tabBarInactiveTintColor: 'gray', // Cor do ícone inativo
        tabBarStyle: styles.tabBar, // Estilo customizado da tab bar
        tabBarLabelStyle: styles.tabBarLabel, // Estilo do rótulo da tab
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Estatísticas"
        component={EstatisticasScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="bar-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercícios"
        component={ExerciciosScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="calculate" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff', // Cor de fundo personalizada
    borderTopWidth: 0, // Remover a borda superior
    elevation: 8, // Sombras para destacar a barra
  },
  tabBarLabel: {
    fontSize: 12, // Tamanho da fonte do rótulo
    fontWeight: 'bold', // Fonte mais negritada
  },
});
