import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GameRouteParams } from '../../@types/navigation';

import { Background } from '../../components/Background';
import { styles } from './styles';

import { Entypo } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { Image, TouchableOpacity, View, FlatList } from 'react-native';
import logoImg from '../../assets/logo-nlw-esports.png';
import { DuoCard } from '../../components/DuoCard';
import { DuoCardProps } from '../../components/DuoCard/index';
import { Heading } from '../../components/Heading';
import { THEME } from '../../theme';
import { DuoMatch } from '../../components/DuoMatch';



export function Game() {
  const [duos, setDuo] = useState<DuoCardProps[]>([])
  const [discordDuoSelected, setDiscordDuoSelected] = useState<string>('')

  const route = useRoute();
  const game = route.params as GameRouteParams

  const navigate = useNavigation()
  
  useEffect(() => {
    fetch(`http://192.168.1.4:3333/games/${game.id}/ads`)
      .then(response => response.json())
      .then(data => setDuo(data))
  }, [])


  function handleGoBack() {
    navigate.goBack()
  }

  function getDiscordUser(adsId: string) {
    fetch(`http://192.168.1.4:3333/ads/${adsId}/discord`)
      .then(response => response.json())
      .then(data => setDiscordDuoSelected(data.discord));
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
            
          <Image
            source={logoImg}
            style={styles.logo}
          />
          <View style={styles.right}/>
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode='cover'
        />        

        <Heading
          title={game.title}
          subtitle="Conecte-se e comece a jogar"
        />

        <FlatList
          data={duos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <DuoCard 
              data={item} 
              onConnect={() => getDiscordUser(item.id)}
              />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
          onClose={() => setDiscordDuoSelected('')}
        />
      </SafeAreaView>
    </Background>
  );
}