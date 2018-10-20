import React from 'react';
import { Numpad, WriteField, Signpad } from "./component";

import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        lastString: "",
        nowString: ""
      }
        this.handleDelete = this.handleDelete.bind(this);
        this.handlePress = this.handlePress.bind(this);
        this.handleSume = this.handleSume.bind(this);
    }
    handlePress(sign) {
        this.setState((state,props) => {
            return {
                nowString: state.nowString+sign
            }
        });
    }
    handleDelete() {
        this.setState((state,props) => {
            let test = state.nowString.split('');
            test.pop();
            test = test.join('');
            return {
                nowString: test
            }
        });
    }
    handleSume() {
        this.setState((state,props) => {
            let tmpStringEval = "";
            try {
                tmpStringEval = eval(state.nowString);
            } catch (e) {
                tmpStringEval = "";
            }
            return {
                nowString:tmpStringEval,
                lastString: state.nowString
            }
        });
    }
    render() {
    return (
      <View style={styles.container}>
        <WriteField lastString={this.state.lastString} nowString={this.state.nowString}/>
        <View style={styles.calchandler}>
          <Numpad handlePress={this.handlePress} handleSume={this.handleSume}/>
            <Signpad handlePress={this.handlePress} handleDelete={this.handleDelete} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#47FFCC',
    justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'stretch',
  },
  calchandler: {
    flex: 2,
    flexDirection: "row"
  }
});
