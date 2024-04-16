import { StyleSheet, Text, View, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CheckBox from 'expo-checkbox';
import { Feather, Entypo, FontAwesome6, MaterialCommunityIcons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Setup() {
    const navigation = useNavigation();
    const [selections, setSelections] = useState([]);

    const [editMode, setEditMode] = useState(false);

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

    const handleMerticsSubmit = async () => {
        // console.log({
        //     ...cpuMetrics,
        //     ...memorymetrics,
        //     ...networkMetrics,
        //     ...diskMetrics,
        //     ...systemMetrics,
        //     ...applicationMetrics
        // })

        await AsyncStorage.setItem('isSetupComplete', "true");
        await AsyncStorage.setItem('selections', JSON.stringify(selections));
        console.log("selected fields");
        navigation.replace('Dashboard');
    }



    useEffect(() => {
        const getSelectionsFromStorage = async () => {
            try {
                let storedSelections = await AsyncStorage.getItem('selections');
                let setupDone = await AsyncStorage.getItem('isSetupComplete');
                if (setupDone) {
                    // console.log("Edit mode on kardo");
                    setEditMode(true);
                }
                if (storedSelections) {
                    setSelections(JSON.parse(storedSelections));
                    console.log('fetched stored selections', storedSelections);
                }
                else {
                    console.log('no stored selections found');
                }
            } catch (error) {
                console.error('Error fetching stored selections:', error);
            }
        }
        getSelectionsFromStorage();
    }, []);

    const handleValueChange = (value, metric) => {
        if (value && !selections.includes(metric)) {
            setSelections([...selections, metric]);
            console.log('metric added')
        }
        else {
            let temp = selections.filter((item) => {
                return item !== metric
            });
            setSelections(temp);
            console.log('metric removed');
        }

    }

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#151618',
            // alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 20
        }}>
            <StatusBar backgroundColor={'#151618'}/>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                {editMode ? (<Text style={styles.heading}>Edit Preferences</Text>) : (<Text style={styles.heading}>Dashboard Setup</Text>)}
                <TouchableOpacity onPress={handleMerticsSubmit} style={{ justifyContent: 'center', width: 80, alignItems: 'center', height: 40, borderRadius: 10, borderColor: 'orange', borderWidth: 2 }}>
                    <Text style={{ color: 'orange' }}>Continue</Text>
                </TouchableOpacity>
            </View>

            {editMode ? (<Text style={styles.para}>Customise your dashboard by selecting from a wide range of available metrics</Text>) : (<Text style={styles.para}>Customise your dashboard by selecting from a wide range of available metrics</Text>)}
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
                                value={selections.includes('process_cpu_usage')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'process_cpu_usage')}
                            />
                            <Text style={{ color: selections.includes('process_cpu_usage') ? 'orange' : 'white', marginHorizontal: 15 }}>Process CPU Usage</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('system_cpu_count')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'system_cpu_count')}
                            />
                            <Text style={{ color: selections.includes('system_cpu_count') ? 'orange' : 'white', marginHorizontal: 15 }}>System CPU Count</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('system_cpu_usage')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'system_cpu_usage')}
                            />
                            <Text style={{ color: selections.includes('system_cpu_usage') ? 'orange' : 'white', marginHorizontal: 15 }}>System CPU Usage</Text>
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
                                value={selections.includes('disk_free_bytes')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'disk_free_bytes')}
                            />
                            <Text style={{ color: selections.includes('disk_free_bytes') ? 'orange' : 'white', marginHorizontal: 15 }}>Disk Free Bytes</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('disk_total_bytes')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'disk_total_bytes')}
                            />
                            <Text style={{ color: selections.includes('disk_total_bytes') ? 'orange' : 'white', marginHorizontal: 15 }}>Disk Total Bytes</Text>
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
                                value={selections.includes('jvm_buffer_count_buffers')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_buffer_count_buffers')}
                            />
                            <Text style={{ color: selections.includes('jvm_buffer_count_buffers') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM Count Buffers</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_buffer_memory_used_bytes')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_buffer_memory_used_bytes')}
                            />
                            <Text style={{ color: selections.includes('jvm_buffer_memory_used_bytes') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM Memory Used (Bytes)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_gc_live_data_size_bytes')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_gc_live_data_size_bytes')}
                            />
                            <Text style={{ color: selections.includes('jvm_gc_live_data_size_bytes') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM Live Data Size (Bytes)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_gc_max_data_size_bytes')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_gc_max_data_size_bytes')}
                            />
                            <Text style={{ color: selections.includes('jvm_gc_max_data_size_bytes') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM Max Data Size (Bytes)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_gc_memory_allocated_bytes_total')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_gc_memory_allocated_bytes_total')}
                            />
                            <Text style={{ color: selections.includes('jvm_gc_memory_allocated_bytes_total') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM Total Memory Allocated (Bytes)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_gc_memory_promoted_bytes_total')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_gc_memory_promoted_bytes_total')}
                            />
                            <Text style={{ color: selections.includes('jvm_gc_memory_promoted_bytes_total') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM GC Memory Promoted (Bytes)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_memory_committed_bytes')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_memory_committed_bytes')}
                            />
                            <Text style={{ color: selections.includes('jvm_memory_committed_bytes') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM Memory Committed (Bytes)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_memory_max_bytes')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_memory_max_bytes')}
                            />
                            <Text style={{ color: selections.includes('jvm_memory_max_bytes') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM Max Memory (Bytes)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_memory_usage_after_gc_percent')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_memory_usage_after_gc_percent')}
                            />
                            <Text style={{ color: selections.includes('jvm_memory_usage_after_gc_percent') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM Memory Usage after GC (%)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_memory_used_bytes')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_memory_used_bytes')}
                            />
                            <Text style={{ color: selections.includes('jvm_memory_used_bytes') ? 'orange' : 'white', marginHorizontal: 15 }}>JVM Memory Used (Bytes)</Text>
                        </View>

                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <FontAwesome name="tasks" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>Task Executor Metrics:</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('executor_active_threads')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'executor_active_threads')}
                            />
                            <Text style={{ color: selections.includes('executor_active_threads') ? 'orange' : 'white', marginHorizontal: 15 }}>Active Threads</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('executor_completed_tasks_total')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'executor_completed_tasks_total')}
                            />
                            <Text style={{ color: selections.includes('executor_completed_tasks_total') ? 'orange' : 'white', marginHorizontal: 15 }}>Total Completed Tasks</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('executor_pool_core_threads')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'executor_pool_core_threads')}
                            />
                            <Text style={{ color: selections.includes('executor_pool_core_threads') ? 'orange' : 'white', marginHorizontal: 15 }}>Core Pool Threads</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('executor_pool_max_threads')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'executor_pool_max_threads')}
                            />
                            <Text style={{ color: selections.includes('executor_pool_max_threads') ? 'orange' : 'white', marginHorizontal: 15 }}>Max Pool Threads</Text>
                        </View>

                        {/* <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('executor_pool_size_threads')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'executor_pool_size_threads')}
                            />
                            <Text style={{ color: selections.includes('executor_pool_size_threads') ? 'orange' : 'white', marginHorizontal: 15 }}>Size Pool Threads</Text>
                        </View> */}

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('executor_queue_remaining_tasks')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'executor_queue_remaining_tasks')}
                            />
                            <Text style={{ color: selections.includes('executor_queue_remaining_tasks') ? 'orange' : 'white', marginHorizontal: 15 }}>Remaining Tasks (queue)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('executor_queued_tasks')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'executor_queued_tasks')}
                            />
                            <Text style={{ color: selections.includes('executor_queued_tasks') ? 'orange' : 'white', marginHorizontal: 15 }}>Queued Tasks</Text>
                        </View>


                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <MaterialIcons name="network-check" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>HTTP Metrics</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('http_server_requests_seconds_count')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'http_server_requests_seconds_count')}
                            />
                            <Text style={{ color: selections.includes('http_server_requests_seconds_count') ? 'orange' : 'white', marginHorizontal: 15 }}>Server Request count (seconds)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('http_server_requests_seconds_max')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'http_server_requests_seconds_max')}
                            />
                            <Text style={{ color: selections.includes('http_server_requests_seconds_max') ? 'orange' : 'white', marginHorizontal: 15 }}>Max Server Requests (seconds)</Text>
                        </View>
                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('http_server_requests_seconds_sum')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'http_server_requests_seconds_sum')}
                            />
                            <Text style={{ color: selections.includes('http_server_requests_seconds_sum') ? 'orange' : 'white', marginHorizontal: 15 }}>Total server requests (seconds)</Text>
                        </View>
                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <FontAwesome name="cogs" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>JVM Metrics:</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_classes_loaded_classes')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_classes_loaded_classes')}
                            />
                            <Text style={{ color: selections.includes('jvm_classes_loaded_classes') ? 'orange' : 'white', marginHorizontal: 15 }}>Loaded Classes</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_classes_unloaded_classes_total')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_classes_unloaded_classes_total')}
                            />
                            <Text style={{ color: selections.includes('jvm_classes_unloaded_classes_total') ? 'orange' : 'white', marginHorizontal: 15 }}>Total Unloaded Classes</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_gc_overhead_percent')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_gc_overhead_percent')}
                            />
                            <Text style={{ color: selections.includes('jvm_gc_overhead_percent') ? 'orange' : 'white', marginHorizontal: 15 }}>GC Overhead (%)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_gc_pause_seconds_count')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_gc_pause_seconds_count')}
                            />
                            <Text style={{ color: selections.includes('jvm_gc_pause_seconds_count') ? 'orange' : 'white', marginHorizontal: 15 }}>GC Pause Count (seconds)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_gc_pause_seconds_max')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_gc_pause_seconds_max')}
                            />
                            <Text style={{ color: selections.includes('jvm_gc_pause_seconds_max') ? 'orange' : 'white', marginHorizontal: 15 }}>Max GC Pause (seconds)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_gc_pause_seconds_sum')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_gc_pause_seconds_sum')}
                            />
                            <Text style={{ color: selections.includes('jvm_gc_pause_seconds_sum') ? 'orange' : 'white', marginHorizontal: 15 }}>Total GC Pause (seconds)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_threads_daemon_threads')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_threads_daemon_threads')}
                            />
                            <Text style={{ color: selections.includes('jvm_threads_daemon_threads') ? 'orange' : 'white', marginHorizontal: 15 }}>Daemon Threads</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_threads_live_threads')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_threads_live_threads')}
                            />
                            <Text style={{ color: selections.includes('jvm_threads_live_threads') ? 'orange' : 'white', marginHorizontal: 15 }}>Live Threads</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_threads_peak_threads')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_threads_peak_threads')}
                            />
                            <Text style={{ color: selections.includes('jvm_threads_peak_threads') ? 'orange' : 'white', marginHorizontal: 15 }}>Peak Threads</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('jvm_threads_states_threads')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'jvm_threads_states_threads')}
                            />
                            <Text style={{ color: selections.includes('jvm_threads_states_threads') ? 'orange' : 'white', marginHorizontal: 15 }}>State Threads</Text>
                        </View>

                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <MaterialIcons name="task" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>Process Metrics</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('process_files_max_files')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'process_files_max_files')}
                            />
                            <Text style={{ color: selections.includes('process_files_max_files') ? 'orange' : 'white', marginHorizontal: 15 }}>Max Files</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('process_files_open_files')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'process_files_open_files')}
                            />
                            <Text style={{ color: selections.includes('process_files_open_files') ? 'orange' : 'white', marginHorizontal: 15 }}>Open Files</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('process_start_time_seconds')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'process_start_time_seconds')}
                            />
                            <Text style={{ color: selections.includes('process_start_time_seconds') ? 'orange' : 'white', marginHorizontal: 15 }}>Process Start Time (seconds)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('process_uptime_seconds')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'process_uptime_seconds')}
                            />
                            <Text style={{ color: selections.includes('process_uptime_seconds') ? 'orange' : 'white', marginHorizontal: 15 }}>Process Uptime (seconds)</Text>
                        </View>
                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <MaterialCommunityIcons name="server-network" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>HTTP Server Metrics</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('promhttp_metric_handler_requests_in_flight')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'promhttp_metric_handler_requests_in_flight')}
                            />
                            <Text style={{ color: selections.includes('promhttp_metric_handler_requests_in_flight') ? 'orange' : 'white', marginHorizontal: 15 }}>Handler Requests in Flight</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('promhttp_metric_handler_requests_total')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'promhttp_metric_handler_requests_total')}
                            />
                            <Text style={{ color: selections.includes('promhttp_metric_handler_requests_total') ? 'orange' : 'white', marginHorizontal: 15 }}>Total Metric handler Requests</Text>
                        </View>

                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <MaterialIcons name="computer" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>System Metrics</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('system_load_average_1m')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'system_load_average_1m')}
                            />
                            <Text style={{ color: selections.includes('system_load_average_1m') ? 'orange' : 'white', marginHorizontal: 15 }}>System Load Average</Text>
                        </View>

                    </View>

                    <View style={styles.metricContainer}>
                        <View style={styles.metricHeadingContainer}>
                            <Entypo name="network" size={26} color="#bbb" />
                            <Text style={styles.metricHeading}>Web Server Metrics (Tomcat Sessions)</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('tomcat_sessions_active_current_sessions')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'tomcat_sessions_active_current_sessions')}
                            />
                            <Text style={{ color: selections.includes('tomcat_sessions_active_current_sessions') ? 'orange' : 'white', marginHorizontal: 15 }}>Active Current Sessions</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('tomcat_sessions_active_max_sessions')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'tomcat_sessions_active_max_sessions')}
                            />
                            <Text style={{ color: selections.includes('tomcat_sessions_active_max_sessions') ? 'orange' : 'white', marginHorizontal: 15 }}>Max Active Sessions</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('tomcat_sessions_alive_max_seconds')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'tomcat_sessions_alive_max_seconds')}
                            />
                            <Text style={{ color: selections.includes('tomcat_sessions_alive_max_seconds') ? 'orange' : 'white', marginHorizontal: 15 }}>Max Alive Seconds</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('tomcat_sessions_created_sessions_total')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'tomcat_sessions_created_sessions_total')}
                            />
                            <Text style={{ color: selections.includes('tomcat_sessions_created_sessions_total') ? 'orange' : 'white', marginHorizontal: 15 }}>Total Created Sessions</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('tomcat_sessions_expired_sessions_total')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'tomcat_sessions_expired_sessions_total')}
                            />
                            <Text style={{ color: selections.includes('tomcat_sessions_expired_sessions_total') ? 'orange' : 'white', marginHorizontal: 15 }}>Total Expired Sessions</Text>
                        </View>

                        <View style={styles.checkBoxContainer}>
                            <CheckBox
                                disabled={false}
                                value={selections.includes('tomcat_sessions_rejected_sessions_total')}
                                color={'orange'}
                                onValueChange={(value) => handleValueChange(value, 'tomcat_sessions_rejected_sessions_total')}
                            />
                            <Text style={{ color: selections.includes('tomcat_sessions_rejected_sessions_total') ? 'orange' : 'white', marginHorizontal: 15 }}>Total Rejected Sessions</Text>
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
        marginBottom: 10,
        fontSize: 16
    },
    metricContainer: {
        marginBottom: 15,
        
    },
    metricHeadingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    metricHeading: {
        color: 'gray',
        fontSize: 22,
        marginHorizontal: 8,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 18
    }
})