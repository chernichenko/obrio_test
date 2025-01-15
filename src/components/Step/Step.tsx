'use client';

import React, { useMemo } from 'react';
import { IStep, IStepOption, ScreenType } from '@/types';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button/Button';
import { saveAnswers } from '@/store/quizSlice';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { processTemplate } from '@/helpers';
import { RootState } from '@/store';

import styles from './Step.module.css';

const Step = ({
  id,
  screenType,
  neededAnswer,
  title,
  subtitle,
  description,
  button,
  options,
}: IStep) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const answers = useSelector((state: RootState) => state.quiz.answers);
  const isInfoStep = screenType === ScreenType.Info;
  const searchParams = useSearchParams();
  const nextQuestionId = searchParams.get('nextQuestionId');

  const formattedTitle = useMemo(() => {
    if (!neededAnswer?.stepId) return title;

    const neededAnswerLabel = answers[neededAnswer.stepId]?.label;
    if (!neededAnswerLabel) return title;
    
    const variables = { [neededAnswer.key]: neededAnswerLabel };
    return processTemplate(title, variables);
  }, [title, neededAnswer, answers]);

  const singleChoiceNextHandler = (option: IStepOption) => {
    const { value, label, nextQuestionId, nextInfoId } = option;
    dispatch(saveAnswers({ id, value, label }));

    // Last Step
    if (!nextQuestionId) {
      router.push(`/complete`);
      return;
    }

    if (nextInfoId) {
      router.push(`/quiz/${nextInfoId}?nextQuestionId=${option.nextQuestionId}`);
      return;
    }

    router.push(`/quiz/${nextQuestionId}`);
  }

  const infoNextHandler = () => {
    // Last Step
    if (!nextQuestionId) {
      router.push(`/complete`);
      return;
    }
    
    router.push(`/quiz/${nextQuestionId}`);
  }

  return (
    <div className={`${styles.wrap} ${isInfoStep ? styles.infoWrap : ''}`}>
      <h1 className={styles.title}>{formattedTitle}</h1>
      
      {screenType === ScreenType.SingleChoice && (
        <>
          {subtitle && <h2 className={styles.subtitle}>{subtitle}</h2>}
          {!!options?.length && (
            <div className={styles.options}>
              {options.map(option => {
                return (
                  <Button key={option.value} onClick={() => singleChoiceNextHandler(option)}>{option.label}</Button>
                );
              })}
            </div>
          )}
        </>
      )}
      
      {screenType === ScreenType.Info && (
        <>
          {description && <p className={styles.description}>{description}</p>}
          {button && (
            <Button variant='white' onClick={infoNextHandler}>{button}</Button>
          )}
        </>
      )}
    </div>
  );
};

export default Step;
