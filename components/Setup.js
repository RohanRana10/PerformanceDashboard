import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CheckBox from 'expo-checkbox';
import { Feather, FontAwesome6, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Setup() {
    const [cpuMetrics, setCpuMetrics] = useState({
        "cpuUsage": false,
        "cpuLoadAverage": false,
        "cpuIdleTime": false,
        "cpuSystemTime": false,
        "cpuUserTime": false,
        "cpuWaitTime": false,
    });
    const [memorymetrics, setMemorymetrics] = useState({
        "totalMemory": false,
        "usedMemory": false,
        "freeMemory": false,
        "cachedMemory": false,
        "bufferedMemory": false,
        "swapMemoryUsage": false
    });
    const [networkMetrics, setNetworkMetrics] = useState({
        "networkBandwidth": false,
        "networkPacketsPerSecond": false,
        "networkErrors": false,
        "networkLatency": false,
        "networkThroughput": false,
    })
    const [diskMetrics, setDiskMetrics] = useState({
        "diskSpaceUsage": false,
        "diskReadWriteOperationsPerSecond": false,
        "diskReadWriteThroughput": false,
        "diskLatency": false,
        "diskQueueLength": false,
    })
    const [systemMetrics, setSystemMetrics] = useState({
        "systemUptime": false,
        "systemLoadAverage": false,
        "numberOfProcesses": false,
        "systemTemperature": false,
        "fanSpeed": false,
        "powerConsumption": false,
    })

    const [applicationMetrics, setApplicationMetrics] = useState({
        "requestThroughput": false,
        "responseTime": false,
        "errorRate": false,
        "concurrentUsersSessions": false,
        "databaseQueriesPerSecond": false,
        "cacheHitRatio": false,
    })

    const handleMerticsSubmit = () => {
        console.log({
            ...cpuMetrics,
            ...memorymetrics,
            ...networkMetrics,
            ...diskMetrics,
            ...systemMetrics,
            ...applicationMetrics
        })
    }

    return (
        <View>
            <StatusBar />
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
                <Text style={styles.heading}>Dashboard Setup</Text>
                <TouchableOpacity onPress={handleMerticsSubmit} style={{ justifyContent: 'center', width: 80, alignItems: 'center', height: 40, borderRadius: 10, borderColor: 'orange', borderWidth: 2}}>
                    <Text style={{color: 'orange'}}>Continue</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.para}>Customise your dashboard by selecting from a wide range of available metrics</Text>
            <ScrollView style={{ height: '85%' }}>
                <View >
                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <Feather name="cpu" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>CPU Metrics:</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={cpuMetrics.cpuUsage}
                                color={'orange'}
                                onValueChange={(value) => setCpuMetrics({ ...cpuMetrics, cpuUsage: value })}
                            />
                            <Text style={{ color: cpuMetrics.cpuUsage ? 'orange' : 'white', marginHorizontal: 15 }}>CPU Usage (%)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={cpuMetrics.cpuLoadAverage}
                                color={'orange'}
                                onValueChange={(value) => setCpuMetrics({ ...cpuMetrics, cpuLoadAverage: value })}
                            />
                            <Text style={{ color: cpuMetrics.cpuLoadAverage ? 'orange' : 'white', marginHorizontal: 15 }}>CPU Load Average (%)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={cpuMetrics.cpuIdleTime}
                                color={'orange'}
                                onValueChange={(value) => setCpuMetrics({ ...cpuMetrics, cpuIdleTime: value })}
                            />
                            <Text style={{ color: cpuMetrics.cpuIdleTime ? 'orange' : 'white', marginHorizontal: 15 }}>CPU Idle Time (%)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={cpuMetrics.cpuSystemTime}
                                color={'orange'}
                                onValueChange={(value) => setCpuMetrics({ ...cpuMetrics, cpuSystemTime: value })}
                            />
                            <Text style={{ color: cpuMetrics.cpuSystemTime ? 'orange' : 'white', marginHorizontal: 15 }}>CPU System Time (%)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={cpuMetrics.cpuUserTime}
                                color={'orange'}
                                onValueChange={(value) => setCpuMetrics({ ...cpuMetrics, cpuUserTime: value })}
                            />
                            <Text style={{ color: cpuMetrics.cpuUserTime ? 'orange' : 'white', marginHorizontal: 15 }}>CPU User Time (%)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={cpuMetrics.cpuWaitTime}
                                color={'orange'}
                                onValueChange={(value) => setCpuMetrics({ ...cpuMetrics, cpuWaitTime: value })}
                            />
                            <Text style={{ color: cpuMetrics.cpuWaitTime ? 'orange' : 'white', marginHorizontal: 15 }}>CPU Wait Time (%)</Text>
                        </View>

                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <MaterialCommunityIcons name="harddisk" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>Disk Metrics:</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={diskMetrics.diskSpaceUsage}
                                color={'orange'}
                                onValueChange={(value) => setDiskMetrics({ ...diskMetrics, diskSpaceUsage: value })}
                            />
                            <Text style={{ color: diskMetrics.diskSpaceUsage ? 'orange' : 'white', marginHorizontal: 15 }}>Disk Space Usage (%)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={diskMetrics.diskReadWriteOperationsPerSecond}
                                color={'orange'}
                                onValueChange={(value) => setDiskMetrics({ ...diskMetrics, diskReadWriteOperationsPerSecond: value })}
                            />
                            <Text style={{ color: diskMetrics.diskReadWriteOperationsPerSecond ? 'orange' : 'white', marginHorizontal: 15 }}>Disk read/write operations per second (IOPS)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={diskMetrics.diskReadWriteThroughput}
                                color={'orange'}
                                onValueChange={(value) => setDiskMetrics({ ...diskMetrics, diskReadWriteThroughput: value })}
                            />
                            <Text style={{ color: diskMetrics.diskReadWriteThroughput ? 'orange' : 'white', marginHorizontal: 15 }}>Disk read/write throughput (bytes per second)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={diskMetrics.diskLatency}
                                color={'orange'}
                                onValueChange={(value) => setDiskMetrics({ ...diskMetrics, diskLatency: value })}
                            />
                            <Text style={{ color: diskMetrics.diskLatency ? 'orange' : 'white', marginHorizontal: 15 }}>Disk latency</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={diskMetrics.diskQueueLength}
                                color={'orange'}
                                onValueChange={(value) => setDiskMetrics({ ...diskMetrics, diskQueueLength: value })}
                            />
                            <Text style={{ color: diskMetrics.diskQueueLength ? 'orange' : 'white', marginHorizontal: 15 }}>Disk queue length</Text>
                        </View>

                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <FontAwesome6 name="memory" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>Memory Metrics:</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={memorymetrics.totalMemory}
                                color={'orange'}
                                onValueChange={(value) => setMemorymetrics({ ...memorymetrics, totalMemory: value })}
                            />
                            <Text style={{ color: memorymetrics.totalMemory ? 'orange' : 'white', marginHorizontal: 15 }}>Total memory</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={memorymetrics.usedMemory}
                                color={'orange'}
                                onValueChange={(value) => setMemorymetrics({ ...memorymetrics, usedMemory: value })}
                            />
                            <Text style={{ color: memorymetrics.usedMemory ? 'orange' : 'white', marginHorizontal: 15 }}>Used memory</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={memorymetrics.freeMemory}
                                color={'orange'}
                                onValueChange={(value) => setMemorymetrics({ ...memorymetrics, freeMemory: value })}
                            />
                            <Text style={{ color: memorymetrics.freeMemory ? 'orange' : 'white', marginHorizontal: 15 }}>Free memory</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={memorymetrics.cachedMemory}
                                color={'orange'}
                                onValueChange={(value) => setMemorymetrics({ ...memorymetrics, cachedMemory: value })}
                            />
                            <Text style={{ color: memorymetrics.cachedMemory ? 'orange' : 'white', marginHorizontal: 15 }}>Cached memory</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={memorymetrics.bufferedMemory}
                                color={'orange'}
                                onValueChange={(value) => setMemorymetrics({ ...memorymetrics, bufferedMemory: value })}
                            />
                            <Text style={{ color: memorymetrics.bufferedMemory ? 'orange' : 'white', marginHorizontal: 15 }}>Buffered memory</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={memorymetrics.swapMemoryUsage}
                                color={'orange'}
                                onValueChange={(value) => setMemorymetrics({ ...memorymetrics, swapMemoryUsage: value })}
                            />
                            <Text style={{ color: memorymetrics.swapMemoryUsage ? 'orange' : 'white', marginHorizontal: 15 }}>Swap Memory Usage</Text>
                        </View>

                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <MaterialIcons name="network-check" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>Network Metrics:</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={networkMetrics.networkBandwidth}
                                color={'orange'}
                                onValueChange={(value) => setNetworkMetrics({ ...networkMetrics, networkBandwidth: value })}
                            />
                            <Text style={{ color: networkMetrics.networkBandwidth ? 'orange' : 'white', marginHorizontal: 15 }}>Network Bandwidth (bytes per second)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={networkMetrics.networkPacketsPerSecond}
                                color={'orange'}
                                onValueChange={(value) => setNetworkMetrics({ ...networkMetrics, networkPacketsPerSecond: value })}
                            />
                            <Text style={{ color: networkMetrics.networkPacketsPerSecond ? 'orange' : 'white', marginHorizontal: 15 }}>Network packets per second (PPS)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={networkMetrics.networkErrors}
                                color={'orange'}
                                onValueChange={(value) => setNetworkMetrics({ ...networkMetrics, networkErrors: value })}
                            />
                            <Text style={{ color: networkMetrics.networkErrors ? 'orange' : 'white', marginHorizontal: 15 }}>Network errors (e.g., packet loss, collisions)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={networkMetrics.networkLatency}
                                color={'orange'}
                                onValueChange={(value) => setNetworkMetrics({ ...networkMetrics, networkLatency: value })}
                            />
                            <Text style={{ color: networkMetrics.networkLatency ? 'orange' : 'white', marginHorizontal: 15 }}>Network latency</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={networkMetrics.networkThroughput}
                                color={'orange'}
                                onValueChange={(value) => setNetworkMetrics({ ...networkMetrics, networkThroughput: value })}
                            />
                            <Text style={{ color: networkMetrics.networkThroughput ? 'orange' : 'white', marginHorizontal: 15 }}>Network throughput (bits per second)</Text>
                        </View>

                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <MaterialIcons name="computer" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>System Metrics:</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={systemMetrics.systemUptime}
                                color={'orange'}
                                onValueChange={(value) => setSystemMetrics({ ...systemMetrics, systemUptime: value })}
                            />
                            <Text style={{ color: systemMetrics.systemUptime ? 'orange' : 'white', marginHorizontal: 15 }}>System uptime</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={systemMetrics.systemLoadAverage}
                                color={'orange'}
                                onValueChange={(value) => setSystemMetrics({ ...systemMetrics, systemLoadAverage: value })}
                            />
                            <Text style={{ color: systemMetrics.systemLoadAverage ? 'orange' : 'white', marginHorizontal: 15 }}>System load average</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={systemMetrics.numberOfProcesses}
                                color={'orange'}
                                onValueChange={(value) => setSystemMetrics({ ...systemMetrics, numberOfProcesses: value })}
                            />
                            <Text style={{ color: systemMetrics.numberOfProcesses ? 'orange' : 'white', marginHorizontal: 15 }}>Number of processes</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={systemMetrics.systemTemperature}
                                color={'orange'}
                                onValueChange={(value) => setSystemMetrics({ ...systemMetrics, systemTemperature: value })}
                            />
                            <Text style={{ color: systemMetrics.systemTemperature ? 'orange' : 'white', marginHorizontal: 15 }}>System temperature</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={systemMetrics.fanSpeed}
                                color={'orange'}
                                onValueChange={(value) => setSystemMetrics({ ...systemMetrics, fanSpeed: value })}
                            />
                            <Text style={{ color: systemMetrics.fanSpeed ? 'orange' : 'white', marginHorizontal: 15 }}>Fan speed</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={systemMetrics.powerConsumption}
                                color={'orange'}
                                onValueChange={(value) => setSystemMetrics({ ...systemMetrics, powerConsumption: value })}
                            />
                            <Text style={{ color: systemMetrics.powerConsumption ? 'orange' : 'white', marginHorizontal: 15 }}>Power consumption</Text>
                        </View>

                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <MaterialCommunityIcons name="application-cog-outline" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>Application Metrics:</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={applicationMetrics.applicationMetrics}
                                color={'orange'}
                                onValueChange={(value) => setApplicationMetrics({ ...applicationMetrics, applicationMetrics: value })}
                            />
                            <Text style={{ color: applicationMetrics.applicationMetrics ? 'orange' : 'white', marginHorizontal: 15 }}>Request throughput (requests per second)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={applicationMetrics.responseTime}
                                color={'orange'}
                                onValueChange={(value) => setApplicationMetrics({ ...applicationMetrics, responseTime: value })}
                            />
                            <Text style={{ color: applicationMetrics.responseTime ? 'orange' : 'white', marginHorizontal: 15 }}>Response time</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={applicationMetrics.concurrentUsersSessions}
                                color={'orange'}
                                onValueChange={(value) => setApplicationMetrics({ ...applicationMetrics, concurrentUsersSessions: value })}
                            />
                            <Text style={{ color: applicationMetrics.concurrentUsersSessions ? 'orange' : 'white', marginHorizontal: 15 }}>Concurrent users/sessions</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={applicationMetrics.errorRate}
                                color={'orange'}
                                onValueChange={(value) => setApplicationMetrics({ ...applicationMetrics, errorRate: value })}
                            />
                            <Text style={{ color: applicationMetrics.errorRate ? 'orange' : 'white', marginHorizontal: 15 }}>Error rate</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={applicationMetrics.databaseQueriesPerSecond}
                                color={'orange'}
                                onValueChange={(value) => setApplicationMetrics({ ...applicationMetrics, databaseQueriesPerSecond: value })}
                            />
                            <Text style={{ color: applicationMetrics.databaseQueriesPerSecond ? 'orange' : 'white', marginHorizontal: 15 }}>Database queries per second</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={applicationMetrics.cacheHitRatio}
                                color={'orange'}
                                onValueChange={(value) => setApplicationMetrics({ ...applicationMetrics, cacheHitRatio: value })}
                            />
                            <Text style={{ color: applicationMetrics.cacheHitRatio ? 'orange' : 'white', marginHorizontal: 15 }}>Cache hit ratio</Text>
                        </View>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    heading: {
        color: 'orange',
        fontSize: 29,
        // marginBottom: 11,
        fontWeight: '500'
    },
    para: {
        color: 'white',
        // marginBottom: 10,
        fontSize: 16
    },
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