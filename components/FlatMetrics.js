import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatMetrics({ name1, value1, name2, value2, name3, value3, name4, value4, name5, value5, name6, value6, name7, value7, name8, value8 }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={styles.flatMetricsContainer}>
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.meterHeading}>{name1}</Text>
                    <Text style={{ fontSize: 20, color: 'orange' }}>{value1}</Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.meterHeading}>{name2}</Text>
                    <Text style={{ fontSize: 20, color: 'orange' }}>{value2}</Text>
                </View>
                {name5 && <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.meterHeading}>{name5}</Text>
                    <Text style={{ fontSize: 20, color: 'orange' }}>{value5}</Text>
                </View>}
                {name6 && <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.meterHeading}>{name6}</Text>
                    <Text style={{ fontSize: 20, color: 'orange' }}>{value6}</Text>
                </View>}
            </View>

            <View style={styles.flatMetricsContainer}>
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.meterHeading}>{name3}</Text>
                    <Text style={{ fontSize: 20, color: 'orange' }}>{value3}</Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.meterHeading}>{name4}</Text>
                    <Text style={{ fontSize: 20, color: 'orange' }}>{value4}</Text>
                </View>
                {name7 && <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.meterHeading}>{name7}</Text>
                    <Text style={{ fontSize: 20, color: 'orange' }}>{value7}</Text>
                </View>}
                {name8 && <View style={{ alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.meterHeading}>{name6}</Text>
                    <Text style={{ fontSize: 20, color: 'orange' }}>{value8}</Text>
                </View>}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    flatMetricsContainer: {
        marginBottom: 14
    },
    meterHeading: {
        color: '#ddd',
        marginBottom: 6,
        flexWrap: 'wrap',
        // backgroundColor: 'cyan'
    },
})