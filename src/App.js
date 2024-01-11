import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import { useState } from 'react';
import PhotoContextProvider from './context/PhotoContext';

function App() {

    const [searchTerm, setSearchTerm] = useState('Mountain')

    const setSearch = (srchValue) => {
        setSearchTerm(srchValue);
    }

    return (
        <PhotoContextProvider>
            <div className="App">
                <Header setSearch={setSearch} />
                <Container searchTerm={searchTerm} />
            </div>
        </PhotoContextProvider>
    );
}

export default App;