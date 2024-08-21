import React from 'react';
import { TikTokEmbed } from 'react-social-media-embed';

const MyTikTokEmbed = ({ url }) => {
  return (
    <div style={styles.container}>
      <TikTokEmbed url={url} style={styles.embed} />
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    paddingBottom: '177.78%', // 16/9 = 177.78% (for portrait mode)
    height: 0,
    overflow: 'hidden',
  },
  embed: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

export default MyTikTokEmbed;
