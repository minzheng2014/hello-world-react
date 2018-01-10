import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Button, Dimensions, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  render() {
    let pic = {uri: 'https://ak8.picdn.net/shutterstock/videos/26350298/thumb/1.jpg'};
    return (
      <View style = { styles.constraint } >
        <Text style = { styles.text } >Scott Joplin App</Text>
        <Image source = { pic } style = { styles.image} />
        <Text></Text>
        <Button
          title = 'Play Songs'
          onPress = { playSongs }
          color = 'purple'
        />
        <Text></Text>
        <Button
          title = 'Favorites'
          onPress = { playSongs }
          color = 'purple'
        />
        <Text></Text>
        <Button
          title = 'View Artists'
          onPress = { playSongs }
          color = 'purple'
        />
        <Text></Text>
        <Button
          title = 'Info'
          onPress = { playSongs }
          color = 'purple'
        />
      </View>
    );
  }
}

function playSongs(){

}

const styles = StyleSheet.create({
  constraint: {
    padding: 50,
    backgroundColor: 'white',
  },
  text: {
    textAlign: 'center',
    color: 'purple',
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    margin: 10,
  },
  image: {
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').height / 2,
    alignSelf: 'center',
  },
});
