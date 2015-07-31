'use strict';

var AddressBook = require('react-native-addressbook'),
  Composer = require('NativeModules').RNMessageComposer,
  Millipede = require('millipede'),
  React = require('react-native'),
  Router = require('react-native-router'),
  _ = require('lodash');

var {
  ActivityIndicatorIOS,
  AppRegistry,
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} = React;


var styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(253,253,253)',
  }, 
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 40,
  },
  button: {
    padding: 20,
    marginBottom: 20,
    fontSize: 24,
    borderRadius: 4,
    borderWidth: 0.5,
    textAlign: 'center',
    color: '#d6d7da',
    borderColor: '#d6d7da',
  },
});


class Contact extends Component {

composeMillipede(phone, reverse) {

  if (!reverse) {
    var message = Millipede(Math.floor((Math.random() * 500) + 42)).toString()
    message = message + "\n\n" + "Chaud devant! Mon millepatte doit passer!"
  } else {
     var message = message + "\n\n" + "Aaah, il est passé !"
     message = Millipede(Math.floor((Math.random() * 500) + 42), { reverse: true }).toString()
    
  }

  message = message + "\n\n" + "Envoyé depuis l'application getmillipede"

  Composer.composeMessageWithArgs(
    {
        'messageText': message, 
        'subject':'Millipede',
        'recipients':[phone]
    },
    (result) => {
        // TODO    
    }
  )
}

  render() {
    var contact = this.props.data;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Send a millipede to {contact.firstName} {contact.lastName}</Text>
        </View>
        <View>
       <TouchableOpacity onPress={() => this.composeMillipede(contact.phoneNumbers[0].number, false) }>
          <Text style={styles.button}>Send a millipede</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => this.composeMillipede(contact.phoneNumbers[0].number, true) }>
          <Text style={styles.button}>Sen a reverse millipede</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }

};

module.exports = Contact