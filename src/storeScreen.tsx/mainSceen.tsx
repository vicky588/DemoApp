import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useState, useEffect} from 'react';
import {useFetchProductQuery} from '../redux/productApi';

const renderItem = ({item}) => {
  return (
    <View style={Styles.renderItemViewStyle}>
      <TouchableOpacity>
        <Image source={{uri: item.mediaUrl}} style={Styles.ImageStyle} />
      </TouchableOpacity>
      <Text style={{color: 'black'}}>{item?.description}</Text>

      <Text style={{color: 'black', margin: 5}}>
        {item?.variants?.[0]?.variant}
      </Text>

      <Text style={{color: 'green', margin: 5}}>
        Rs{item?.variants?.[0]?.sellingPrice}
      </Text>
    </View>
  );
};

const MainScreen = () => {
  const {isLoading, isError, data} = useFetchProductQuery();
  console.log('data', data);
  return (
    <View style={Styles.mainScreenStyle}>
      <View
        style={{
          width: '100%',
          height: 50,
          backgroundColor: 'white',
          borderBottomWidth: 0.2,
          flexDirection: 'row',
        }}>
        <View style={Styles.womenViewStyle}>
          <Text style={Styles.womenTextStyle}>Women</Text>
        </View>

        <View
          style={{
            width: 190,
            height: 45,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../image/search.png')}
              style={{width: 30, height: 25}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../image/love.png')}
              style={{width: 25, height: 20, margin: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../image/cart.jpg')}
              style={{width: 30, height: 25, margin: 10}}
            />
          </TouchableOpacity>
        </View>
      </View>
      {isLoading && <Text>Loading</Text>}
      {data && (
        <FlatList
          data={data?.object}
          renderItem={renderItem}
          style={{}}
          initialNumToRender={10}
          numColumns={2}
          showsVerticalScrollIndicator={false}></FlatList>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  mainScreenStyle: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
  },
  womenViewStyle: {
    width: 200,
    height: 45,
    // backgroundColor:'yellow',
    justifyContent: 'center',
  },
  womenTextStyle: {
    fontSize: 15,
    fontWeight: '400',
    color: 'black',
    marginLeft: 10,
  },
  ImageStyle: {
    width: 190,
    height: 150,
    borderRadius: 5,
    margin: 5,
  },
  renderItemViewStyle: {
    width: 200,
    height: 250,
    borderColor: '#FFFFFF',
    borderWidth: 2,
  },
});

export default MainScreen;
