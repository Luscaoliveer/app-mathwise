import React from "react";
import { Image, View, StyleSheet } from "react-native";

// Componente que permite personalizar o tamanho da imagem, borda e cor da borda
export default function LogoTitle({ size = 60, border = false, borderColor = '#000' }) {
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: border ? size / 2 : 0, // Bordas arredondadas se border for verdadeiro
          borderWidth: border ? 2 : 0, // Bordas visíveis se border for verdadeiro
          borderColor: border ? borderColor : 'transparent', // Cor da borda
        },
      ]}
    >
      <Image
        style={[styles.image, { width: size, height: size }]}
        resizeMode="contain"
        source={require("../../assets/logo_matematicando-fundo-transparente.png")}
        alt="Logo do Matematicando"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    // Garantir que a imagem mantenha a proporção original
  },
});
