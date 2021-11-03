import * as React from 'react';
import { useQuery } from '@apollo/client';
import { FlatList, StyleSheet, Text } from 'react-native';

import { Routes } from '../../constants/Routes';
import { RootStackScreenProps } from '../../constants/types';

import { Colors }from '../../constants/Colors';
import { ListItem } from './components';
import { LIST_DATA } from '../../mock';
import { GET_ITEMS } from './graphql';
import { LoadingIndicator } from '../../components/statuses/LoadIndicator';

const keyExtractor = (item: { id: string }): any => {
  return (item.id)
}

const listEmptyComponent = () => {
  return (
    <Text style={styles.emptyText}>You haven't any words yet</Text>
  )
}

export function ListScreen({ navigation }: RootStackScreenProps<Routes.list>) {
  const { data, loading, error } = useQuery(GET_ITEMS);

  const renderItem = React.useCallback(({ item })=> {
    return <ListItem item={item} />
  }, []);

  if (loading) {
    return <LoadingIndicator
      size='large'
      color={Colors.highlightSecondary}
    />
  }

  return (
    <FlatList
      windowSize={9}
      data={LIST_DATA}
      refreshing={loading}
      initialNumToRender={15}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={listEmptyComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.mainWhite,
  },
  emptyText: {
    fontSize: 30,
    marginTop: '55%',
    alignSelf: 'center',
    justifyContent: 'center',
    fontFamily: 'AmaticSC-Bold',
  },
});
