import { View , Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import { GAMES } from "@/data/games";
import { Background } from "@react-navigation/elements";

export default function MapPage() {
    const { gameId, mapId } = useLocalSearchParams<
    {
        gameId: keyof typeof GAMES;
        mapId: string;
    }>();
    
    const game = GAMES [gameId];
    const map = game?.maps.find(m => m.id === mapId);

    if (!map) return null;

    return (
        <View style={styles.container}>
            <ImageBackground
            source={map.background}
            style={styles.backgroundImage}
            >
                <Text style = {styles.title}> {map.title} </Text>

                <Link href="./easter-eggs" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Main Easter Egg</Text>
                    </Pressable>
                </Link>
                <Link href="./side-quests" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Side Eggs</Text>
                    </Pressable>
                </Link>
                <Link href="./info" asChild>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Info</Text>
                    </Pressable>
                </Link>
            </ImageBackground>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
    },

    image: {width: "100%", height: 220, borderRadius: 14},

    title: {
        color: 'orange',
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 60,
    },

    button: {
        padding: 16,
        borderRadius: 12,
        backgroundColor: "rgba(0,0,0,0.8)"
    },

    buttonText: {color: "white", fontSize: 18, textAlign: "center"}
})