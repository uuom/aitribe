/**
 * Created by yangxp5 on 2017/1/6.
 */
import React, { Component } from 'react';
import {StyleSheet, View, TextInput, PixelRatio} from 'react-native';

export default class SearchBar extends Component {

    render() {
        return (
            <View style={styles.searchRow}>
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    underlineColorAndroid={'transparent'}
                    placeholder="找人(姓名/NT帐号/工号/手机号)"
                    style={styles.searchTextInput}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchRow: {
        height: 50,
        padding: 5,
        backgroundColor: '#eeeeee'
    },
    searchTextInput: {
        backgroundColor: 'white',
        borderColor: '#cccccc',
        borderRadius: 3,
        borderWidth: 1/PixelRatio.get(),
        height: 40,
        paddingLeft: 8
    }
});