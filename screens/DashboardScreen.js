import { useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { CircularProgressWithChild } from 'react-native-circular-progress-indicator';
import { LineChart } from "react-native-chart-kit";
import { FontAwesome6, Fontisto, SimpleLineIcons } from '@expo/vector-icons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Meter from '../components/Meter';
import LineGraph from '../components/LineGraph';
import CircularProgress from '../components/CircularProgress';
import FlatMetrics from '../components/FlatMetrics';

export default function Dashboard() {

    let info = {
        "status": "success",
        "data": {
            "resultType": "vector",
            "result": [
                {
                    "metric": {
                        "__name__": "application_ready_time_seconds",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "main_application_class": "com.resotechsolutions.onboarding.OnboardingApplication"
                    },
                    "value": [1711971226.258, "3.305"
                    ]
                },
                {
                    "metric": {
                        "__name__": "application_started_time_seconds",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "main_application_class": "com.resotechsolutions.onboarding.OnboardingApplication"
                    },
                    "value": [1711971226.26, "3.299"
                    ]
                },
                {
                    "metric": {
                        "__name__": "disk_free_bytes",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "path": "/Users/koushikreddy/IdeaProjects/onboarding/."
                    },
                    "value": [1711971226.261, "117461041152"
                    ]
                },
                {
                    "metric": {
                        "__name__": "disk_total_bytes",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "path": "/Users/koushikreddy/IdeaProjects/onboarding/."
                    },
                    "value": [1711971226.262, "245107195904"
                    ]
                },
                {
                    "metric": {
                        "__name__": "executor_active_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "name": "applicationTaskExecutor"
                    },
                    "value": [1711971226.262, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "executor_completed_tasks_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "name": "applicationTaskExecutor"
                    },
                    "value": [1711971226.263, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "executor_pool_core_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "name": "applicationTaskExecutor"
                    },
                    "value": [1711971226.264, "8"
                    ]
                },
                {
                    "metric": {
                        "__name__": "executor_pool_max_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "name": "applicationTaskExecutor"
                    },
                    "value": [1711971226.264, "2147483647"
                    ]
                },
                {
                    "metric": {
                        "__name__": "executor_pool_size_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "name": "applicationTaskExecutor"
                    },
                    "value": [1711971226.265, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "executor_queue_remaining_tasks",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "name": "applicationTaskExecutor"
                    },
                    "value": [1711971226.266, "2147483647"
                    ]
                },
                {
                    "metric": {
                        "__name__": "executor_queued_tasks",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "name": "applicationTaskExecutor"
                    },
                    "value": [1711971226.266, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_count",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "SUCCESS",
                        "status": "200",
                        "uri": "/actuator/prometheus"
                    },
                    "value": [1711971226.267, "1277"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_count",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "SUCCESS",
                        "status": "200",
                        "uri": "/hello"
                    },
                    "value": [1711971226.267, "1"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_count",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "CLIENT_ERROR",
                        "status": "404",
                        "uri": "NOT_FOUND"
                    },
                    "value": [1711971226.267, "8"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_count",
                        "exception": "HttpRequestMethodNotSupportedException",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "CLIENT_ERROR",
                        "status": "405",
                        "uri": "root"
                    },
                    "value": [1711971226.267, "2"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_count",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "POST",
                        "outcome": "SUCCESS",
                        "status": "200",
                        "uri": "/get-headers"
                    },
                    "value": [1711971226.267, "1"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_max",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "SUCCESS",
                        "status": "200",
                        "uri": "/actuator/prometheus"
                    },
                    "value": [1711971226.268, "0.012170125"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_max",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "SUCCESS",
                        "status": "200",
                        "uri": "/hello"
                    },
                    "value": [1711971226.268, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_max",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "CLIENT_ERROR",
                        "status": "404",
                        "uri": "NOT_FOUND"
                    },
                    "value": [1711971226.268, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_max",
                        "exception": "HttpRequestMethodNotSupportedException",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "CLIENT_ERROR",
                        "status": "405",
                        "uri": "root"
                    },
                    "value": [1711971226.268, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_max",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "POST",
                        "outcome": "SUCCESS",
                        "status": "200",
                        "uri": "/get-headers"
                    },
                    "value": [1711971226.268, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_sum",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "SUCCESS",
                        "status": "200",
                        "uri": "/actuator/prometheus"
                    },
                    "value": [1711971226.268, "8.754483033"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_sum",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "SUCCESS",
                        "status": "200",
                        "uri": "/hello"
                    },
                    "value": [1711971226.268, "0.067730791"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_sum",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "CLIENT_ERROR",
                        "status": "404",
                        "uri": "NOT_FOUND"
                    },
                    "value": [1711971226.268, "0.018115708"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_sum",
                        "exception": "HttpRequestMethodNotSupportedException",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "GET",
                        "outcome": "CLIENT_ERROR",
                        "status": "405",
                        "uri": "root"
                    },
                    "value": [1711971226.268, "0.0257485"
                    ]
                },
                {
                    "metric": {
                        "__name__": "http_server_requests_seconds_sum",
                        "exception": "None",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "method": "POST",
                        "outcome": "SUCCESS",
                        "status": "200",
                        "uri": "/get-headers"
                    },
                    "value": [1711971226.268, "0.320109625"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_buffer_count_buffers",
                        "id": "direct",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.269, "10"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_buffer_count_buffers",
                        "id": "mapped",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.269, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_buffer_memory_used_bytes",
                        "id": "direct",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.27, "81920"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_buffer_memory_used_bytes",
                        "id": "mapped",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.27, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_buffer_total_capacity_bytes",
                        "id": "direct",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.27, "81920"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_buffer_total_capacity_bytes",
                        "id": "mapped",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.27, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_classes_loaded_classes",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.271, "14244"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_classes_unloaded_classes_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.271, "9"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_live_data_size_bytes",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.272, "34259296"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_max_data_size_bytes",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.272, "1431830528"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_memory_allocated_bytes_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.273, "6498740440"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_memory_promoted_bytes_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.273, "36319032"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_overhead_percent",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.274, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_pause_seconds_count",
                        "action": "end of major GC",
                        "cause": "Metadata GC Threshold",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.275, "2"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_pause_seconds_count",
                        "action": "end of minor GC",
                        "cause": "Metadata GC Threshold",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.275, "2"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_pause_seconds_count",
                        "action": "end of minor GC",
                        "cause": "Allocation Failure",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.275, "25"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_pause_seconds_max",
                        "action": "end of major GC",
                        "cause": "Metadata GC Threshold",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.275, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_pause_seconds_max",
                        "action": "end of minor GC",
                        "cause": "Metadata GC Threshold",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.275, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_pause_seconds_max",
                        "action": "end of minor GC",
                        "cause": "Allocation Failure",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.275, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_pause_seconds_sum",
                        "action": "end of major GC",
                        "cause": "Metadata GC Threshold",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.293, "0.089"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_pause_seconds_sum",
                        "action": "end of minor GC",
                        "cause": "Metadata GC Threshold",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.293, "0.011"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_gc_pause_seconds_sum",
                        "action": "end of minor GC",
                        "cause": "Allocation Failure",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.293, "0.634"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_committed_bytes",
                        "area": "heap",
                        "id": "PS Survivor Space",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.294, "1572864"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_committed_bytes",
                        "area": "heap",
                        "id": "PS Old Gen",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.294, "132644864"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_committed_bytes",
                        "area": "heap",
                        "id": "PS Eden Space",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.294, "158334976"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_committed_bytes",
                        "area": "nonheap",
                        "id": "Metaspace",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.294, "74498048"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_committed_bytes",
                        "area": "nonheap",
                        "id": "Code Cache",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.294, "18219008"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_committed_bytes",
                        "area": "nonheap",
                        "id": "Compressed Class Space",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.294, "10534912"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_max_bytes",
                        "area": "heap",
                        "id": "PS Survivor Space",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.295, "1572864"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_max_bytes",
                        "area": "heap",
                        "id": "PS Old Gen",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.295, "1431830528"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_max_bytes",
                        "area": "heap",
                        "id": "PS Eden Space",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.295, "699400192"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_max_bytes",
                        "area": "nonheap",
                        "id": "Metaspace",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.295, "-1"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_max_bytes",
                        "area": "nonheap",
                        "id": "Code Cache",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.295, "134217728"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_max_bytes",
                        "area": "nonheap",
                        "id": "Compressed Class Space",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.295, "1073741824"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_usage_after_gc_percent",
                        "area": "heap",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "pool": "long-lived"
                    },
                    "value": [1711971226.295, "0.03131132010617391"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_used_bytes",
                        "area": "heap",
                        "id": "PS Survivor Space",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.296, "1114160"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_used_bytes",
                        "area": "heap",
                        "id": "PS Old Gen",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.296, "44832504"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_used_bytes",
                        "area": "heap",
                        "id": "PS Eden Space",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.296, "97173192"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_used_bytes",
                        "area": "nonheap",
                        "id": "Metaspace",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.296, "69811640"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_used_bytes",
                        "area": "nonheap",
                        "id": "Code Cache",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.296, "18160576"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_memory_used_bytes",
                        "area": "nonheap",
                        "id": "Compressed Class Space",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.296, "9710520"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_threads_daemon_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.296, "30"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_threads_live_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.296, "34"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_threads_peak_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.297, "40"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_threads_states_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "state": "runnable"
                    },
                    "value": [1711971226.297, "9"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_threads_states_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "state": "blocked"
                    },
                    "value": [1711971226.297, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_threads_states_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "state": "waiting"
                    },
                    "value": [1711971226.297, "18"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_threads_states_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "state": "timed-waiting"
                    },
                    "value": [1711971226.297, "7"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_threads_states_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "state": "new"
                    },
                    "value": [1711971226.297, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "jvm_threads_states_threads",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "state": "terminated"
                    },
                    "value": [1711971226.297, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "logback_events_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "level": "warn"
                    },
                    "value": [1711971226.298, "12"
                    ]
                },
                {
                    "metric": {
                        "__name__": "logback_events_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "level": "debug"
                    },
                    "value": [1711971226.298, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "logback_events_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "level": "error"
                    },
                    "value": [1711971226.298, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "logback_events_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "level": "trace"
                    },
                    "value": [1711971226.298, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "logback_events_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator",
                        "level": "info"
                    },
                    "value": [1711971226.298, "103"
                    ]
                },
                {
                    "metric": {
                        "__name__": "process_cpu_usage",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.298, "0.0006170403438460714"
                    ]
                },
                {
                    "metric": {
                        "__name__": "process_files_max_files",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.299, "10240"
                    ]
                },
                {
                    "metric": {
                        "__name__": "process_files_open_files",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.299, "262"
                    ]
                },
                {
                    "metric": {
                        "__name__": "process_start_time_seconds",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.299, "1711953175.759"
                    ]
                },
                {
                    "metric": {
                        "__name__": "process_uptime_seconds",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.3, "18040.599"
                    ]
                },
                {
                    "metric": {
                        "__name__": "promhttp_metric_handler_requests_in_flight",
                        "instance": "localhost:9090",
                        "job": "prometheus"
                    },
                    "value": [1711971226.301, "1"
                    ]
                },
                {
                    "metric": {
                        "__name__": "promhttp_metric_handler_requests_total",
                        "code": "200",
                        "instance": "localhost:9090",
                        "job": "prometheus"
                    },
                    "value": [1711971226.301, "1207"
                    ]
                },
                {
                    "metric": {
                        "__name__": "promhttp_metric_handler_requests_total",
                        "code": "500",
                        "instance": "localhost:9090",
                        "job": "prometheus"
                    },
                    "value": [1711971226.301, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "promhttp_metric_handler_requests_total",
                        "code": "503",
                        "instance": "localhost:9090",
                        "job": "prometheus"
                    },
                    "value": [1711971226.301, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "system_cpu_count",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.302, "8"
                    ]
                },
                {
                    "metric": {
                        "__name__": "system_cpu_usage",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.302, "0.08116501594762464"
                    ]
                },
                {
                    "metric": {
                        "__name__": "system_load_average_1m",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.303, "2.5869140625"
                    ]
                },
                {
                    "metric": {
                        "__name__": "tomcat_sessions_active_current_sessions",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.303, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "tomcat_sessions_active_max_sessions",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.303, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "tomcat_sessions_alive_max_seconds",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.304, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "tomcat_sessions_created_sessions_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.304, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "tomcat_sessions_expired_sessions_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.305, "0"
                    ]
                },
                {
                    "metric": {
                        "__name__": "tomcat_sessions_rejected_sessions_total",
                        "instance": "localhost:8080",
                        "job": "spring-actuator"
                    },
                    "value": [1711971226.305, "0"
                    ]
                }
            ]
        }
    }

    const navigation = useNavigation();
    const [metrics, setMetrics] = useState({});
    const [selections, setSelections] = useState([]);

    const extractMertics = () => {
        // console.log(typeof info.data.result);
        info.data.result.forEach((metric) => {
            metrics[metric.metric.__name__] = metric.value[1] ? metric.value[1] : 0;
            setMetrics({ ...metrics, [metric.metric.__name__]: metric.value[1] ? metric.value[1] : 0 });
        })
        console.log("metrics that will be fetched at regular intervals");
    }

    const handleReset = async () => {
        await AsyncStorage.removeItem('isSetupComplete');
        await AsyncStorage.removeItem('selections');
        console.log("Reset Success");
        navigation.replace('Setup');
    }

    const handleEditPreferences = () => {
        console.log("Editing Preferences")
        navigation.navigate('Setup');
    }

    const [countOne, setCountOne] = useState(10);
    const [countTwo, setCountTwo] = useState(20);
    const [countThree, setCountThree] = useState(50);
    const [countFour, setCountFour] = useState(80);
    const [cpuUsageGraphArray, setCpuUsageGraphArray] = useState([0, 10, 20, 60]);
    const [memoryUsageGraphArray, setMemoryUsageGraphArray] = useState([0, 25, 55, 41, 11]);

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
        legend: ['JVM Memory Used']
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

        extractMertics();

        const getSelections = async () => {
            let temp = await AsyncStorage.getItem('selections');
            setSelections(temp);
            // console.log("fetched saved selections", temp);
            // console.log(typeof Number(parseFloat(metrics.system_cpu_usage).toFixed(1)));
        }

        getSelections();
        // const intervalOne = setInterval(() => {
        //     setCountOne(getRandomNumber(1, 100));
        // }, 2000);

        // const intervalTwo = setInterval(() => {
        //     setCountTwo(getRandomNumber(1, 100));
        // }, 3000);

        // const intervalThree = setInterval(() => {
        //     setCountThree(getRandomNumber(1, 100));
        // }, 1500);

        // const intervalFour = setInterval(() => {
        //     setCountFour(getRandomNumber(1, 100));
        // }, 2500);

        // const cpuUsageGraphInterval = setInterval(() => {
        //     let temp = cpuUsageGraphArray;
        //     if (temp.length > 5) {
        //         temp.shift();
        //     }
        //     temp.push(getRandomNumber(1, 100));
        //     setCpuUsageGraphArray([...temp]);
        //     // console.log("origional" ,cpuUsageGraphArray);
        // }, 5000);

        // const memoryUsageGraphInterval = setInterval(() => {
        //     let temp = memoryUsageGraphArray;
        //     if (temp.length > 5) {
        //         temp.shift();
        //     }
        //     temp.push(getRandomNumber(1, 100));
        //     setMemoryUsageGraphArray([...temp]);
        // }, 5000);

        // // Cleanup function to clear the interval when the component unmounts
        // return () => {
        //     clearInterval(intervalOne);
        //     clearInterval(intervalTwo);
        //     clearInterval(intervalThree);
        //     clearInterval(intervalFour);
        //     clearInterval(cpuUsageGraphInterval);
        //     clearInterval(memoryUsageGraphInterval);
        // }
    }, []);
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#151618',
            // alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 20
        }}>
            <StatusBar backgroundColor={'#151618'} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <Text style={styles.heading}>Dashboard</Text>
                <Menu>
                    <MenuTrigger customStyles={{
                        triggerWrapper: {
                            //trigger wrapper styles
                        }
                    }}>
                        <SimpleLineIcons name="menu" size={24} color="orange" />
                    </MenuTrigger>
                    <MenuOptions customStyles={{
                        optionsContainer: {
                            borderRadius: 10,
                            borderCurve: 'continuous',
                            marginTop: 40,
                            backgroundColor: '#252525',
                            // borderWidth: 1,
                            borderColor: 'orange'
                        }
                    }}>
                        <MenuOption onSelect={handleEditPreferences}>
                            <View style={{ paddingHorizontal: 12, paddingVertical: 6, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={{ color: 'white' }}>Edit Preferences</Text>
                                <FontAwesome6 name="edit" size={18} color="orange" />
                            </View>
                        </MenuOption>
                        <Divider />
                        <MenuOption onSelect={handleReset}>
                            <View style={{ paddingHorizontal: 12, paddingVertical: 6, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={{ color: 'white' }}>Reset Dashboard</Text>
                                <Fontisto name="arrow-return-left" size={18} color="orange" />
                            </View>
                        </MenuOption>
                    </MenuOptions>
                </Menu>

            </View>
            <ScrollView>
                <View style={{ width: '100%' }}>
                    <View style={styles.metersContainer}>
                        {/* <View style={styles.meter}>
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
                        </View> */}

                        {selections.includes('system_cpu_usage') && <Meter count={Number(parseFloat(metrics.system_cpu_usage).toFixed(1))} heading={"System CPU Usage"} />}
                        {selections.includes('process_cpu_usage') && <Meter count={Number(parseFloat(metrics.process_cpu_usage).toFixed(1))} heading={"Process CPU Usage"} />}

                        {/* <View style={styles.meter}>
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
                        </View> */}
                    </View>

                    <FlatMetrics
                        name1={selections.includes('system_cpu_count') ? 'System CPU count' : undefined} value1={metrics.system_cpu_count}
                        name2={selections.includes('disk_free_bytes') ? 'Free Disk Bytes' : undefined} value2={metrics.disk_free_bytes}
                        name3={selections.includes('disk_total_bytes') ? 'Total Disk Bytes' : undefined} value3={metrics.disk_total_bytes}
                        name4={selections.includes('jvm_buffer_count_buffers') ? 'JVM Buffer Count' : undefined} value4={metrics.jvm_buffer_count_buffers}
                    />


                    <View style={styles.metersContainer}>
                        {selections.includes('jvm_buffer_memory_used_bytes') && <Meter count={Number(parseFloat(metrics.jvm_buffer_memory_used_bytes).toFixed(1))} heading={"Buffer Memory Used"} />}
                        {selections.includes('jvm_gc_live_data_size_bytes') && <Meter count={Number(parseFloat(parseFloat(metrics.jvm_gc_live_data_size_bytes) * 100 / parseFloat(metrics.jvm_gc_max_data_size_bytes)).toFixed(1))} heading={"Live Data Size"} />}
                    </View>

                    <FlatMetrics
                        name1={selections.includes('jvm_gc_memory_allocated_bytes_total') ? 'Memory Allocated' : undefined} value1={metrics.jvm_gc_memory_allocated_bytes_total}
                        name2={selections.includes('jvm_gc_memory_promoted_bytes_total') ? 'GC Memory Promoted bytes' : undefined} value2={metrics.jvm_gc_memory_promoted_bytes_total}
                        name3={selections.includes('jvm_memory_committed_bytes') ? 'Memory Bytes Committed' : undefined} value3={metrics.jvm_memory_committed_bytes}
                        name4={selections.includes('jvm_memory_max_bytes') ? 'Memory Bytes Max' : undefined} value4={metrics.jvm_memory_max_bytes}
                    />
                    {/* <View style={{ marginBottom: 15 }}>
                        <LineChart
                            data={temp}
                            fromZero={true}
                            width={screenWidth}
                            yAxisSuffix='%'
                            height={240}
                            withDots={true}
                            chartConfig={chartConfig}
                        />
                    </View> */}

                    <LineGraph data={temp} width={screenWidth} chartConfig={chartConfig} />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                        {selections.includes('http_server_requests_seconds_count') && <View style={{ alignItems: 'center', width: '45%' }}>
                            <Text style={{ color: "white", marginBottom: -10, textAlign: 'center' }}>HTTP Server requests (per second)</Text>
                            <Text style={{ color: "orange", fontWeight: 'bold', fontSize: 90 }}>{metrics.http_server_requests_seconds_count}</Text>
                        </View>}

                        {selections.includes('http_server_requests_seconds_max') && <View style={{ alignItems: 'center', width: '45%' }}>
                            <Text style={{ color: "white", marginBottom: -10, textAlign: 'center' }}>Max. Time taken by Server Request</Text>
                            <Text style={{ color: "orange", fontWeight: 'bold', fontSize: 90 }}>{metrics.http_server_requests_seconds_max}</Text>
                        </View>}

                    </View>

                    <View style={styles.metersContainer}>
                        {/* <View style={styles.meter}>
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
                        </View> */}
                        {(selections.includes('disk_total_bytes') || selections.includes('disk_free_bytes')) && <Meter count={Number(((metrics.disk_total_bytes - metrics.disk_free_bytes) * 100 / metrics.disk_total_bytes).toFixed(1))} heading={"Disk Space Usage"} />}
                        {/* <Meter count={countThree} heading={"Google Hits"} />  */}

                        {/* <View style={styles.meter}>
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
                        </View> */}
                    </View>



                    <FlatMetrics
                        name1={selections.includes('executor_active_threads') ? 'Active Executor Threads' : undefined} value1={metrics.executor_active_threads}
                        name2={selections.includes('executor_completed_tasks_total') ? 'Completed Executor Tasks' : undefined} value2={metrics.executor_completed_tasks_total}
                        name3={selections.includes('executor_queued_tasks') ? 'Queued Tasks' : undefined} value3={metrics.executor_queued_tasks}
                        name4={selections.includes('executor_queue_remaining_tasks') ? 'Remaining Tasks in Queue' : undefined} value4={metrics.executor_queue_remaining_tasks}
                        name6={selections.includes('executor_pool_core_threads') ? 'Core Pool Threads' : undefined} value6={metrics.executor_pool_core_threads}
                        name5={selections.includes('executor_pool_max_threads') ? 'Max. Pool Thread' : undefined} value5={metrics.executor_pool_max_threads}
                    />

                    {/* <FlatMetrics
                        name1={'Core Pool Threads'} value1={metrics.executor_pool_core_threads}
                        name2={'Max. Pool Thread'} value2={metrics.executor_pool_max_threads}
                        name3={'Thread Pool Size'} value3={metrics.executor_pool_size_threads}
                        name4={'System Load Average'} value4={metrics.system_load_average_1m}
                    /> */}
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
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: 15 }}>

                        <View style={{ backgroundColor: 'green', width: '30%', height: 200, borderRadius: 10, padding: 8, margin: 6, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: 10 }}>Active Current Tomcat Sessions</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>{metrics.tomcat_sessions_active_current_sessions}</Text>
                        </View>
                        <View style={{ backgroundColor: 'green', width: '30%', height: 100, borderRadius: 10, padding: 8, margin: 6, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: 10 }}>Max. Active Tomcat Sessions</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>{metrics.tomcat_sessions_active_max_sessions}</Text>
                        </View>
                        <View style={{ backgroundColor: 'green', width: '30%', height: 200, borderRadius: 10, padding: 8, margin: 6, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: 10 }}>Max. Seconds Tomcat Session Alive</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>{metrics.tomcat_sessions_alive_max_seconds}</Text>
                        </View>
                        <View style={{ backgroundColor: 'green', width: '30%', height: 200, borderRadius: 10, padding: 8, margin: 6, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: 10 }}>Total Tomcat Sessions Created</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>{metrics.tomcat_sessions_created_sessions_total}</Text>
                        </View>
                        <View style={{ backgroundColor: 'green', width: '30%', height: 100, borderRadius: 10, padding: 8, margin: 6, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: 10 }}>Total Expired Tomcat Sessions</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>{metrics.tomcat_sessions_expired_sessions_total}</Text>
                        </View>
                        <View style={{ backgroundColor: 'green', width: '30%', height: 200, borderRadius: 10, padding: 8, margin: 6, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: '500', textAlign: 'center', marginBottom: 10 }}>Total Expired Tomcat Sessions</Text>
                            <Text style={{ fontSize: 20, color: 'black' }}>{metrics.tomcat_sessions_rejected_sessions_total}</Text>
                        </View>

                    </View>

                    <LineGraph data={dataTwo} width={screenWidth} chartConfig={chartConfig} />

                    <FlatMetrics
                        name1={'Total GC Pauses (in seconds)'} value1={metrics.http_server_requests_seconds_count}
                        name3={'Memory Bytes Committed'} value3={metrics.http_server_requests_seconds_sum}
                        name4={'Max. GC Pause Dutation'} value4={metrics.jvm_classes_loaded_classes}
                        name2={'Total Unloaded JVM Classes'} value2={metrics.jvm_classes_unloaded_classes_total}

                    />

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                        {selections.includes('jvm_gc_pause_seconds_count') && <View style={{ alignItems: 'center', width: '45%' }}>
                            <Text style={{ color: "white", marginBottom: -10, textAlign: 'center' }}>Total GC Pauses (in seconds)</Text>
                            <Text style={{ color: "orange", fontWeight: 'bold', fontSize: 90 }}>{metrics.jvm_gc_pause_seconds_count > 99 ? '99+' : metrics.jvm_gc_pause_seconds_count}</Text>
                        </View>}

                        {selections.includes('jvm_gc_pause_seconds_max') && <View style={{ alignItems: 'center', width: '45%' }}>
                            <Text style={{ color: "white", marginBottom: -10, textAlign: 'center' }}>Max. Time taken by GC Pause (seconds)</Text>
                            <Text style={{ color: "orange", fontWeight: 'bold', fontSize: 90 }}>{metrics.jvm_gc_pause_seconds_max > 99 ? '99+' : metrics.jvm_gc_pause_seconds_max}</Text>
                        </View>}

                    </View>
                </View>


                {/* <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
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
                </View> */}
                <View style={{ flexWrap: 'wrap', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 15 }}>

                    <View style={{ backgroundColor: 'maroon', margin: 5, height: 100, width: '58%', borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, marginBottom: 5 }}>Process Uptime (seconds)</Text>
                        <Text style={{ color: 'gray', alignSelf: 'center', fontSize: 29 }}>{metrics.process_uptime_seconds}</Text>
                    </View>
                    <View style={{ backgroundColor: 'maroon', margin: 5, height: 100, width: '48%', borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, marginBottom: 5 }}>Open Files</Text>
                        <Text style={{ color: 'gray', alignSelf: 'center', fontSize: 29 }}>{metrics.process_files_open_files}</Text>
                    </View>
                    <View style={{ backgroundColor: 'maroon', margin: 5, height: 100, width: '46%', borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, marginBottom: 5 }}>Max. Files</Text>
                        <Text style={{ color: 'gray', alignSelf: 'center', fontSize: 29 }}>{metrics.process_files_max_files}</Text>
                    </View>
                    <View style={{ backgroundColor: 'maroon', margin: 5, height: 100, width: '58%', borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, marginBottom: 5 }}>Process start time (seconds)</Text>
                        <Text style={{ color: 'gray', alignSelf: 'center', fontSize: 20 }}>{metrics.process_start_time_seconds}</Text>
                    </View>
                </View>

                <CircularProgress value1={'Heap Used'} value2={'Non-Heap Used'} value3={'Load Average'} count1={countOne} count2={countTwo} count3={countThree} radius1={100} colorActive1={'#FF369b'} colorActive2={'#9cFF00'} radius2={75} radius3={50} colorActive3={'#04d9ff'} colorInactive1={'#D42F87'} colorInactive2={'#badc58'} colorInactive3={'#18dcff'} />
            </ScrollView>
        </View>
    )
}

const Divider = () => {
    return (
        <View style={{ padding: 0.5, width: '100%', backgroundColor: 'orange' }} />
    )
}

const styles = StyleSheet.create({
    heading: {
        color: 'orange',
        fontSize: 25,
        // marginBottom: 30,
        // alignSelf: 'center'
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
    },
    flatMetricsContainer: {
        marginBottom: 10
    }
})