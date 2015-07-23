'use strict';

var React = require('react-native');

var {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  StyleSheet
} = React;

var MockData = {
    "banners": [
        {
            "img": "http://s17.mogucdn.com/p1/150707/upload_iezdgzjqhayggzbtgizdambqmmyde_690x281.jpg",
            "w": 560,
            "h": 229,
            "link": "http://www.mogujie.com/act/tiguanyouli?useEnergon=1&ismobile=1&mt=10.202.r16302"
        }
    ],
    "korea": {
        "img": "http://s17.mogucdn.com/p1/150605/upload_ieztkyrtguzgeobzgezdambqgyyde_344x342.png",
        "link": "http://www.mogujie.com/act/kbrand?ismobile=1&mt=10.327.r14488"
    },
    "brands": [
        {
            "img": "http://s17.mogucdn.com/p1/150616/upload_ieztsyruhbtdkmtegezdambqgyyde_186x120.jpg",
            "link": "mgj://user?uid=12evbyq&mt=10.328.r15366"
        },
        {
            "img": "http://s18.mogucdn.com/p1/150616/upload_iezdkyrug5tdkmtegezdambqmmyde_186x120.jpg",
            "link": "mgj://user?uid=12sujx8&mt=10.328.r15361"
        },
        {
            "img": "http://s16.mogucdn.com/p1/150616/upload_ie2danbwmftdkmtegezdambqgiyde_186x120.jpg",
            "link": "mgj://user?uid=130sw66&mt=10.328.r15365"
        },
        {
            "img": "http://s18.mogucdn.com/p1/150616/upload_iezdmn3bhftdkmtegezdambqmmyde_186x120.jpg",
            "link": "mgj://user?uid=1296rqg&mt=10.328.r15368"
        },
        {
            "img": "http://s16.mogucdn.com/p1/150616/upload_ie2wezbwmmydmmtegezdambqhayde_186x120.jpg",
            "link": "mgj://user?uid=12rq8si&mt=10.328.r15360"
        },
        {
            "img": "http://s17.mogucdn.com/p1/150616/upload_ie2weodfhbtdkmtegezdambqhayde_186x120.jpg",
            "link": "mgj://user?uid=12xcaqy&mt=10.328.r15369"
        },
        {
            "img": "http://s18.mogucdn.com/p1/150616/upload_iezdky3dg5tdkmtegezdambqmmyde_186x120.jpg",
            "link": "http://m.mogujie.com/x6/shop/1cxysk/goodsall?title=香奈儿/Chanel&categoryId=92803&sort=new&ptp=m1.vtgmI&mt=10.204.r10891"
        },
        {
            "img": "http://s16.mogucdn.com/p1/150616/upload_iezdoyldgztdkmtegezdambqmmyde_186x120.jpg",
            "link": "mgj://user?uid=134v6ni&mt=10.328.r14441"
        }
    ],
    "goods": [
        {
            "iid": "17t6imq",
            "link": "mgj://detail?iid=17t6imq",
            "img": "http://s7.mogucdn.com/p1/150715/14dhcd_ieytmyrtgzstanzwgizdambqmeyde_1000x1500.jpg_200x200.jpg",
            "title": "jcoolstory 绣花小狗纯棉短袖T恤",
            "price": "￥49",
            "oldPrice": "￥70"
        },
        {
            "iid": "17s4vmm",
            "link": "mgj://detail?iid=17s4vmm",
            "img": "http://s7.mogucdn.com/b7/pic/150630/1ln8kj_ie2tinbtg5tgcyjrgizdambqhayde_640x960.jpg_200x200.jpg",
            "title": "3CE持久哑光口红",
            "price": "￥131",
            "oldPrice": "￥146"
        },
        {
            "iid": "16p07x0",
            "link": "mgj://detail?iid=16p07x0",
            "img": "http://s17.mogucdn.com/b7/pic/150109/1h2jcd_ieyggn3fg5stknlbmuytambqgiyde_1000x1500.jpg_200x200.jpg",
            "title": "非常潮的一款小挎包，底部亮PU",
            "price": "￥49",
            "oldPrice": "￥70"
        }
    ]
}

