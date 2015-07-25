'use strict';

var AddressBook = require('react-native-addressbook'),
  Composer = require('NativeModules').RNMessageComposer,
  React = require('react-native'),
  Router = require('react-native-router');

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
    marginBottom: 40
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
});


class Contact extends Component {

composeMillipede(phone) {

  var message = '    ╚⊙ ⊙╝\n' +
    '  ╚═(███)═╝\n' +
    ' ╚═(███)═╝\n' + 
    '╚═(███)═╝\n' +
    ' ╚═(███)═╝\n' +
    '  ╚═(███)═╝\n' +
    '   ╚═(███)═╝\n' +
    '    ╚═(███)═╝\n' +
    '    ╚═(███)═╝\n' +
    '   ╚═(███)═╝\n' +
    '  ╚═(███)═╝\n' +
    ' ╚═(███)═╝\n' +
    '╚═(███)═╝\n' +
    ' ╚═(███)═╝\n' +
    '  ╚═(███)═╝\n' +
    '   ╚═(███)═╝\n' +
    '    ╚═(███)═╝\n' +
    '    ╚═(███)═╝\n' +
    '   ╚═(███)═╝\n' +
    '  ╚═(███)═╝\n' +
    ' ╚═(███)═╝';

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
       <TouchableOpacity onPress={() => this.composeMillipede(contact.phoneNumbers[0].number) }>
          <Text style={styles.button}>Send it!</Text>
        </TouchableOpacity>
        </View>
      </View>
    )
  }

};

module.exports = Contact