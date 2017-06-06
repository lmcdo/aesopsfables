import React, { Component, PropTypes } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { defaultStyles } from '../styles/styles'

const { width, height } = Dimensions.get('window');

class Fable extends Component {

  static propTypes = {
    fable: PropTypes.object.isRequired,
    //onOpen: PropTypes.func.isRequired,
  }

  render() {
    console.log("title" + this.props);
    const { fable, title, moral, onOpen} = this.props.navigation.state.params;

    return (
    <TouchableOpacity style={styles.container} onPress={() => onOpen(fable)}>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.moral}>{moral}</Text>
       <Text style={styles.moral}>{fable}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 10,
    //height: (height - 20 - 20) / rows - 10,
    //width: (width - 10) / cols - 10,
  },

  imageContainer: {
    flex: 1
  },
  image: {
    borderRadius: 10,
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    ...defaultStyles.text,
    fontSize: 14,
    marginTop: 4,
  }

});

export default Fable;
