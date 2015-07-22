'use strict';

var React = require('react-native');

var List = require('./gridList');
var Tabs = require('./tabs');
var Banner = require('./banner');


var {
    ScrollView,
    View,
    PropTypes,
    StyleSheet,
    Text
} = React;


var fastFashion =  React.createClass({

    propTypes: {
        ...ScrollView.propTypes
    },

    getInitialState: function() {
        return {
            cateId : "123y",
            reload: true
        };
    },

    //更新分类ID
    handleUpdateList: function(cateId) {
        this.setState({
            cateId : cateId
        })
    },

    render: function() {
        var cateId = this.state.cateId;

        return (
            <View style={{flex : 1}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    removeClippedSubviews={true}
                    stickyHeaderIndices={[2]}
                    style={styles.scrollView}
                    contentContainerStyle={styles.containerStyle}>
                    <Banner />
                    <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
                    <Tabs onChange={this.handleUpdateList} />
                    <List cateId={cateId} column={2} />
                    {this._renderMore()}
                </ScrollView>
            </View>
        );
    },

    _renderMore: function() {
        return (
          <View style={styles.moreWrap}>
              <View style={[styles.moreBox, styles.centering]}>
                  <Text>查看更多...</Text>
              </View>
          </View>
        );
    }
});

var styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'transparent',
  },
  containerStyle: {
    marginTop: -20,
  },
  centering: {
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreWrap:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },
  moreBox:{
    width:140,
    height:35,
    backgroundColor:'#ccc'
  }
});

module.exports = fastFashion;