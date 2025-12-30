import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

import znsImg from "@/assets/images/wallpaper.jpg"
const gameIndex = () => {
  return (
    <View style = {styles.container}>
        <ImageBackground
        source={znsImg}
        resizeMode="cover"
        style={styles.image}
        >
      <Text style = {styles.title}>Games</Text>

        <View style={styles.grid}>
          <Link href="/WAWHome" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>World at War</Text>
            </Pressable>
          </Link>
          <Link href="/BlackOps1Home" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Black Ops</Text>
            </Pressable>
          </Link>
          <Link href="/BlackOps2Home" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Black Ops 2</Text>
            </Pressable>
          </Link>
          <Link href="/BlackOps3Home" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Black Ops 3</Text>
            </Pressable>
          </Link>
          <Link href="/BlackOps4Home" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Black Ops 4</Text>
            </Pressable>
          </Link>
          <Link href="/BlackOps5Home" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Cold War</Text>
            </Pressable>
          </Link>
          <Link href="/BlackOps6Home" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Black Ops 6</Text>
            </Pressable>
          </Link>
          <Link href="/BlackOps7Home" asChild>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Black Ops 7</Text>
            </Pressable>
          </Link>
        </View> 
         
    
      </ImageBackground>
    </View>
  )
}

export default gameIndex

const styles = {
    container: {
        flex: 1,
    },

    grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 6,
    },

    title: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 120
    },

    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    
    link: {
        color: 'white',
        fontSize: 42,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
        padding: 4,
    },

    button: {
        width: '32%',
        height: 60,
        borderRadius: 20,
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.75)',
        padding: 6,
        marginBottom: 12,
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
    }
}