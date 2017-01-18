/**
 * Created by yangxp5 on 2017/1/5.
 */
import React, { Component } from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Application from './application';
import Society from './society';
import Tool from './tool';
import Me from './me';

const TAB_ITEMS = [{
    code : 'application',
    name : '应用',
    icon_n : require('../images/main_application2.png'),
    icon_p : require('../images/main_application1.png'),
    contentView : Application
},{
    code : 'society',
    name : '信圈',
    icon_n : require('../images/main_aitriba2.png'),
    icon_p : require('../images/main_aitriba1.png'),
    contentView : Society,
    badgeNumber: 1
},{
    code : 'tool',
    name : '工具',
    icon_n : require('../images/tool2.png'),
    icon_p : require('../images/tool1.png'),
    contentView : Tool
},{
    code : 'me',
    name : '我',
    icon_n : require('../images/main_me2.png'),
    icon_p : require('../images/main_me1.png'),
    contentView : Me
}];

export default class Tab extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: TAB_ITEMS,
            selectedTab : TAB_ITEMS[0].code //默认第一个tab选中
        }
    }

    render() {

        var items = [];
        for (var i=0; i< this.state.items.length; i++) {
            items.push(this._renderTabView(this.state.items[i]));
        }
        return (
            <View style={styles.container}>
                <TabNavigator tabBarStyle={styles.tab}>
                    {items}
                </TabNavigator>
            </View>
        );
    }

    /*
     *渲染每项
     */
    _renderTabView(options){
        var tabNormal = options.icon_n;
        var tabPress = options.icon_p;

        return(
            <TabNavigator.Item
                key={options.code}
                //title={options.name}
                renderIcon={()=><Image style={styles.tabIcon} source={tabNormal}/>}
                renderSelectedIcon={()=><Image style={styles.tabIcon} source={tabPress}/>}
                selected={this.state.selectedTab === options.code}
                selectedTitleStyle={{color:'#1296db'}}
                onPress={()=>this._onPress(options.code)}
                renderBadge= {()=>options.badgeNumber?<View style={styles.badgeView}>
											<Text style={styles.badgeText}>{options.badgeNumber}</Text>
										  </View>:null}>
                <options.contentView route={this.props.route} navigator={this.props.navigator}/>
            </TabNavigator.Item>
        );
    }

    /*
     * tab点击方法
     */
    _onPress(tabCode){
        if(tabCode){
            this.setState({
                selectedTab : tabCode
            });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    tab:{
        height: 55,
        alignItems:'center',
        backgroundColor:'#f4f5f6',
    },
    tabIcon:{
        width:50,
        height:50,
    },
    badgeView:{
        width:22,
        height:14 ,
        backgroundColor:'#f85959',
        borderWidth:1,
        marginLeft:-1,
        marginTop:6,
        borderColor:'#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
    },
    badgeText:{
        color:'#fff',
        fontSize:8,
    }
});