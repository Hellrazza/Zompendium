import { View, Text, ImageBackground, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { GameButton } from '@/components/GameButton'


const games = [
  { icon: require('@/assets/icons/games/waw.png'), 
    href: '/games/waw' },
  { icon: require('@/assets/icons/games/blackops1.png'),
     href: '/games/bo1' },
  { icon: require('@/assets/icons/games/blackops2.png'), 
    href: '/games/bo2' },
  { icon: require('@/assets/icons/games/blackops3.jpg'),
    href: '/games/bo3' },
  { icon: require('@/assets/icons/games/blackops4.jpg'), 
    href: '/games/bo4' },
  { icon: require('@/assets/icons/games/coldwar.png'), 
    href: '/games/bo5' },
  { icon: require('@/assets/icons/games/bo6.png'),
     href: '/games/bo6' },
  { icon: require('@/assets/icons/games/bo7.png'),
     href: '/games/bo7' },
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
            icon={game.icon}
            href={game.href}
            style={styles.button}
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
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      gap: 12,
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
    
    button: {
      width: '45%',
      height: 140,
    }
}