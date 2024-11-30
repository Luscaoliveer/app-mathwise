import React, { useEffect, useState, useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import * as Font from 'expo-font';
import { View, Text, Image, Button, Alert, ActivityIndicator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigator from './TabNavigator';
import JogosScreen from '../screens/JogosScreen';
import VideoScreen from '../screens/VideoScreen';
import TermsScreen from '../screens/TermsScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import LogoTitle from '../components/LogoTitle';
import { MainContext } from '../context/MainContext';
import { getNivelAprendizado } from '../api/dados';
import { deleteDatabase } from '../api/bancoDeDados';

const Drawer = createDrawerNavigator();
const iconColor = '#64B5F6';
const iconSize = 24;

export default function DrawerNavigator() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { state, authContext } = useContext(MainContext);
  const { signOut } = authContext;

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'ChalkboardSE-Regular': require('../../assets/fonts/ChalkboardSE-Light.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  function calcularNivelAprendizado() {
    return getNivelAprendizado(0);
  }

  const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Ajuda"
        onPress={() => Alert.alert('Link para Ajuda')}
        icon={() => <Icon name="help-circle" size={iconSize} color={iconColor} />}
      />
      <DrawerItem
        label="Configurações"
        onPress={() => Alert.alert('Link para Configurações')}
        icon={() => <Icon name="cog" size={iconSize} color={iconColor} />}
      />
      <View style={styles.userInfoContainer}>
        <Image source={{ uri: state.user.photo }} style={styles.userPhoto} />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{state.user.name}</Text>
          <Text style={styles.userEmail}>{state.user.email}</Text>
          <Text style={styles.userLevel}>
            {calcularNivelAprendizado().nivel}
            {'\n'}
            {calcularNivelAprendizado().descricao}
          </Text>
        </View>
      </View>
      <Button title="Sair" onPress={handleSignOut} />
      <Button title="Apagar" onPress={deleteDatabase} />
    </DrawerContentScrollView>
  );

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (e) {
      Alert.alert('Erro', e.message);
    }
  };

  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />;
  }

  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      initialRouteName="Inicio"
      screenOptions={{
        headerStyle: { backgroundColor: '#396934' },
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Text style={styles.headerTitle}>MathWise</Text>
        ),
        headerRight: () => <LogoTitle />,
      }}>
      <Drawer.Screen
        name="Inicio"
        component={TabNavigator}
        options={{
          drawerIcon: () => <Icon name="home" size={iconSize} color={iconColor} />,
        }}
      />
      <Drawer.Screen
        name="Jogos"
        component={JogosScreen}
        options={{
          drawerIcon: () => <Icon name="gamepad-variant" size={iconSize} color={iconColor} />,
        }}
      />
      <Drawer.Screen
        name="Video aulas"
        component={VideoScreen}
        options={{
          drawerIcon: () => <Icon name="video" size={iconSize} color={iconColor} />,
        }}
      />
      <Drawer.Screen
        name="Termos de Uso"
        component={TermsScreen}
        options={{
          drawerIcon: () => <Icon name="text-box-check" size={iconSize} color={iconColor} />,
        }}
      />
      <Drawer.Screen
        name="Política de Privacidade"
        component={PrivacyPolicyScreen}
        options={{
          drawerIcon: () => <Icon name="security" size={iconSize} color={iconColor} />,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 28,
    fontWeight: '600',
    color: 'white',
    paddingRight: 16,
    fontFamily: 'ChalkboardSE-Regular',
  },
  userInfoContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#01579B',
  },
  userPhoto: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 10,
    marginRight: 8,
  },
  userInfo: {
    justifyContent: 'space-evenly',
    flexShrink: 1,
    flex: 2,
  },
  userName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userEmail: {
    color: 'white',
    fontSize: 10,
  },
  userLevel: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
