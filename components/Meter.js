import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AnimatedCircularProgress } from 'react-native-circular-progress';


export default function Meter({count, heading}) {
    return (
        <View style={styles.meter}>
            <Text style={styles.meterHeading}>{heading}</Text>
            <AnimatedCircularProgress
                size={150}
                width={20}
                fill={count}
                tintColor={"#00E30C"}
                tintColorSecondary={"#ff2400"}
                backgroundWidth={20}
                lineCap='butt'
                rotation={250}
                arcSweepAngle={220}
                // onAnimationComplete={() => console.log('onAnimationComplete', countOne)}
                backgroundColor="#252525">
                {
                    (fill) => (
                        <Text style={{ fontWeight: '600', fontSize: 25, color: '#d8dadb' }}>
                            {count}%
                        </Text>
                    )}
            </AnimatedCircularProgress>
        </View>
    )
}

const styles = StyleSheet.create({
    meter: {
        alignItems: 'center'
    },
    meterHeading: {
        color: '#ddd',
        marginBottom: 8
    },
})