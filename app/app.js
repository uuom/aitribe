/**
 * Created by yangxp5 on 2017/1/5.
 */

import React, { Component } from 'react';
import { AppRegistry,DeviceEventEmitter,Image,Navigator,ScrollView,StyleSheet,Text, TouchableOpacity, TouchableHighlight,View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from './component/NavigationBar';
import Tab from './view/tab';

var _navigator;
export default class App extends Component{

    render(){
        return(
            <Navigator
                initialRoute={{
                name: 'Tab',
                component: Tab
            }}
                configureScene={() => Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route, navigator) => {
                    _navigator = navigator;
                    return <route.component route={route} navigator={navigator}/>
                }}
                ></Navigator>
        );
    }
}