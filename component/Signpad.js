import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button'

class Signpad extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.main}>
                <Button StyleObject={styles.button} handlePress={this.props.handleDelete}>C</Button>
                <Button StyleObject={styles.button} handlePress={this.props.handlePress}>/</Button>
                <Button StyleObject={styles.button} handlePress={this.props.handlePress}>*</Button>
                <Button StyleObject={styles.button} handlePress={this.props.handlePress}>-</Button>
                <Button StyleObject={styles.button} handlePress={this.props.handlePress}>+</Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor:"#777777",
    },
    button: {
        backgroundColor:"#777777",
        textAlign: 'center',
        color: 'white',
        fontSize: 24
    }
})

export default Signpad;
