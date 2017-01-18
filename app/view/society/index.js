/**
 * Created by yangxp5 on 2017/1/5.
 */
import React, { Component } from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import NavigationBar from '../../component/NavigationBar';
import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import Recommend from './recommend';
import Colleague from './colleague';
import Category from './category';

export default class Society extends Component {

    constructor(props){
        super(props);
        this.state = {
            index: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    height={50}
                    title={'信部落'}
                    titleColor={'#222'}
                    backgroundColor={'#F7F7F7'}
                    rightButtonIcon={require('../../images/search_icon_org.png')} />

                <ScrollableTabView
                    style={{marginTop:50,backgroundColor:'#F7F7F7'}}
                    tabBarActiveTextColor="#ff9900"
                    tabBarUnderlineStyle={{
                        backgroundColor: '#ff9900'
                    }}
                    initialPage={0}
                    locked={true}
                    renderTabBar={() => <DefaultTabBar/>}>
                    <Recommend tabLabel='推荐'/>
                    <Colleague tabLabel='同事圈'/>
                    <Category tabLabel='分类'/>
                </ScrollableTabView>
            </View>
        );
    }

    _renderHeader = (props) => {
        return (
            <TabBarTop
                {...props}
                style={styles.tabbar}
                pressColor={'#ff9900'}
                indicatorStyle={styles.indicator}
                renderLabel={this._renderLabel(props)}
                labelStyle={styles.label}
             />
        );
    };

    _renderLabel = (props: any) => ({ route, index }) => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        const outputRange = inputRange.map(inputIndex => inputIndex === index ? '#ff9900' : '#222');
        const color = props.position.interpolate({
            inputRange,
            outputRange,
        });

        return (
            <Animated.Text style={[ styles.label, { color } ]}>
                {route.title}
            </Animated.Text>
        );
    };

    _handleChangeTab = (index) => {
        this.setState({ index });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    tabView: {
        flex: 1,
        marginTop: 50
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicator: {
        backgroundColor: '#ff9900',
    },
    label: {
        fontSize: 13,
        fontWeight: 'bold',
        margin: 8
    },
    tabbar: {
        backgroundColor: '#f4f5f6' //tab背景色
    }
});