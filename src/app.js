import React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import {
  createStackNavigator,
  createSwitchNavigator,
  createTabNavigator,
} from 'react-navigation';
import { Constants } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddContactScreen from './screens/AddContactScreen';
import SettingsScreen from './screens/SettingsScreen';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import LoginScreen from './screens/LoginScreen';
import contacts from './Contacts';
import { fetchUsers } from './Api';

const MainTabs = createStackNavigator(
  {
    ContactList: ContactListScreen,
    ContactDetails: ContactDetailsScreen,
    AddContact: AddContactScreen,
  },
  {
    initialRouteName: 'ContactList',
    navigationOptions: {
      headerTintColor: '#a41034',
      headerStyle: {
        backgroundColor: '#fff',
      },
    },
  }
);

const AppNavigator = createSwitchNavigator({
  Login: LoginScreen,
  Main: MainTabs,
});

export default class App extends React.Component {
  state = {
    contacts: null,
  };

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const results = await fetchUsers();
    this.setState({ contacts: results });
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    return (
      <AppNavigator
        screenProps={{
          contacts: this.state.contacts,
          addContact: this.addContact,
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
