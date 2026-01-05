import { Text, View, StyleSheet, ImageBackground, Pressable } from 'react-native';
import { GAMES } from '@/data/games';
import { Link, useLocalSearchParams } from 'expo-router';

export default function GameHome() {
  const { gameId } = useLocalSearchParams<{ gameId: keyof typeof GAMES}>();

  const game = gameId ? GAMES[gameId] : null;

  if (!game) return null;

  return (
    <View style = {styles.container}>
      <ImageBackground 
      source={game.background}
      resizeMode="cover"
      style={styles.image}
      >
        <Text style = {styles.title}>{game.title}</Text>

        <View style={styles.grid}>
          {game.maps.map((map => (
            <Link
            key={map.id}
            href={`/games/${gameId}/$(map.id}`}
            asChild
          >
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>{map.title}</Text>
            </Pressable>
          </Link>
          )))}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    gap: 12,
  },
  button: {
    width: '48%',
    height: 120,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },  

  title: {
    color: 'orange',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 60,
  },

  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
})
