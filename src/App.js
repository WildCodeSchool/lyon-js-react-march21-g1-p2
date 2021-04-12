import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import Header from './components/Header';
import RequestsResults from './components/RequestsResults';

export default function App() {
  return (
    <>
      <Header />
      <Main />
      <RequestsResults />
      <Footer />
    </>
  );
}
