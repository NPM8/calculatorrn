import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button';

class Numpad extends Component {
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.section}>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>1</Button>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>2</Button>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>3</Button>
                </View>
                <View style={styles.section}>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>4</Button>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>5</Button>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>6</Button>
                </View>
                <View style={styles.section}>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>7</Button>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>8</Button>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>9</Button>
                </View>
                <View style={styles.section}>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>.</Button>
                    <Button handlePress={this.props.handlePress} StyleObject={styles.button}>0</Button>
                    <Button handlePress={this.props.handleSume} StyleObject={styles.button}>=</Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 2,
        flexDirection: "column",
        backgroundColor: "#434343",
    },
    section: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#434343",
    },
    button: {
        backgroundColor: "#434343",
        textAlign: 'center',
        color: "white",
        fontSize: 24
    }
});

export default Numpad;
