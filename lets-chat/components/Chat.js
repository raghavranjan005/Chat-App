import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  StyleSheet,
  View,
} from 'react-native';

import Fire from '../Fire';

type Props = {
  name?: string,
};

class Chat extends React.Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    title: (navigation.getParam("name")),
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: this.props.navigation.getParam("name"),
      _id: Fire.shared.uid,
    };
  }

  render() {
    return (
      <GiftedChat styles={styles.background}
        messages={this.state.messages}
        onSend={Fire.shared.send}
        user={this.user}
      />
   
    );
  }

  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}

const styles = StyleSheet.create({
  background:{
    backgroundColor:"#666699",
  }
  
});




export default Chat;
