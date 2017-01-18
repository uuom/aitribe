/**
 * Created by yangxp5 on 2017/1/12.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TouchableOpacity,
    TouchableHighlight,
    PixelRatio,
    Image,
    Dimensions,
    ScrollView
    } from 'react-native';

var ScreenWidth = Dimensions.get('window').width;

export default class Category extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image resizeMode='stretch' style={[{height:100,width:ScreenWidth}, styles.itemCenter]} source={require('../../images/asiainfopeople.png')}>
                    <Text style={styles.whiteText}>亚信小人书</Text>
                </Image>
                <View style={{height:200,flexDirection:'row'}}>
                    <Image style={[{flex:1,height:200},styles.itemCenter]} source={require('../../images/xinzixun.png')}>
                        <Text style={styles.whiteText}>信资讯</Text>
                    </Image>
                    <View style={{flex:1,height:200}}>
                        <Image style={[{flex:1,width:ScreenWidth/2},styles.itemCenter]} source={require('../../images/xinwenlianbo.png')}>
                            <Text style={styles.whiteText}>信闻联播</Text>
                        </Image>
                        <Image style={[{flex:1,width:ScreenWidth/2},styles.itemCenter]} source={require('../../images/xindada.png')}>
                            <Text style={styles.whiteText}>信者说</Text>
                        </Image>
                    </View>
                </View>
                <View style={{height:100,flexDirection:'row'}}>
                    <Image style={[{flex:1,height:100},styles.itemCenter]} source={require('../../images/xinshu.png')}>
                        <Text style={styles.whiteText}>亚信白皮书</Text>
                    </Image>
                    <Image style={[{flex:1,height:100},styles.itemCenter]} source={require('../../images/xiaoping.png')}>
                        <Text style={styles.whiteText}>技术洞见</Text>
                    </Image>
                </View>
                <Image style={[{height:100,width:ScreenWidth},styles.itemCenter]} source={require('../../images/nihaoasiainfo.png')}>
                    <Text style={styles.whiteText}>你好亚信人</Text>
                </Image>
            </ScrollView>
        );
    }

}

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    itemCenter: {
        justifyContent:'center',
        alignItems: 'center'
    },
    whiteText: {
        fontSize: 20,
        color: '#fff'
    }

};