'use strict';

var React = require('react-native');

var Dimensions = require('Dimensions');
var {
  width,
  height
} = Dimensions.get('window');

var {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} = React;

var MockData = {
    "img": "http://s21.mogucdn.com/pic/150424/8gsl_ie2tqzbxgrqtamtdgazdambqhayde_750x316.jpg",
    "width": 750,
    "height": 316,
    "link": "http://m.mogujie.com"
};

var BannerView = React.createClass({
  _onpress: function(){
    console.log("go to mogujie...");
  },
  render: function(){
    var data = MockData || {};
    return (
      <TouchableWithoutFeedback onPress={this._onpress}>
        <View style={[styles.banner,{height: ratio(width, data.width, data.height)}]}>
          <Image
            source={{uri:data.img}}
            style={styles.bannerImg} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
});


var ratio = function(_width, w, h){
  return  _width*h/w;
};

var styles = StyleSheet.create({
  banner:{
    flex:1,
    backgroundColor:'#fff',
  },
  bannerImg: {
    flex:1
  },

});

module.exports = BannerView;