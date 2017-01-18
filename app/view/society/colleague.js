/**
 * Created by yangxp5 on 2017/1/11.
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
    Image
    } from 'react-native';

import GiftedListView from '../../component/GiftedListView';
import Grid from 'react-native-grid-component';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Colleague extends Component {

    /**
     * Will be called when refreshing
     * Should be replaced by your own logic
     * @param {number} page Requested page to fetch
     * @param {function} callback Should pass the rows
     * @param {object} options Inform if first load
     */
    _onFetch(page = 1, callback = null, options = null) {
        setTimeout(() => {
            var rows = [
                {title: 'HR信息&政策在线回答', time: '2016-04', content: '各位亚信的小伙伴们！！集团人力资源政策在线问答',key:1},
                {title: '2017补充医疗保险投保', time: '2016-12', content: '各位亚信的小伙伴们！！你们造不？2017年亚信',key:1},
                {title: '欢迎参与2012年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT1公司，研发人员是最核心的',key:1},
                {title: '欢迎参与2013年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT2公司，研发人员是最核心的',key:1},
                {title: '欢迎参与2014年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT3公司，研发人员是最核心的',key:1},
                {title: '欢迎参与2015年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT4公司，研发人员是最核心的',key:1},
                {title: '欢迎参与2016年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT5公司，研发人员是最核心的',key:1},
                {title: '欢迎参与2018年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT6公司，研发人员是最核心的',key:1},
                {title: '欢迎参与2019年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT7公司，研发人员是最核心的',key:1},
                {title: '欢迎参与2020年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT8公司，研发人员是最核心的',key:1}
            ];
            if (page === 10) {
                callback(rows, {
                    allLoaded: true, // the end of the list is reached
                });
            } else {
                callback(rows);
            }
        }, 1000); // simulating network fetching
    }

    /**
     * Render a row
     * @param {object} rowData Row data
     */
    _renderRowView(rowData) {
        return (
            <TouchableWithoutFeedback
                style={styles.row} >

                <View style={styles.itemContainer}>
                    <View style={styles.upView}>
                        <Image style={styles.userIcon} source={require('../../images/demo.png')} />
                        <TouchableOpacity style={{flex:1}}>
                            <View style={styles.infoView}>
                                <Text style={{fontSize:15,color:'#ff9900'}}>村口老田</Text>
                                <Text style={{fontSize:12}}>01-09 来自 iPhone 6s Plus</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={{fontSize:13,marginRight:5}}>380次浏览</Text>
                    </View>
                    <TouchableOpacity
                        style={{flex:1}}>
                        <Text style={{fontSize:13,marginLeft:10,marginRight:10,marginBottom:10}} numberOfLines={4}>午间分享会是由村口老田赞助，一群工程师发起，创新管理中心组织支持的民间技术分享活动。第一场分享于2016年10月18日在北京开讲，此后每天12:30-13:00，在总部一楼大厅分享一个主题，如今已经不间断分享了46期。12月起成都、长沙、上海、西安、南京、广州、杭州也陆续启动，以周分享、午餐会的方式进行，小伙伴们参与热烈，甚至一票难求，午间分享会在公司已逐步内形成规模效应，正受到越来越多的关注</Text>
                    </TouchableOpacity>
                    <Grid style={styles.imageGrid}
                        renderItem={(data, i) => <TouchableOpacity style={[{backgroundColor: data}, styles.item]} key={i}/>}
                        data={['black', 'yellow', 'red', 'green', 'blue']}
                        itemsPerRow={3}
                        />
                    <View style={{flexDirection: 'row',borderColor: '#c4c4c4',borderTopWidth: 1,height:43}}>
                        <TouchableOpacity style={{flex:1,flexDirection: 'row',justifyContent:'center',alignItems:'center',margin:2}}>
                            <Icon style={{marginRight:5}} name="speech" size={20} /><Text>11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex:1,flexDirection: 'row',justifyContent:'center',alignItems:'center',margin:2}}>
                            <Icon style={{marginRight:5}} name="like" size={20} /><Text>11</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedListView
                    ref='listView'
                    rowView={this._renderRowView}
                    headerView={this._headerView}
                    renderSeparator={this._renderSeparator}
                    enableEmptySections={true}
                    pageSize={10}
                    onFetch={this._onFetch}
                    firstLoader={true} // display a loader for the first fetching
                    pagination={true} // enable infinite scrolling using touch to load more
                    refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                    withSections={false} // enable sections
                    customStyles={{
                        paginationView: {
                            backgroundColor: '#f4f4f4',
                            height: 50,
                            marginBottom:10
                        }
                    }}
                    refreshableTintColor="#ff9900"
                    />
            </View>
        );
    }

    _headerView(){
        return (
            <View style={{height:10}}></View>
        );
    }

    _renderSeparator(){
        return (
            <View style={{height:10}}></View>
        );
    }
}

var styles = {
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4'
    },
    row: {
        padding: 10,
        paddingTop:15
    },
    itemContainer: {
        flex: 1,
        borderColor: '#c4c4c4',
        borderBottomWidth: 1/PixelRatio.get(),
        backgroundColor: '#fff'
    },
    upView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userIcon: {
        height: 40,
        width: 40,
        borderRadius: 20,
        margin: 5
    },
    infoView: {
        flex: 1,
        justifyContent: 'center'
    },
    imageGrid: {
        flex: 1,
        marginLeft:10,
        marginRight:10
    },
    item: {
        flex: 1,
        height: 100,
        margin: 1
    }
};

