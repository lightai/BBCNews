import React from 'react';
import {
    StyleSheet,
    Text,
    Linking
} from 'react-native';

export default class Link extends React.Component {
    static propTypes = {
        // name: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    pressedURL() {
        console.log('hi', this.props.url);
        Linking.openURL(this.props.url)
    }

    render() {
        return (
            <Text style={styles.hyperlink} onPress={this.pressedURL.bind(this)}>{this.props.children}</Text>
        );
    }
}

const styles = StyleSheet.create({
    hyperlink: {
        color: 'black',
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    }
});

module.exports = Link;
