import React from 'react'
import { AppRegistry } from 'react-native'
import * as eva from '@eva-design/eva'
import { ApplicationProvider } from '@ui-kitten/components'

import { App } from 'components/src/App'
import { name as appName } from './app.json'

const KittenApp = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <App />
  </ApplicationProvider>
)

AppRegistry.registerComponent(appName, () => KittenApp)
