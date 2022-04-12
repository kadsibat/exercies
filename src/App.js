

import './App.css'
import ClientProvider from './provider/ClientProvider';
import AppRouter from "./router/AppRouter";



function App() {
  return (
    <ClientProvider>
      <AppRouter/>
    </ClientProvider>
  );
}

export default App;
