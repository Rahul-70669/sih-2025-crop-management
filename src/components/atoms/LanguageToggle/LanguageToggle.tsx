import React from 'react';
import type {LanguageToggleProps} from './LanguageToggleProps';
import { Button } from '../Button/Button';

const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onChange }) => {
  return (
    <div>
      <Button
        variant={currentLang === 'en' ? 'primary' : 'secondary'}
        onClick={() => onChange('en')}
      >
        English
      </Button>
      <Button
        variant={currentLang === 'hi' ? 'primary' : 'secondary'}
        onClick={() => onChange('hi')}
      >
        Hindi
      </Button>
    </div>
  );
};

export default LanguageToggle;
