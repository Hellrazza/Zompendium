import { View, Text, ImageBackground, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { GameButton } from '@/components/GameButton'


const games = [
  { icon: require('@/assets/icons/games/waw.png'), href: '/WAWHome' },
  { icon: require('@/assets/icons/games/blackops1.png'), href: '/BlackOps1Home' },
  { icon: require('@/assets/icons/games/blackops2.png'), 
    href: '/BlackOps2Home' },
  { icon: require('@/assets/icons/games/blackops3.jpg'),
    href: '/BlackOps3Home' },
  { icon: require('@/assets/icons/games/blackops4.jpg'), href: '/BlackOps4Home' },
  { icon: require('@/assets/icons/games/coldwar.png'), href: '/BlackOps5Home' },
  { icon: require('@/assets/icons/games/bo6.png'), href: '/BlackOps6Home' },
  { icon: require('@/assets/icons/games/bo7.png'), href: '/BlackOps7Home' },
];


const gameIndex = () => {
  return (
    <View style = {styles.container}>
        <ImageBackground
        source={require('@/assets/images/wallpaper.jpg')}
        resizeMode="cover"
        style={styles.image}
        >
      <Text style = {styles.title}>Games</Text>

      <View style={styles.grid}>
          {games.map((game) => (
          <GameButton
            key={game.href}
            title={game.title}
            icon={game.icon}
            href={game.href}
          />
        ))}
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

    icon: {
      width:20,
      height:20,
      resizeMode:'contain',
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4,
    }
}