
import React, { createContext, useContext, useState, useEffect } from 'react';

type TestType = 'letterMatch' | 'wordSpeed' | 'visualFocus';

interface TestResult {
  letterMatch?: {
    correctAnswers: number;
    totalQuestions: number;
    timeSpent: number; // in seconds
    errorPatterns?: {
      reversals?: number; // b/d, p/q confusions
      skips?: number; // skipped letters/words
      substitutions?: number; // replacing letters
    };
  };
  wordSpeed?: {
    wordsPerMinute: number;
    accuracy: number; // percentage
    difficultWords: string[];
  };
  visualFocus?: {
    focusScore: number; // 0-100
    attentionSpan: number; // in seconds
    distractionCount: number;
  };
  language?: 'english' | 'hindi' | 'tamil';
}

interface TestContextType {
  currentTest: TestType | null;
  testResults: TestResult;
  preferredLanguage: 'english' | 'hindi' | 'tamil';
  startTest: (test: TestType) => void;
  completeTest: (test: TestType, results: any) => void;
  resetTests: () => void;
  isTestCompleted: (test: TestType) => boolean;
  setLanguagePreference: (language: 'english' | 'hindi' | 'tamil') => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export const TestProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTest, setCurrentTest] = useState<TestType | null>(null);
  const [testResults, setTestResults] = useState<TestResult>({});
  const [preferredLanguage, setPreferredLanguage] = useState<'english' | 'hindi' | 'tamil'>('english');

  const startTest = (test: TestType) => {
    setCurrentTest(test);
  };

  const completeTest = (test: TestType, results: any) => {
    setTestResults((prev) => ({
      ...prev,
      [test]: results,
    }));
    setCurrentTest(null);
  };

  const resetTests = () => {
    setTestResults({});
    setCurrentTest(null);
  };

  const isTestCompleted = (test: TestType) => {
    return !!testResults[test];
  };

  const setLanguagePreference = (language: 'english' | 'hindi' | 'tamil') => {
    setPreferredLanguage(language);
  };

  return (
    <TestContext.Provider
      value={{
        currentTest,
        testResults,
        preferredLanguage,
        startTest,
        completeTest,
        resetTests,
        isTestCompleted,
        setLanguagePreference,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};
