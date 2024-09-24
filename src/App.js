import React from 'react';
import HeroSection from './components/HeroSection/HeroSection'; // Import your HeroSection
import MyComponent from './components/MyComponent/MyComponent'; // Keep this if you need it
import FooterBanner from './components/FooterBanner/FooterBanner';

function App() {
    return (
        <div className="App">
            <HeroSection /> {/* Add the HeroSection here */}
            <MyComponent /> {/* Keep this if it contains other parts of your application */}
            <FooterBanner />
        </div>
    );
}

export default App;
