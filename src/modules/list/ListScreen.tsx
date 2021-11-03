import * as React from 'react';
import { useQuery } from '@apollo/client';
import { FlatList, StyleSheet, Text } from 'react-native';

import { Colors }from '../../constants/Colors';
import { Routes } from '../../constants/Routes';
import { ListItem } from './components';
import { LIST_DATA } from '../../mock';
import { GET_ITEMS } from './graphql';
import { RootState } from '../../config/redux/types';
import { setListData } from './redux';
import { LoadingIndicator } from '../../components/statuses/LoadIndicator';
import { RootStackScreenProps } from '../../constants/types';
import { useDispatch, useSelector } from 'react-redux';

const keyExtractor = (item: { id: string }): any => {
  return (item.id)
}

const listEmptyComponent = () => {
  return (
    <Text style={styles.emptyText}>You haven't any words yet</Text>
  )
}

export function ListScreen({ navigation }: RootStackScreenProps<Routes.list>) {
  const dispatch = useDispatch();
  const listData = useSelector((state: RootState) => state.list.data );

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

  React.useEffect(() => {
    if(data && data['items']){
      dispatch(setListData(data['items']))
    } else {
      dispatch(setListData(LIST_DATA))
    }
  }, [data])

  return (
    <FlatList
      windowSize={9}
      data={listData}
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
