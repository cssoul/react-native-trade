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
    "img": "http://s17.mogucdn.com/p1/150714/upload_ie2wkmlfga2dgmzwgizdambqhayde_750x450.jpg",
    "width": 750,
    "height": 450,
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