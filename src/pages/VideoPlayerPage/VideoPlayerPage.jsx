import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { styles } from './style';

const VideoPlayerPage = () => {
  const router = useRoute();
  const url = router.params.video;
  const html = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${url}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>`;
  const [vi, setVi] = useState(true);

  return (
    <View style={styles.container} >
      <WebView
        javaScriptEnabled
        source={{html: html}}
        onLoadStart={() => setVi(!vi)}
        style={styles.video}
      />
    </View>
  );
};

export default VideoPlayerPage;
