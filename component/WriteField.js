import React, {Component} from 'react';
import {View, Text, StyleSheet} from "react-native";

class WriteField extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.lastStringView}><Text style={styles.lastString}>{this.props.lastString}</Text></View>
                <View style={styles.nowStringView}><Text style={styles.nowString}>{this.props.nowString}</Text></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    lastString: {
        // width: "100%",
        textAlign: "right",
        color: "#434343",
        backgroundColor: "#47FFCC",
        fontSize: 34
    },
    nowStringView: {
        // width: 100,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        backgroundColor: "#47FFCC",
        flexDirection: 'column',
    },
    lastStringView: {
        // width: 100,
        flex:2,
        flexDirection: 'column',
        justifyContent: "space-around",
        backgroundColor: "#47FFCC",
    },
    nowString: {
        width: "100%",
        textAlign: "right",
        color: "#434343",
        backgroundColor: "#47FFCC",
        fontSize: 46,
    },
    main: {
        // width: 100,
        flex: 1,
        backgroundColor: "#47FFCC",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    }
})

export default WriteField;
