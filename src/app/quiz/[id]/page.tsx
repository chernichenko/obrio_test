import React, { Suspense } from 'react';
import quizData from '@/assets/json/common.json';
import classNames from 'classnames';
import Step from '@/components/Step/Step';
import Header from '@/components/Header/Header';
import { IStep, ScreenType } from '@/types';

import styles from './page.module.css';

export async function generateStaticParams() {
  return quizData.steps.map((step: IStep) => ({
    id: step.id.toString(),
  }));
}

export default function StepPage({ params }: any) {
  const step = quizData.steps.find((q) => q.id === params?.id);
  const gradientMode = step?.screenType === ScreenType.Info;

  if (!step) {
    return <div>Question not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={classNames(styles.wrap, gradientMode && styles.gradientMode)}>
        <Header gradientMode={gradientMode} />
        <div className={styles.container}>
          <Step {...step} />
        </div>
      </div>
    </Suspense>
  );
}