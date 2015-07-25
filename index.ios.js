'use strict';

var AddressBook = require('react-native-addressbook'),
  ContactList = require('./ContactList'),
  React = require('react-native'),
  Router = require('react-native-router');

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} = React;

var styles = StyleSheet.create({
  header: {
    backgroundColor: '#5cafec'
  },
  container: {
    marginTop:50,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(253,253,253)',
  },
  button: {
    padding: 20,
    marginBottom: 20,
    fontSize: 24,
    borderRadius: 4,
    borderWidth: 0.5,
    color: '#d6d7da',
    borderColor: '#d6d7da',
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 32,
  },
});

var homePage = React.createClass({
  goToContactList: function() {
    this.props.toRoute({
      name: "Contacts",
      component: ContactList
    });
  },

  render: function() {
    return (
     <View style={styles.container}>
        <TouchableOpacity onPress={() => this.goToContactList() }>
          <Text style={styles.button}>Send a millipede</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          ╚⊙ ⊙╝
        </Text>
        <Text style={styles.text}>
          ╚═(███)═╝
          ╚═(███)═╝
          ╚═(███)═╝
          ╚═(███)═╝
          ╚═(███)═╝
          ╚═(███)═╝
        </Text>
      </View>
    )
  }
});

var homeRoute = {
  name: 'Millipede',
  component: homePage
};

var millipede = React.createClass({
  render() {
    return (
      <Router firstRoute={homeRoute} />
    )
  }
});

AppRegistry.registerComponent('millipede', () => millipede);