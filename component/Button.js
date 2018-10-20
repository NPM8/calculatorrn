import React, {PureComponent as Component} from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

class Button extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }

    handlePress() {
        this.props.handlePress(this.props.children);
    }

    render() {
        return (
            <TouchableOpacity style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}} onPress={this.handlePress}>
                <Text style={this.props.StyleObject}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

export default Button;
