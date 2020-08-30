import React from 'react';
import { Platform, NativeModules } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18n } from '@aws-amplify/core';
import Router from './navigation';
import { store, persistor } from './store';
//import { SpinnerLoading } from '_molecules';

/* Import disctionaries */
import portuguese from './config/i18n/i18n_pt_BR';
I18n.putVocabularies(portuguese);

const setLanguage = () => {
  let lang;
  if (Platform.OS === 'ios') {
    /* Aquire language on ios devices */
    lang = NativeModules.SettingsManager.settings.AppleLocale;
  } else {
    /* Aquire language on Android devices */
    lang = NativeModules.I18nManager.localeIdentifier;
  }
  I18n.setLanguage(lang);
};

const App: React.FC = () => {
  setLanguage();
  persistor.purge(); //Para limpar a store
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
