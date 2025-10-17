import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { SoundscapeScreen } from './components/SoundscapeScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'welcome' | 'soundscape'>('welcome');

  return (
    <div className="size-full">
      {currentScreen === 'welcome' ? (
        <WelcomeScreen 
          onEnter={() => setCurrentScreen('soundscape')} 
        />
      ) : (
        <SoundscapeScreen 
          onBackHome={() => setCurrentScreen('welcome')}
        />
      )}
    </div>
  );
}