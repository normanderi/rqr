import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function ChatScreen() {
    const chats = [
        { name: "Gemma", message: "Holiii", color: "green" },
        { name: "Norman", message: "Entiendo lo que dices, pero...", color: "blue" },
        { name: "Javi", message: "Hahaha que guay", color: "pink" },
        { name: "Ornella", message: "Qué bueno", color: "turquoise" },
        { name: "Carla", message: ":)", color: "red" }



    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ backgroundColor: "white", height: 1000 }}>
                    {chats.map((element, index) => {
                        return (
                            <View style={styles.chatContainer}>
                                <View style={{ ...styles.pfp, backgroundColor: element.color }} />
                                <View>
                                    <Text key={index} style={{ fontSize: 24 }}>{element.name}</Text>
                                    <Text key={index + 1} >{element.message}</Text>
                                </View>
                            </View>

                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}


const styles = StyleSheet.create({
    chatContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginRight: 20,
        marginLeft: 20,

    },
    pfp: {
        width: 60,
        height: 60,
        borderRadius: 40,
        marginLeft: 0,
        margin: 15,
    },
})
export default ChatScreen;