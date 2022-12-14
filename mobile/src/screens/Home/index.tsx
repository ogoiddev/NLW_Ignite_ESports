import { FlatList, Image } from 'react-native';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';

import { GameCard, GameCardProps } from '../../components/GameCard/index';
import { styles } from './styles';

import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>()
  const navigate = useNavigation()

  function handleOpenGame({id, title, bannerUrl}: GameCardProps) {
    navigate.navigate('game', {id, title, bannerUrl});
  }

  useEffect(() => {
    fetch('http://192.168.1.4:3333/games')
    .then(response => response.json())
    .then(data => {
      setGames(data)
    })
  }, [])

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image
          source={ logoImg }
          style={ styles.logo }
          />

        <Heading 
          title='Encontre seu duo!'
          subtitle='Selecione o game que deseja jogar...'
          />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={ ({item})=> (
            <GameCard
              data={item}
              onPress={ () => handleOpenGame(item) }
            />
          )}
          showsVerticalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />


      </SafeAreaView>
    </Background>
  );
}