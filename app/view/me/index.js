/**
 * Created by yangxp5 on 2017/1/6.
 */

import React, { Component } from 'react';
import {View, StyleSheet, Image,Text,PixelRatio} from 'react-native';
import NavigationBar from '../../component/NavigationBar';
import ListItem from '../../component/ListItem';

export default class Me extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.userBgImage} source={require('../../images/me.png')}>
                        <Image source={require('../../images/user.png')} />
                        <Text style={{fontSize: 18,color: '#d9d9d9',marginTop: 10}}>杨小盼</Text>
                    </Image>
                </View>

                <View style={{marginTop: 5,borderColor: '#c4c4c4',borderTopWidth: 1/PixelRatio.get()}}>
                    <ListItem text={'我的帖子'} />
                    <ListItem text={'我的评论'} />
                    <ListItem text={'我的赞'} />
                </View>

                <View style={{marginTop: 15,borderColor: '#c4c4c4',borderTopWidth: 1/PixelRatio.get()}}>
                    <ListItem text={'设置'} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    userBgImage: {
        flex:1,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
