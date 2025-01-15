'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import quizData from '@/assets/json/common.json';

export default function App() {
  const router = useRouter();

  useEffect(() => {
    if (quizData.steps?.length > 0) {
      const firstQuestionId = quizData.steps[0].id;
      router.push(`/quiz/${firstQuestionId}`);
    }
  }, [router]);
  
  return null;
}
