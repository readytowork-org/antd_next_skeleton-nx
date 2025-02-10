'use client';

import { setUserLocale } from '../../utils/locale';
import { useLocale } from 'next-intl';
import { Button } from 'antd';

const LanguageOption = () => {
  const locale = useLocale();

  function switchLanguage() {
    setUserLocale(locale === 'en' ? 'ja' : 'en');
  }

  return (
    <div style={{ position: 'absolute', right: 0, top: '20%', zIndex: 'auto' }}>
      <Button
        type="primary"
        style={{
          borderRadius: '50% 0 0 50%',
          border: 'none',
          padding: '16px',
          textTransform: 'uppercase',
          backgroundColor: locale === 'en' ? '#1890ff' : '#fff',
          color: locale === 'en' ? '#fff' : '#ff4d4f'
        }}
        onClick={() => switchLanguage()}
      >
        {locale === 'en' ? 'Ja' : 'En'}
      </Button>
    </div>
  );
};

export { LanguageOption };
