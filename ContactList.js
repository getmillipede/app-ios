'use strict';

var _ = require('lodash'),
  AddressBook = require('react-native-addressbook'),
  Contact = require('./Contact'),
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  listView: {
    backgroundColor: '#F5FCFF'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


class ContactList extends Component {

  constructor(props) {
    super(props);
      this.state = {
        isLoading: true,
        dataSource: new ListView.DataSource({
          rowHasChanged: (row1, row2) => row1 !== row2
        })
      };
  }

  componentDidMount() {
    this.getContact();
  }


  filterMobilePhone(item) {
    if (item.phoneNumbers && item.phoneNumbers[0]) {
      return true;
    }
    return false;
  }

  getContact() {
    AddressBook.getContacts( (err, contacts) => {
      
      var contactsCleaned =  _.sortBy(_.where(contacts, {'phoneNumbers':  [{'label': 'mobile'}]}), 'firstName');
      // var contactsSorted = _.sortBy(contactsCleaned, 'firstName');
      // console.log(contactsSorted);
      // var contactsWithMobile = contacts.filter(this.filterMobilePhone)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(contactsCleaned),
        isLoading: false
      });
    })
  }

  goToContact(contact) {
    this.props.toRoute({
      name: "Send a millipede",
      component: Contact,
      data: contact,
    });
  }

  render() {
    if (this.state.isLoading) {
      return this.renderLoadingView();
    }
 
    return (

      // <Text>{this.state.dataSource}</Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderContact.bind(this)}
        style={styles.listView}
      />

    )
  }

  renderContact(contact) {
    return (
      <TouchableHighlight onPress={() => this.goToContact(contact)} underlayColor='#dddddd'>
        <View>
          <View style={styles.container}>
            <View style={styles.rightContainer}>
            <Text style={styles.title}>{contact.firstName} {contact.lastName}</Text>
            <Text style={styles.phone}>{contact.phoneNumbers[0].number}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    )
  }

  renderLoadingView() {
    return (
      <View style={styles.loading}>
        <ActivityIndicatorIOS
          size='large'/>
        <Text>
          Loading contacts...
        </Text>
      </View>
    );
  }
};

module.exports = ContactList