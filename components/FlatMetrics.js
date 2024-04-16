import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatMetrics({ name1, value1, name2, value2, name3, value3, name4, value4, name5, value5, name6, value6, name7, value7, name8, value8 }) {
    return (
        <View>
            <View style={styles.flatMetricsContainer}>
                {name1 && <View style={styles.textBox}>
                    <Text style={styles.meterHeading}>{name1}</Text>
                    <Text style={{  fontSize: value1 > 9999999999 ? 18 : 20, color: 'orange' }}>{value1}</Text>
                </View>}
                {name2 && <View style={styles.textBox}>
                    <Text style={styles.meterHeading}>{name2}</Text>
                    <Text style={{  fontSize: value2 > 9999999999 ? 18 : 20, color: 'orange' }}>{value2}</Text>
                </View>}
                {name3 && <View style={styles.textBox}>
                    <Text style={styles.meterHeading}>{name3}</Text>
                    <Text style={{ fontSize: value3 > 9999999999 ? 18 : 20, color: 'orange' }}>{value3}</Text>
                </View>}
                {name4 && <View style={styles.textBox}>
                    <Text style={styles.meterHeading}>{name4}</Text>
                    <Text style={{  fontSize: value4 > 9999999999 ? 18 : 20, color: 'orange' }}>{value4}</Text>
                </View>}
                {name5 && <View style={styles.textBox}>
                    <Text style={styles.meterHeading}>{name5}</Text>
                    <Text style={{  fontSize: value5 > 9999999999 ? 18 : 20, color: 'orange' }}>{value5}</Text>
                </View>}
                {name6 && <View style={styles.textBox}>
                    <Text style={styles.meterHeading}>{name6}</Text>
                    <Text style={{  fontSize: value6 > 9999999999 ? 18 : 20, color: 'orange' }}>{value6}</Text>
                </View>}
                {name7 && <View style={styles.textBox}>
                    <Text style={styles.meterHeading}>{name7}</Text>
                    <Text style={{ fontSize: value7 > 9999999999 ? 18 : 20, color: 'orange' }}>{value7}</Text>
                </View>}
                {name8 && <View style={styles.textBox}>
                    <Text style={styles.meterHeading}>{name6}</Text>
                    <Text style={{ fontSize: value8 > 9999999999 ? 18 : 20, color: 'orange' }}>{value8}</Text>
                </View>}
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    flatMetricsContainer: {
        marginBottom: 14,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "space-around"
    },
    meterHeading: {
        color: '#ddd',
        marginBottom: 6,
        textAlign: 'center'
        // backgroundColor: 'cyan'
    },
    textBox: {
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: 'orange',
        padding: 10,
        borderRadius: 10,
        width: '45%'
    },
})