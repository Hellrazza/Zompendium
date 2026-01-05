import {Pressable, Text, Image, StyleSheet, ViewStyle} from 'react-native';
import { Href, Link, RelativePathString } from 'expo-router';

type GameButtonProps = {
    title?: string;
    icon?: any;
    href: Href;
    style?: ViewStyle
}

export function GameButton({ title, icon, href, style }: GameButtonProps) {
    return (
        <Link href={href} asChild>
            <Pressable style={[styles.button, style]}>
            {icon && (<Image
                source={icon}
                style={styles.icon}
                />
            )}

            {title && (
                <Text style={styles.text}>{title}</Text>
            )}
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 12,
    },
    icon: {
        width: 72,
        height: 72,
        resizeMode: 'contain',
        marginBottom: 6,
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
    },
});