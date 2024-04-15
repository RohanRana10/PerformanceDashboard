import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from "react-native-chart-kit";


export default function LineGraph({data, width, chartConfig}) {
    return (
        <View style={{ marginBottom: 15 }}>
            <LineChart
                data={data}
                fromZero={true}
                width={width}
                yAxisSuffix='%'
                height={240}
                withDots={true}
                chartConfig={chartConfig}
            />
        </View>
    )
}

const styles = StyleSheet.create({})