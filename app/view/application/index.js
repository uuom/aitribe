/**
 * Created by yangxp5 on 2017/1/5.
 */
import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, TouchableNativeFeedback, PixelRatio} from 'react-native';
import SearchBar from '../../component/SearchBar';
import Swiper from 'react-native-swiper';
import Grid from 'react-native-grid-component';

const applicationData = [
    {code: 1, name: '通知', image: require('../../images/application1.png')},
    {code: 2, name: '申请填报', image: require('../../images/application2.png')},
    {code: 3, name: '待办审批', image: require('../../images/application3.png')},
    {code: 4, name: '知信', image: require('../../images/application7.png')},
    {code: 5, name: '信学堂', image: require('../../images/application4.png')},
    {code: 6, name: '信食堂', image: require('../../images/application1.png')},
    {code: 7, name: '飞行大师', image: require('../../images/application1.png')},
    {code: 8, name: 'AI健康', image: require('../../images/application1.png')},
    {code: 9, name: '白皮书', image: require('../../images/application1.png')},
    {code: 10, name: '信云库', image: require('../../images/application1.png')}
];

export default class Application extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SearchBar />
                <Swiper
                    style={styles.wrapper}
                    autoplay={true}
                    activeDotColor={'#ff9900'}
                    height={200}>
                    <Image style={{width:120*PixelRatio.get(),height:200}} source={require('../../images/top_image.jpg')}/>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
                <Grid
                    style={styles.list}
                    renderItem={this._renderItem}
                    data={applicationData}
                    itemsPerRow={4}
                    />
            </View>
        );
    }

    _renderItem(item, i){
        return(
            <TouchableNativeFeedback key={item.code}  onPress={()=> alert(item.name)}>
                <View style={styles.item_container}>
                    <Image style={styles.image} source={item.image} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }

    _onPress(code){
        alert(code);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    wrapper: {
        height: 150,
        flexDirection: 'row'
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },

    list: {
        flex: 1
    },
    item_container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c4c4c4',
        borderBottomWidth: 1/PixelRatio.get(),
        borderRightWidth: 1/PixelRatio.get()
    },
    image: {
        width: 40,
        height: 40
    },
    name: {
        flex: 1,
        height: 20
    }
});