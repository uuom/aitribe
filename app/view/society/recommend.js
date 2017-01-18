/**
 * Created by yangxp5 on 2017/1/10.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableNativeFeedback,
    PixelRatio,
    Image
    } from 'react-native';

import GiftedListView from '../../component/GiftedListView';

export default class Recommend extends Component {

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
                {title: '欢迎参与2020年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT8公司，研发人员是最核心的',key:1},
                {title: '欢迎参与2021年CIT满意度调查', time: '2016-12', content: '作为一个牛逼的IT9公司，研发人员是最核心的',key:1}
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
            <TouchableNativeFeedback
                style={styles.row}
                underlayColor='#c8c7cc'
                onPress={()=> alert(rowData.title)} >
                <View style={styles.itemContainer}>
                    <View style={styles.leftView}>
                        <Image style={styles.image} source={require('../../images/demo.png')} />
                    </View>
                    <View style={styles.rightView}>
                        <View style={styles.up}>
                            <Text style={styles.title} numberOfLines={1}>{rowData.title}</Text>
                            <Text style={styles.time}>{rowData.time}</Text>
                        </View>
                        <View style={styles.middle} numberOfLines={2}>
                            <Text>{rowData.content}</Text>
                        </View>
                        <View style={styles.down}>

                        </View>
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <GiftedListView
                    ref='listView'
                    rowView={this._renderRowView}
                    headerView={this._headerView}
                    enableEmptySections={true}
                    onFetch={this._onFetch}
                    firstLoader={true} // display a loader for the first fetching
                    pagination={true} // enable infinite scrolling using touch to load more
                    refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                    withSections={false} // enable sections
                    customStyles={{
                        paginationView: {
                            backgroundColor: '#f4f4f4'
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
        flexDirection: 'row',
        borderColor: '#c4c4c4',
        borderBottomWidth: 1/PixelRatio.get(),
        backgroundColor: '#fff'
    },
    leftView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        width: 70
    },
    image: {
        height: 50,
        width: 50
    },
    rightView: {
        flex: 1,
        margin:5
    },
    up: {
        flex: 1,
        flexDirection: 'row',
    },
    title: {
        flex: 1,
        fontSize: 18
    },
    time: {
        width: 50,
        fontSize: 12,
        color: '#ff9900'
    },
    middle: {
        flex: 1,
        flexDirection: 'row',
    },
    down: {
        flex: 1,
        flexDirection: 'row',
    }
};
