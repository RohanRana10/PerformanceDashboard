import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from 'expo-checkbox';

export default function CheckBoxContainer(props) {

    const { name, displayName, selections, setSelections } = props;

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
        <View style={styles.checkBoxContainer}>
            <CheckBox
                disabled={false}
                value={selections.includes(name)}
                color={'orange'}
                onValueChange={(value) => handleValueChange(value, name)}
            />
            <Text style={{ color: selections.includes(name) ? 'orange' : 'white', marginHorizontal: 15 }}>{displayName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    checkBoxContainer: {
        flexDirection: 'row',
        marginTop: 18
    }
})