//Korea
var KoreaView = React.createClass({
  render:function(){
    var korea = this.props.korea;

    return (
      <TouchableWithoutFeedback>
        <View style={{flex:0.5}}>
          <Image style={styles.img_korea} source={{uri:korea.img}}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
});

//goods
var GoodsView = React.createClass({
  _renderItem: function(data){
    return data.map(function(item,i){
      return(
        <TouchableWithoutFeedback key={i}>
          <View style={{flex:0.33}}>
            <Image style={styles.goods_img} source={{uri:item.img}}/>
            <Text numberOfLines={1} style={styles.goods_title}> {item.title} </Text>
            
            <View style={styles.goods_priceView}>
             <Text style={styles.goods_price}>{item.price}</Text>
             <View>
                <Text numberOfLines={1} style={styles.goods_oldPrice}>{item.oldPrice}</Text>
             </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    });
  },

  render: function(){
    var data = this.props.goods || [];
    
    return (
      <View style={styles.goods}>
        {this._renderItem(data)}
      </View>
    );
  }
});

/**
 * BrandsView
 **/
var BrandsView = React.createClass({
  _renderBanners : function(banners){
    return (
      <TouchableWithoutFeedback>
        <Image source={{uri: banners[0].img}}
               style={styles.banners}/>
      </TouchableWithoutFeedback>
    );
  },

  _renderBrands:function(korea,brands){
    var brandsData0=[brands[0],brands[2],brands[4],brands[6]];
    var brandsData1=[brands[1],brands[3],brands[5],brands[7]];
    var brandsView0=this._renderBrandsItem(brandsData0);
    var brandsView1=this._renderBrandsItem(brandsData1);
    return(
      <View style={styles.brands}>
        <KoreaView korea={korea}/>
        <View style={styles.img_gap}/>
        {brandsView0}
        <View style={styles.img_gap}/>
        {brandsView1}
      </View>
    );
  },

  _renderBrandsItem:function(data){
    return(
      <View style={{flex:0.25,justifyContent:'space-around'}}>
        {this._renderBrandImg(data)}
      </View>
    );
  },

  _renderBrandImg:function(data){
    return data.map(function(item,i){
      return(
        <View key={i}>
          
            <Image source={{uri: item.img}} 
                   style={styles.img_brands}/>
          
          <View style={i <3 ? styles.img_line : {}} />
        </View>
      );
    });
  },


  render:function(){
    var data=MockData;

    return (
      <View style={styles.content}>
        {this._renderBanners(data.banners)}
        {this._renderBrands(data.korea, data.brands)}
        <GoodsView goods={data.goods} />
      </View>
    );
  },
});


var styles = StyleSheet.create({
  content:{
    backgroundColor:'#fff',
  },

  goods:{
    flexDirection:'row',
    flex:1,
    marginHorizontal:10,
    marginVertical:15
  },

  goods_img:{
    height:100,
    marginHorizontal:5
  },

  goods_title: {
    marginTop:6,
    marginHorizontal:3,
    fontSize:12,
    color:'#333'
  },

  goods_priceView:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:3,
    marginHorizontal:3
  },
  goods_price:{
    marginRight:4,
    fontSize:13,
    color:'#ff5979',
  },
  goods_oldPrice:{
    color:'#999',
    fontSize:12,
    textDecorationLine :'line-through'
  },

  goods_line:{
    backgroundColor: '#999',
    height: 0.5,
    width: 40,
    position: 'absolute', 
    top: 7, 
    left: 0
  },

  brands:{
    flexDirection:'row',
    height:140,
    borderWidth: 0.5,
    borderColor: '#e5e5e5',
    marginHorizontal:15,
  },

  img_korea:{
    flex:1,
    height:139,
    alignItems:'center',
    resizeMode:Image.resizeMode.cover,
  },

  img_brands:{
    height:30,
    resizeMode:Image.resizeMode.contain,
    backgroundColor:'transparent'

  },

  img_gap:{
    width:0.5,
    backgroundColor:'#e5e5e5'
  },

  img_line:{
    height:0.5,
    backgroundColor:'#e5e5e5'
  },

  banners:{
    height:140,
    marginVertical:10,
    marginHorizontal:15,
  }
});

module.exports = BrandsView;