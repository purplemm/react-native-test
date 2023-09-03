import React from 'react';
import { WebView } from 'react-native-webview';

export default function GoogleScreen() {
  return (
    <WebView source={{ uri: "https://www.google.co.kr" }} />
  )
}