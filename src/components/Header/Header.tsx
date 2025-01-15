'use client';

import React from 'react';
import quizData from '@/assets/json/common.json';
import { useParams, useRouter } from 'next/navigation';
import IconArrowLeft from '../ui/icons/IconArrowLeft';
import IconLogo from '../ui/icons/IconLogo';
import IconLogoWhite from '../ui/icons/IconLogoWhite';

import styles from './Header.module.css';

interface IHeader {
  gradientMode?: boolean;
}

const Header = ({ gradientMode }: IHeader) => {
  const router = useRouter();
  const params = useParams();

  const firstQuestionId = quizData.steps[0].id;
  const showBackButton = firstQuestionId !== params.id;

  const handleBack = () => router.back();

  return (
    <header className={`${styles.header} ${gradientMode ? styles.gradientMode : ''}`}>
      <div className={styles.container}>
        {showBackButton && (
          <div className={styles.backButton} onClick={handleBack}>
            <IconArrowLeft />
          </div>
        )}
        <div className={styles.logo}>
          {gradientMode ? <IconLogoWhite /> : <IconLogo />}
        </div>
      </div>
    </header>
  );
};

export default Header;
