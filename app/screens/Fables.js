import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { fables } from '../config/aesops';
import { defaultStyles } from '../styles/styles';
import Fable from './Fable';

export default class Fables extends Component {
  openFable = (fable) => {
    this.props.navigation.navigate('Fable', { ...fable });
  };

  render() {
    return (
       <ScrollView>
        <List>
          {fables.map((fable) => (
            <ListItem
              key={fable.id}
              //roundAvatar
              //avatar={{ uri: user.picture.thumbnail }}
              title={`${fable.title}`}
              
              onPress={() => this.openFable(fable)}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
container: {
  paddingTop: 20,
},
scrollContent: {
  flexDirection: 'row',
  flexWrap: 'wrap',
},

})
