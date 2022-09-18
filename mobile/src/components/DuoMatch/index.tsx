import React from 'react';
import { Modal, ModalProps, Text, View, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons' 
import { styles } from './styles';
import { THEME } from '../../theme/index';
import { CheckCircle } from 'phosphor-react-native';
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard'
import { useState } from 'react';
import { Loading } from '../Loading';

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false)

  async function handleUserDiscordClipboard() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord)

    Alert.alert('Discord copiado', 'Usuário copiado use seu ctrl+V')

    setIsCopping(false)
  }

  return (
    <Modal
      animationType='fade'
      transparent
      statusBarTranslucent
      {...rest}
    >

      <View style={styles.container}>

        <View style={styles.content}>

          <TouchableOpacity 
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons 
              name='close'
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle 
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight='bold'
          />

          <Heading
            title="Let's play"
            subtitle='Agora e so comecar a jogar'
            style={{ alignItems: 'center', marginTop: 24 }}

          /> 

          <Text style={styles.label}>
            Adicione no discord
          </Text>

          <TouchableOpacity 
            onPress={handleUserDiscordClipboard}
            style={styles.discordButton}
            disabled={isCopping}
          >
          <Text style={styles.discord}>
              { isCopping ? <Loading/> : discord }
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}