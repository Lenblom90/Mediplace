import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { Constants } from 'expo';

import SectionListContacts from '../SectionListContacts';

export default class ContactListScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Contacts',
    headerRight: (
      <Button
        title="Add"
        color="'#a41034'"
        onPress={() => {
          navigation.navigate();
        }}
      />
    ),
  });

  state = {
    showContacts: true,
  };

  toggleContacts = () => {
    this.setState(prevState => ({ showContacts: !prevState.showContacts}))
  };

  showForm = () => {
    this.props.navigation.navigate('AddContact')
  }

  render() {
    return(
       <View style={styles.container}>
        <Button title='toggle Contacts' onPress={this.toggleContacts} />
        <Button title='add Contact' onPress={this.showForm}/>
        <Text style={styles.text}>
          settings coming soon
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    justifyContent: 'center',
    flex: 1,
  }
})
