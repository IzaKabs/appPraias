import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar, TouchableOpacity, SafeAreaView} from 'react-native';

const CategoryCard = ({backgroundColor, title, titleColor = '#fff'}) => 
(
  <TouchableOpacity style={[stylesc.card, {backroundColor}]}>
    <Text style={[styles.cardText, {color: titleColor}]}></Text>
  </TouchableOpacity>
);

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barstyle="dark-content"/>
      <Image
      source={require('../assets/praias.jpg')}
      style={styles.headerImage} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backroundColor: '#FFF',
    alignItems: 'center',
  },
  headerImage:{
    width: '100%',
    height: 250,
    resizeMode: 'cover',
  },
  titleContainer:{
    marginVertical: 24, 
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontPlate: 'bold',
    color: '#1e63ff',
  },
  subTitle: {
    fontSize: 16,
    color:'#48d5d2',
    marginTop: 4, 
  },
  grid: {
    width: '90%', 
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card:{
    widht: '48%',
    height: 120,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      widht: 0, 
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85,
    elevation: 5,
    },
    cardText:{
      fontSize: 18,
      fontWeight: 'bold',
    },
});