'use client';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button/Button';

import styles from './CompletedView.module.css';

const CompletedView = () => {
  const answers = useSelector((state: RootState) => state.quiz.answers);
  const hasAnswers = Object.values(answers)?.length;
  const router = useRouter();

  useEffect(() => {
    if (!hasAnswers) {
      router.push('/');
    }
  }, [hasAnswers, router]);

  if (!hasAnswers) return null;

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.answers}>
          {Object.entries(answers).map(([id, item]) => {
            return (
              <div key={id} className={styles.answer}>
                <div>id: {id}</div>
                <div>value: {item.value}</div>
                <div>label: {item.label}</div>
              </div>
            );
          })}
        </div>

        <Button onClick={() => router.push('/')}>Go to homepage</Button>
      </div>
    </div>
  );
};

export default CompletedView;
