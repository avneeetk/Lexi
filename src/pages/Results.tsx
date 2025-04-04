
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTest } from '../context/TestContext';
import { Award, BookOpen, Brain, Lightbulb, Sparkles } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';

const Results: React.FC = () => {
  const { testResults, resetTests, preferredLanguage } = useTest();
  const navigate = useNavigate();
  
  const letterMatchResults = testResults.letterMatch;
  const wordSpeedResults = testResults.wordSpeed;
  const visualFocusResults = testResults.visualFocus;
  
  const hasResults = letterMatchResults && wordSpeedResults && visualFocusResults;
  
  const translations = {
    english: {
      title: "Your Screening Results",
      subtitle: "Based on your performance in the screening tests, we've generated these insights.",
      disclaimer: "Note: This is not a clinical diagnosis. For a formal assessment, please consult with a healthcare professional.",
      noResults: "No Results Yet",
      noResultsMessage: "You haven't completed the screening tests yet. Complete all tests to see your results.",
      goToScreening: "Go to Screening",
      riskAssessment: "Learning Profile",
      letterMatchResults: "Letter Matching Results",
      wordSpeedResults: "Word Speed Results",
      visualFocusResults: "Visual Focus Results",
      accuracy: "Accuracy",
      timeSpent: "Time Spent",
      wordsPerMinute: "Words Per Minute",
      focusScore: "Focus Score",
      attentionSpan: "Attention Span",
      distractions: "Distractions",
      challengingWords: "Challenging Words",
      recommendations: "Personalized Recommendations",
      takeTestAgain: "Take Test Again",
      returnHome: "Return Home",
      seconds: "seconds",
      riskLevels: {
        low: "Typically Developing",
        medium: "Some Learning Differences",
        high: "Significant Learning Differences"
      },
      strengthsTitle: "Your Strengths",
      learningStyle: "Learning Style",
      styles: {
        visual: "Visual Learner",
        auditory: "Auditory Learner",
        mixed: "Mixed Learning Style"
      }
    },
    hindi: {
      title: "आपके स्क्रीनिंग परिणाम",
      subtitle: "स्क्रीनिंग परीक्षणों में आपके प्रदर्शन के आधार पर, हमने ये अंतर्दृष्टि उत्पन्न की हैं।",
      disclaimer: "नोट: यह एक नैदानिक निदान नहीं है। औपचारिक मूल्यांकन के लिए, कृपया स्वास्थ्य देखभाल पेशेवर से परामर्श करें।",
      noResults: "अभी तक कोई परिणाम नहीं",
      noResultsMessage: "आपने अभी तक स्क्रीनिंग परीक्षण पूरा नहीं किया है। अपने परिणाम देखने के लिए सभी परीक्षण पूरे करें।",
      goToScreening: "स्क्रीनिंग पर जाएं",
      riskAssessment: "लर्निंग प्रोफाइल",
      letterMatchResults: "अक्षर मिलान परिणाम",
      wordSpeedResults: "शब्द गति परिणाम",
      visualFocusResults: "दृश्य फोकस परिणाम",
      accuracy: "सटीकता",
      timeSpent: "बिताया गया समय",
      wordsPerMinute: "प्रति मिनट शब्द",
      focusScore: "फोकस स्कोर",
      attentionSpan: "ध्यान अवधि",
      distractions: "विकर्षण",
      challengingWords: "चुनौतीपूर्ण शब्द",
      recommendations: "व्यक्तिगत सिफारिशें",
      takeTestAgain: "परीक्षण फिर से लें",
      returnHome: "होम पर वापस जाएं",
      seconds: "सेकंड",
      riskLevels: {
        low: "सामान्य रूप से विकसित",
        medium: "कुछ सीखने की विभिन्नताएं",
        high: "महत्वपूर्ण सीखने की विभिन्नताएं"
      },
      strengthsTitle: "आपकी ताकत",
      learningStyle: "सीखने की शैली",
      styles: {
        visual: "दृश्य शिक्षार्थी",
        auditory: "श्रवण शिक्षार्थी",
        mixed: "मिश्रित सीखने की शैली"
      }
    },
    tamil: {
      title: "உங்கள் திரையிடல் முடிவுகள்",
      subtitle: "திரையிடல் சோதனைகளில் உங்கள் செயல்திறனின் அடிப்படையில், இந்த அறிவுகளை உருவாக்கியுள்ளோம்.",
      disclaimer: "குறிப்பு: இது ஒரு மருத்துவ கண்டறிதல் அல்ல. முறையான மதிப்பீட்டிற்கு, ஒரு சுகாதார நிபுணரை அணுகவும்.",
      noResults: "இன்னும் முடிவுகள் இல்லை",
      noResultsMessage: "நீங்கள் இன்னும் திரையிடல் சோதனைகளை முடிக்கவில்லை. உங்கள் முடிவுகளைக் காண அனைத்து சோதனைகளையும் முடிக்கவும்.",
      goToScreening: "திரையிடலுக்குச் செல்லவும்",
      riskAssessment: "கற்றல் சுயவிவரம்",
      letterMatchResults: "எழுத்து பொருத்தும் முடிவுகள்",
      wordSpeedResults: "சொல் வேக முடிவுகள்",
      visualFocusResults: "காட்சி கவன முடிவுகள்",
      accuracy: "துல்லியம்",
      timeSpent: "செலவழித்த நேரம்",
      wordsPerMinute: "நிமிடத்திற்கு சொற்கள்",
      focusScore: "கவன மதிப்பெண்",
      attentionSpan: "கவன காலம்",
      distractions: "கவனச்சிதறல்கள்",
      challengingWords: "சவாலான சொற்கள்",
      recommendations: "தனிப்பயனாக்கப்பட்ட பரிந்துரைகள்",
      takeTestAgain: "மீண்டும் சோதனை எடுக்கவும்",
      returnHome: "முகப்புக்குத் திரும்பு",
      seconds: "விநாடிகள்",
      riskLevels: {
        low: "பொதுவாக வளர்ந்து வருகிறது",
        medium: "சில கற்றல் வேறுபாடுகள்",
        high: "குறிப்பிடத்தக்க கற்றல் வேறுபாடுகள்"
      },
      strengthsTitle: "உங்கள் பலங்கள்",
      learningStyle: "கற்றல் பாணி",
      styles: {
        visual: "காட்சி கற்பவர்",
        auditory: "கேட்கும் கற்பவர்",
        mixed: "கலப்பு கற்றல் பாணி"
      }
    }
  };
  
  const content = translations[preferredLanguage];
  
  const calculateRiskLevel = () => {
    if (!hasResults) return 'unknown';
    
    const letterMatchScore = 
      (letterMatchResults?.correctAnswers || 0) / 
      (letterMatchResults?.totalQuestions || 1);
    
    const wordSpeedAccuracy = (wordSpeedResults?.accuracy || 0) / 100;
    const visualFocusScore = (visualFocusResults?.focusScore || 0) / 100;
    
    const avgScore = (letterMatchScore + wordSpeedAccuracy + visualFocusScore) / 3;
    
    if (avgScore > 0.85) return 'low';
    if (avgScore > 0.65) return 'medium';
    return 'high';
  };
  
  const riskLevel = calculateRiskLevel();
  
  const determineLearningStyle = () => {
    if (!hasResults) return 'mixed';
    
    const letterMatchScore = 
      (letterMatchResults?.correctAnswers || 0) / 
      (letterMatchResults?.totalQuestions || 1) * 100;
    
    const visualFocusScore = visualFocusResults?.focusScore || 0;
    
    if (letterMatchScore > 85 && visualFocusScore > 85) {
      return 'visual';
    } else if (wordSpeedResults?.wordsPerMinute && wordSpeedResults.wordsPerMinute > 30) {
      return 'auditory';
    }
    
    return 'mixed';
  };
  
  const learningStyle = determineLearningStyle();
  
  const getStrengths = () => {
    if (!hasResults) return [];
    
    const strengths = [];
    
    if (letterMatchResults?.correctAnswers && letterMatchResults.correctAnswers > (letterMatchResults.totalQuestions * 0.8)) {
      strengths.push(preferredLanguage === 'english' 
        ? 'Good at recognizing letter shapes' 
        : preferredLanguage === 'hindi'
          ? 'अक्षर आकारों को पहचानने में अच्छे'
          : 'எழுத்து வடிவங்களை அடையாளம் காண்பதில் நல்லது');
    }
    
    if (wordSpeedResults?.accuracy && wordSpeedResults.accuracy > 80) {
      strengths.push(preferredLanguage === 'english' 
        ? 'High reading accuracy' 
        : preferredLanguage === 'hindi'
          ? 'उच्च पठन सटीकता'
          : 'உயர் வாசிப்பு துல்லியம்');
    }
    
    if (wordSpeedResults?.wordsPerMinute && wordSpeedResults.wordsPerMinute > 30) {
      strengths.push(preferredLanguage === 'english' 
        ? 'Good reading speed' 
        : preferredLanguage === 'hindi'
          ? 'अच्छी पढ़ने की गति'
          : 'நல்ல வாசிப்பு வேகம்');
    }
    
    if (visualFocusResults?.focusScore && visualFocusResults.focusScore > 80) {
      strengths.push(preferredLanguage === 'english' 
        ? 'Strong visual attention' 
        : preferredLanguage === 'hindi'
          ? 'मजबूत दृश्य ध्यान'
          : 'வலுவான காட்சி கவனம்');
    }
    
    if (visualFocusResults?.distractionCount && visualFocusResults.distractionCount < 5) {
      strengths.push(preferredLanguage === 'english' 
        ? 'Stays focused on tasks' 
        : preferredLanguage === 'hindi'
          ? 'कार्यों पर ध्यान केंद्रित रखता है'
          : 'பணிகளில் கவனம் செலுத்துகிறது');
    }
    
    // Add at least one strength if none found
    if (strengths.length === 0) {
      strengths.push(preferredLanguage === 'english' 
        ? 'Completed all tests successfully' 
        : preferredLanguage === 'hindi'
          ? 'सभी परीक्षण सफलतापूर्वक पूरे किए'
          : 'அனைத்து சோதனைகளையும் வெற்றிகரமாக முடித்தார்');
    }
    
    return strengths;
  };
  
  const getRecommendations = () => {
    if (!hasResults) return [];
    
    const recommendations = [];
    
    // Common recommendations for all risk levels
    recommendations.push(preferredLanguage === 'english' 
      ? 'Read for 15 minutes every day with a parent or teacher' 
      : preferredLanguage === 'hindi'
        ? 'माता-पिता या शिक्षक के साथ हर दिन 15 मिनट पढ़ें'
        : 'ஒரு பெற்றோர் அல்லது ஆசிரியருடன் ஒவ்வொரு நாளும் 15 நிமிடங்கள் படிக்கவும்');
    
    // Based on letter matching results
    if (letterMatchResults?.correctAnswers && letterMatchResults.correctAnswers < (letterMatchResults.totalQuestions * 0.7)) {
      recommendations.push(preferredLanguage === 'english' 
        ? 'Practice letter recognition games with flashcards' 
        : preferredLanguage === 'hindi'
          ? 'फ्लैशकार्ड के साथ अक्षर पहचान खेल का अभ्यास करें'
          : 'ஃபிளாஷ்கார்டுகளுடன் எழுத்து அங்கீகார விளையாட்டுகளை பயிற்சி செய்யுங்கள்');
    }
    
    // Based on word speed results
    if (wordSpeedResults?.wordsPerMinute && wordSpeedResults.wordsPerMinute < 25) {
      recommendations.push(preferredLanguage === 'english' 
        ? 'Practice reading simple stories aloud' 
        : preferredLanguage === 'hindi'
          ? 'सरल कहानियों को जोर से पढ़ने का अभ्यास करें'
          : 'எளிய கதைகளை உரக்கப் படிக்கப் பயிற்சி செய்யுங்கள்');
    }
    
    // Based on visual focus results
    if (visualFocusResults?.distractionCount && visualFocusResults.distractionCount > 8) {
      recommendations.push(preferredLanguage === 'english' 
        ? 'Use a reading guide or ruler under each line when reading' 
        : preferredLanguage === 'hindi'
          ? 'पढ़ते समय प्रत्येक पंक्ति के नीचे एक पढ़ने वाले गाइड या रूलर का उपयोग करें'
          : 'படிக்கும்போது ஒவ்வொரு வரியின் கீழும் ஒரு வாசிப்பு வழிகாட்டி அல்லது அளவுகோலைப் பயன்படுத்தவும்');
    }
    
    // Based on learning style
    if (learningStyle === 'visual') {
      recommendations.push(preferredLanguage === 'english' 
        ? 'Use colorful highlighters to mark important words' 
        : preferredLanguage === 'hindi'
          ? 'महत्वपूर्ण शब्दों को चिह्नित करने के लिए रंगीन हाइलाइटर का उपयोग करें'
          : 'முக்கியமான வார்த்தைகளைக் குறிக்க வண்ணமயமான ஹைலைட்டர்களைப் பயன்படுத்தவும்');
    } else if (learningStyle === 'auditory') {
      recommendations.push(preferredLanguage === 'english' 
        ? 'Record yourself reading and listen to it' 
        : preferredLanguage === 'hindi'
          ? 'अपने आप को पढ़ते हुए रिकॉर्ड करें और उसे सुनें'
          : 'நீங்கள் படிப்பதைப் பதிவுசெய்து அதைக் கேளுங்கள்');
    }
    
    // Add risk-level specific recommendations
    if (riskLevel === 'high') {
      recommendations.push(preferredLanguage === 'english' 
        ? 'Consider consulting with a learning specialist' 
        : preferredLanguage === 'hindi'
          ? 'एक लर्निंग स्पेशलिस्ट से परामर्श करने पर विचार करें'
          : 'ஒரு கற்றல் நிபுணரை ஆலோசிக்க பரிசீலிக்கவும்');
    }
    
    return recommendations;
  };
  
  const handleStartOver = () => {
    resetTests();
    navigate('/screening');
  };
  
  if (!hasResults) {
    return (
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center animate-fade-in">
            <h1 className="text-2xl font-bold mb-4 font-dyslexic">{content.noResults}</h1>
            <p className="text-muted-foreground mb-6">
              {content.noResultsMessage}
            </p>
            <Link to="/screening" className="btn-primary font-dyslexic">
              {content.goToScreening}
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-end mb-4">
            <LanguageSelector />
          </div>
          
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-4 font-dyslexic">{content.title}</h1>
            <p className="text-muted-foreground mb-2">
              {content.subtitle}
            </p>
            <p className="text-xs text-muted-foreground mb-8">
              {content.disclaimer}
            </p>
          </div>
          
          <div className="grid gap-8 mb-8">
            <div className="bg-dyslexia-cream rounded-lg shadow-sm p-6 border border-primary/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-xl font-semibold mb-4 font-dyslexic">{content.riskAssessment}</h2>
              
              <div className="flex flex-col items-center justify-center mb-6">
                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-3 ${
                  riskLevel === 'low' 
                    ? 'bg-green-100 text-green-700' 
                    : riskLevel === 'medium'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-red-100 text-red-700'
                }`}>
                  <span className="text-lg font-medium">
                    {riskLevel === 'low' ? '😊' : riskLevel === 'medium' ? '🤔' : '🧠'}
                  </span>
                </div>
                <span className="text-lg font-medium capitalize">
                  {content.riskLevels[riskLevel]}
                </span>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-3 font-dyslexic">{content.strengthsTitle}</h3>
                <ul className="space-y-2">
                  {getStrengths().map((strength, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-5 h-5 rounded-full bg-green-100 text-green-700 flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                        ✓
                      </span>
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium mb-2 font-dyslexic">{content.learningStyle}</h3>
                <div className="bg-white rounded-lg p-4 inline-block">
                  <div className="flex items-center">
                    {learningStyle === 'visual' ? (
                      <Brain className="text-primary mr-2" size={20} />
                    ) : learningStyle === 'auditory' ? (
                      <Sparkles className="text-primary mr-2" size={20} />
                    ) : (
                      <Lightbulb className="text-primary mr-2" size={20} />
                    )}
                    <span className="font-medium">{content.styles[learningStyle]}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dyslexia-blue rounded-lg shadow-sm p-6 border border-primary/10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-lg font-semibold mb-4 font-dyslexic">{content.letterMatchResults}</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                    <span>{content.accuracy}</span>
                    <span className="font-medium">
                      {letterMatchResults ? `${Math.round((letterMatchResults.correctAnswers / letterMatchResults.totalQuestions) * 100)}%` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                    <span>{content.timeSpent}</span>
                    <span className="font-medium">
                      {letterMatchResults ? `${letterMatchResults.timeSpent.toFixed(1)} ${content.seconds}` : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="bg-dyslexia-cream rounded-lg shadow-sm p-6 border border-primary/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h2 className="text-lg font-semibold mb-4 font-dyslexic">{content.wordSpeedResults}</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                    <span>{content.wordsPerMinute}</span>
                    <span className="font-medium">
                      {wordSpeedResults ? wordSpeedResults.wordsPerMinute : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                    <span>{content.accuracy}</span>
                    <span className="font-medium">
                      {wordSpeedResults ? `${wordSpeedResults.accuracy}%` : 'N/A'}
                    </span>
                  </div>
                  {wordSpeedResults?.difficultWords.length ? (
                    <div className="pt-2">
                      <span className="block mb-2">{content.challengingWords}:</span>
                      <div className="flex flex-wrap gap-2">
                        {wordSpeedResults.difficultWords.map((word, index) => (
                          <span key={index} className="bg-white px-2 py-1 rounded-full text-sm">
                            {word}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              
              <div className="bg-dyslexia-green rounded-lg shadow-sm p-6 border border-primary/10 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                <h2 className="text-lg font-semibold mb-4 font-dyslexic">{content.visualFocusResults}</h2>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                    <span>{content.focusScore}</span>
                    <span className="font-medium">
                      {visualFocusResults ? visualFocusResults.focusScore : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                    <span>{content.attentionSpan}</span>
                    <span className="font-medium">
                      {visualFocusResults ? `${visualFocusResults.attentionSpan} ${content.seconds}` : 'N/A'}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-primary/10">
                    <span>{content.distractions}</span>
                    <span className="font-medium">
                      {visualFocusResults ? visualFocusResults.distractionCount : 'N/A'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-primary/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-xl font-semibold mb-4 font-dyslexic">{content.recommendations}</h2>
              <ul className="space-y-3">
                {getRecommendations().map((recommendation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-primary/10 text-primary flex-shrink-0 flex items-center justify-center mr-3 mt-0.5">
                      ✓
                    </span>
                    <span>{recommendation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <button onClick={handleStartOver} className="btn-secondary font-dyslexic">
              {content.takeTestAgain}
            </button>
            <Link to="/" className="btn-primary font-dyslexic">
              {content.returnHome}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
