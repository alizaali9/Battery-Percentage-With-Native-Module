import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeModules } from 'react-native';

const { BatteryModule } = NativeModules;

const App = () => {
    const [batteryLevel, setBatteryLevel] = useState(null);
    console.log(NativeModules);

    const fetchBatteryPercentage = async () => {
        try {
            const level = await BatteryModule.getBatteryLevel();
            setBatteryLevel(level);
        } catch (error) {
            console.error('Error fetching battery level:', error);
        }
    };

    useEffect(() => {
        fetchBatteryPercentage();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Battery Percentage</Text>
            {batteryLevel !== null ? (
                <Text style={styles.batteryText}>{batteryLevel}%</Text>
            ) : (
                <Text style={styles.batteryText}>...</Text>
            )}
            <TouchableOpacity style={styles.button} onPress={fetchBatteryPercentage}>
                <Text style={styles.buttonText}>Refresh</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#000000",
        marginBottom: 20,
    },
    batteryText: {
        fontSize: 40,
        marginBottom: 20,
        color: '#4caf50',
    },
    button: {
        backgroundColor: '#2196f3',
        padding: 15,
        borderRadius: 30,
        paddingHorizontal: 30
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default App;
