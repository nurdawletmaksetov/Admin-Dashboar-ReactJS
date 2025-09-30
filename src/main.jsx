import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import { Notifications } from '@mantine/notifications';
import { MantineProvider } from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import { ModalsProvider } from '@mantine/modals';

createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <ModalsProvider>
      <Notifications position="bottom-right" autoClose={5000} />
      <App />
    </ModalsProvider>
  </MantineProvider>
)

const preloader = document.getElementById("preloader");
if (preloader) {
  preloader.style.display = "none";
}
