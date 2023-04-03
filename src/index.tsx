import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { setupStore } from 'Store/store'
import { App } from 'App'
import { Web3Modal } from '@web3modal/react'
import { WagmiConfig } from 'wagmi'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import { ethereumClient, PROJECT_ID, wagmiClient } from './utils/walletConnect'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <WagmiConfig client={wagmiClient}>
        <HashRouter>
          <App />
        </HashRouter>
      </WagmiConfig>
      <Web3Modal projectId={PROJECT_ID} ethereumClient={ethereumClient} />
    </Provider>
  </React.StrictMode>,
)
