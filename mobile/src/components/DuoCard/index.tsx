import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './styles';
import { DuoInfo } from '../DuoInfo/index';
import { THEME } from '../../theme/index';
import { GameController } from 'phosphor-react-native';

export interface DuoCardProps {
  id: string,
  name: string,
  yearsPlaying: string,
  weekDays: string[],
  hourStart: string,
  hourEnd: string,
  useVoiceChannel: boolean,
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void
}



export function DuoCard({data, onConnect}: Props) {
  
  return (
    <View style={styles.container}>
      <DuoInfo
        label="Nome"
        value={data.name}
      />

      <DuoInfo
        label="Tempo de jogo"
        value={data.yearsPlaying}
      />

      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />

      <DuoInfo
        label="VoiceChannel"
        value={data.useVoiceChannel ? "sim" : "nao"}
        colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT }
      />

      <TouchableOpacity 
        style={styles.button}
        onPress={onConnect}  
      >
        <GameController
          color={THEME.COLORS.TEXT}
          size={20}
        />

        <Text style={styles.buttonTitle}>
          Conectar
        </Text>
      </TouchableOpacity>


    </View>
  );
}