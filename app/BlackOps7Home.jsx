import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

import theGiantImg from "@/assets/images/the-giant.jpg"


const explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={theGiantImg}
      resizeMode="cover"
      style={styles.image}
      >
      <Text style={styles.text}>Black Ops 7</Text>
      </ImageBackground>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center"
  }
})