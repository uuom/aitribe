/**
 * Created by yangxp5 on 2017/1/6.
 */

import React, { Component } from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import NavigationBar from '../../component/NavigationBar';
import ListItem from '../../component/ListItem';

export default class Tool extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    height={50}
                    title={'工具'}
                    titleColor={'#222'}
                    backgroundColor={'#F7F7F7'} />

                <View style={{marginTop: 50}}>
                    <ListItem text={'通讯录'} />
                    <ListItem text={'常用联想方式'} />
                    <ListItem text={'北京访客WIFI密码'} />
                    <ListItem text={'扫一扫访客WIFI登录'} />
                    <ListItem text={'增值税开票信息'} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    }
});
