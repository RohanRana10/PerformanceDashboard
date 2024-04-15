import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator';
import { LineChart } from "react-native-chart-kit";

export default function Dashboard() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    const [countThree, setCountThree] = useState(0);
    const [countFour, setCountFour] = useState(0);
    const [cpuUsageGraphArray, setCpuUsageGraphArray] = useState([0]);
    const [memoryUsageGraphArray, setMemoryUsageGraphArray] = useState([0]);

    const chartConfig = {
        decimalPlaces: 2,
        backgroundGradientFrom: "#151618",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#151618",
        backgroundGradientToOpacity: 0.9,
        color: (opacity = 1) => `rgba(216, 255, 146, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        style: {
            borderRadius: 16
        },
        propsForBackgroundLines: {
            strokeDasharray: '', // solid lines with no dashes

        },
        propsForDots: {
            r: "2",
            strokeWidth: "1",
            stroke: "#fff",
        }
    };

    const screenWidth = Dimensions.get("window").width - 20;

    let data = {
        datasets: [
            {
                data: cpuUsageGraphArray,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
                strokeWidth: 1.5 // optional
            }
        ],
        legend: ['CPU']
    };

    let dataTwo = {
        datasets: [
            {
                data: memoryUsageGraphArray,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
                strokeWidth: 1.5 // optional
            }
        ],
        legend: ['Memory']
    };

    let temp = {
        datasets: [
            { data: cpuUsageGraphArray, color: () => 'green', strokeWidth: 3 },
            { data: memoryUsageGraphArray, color: () => '#ED7C33' },
        ]
    };

    const props = {
        activeStrokeWidth: 20,
        inActiveStrokeWidth: 20,
        inActiveStrokeOpacity: 0.2
    };


    function getRandomNumber(min, max) {
        // Generates a random number between min (inclusive) and max (exclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    useEffect(() => {
        const intervalOne = setInterval(() => {
            setCountOne(getRandomNumber(1, 100));
        }, 2000);

        const intervalTwo = setInterval(() => {
            setCountTwo(getRandomNumber(1, 100));
        }, 3000);

        const intervalThree = setInterval(() => {
            setCountThree(getRandomNumber(1, 100));
        }, 1500);

        const intervalFour = setInterval(() => {
            setCountFour(getRandomNumber(1, 100));
        }, 2500);

        const cpuUsageGraphInterval = setInterval(() => {
            let temp = cpuUsageGraphArray;
            if (temp.length > 5) {
                temp.shift();
            }
            temp.push(getRandomNumber(1, 100));
            setCpuUsageGraphArray([...temp]);
            // console.log("origional" ,cpuUsageGraphArray);
        }, 5000);

        const memoryUsageGraphInterval = setInterval(() => {
            let temp = memoryUsageGraphArray;
            if (temp.length > 5) {
                temp.shift();
            }
            temp.push(getRandomNumber(1, 100));
            setMemoryUsageGraphArray([...temp]);
        }, 5000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalOne);
            clearInterval(intervalTwo);
            clearInterval(intervalThree);
            clearInterval(intervalFour);
            clearInterval(cpuUsageGraphInterval);
            clearInterval(memoryUsageGraphInterval);
        }
    }, []);
    return (
        <View>
            <ScrollView>
                <Text style={styles.heading}>Performance Dashboard</Text>
                <View style={{ width: '100%' }}>
                    <View style={styles.metersContainer}>
                        <View style={styles.meter}>
                            <Text style={styles.meterHeading}>CPU Usage</Text>
                            <AnimatedCircularProgress
                                size={150}
                                width={20}
                                fill={countOne}
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
                                            {countOne}%
                                        </Text>
                                    )}
                            </AnimatedCircularProgress>
                        </View>

                        <View style={styles.meter}>
                            <Text style={styles.meterHeading}>Memory Usage</Text>
                            <AnimatedCircularProgress
                                size={150}
                                width={13}
                                fill={countTwo}
                                tintColor={"#00E30C"}
                                tintColorSecondary={"#ff2400"}
                                backgroundWidth={4}
                                lineCap='round'
                                rotation={260}
                                arcSweepAngle={202}
                                // onAnimationComplete={() => console.log('onAnimationComplete', countTwo)}
                                backgroundColor="gray">
                                {
                                    (fill) => (
                                        <Text style={{ fontWeight: '600', fontSize: 25, color: '#d8dadb' }}>
                                            {countTwo}%
                                        </Text>
                                    )}
                            </AnimatedCircularProgress>
                        </View>
                    </View>
                    <View style={{ marginBottom: 15 }}>
                        <LineChart
                            data={temp}
                            fromZero={true}
                            width={screenWidth}
                            yAxisSuffix='%'
                            height={240}
                            withDots={true}
                            chartConfig={chartConfig}
                        />
                    </View>

                    <View style={styles.metersContainer}>
                        <View style={styles.meter}>
                            <Text style={styles.meterHeading}>Google Hits</Text>
                            <AnimatedCircularProgress
                                size={150}
                                width={6}
                                fill={countFour}
                                tintColor={"#00E30C"}
                                tintColorSecondary={"#ff2400"}
                                backgroundWidth={20}
                                lineCap='square'
                                rotation={260}
                                arcSweepAngle={202}
                                // onAnimationComplete={() => console.log('onAnimationComplete', countTwo)}
                                backgroundColor="#252525">
                                {
                                    (fill) => (
                                        <Text style={{ fontWeight: '600', fontSize: 25, color: '#d8dadb' }}>
                                            {countFour}%
                                        </Text>
                                    )}
                            </AnimatedCircularProgress>
                        </View>
                        <View style={styles.meter}>
                            <Text style={styles.meterHeading}>Disk Space Usage</Text>
                            <AnimatedCircularProgress
                                size={150}
                                width={20}
                                fill={countThree}
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
                                            {countThree}%
                                        </Text>
                                    )}
                            </AnimatedCircularProgress>
                        </View>
                    </View>
                    {/* <View style={{ marginBottom: 15 }}>
            <LineChart
              data={dataTwo}
              fromZero={true}
              width={screenWidth}
              yAxisSuffix='%'
              height={240}
              withDots={true}
              chartConfig={chartConfig}
            />
          </View> */}
                </View>


                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View>
                        <CircularProgressWithChild
                            {...props}
                            value={countOne}
                            radius={100}
                            activeStrokeColor={'#FF369b'}
                            inActiveStrokeColor={'#D42F87'}
                        >
                            <CircularProgressWithChild
                                {...props}
                                value={countTwo}
                                radius={75}
                                activeStrokeColor={'#9cFF00'}
                                inActiveStrokeColor={'#badc58'}
                            >
                                <CircularProgressWithChild
                                    {...props}
                                    value={countThree}
                                    radius={50}
                                    activeStrokeColor={'#04d9ff'}
                                    inActiveStrokeColor={'#18dcff'}
                                />
                            </CircularProgressWithChild>
                        </CircularProgressWithChild>
                    </View>

                    <View style={styles.legendContainer}>
                        <View style={styles.legend}>
                            <View style={{ backgroundColor: '#ff369b', width: 15, height: 15, borderRadius: 20 }} />
                            <Text style={styles.legendText}>Heap Used {countOne}%</Text>
                        </View>
                        <View style={styles.legend}>
                            <View style={{ backgroundColor: '#9cff00', width: 15, height: 15, borderRadius: 20 }} />
                            <Text style={styles.legendText}>Non-Heap Used {countTwo}%</Text>
                        </View>
                        <View style={styles.legend}>
                            <View style={{ backgroundColor: '#04d9ff', width: 15, height: 15, borderRadius: 20 }} />
                            <Text style={styles.legendText}>Load Average {countThree}%</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: 'white',
        fontSize: 25,
        marginBottom: 30,
        alignSelf: 'center'
    },
    metersContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        marginTop: 10
    },
    meter: {
        alignItems: 'center'
    },
    meterHeading: {
        color: '#ddd',
        marginBottom: 8
    },
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