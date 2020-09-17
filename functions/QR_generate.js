import React from 'react';
import { Modal, Text } from 'react-native';
import {QRCode} from 'react-native-custom-qr-codes';

export default function GenerateQR(props){
  return(
    <Modal>
      <Text>{props.mesg}</Text>
      <QRCode content="https://google.com" logo={require('../assets/NYIT_logo.png')}/>
    </Modal>
  );
}
