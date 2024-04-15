import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MetricContainer(props) {
    return (
        <View style={styles.metricContainer}>
            <View style={styles.metricHeadingContainer}>
                <Feather name="cpu" size={26} color="#bbb" />
                <Text style={styles.metricHeading}>{props.name}</Text>
            </View>

            <View style={styles.checkBoxContainer}>
                <CheckBox
                    disabled={false}
                    value={selections.includes('cpuUsage')}
                    color={'orange'}
                    onValueChange={(value) => handleValueChange(value, 'cpuUsage')}
                />
                <Text style={{ color: selections.includes('cpuUsage') ? 'orange' : 'white', marginHorizontal: 15 }}>CPU Usage (%)</Text>
            </View>
            <View style={styles.checkBoxContainer}>
                <CheckBox
                    disabled={false}
                    value={selections.includes('cpuLoadAverage')}
                    color={'orange'}
                    onValueChange={(value) => handleValueChange(value, 'cpuLoadAverage')}
                />
                <Text style={{ color: selections.includes('cpuLoadAverage') ? 'orange' : 'white', marginHorizontal: 15 }}>CPU Load Average (%)</Text>
            </View>
            <View style={styles.checkBoxContainer}>
                <CheckBox
                    disabled={false}
                    value={selections.includes('cpuIdleTime')}
                    color={'orange'}
                    onValueChange={(value) => handleValueChange(value, 'cpuIdleTime')}
                />
                <Text style={{ color: selections.includes('cpuIdleTime') ? 'orange' : 'white', marginHorizontal: 15 }}>CPU Idle Time (%)</Text>
            </View>
            <View style={styles.checkBoxContainer}>
                <CheckBox
                    disabled={false}
                    value={selections.includes('cpuSystemTime')}
                    color={'orange'}
                    onValueChange={(value) => handleValueChange(value, 'cpuSystemTime')}
                />
                <Text style={{ color: selections.includes('cpuSystemTime') ? 'orange' : 'white', marginHorizontal: 15 }}>CPU System Time (%)</Text>
            </View>
            <View style={styles.checkBoxContainer}>
                <CheckBox
                    disabled={false}
                    value={selections.includes('cpuUserTime')}
                    color={'orange'}
                    onValueChange={(value) => handleValueChange(value, 'cpuUserTime')}
                />
                <Text style={{ color: selections.includes('cpuUserTime') ? 'orange' : 'white', marginHorizontal: 15 }}>CPU User Time (%)</Text>
            </View>
            <View style={styles.checkBoxContainer}>
                <CheckBox
                    disabled={false}
                    value={selections.includes('cpuWaitTime')}
                    color={'orange'}
                    onValueChange={(value) => handleValueChange(value, 'cpuWaitTime')}
                />
                <Text style={{ color: selections.includes('cpuWaitTime') ? 'orange' : 'white', marginHorizontal: 15 }}>CPU Wait Time (%)</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    metricContainer: {
        marginBottom: 15
    },
    metricHeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    metricHeading: {
        color: 'gray',
        fontSize: 22,
        marginHorizontal: 8,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        marginTop: 18
    }
})