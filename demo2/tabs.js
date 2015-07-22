'use strict';

var React = require('react-native');

var {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Text,
  View
} = React;

var MockData = [{
    "code": "123y",
    "name": "新款首发"
},
{
    "code": "1240",
    "name": "粉丝特卖"
},
{
    "code": "1242",
    "name": "红人推荐"
},
{
    "code": "1241",
    "name": "时尚热门"
},
{
    "code": "1243",
    "name": "更多"
}];


var Tab = React.createClass({

    getDefaultProps() {
        return {
            data: [],
            onChange: function(){}
        }
    },

    getInitialState() {
        return {
            activeTabId: "123y"
        };
    },

    //分类切换
    handleSwitch(tabId) {
        this.setState({
            activeTabId : tabId
        });
        this.props.onChange && this.props.onChange(tabId);
    },

    _renderItems(data) {
        var self = this;
        return data.map(function(item, i){

            var style = self.state.activeTabId == item.code ? styles.itemActiveTab : {};
            var styleText = self.state.activeTabId == item.code ? styles.itemActiveText : {};

            return(
                <TouchableWithoutFeedback onPress={() => self.handleSwitch(item.code)} key={i}>
                    <View style={[styles.tabItem, style]}>
                        <Text style={[styles.itemText, styleText]}>{item.name}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        })

    },

    render() {
        var data = MockData || [];

        return (
            <View style={styles.container}>
                <ScrollView
                    ref="tabView" 
                    showsHorizontalScrollIndicator={false} 
                    style={styles.tabContainer} 
                    contentContainerStyle={styles.contentStyle}
                    horizontal={true}>

                    {this._renderItems(data)}

                </ScrollView>
            </View>
        );
    }
})

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        borderBottomColor : '#b6b2b2',
        borderBottomWidth : 0.5,
    },

    tabContainer: {
        flex : 1,
        height : 44,
        backgroundColor: '#fff'
    },

    contentStyle : {
        flex : 1,
        flexDirection : 'row',
        marginTop: -20          //0.8.0bug
    },

    tabItem :{
        justifyContent: 'center', 
        height : 44,
        paddingHorizontal : 15,
        borderBottomWidth : 2,
        borderBottomColor : '#fff'
    },

    itemText : {
        color : '#757575',
        fontSize : 14
    },

    //选中状态
    itemActiveTab : {
        borderBottomWidth : 2,
        borderBottomColor : '#fe5c7b'
    },

    itemActiveText : {
        color : '#fe5c7b',
        fontSize : 14,
        fontWeight : '700'
    }
});

module.exports = Tab;