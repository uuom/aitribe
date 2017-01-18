/**
 * Created by yangxp5 on 2017/1/11.
 */

import React, { Component } from 'react';
import {View,Image,Text,TouchableNativeFeedback,PixelRatio} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class ListItem extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <TouchableNativeFeedback>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../images/demo.png')} />
                    <Text style={styles.text}>{this.props.text}</Text>
                    <Icon style={styles.right} name="arrow-right" size={20} />
                </View>
            </TouchableNativeFeedback>
        );
    }

}

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#c4c4c4',
        borderBottomWidth: 1/PixelRatio.get()
    },
    image:{
        height:  43,
        width: 43,
        margin: 5
    },
    text: {
        flex:1,
        fontSize:17,
        marginLeft: 5
    },
    right: {
        width: 30
    }
}