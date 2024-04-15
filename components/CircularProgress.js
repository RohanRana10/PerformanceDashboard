import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator';

export default function CircularProgress({ heading, count1, radius1, colorActive1, colorInactive1, count2, radius2, colorActive2, colorInactive2, count3, radius3, colorActive3, colorInactive3, value1, value2, value3 }) {
    const props = {
        activeStrokeWidth: 20,
        inActiveStrokeWidth: 20,
        inActiveStrokeOpacity: 0.2
    };

    return (
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 15 }}>
            <View>
                {heading && <Text style={{color: 'orange', fontSize: 20, marginBottom: 15}}>{heading}</Text>}
                <CircularProgressWithChild
                    {...props}
                    value={count1}
                    radius={radius1}
                    activeStrokeColor={colorActive1}
                    inActiveStrokeColor={colorInactive1}
                >
                    <CircularProgressWithChild
                        {...props}
                        value={count2}
                        radius={radius2}
                        activeStrokeColor={colorActive2}
                        inActiveStrokeColor={colorInactive2}
                    >
                        <CircularProgressWithChild
                            {...props}
                            value={count3}
                            radius={radius3}
                            activeStrokeColor={colorActive3}
                            inActiveStrokeColor={colorInactive3}
                        />
                    </CircularProgressWithChild>
                </CircularProgressWithChild>
            </View>

            <View style={styles.legendContainer}>
                <View style={styles.legend}>
                    <View style={{ backgroundColor: '#ff369b', width: 15, height: 15, borderRadius: 20 }} />
                    <Text style={styles.legendText}>{value1} {count1}%</Text>
                </View>
                <View style={styles.legend}>
                    <View style={{ backgroundColor: '#9cff00', width: 15, height: 15, borderRadius: 20 }} />
                    <Text style={styles.legendText}>{value2} {count2}%</Text>
                </View>
                <View style={styles.legend}>
                    <View style={{ backgroundColor: '#04d9ff', width: 15, height: 15, borderRadius: 20 }} />
                    <Text style={styles.legendText}>{value3} {count3}%</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    legendContainer: {
    },
    legend: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    legendText: {
        color: 'white',
        marginLeft: 10
    }
})