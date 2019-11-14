import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { IFile } from '../commons/file';
import { API } from '../commons/config';
import { formatUrl } from '../commons/utils';
import { doFetch } from '../commons/fetch';
import { get } from 'lodash';

type IRenderItem = {
  item: IFile;
};

function Home(props) {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isUnmounted = false;
    setLoading(true);
    (async () => {
      const api = formatUrl(API.files, {
        username: 'chenyan',
        prefix: '/',
        maxKeys: 20
      });
      const files = await doFetch(api);
      if (!isUnmounted) {
        setFiles(files);
        setLoading(false);
      }
    })();
    return () => {
      isUnmounted = true;
    };
  }, []);

  const fileItemList = get(files, 'fileItemList', null) as IFile[] | null;

  const _renderItemFile = ({ item }: IRenderItem) => {
    const type = item.key.split('.')[1];
    const name = item.key.split('/')[1];
    const imgUri = {
      png: {
        uri: `http://localhost:8080/file/download?username=chenyan&key=/${name}&mode=inline`
      },
      jpg: {
        uri: `http://localhost:8080/file/download?username=chenyan&key=/${name}&mode=inline`
      },
      pdf: require('../assets/pdf.jpg'),
      xlsx: require('../assets/xlsx.jpeg')
    };
    const _scanFileDetail = () => {
      props.navigation.navigate('Details',{
        detail: item
      })
    };
    return (
      <View>
        <TouchableOpacity onPress={_scanFileDetail}>
          <Image
            style={styles.folder}
            source={imgUri[type]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text
          style={styles.folderName}
          ellipsizeMode="middle"
          numberOfLines={1}>
          {name}
        </Text>
      </View>
    );
  };

  return (
    <>
      {loading ? (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>loading...</Text>
        </View>
      ) : (
        <View>
          <FlatList
            renderItem={_renderItemFile}
            data={fileItemList}
            numColumns={3}
            style={styles.filesContainer}
            keyExtractor={item => item.key}
          />
          <FlatList
            data={get(files, 'folders', [])}
            keyExtractor={item => item}
            numColumns={3}
            renderItem={({ item }) => {
              return (
                <View>
                  <Image
                    source={require('../assets/folder.png')}
                    style={styles.folder}
                    resizeMode="contain"
                  />
                  <Text
                    style={styles.folderName}
                    ellipsizeMode="middle"
                    numberOfLines={1}>
                    {item.split('/')[1]}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      )}
    </>
  );
}

Home.navigationOptions = {
  title: "Home"
}

const styles = StyleSheet.create({
  loading: {
    marginTop: 200
  },
  loadingText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center'
  },
  filesContainer: {
    padding: 20,
    height: '50%'
  },
  folder: {
    width: 100,
    height: 100,
    margin: 10
  },
  folderName: {
    textAlign: 'center',
    maxWidth: 100
  }
});

export default Home;
