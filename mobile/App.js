import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { StyleSheet, Text, View, I18nManager } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
