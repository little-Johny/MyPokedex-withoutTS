import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { capitalize } from './../../utils/capitalize';

export default function Stats({ stats }) {
    /* console.log(stats); */
    const barStyles = (num) => {
        let bgColorized;

        if (num <= 25) {
            bgColorized = '#ff3e3e';
        } else if (num > 25 && num < 50) {
            bgColorized = '#F08700';
        } else if (num >= 50 && num < 75) {
            bgColorized = '#EFCA08';
        } else if (num >= 75) {
            bgColorized = '#6EEB83';
        }
        return {
            backgroundColor: bgColorized,
            width: `${num}%`,
        };
    }
    return (
        <View style={styles.content} >
            <Text style={styles.title}>BASE STATS</Text>
            {stats.map((item, index) => (
                <View key={index} style={styles.block}>
                    <View style={styles.blockTitle}>
                        <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
                    </View>
                    <View style={styles.blockInfo}>
                        <Text style={styles.number}>{item.base_stat}</Text>
                        <View style={styles.bgBar}>
                            <View style={[styles.bar, barStyles(item.base_stat)]}/>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5
    },
    block: {
        flexDirection: 'row',
        paddingVertical: 5,        
    },
    blockTitle: {
        width: '30%',
    },
    statName: {
        fontSize: 12,
        color: '#6b6b6b',
    },
    blockInfo: {
        width: '70%',
        flexDirection: 'row',
        alignContent: 'center',
    },
    number: {
        width: '12%',
        fontSize: 12
    },
    bgBar: {
        backgroundColor: '#b6b6b6',
        width: '88%',
        height: 5,
        borderRadius: 20,
        overflow: 'hidden',
    },
    bar: {
        height: 5,
        borderRadius: 20,
    }
});