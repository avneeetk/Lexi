
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, BookOpen, Award, ArrowRight } from 'lucide-react';
import LanguageSelector from '../components/LanguageSelector';
import { useTest } from '../context/TestContext';

const Home: React.FC = () => {
  const { preferredLanguage } = useTest();

  const translations = {
    english: {
      title: "DyslexAI Screening",
      subtitle: "Fun games to help you read better!",
      description: "Complete these quick activities to discover your unique learning style.",
      ageRange: "Perfect for ages 8-12",
      startButton: "Let's Start!",
      features: [
        {
          icon: Rocket,
          title: "Quick Games",
          description: "Just 5 minutes to complete all activities"
        },
        {
          icon: BookOpen,
          title: "Learn Your Way",
          description: "Get personalized learning tips just for you"
        },
        {
          icon: Award,
          title: "Track Progress",
          description: "See how much you improve each time"
        }
      ]
    },
    hindi: {
      title: "डिस्लेक्सिआई स्क्रीनिंग",
      subtitle: "बेहतर पढ़ने में मदद के लिए मज़ेदार खेल!",
      description: "अपनी अनूठी सीखने की शैली की खोज के लिए इन त्वरित गतिविधियों को पूरा करें।",
      ageRange: "8-12 वर्ष की आयु के लिए एकदम सही",
      startButton: "शुरू करें!",
      features: [
        {
          icon: Rocket,
          title: "त्वरित खेल",
          description: "सभी गतिविधियों को पूरा करने के लिए सिर्फ 5 मिनट"
        },
        {
          icon: BookOpen,
          title: "अपने तरीके से सीखें",
          description: "सिर्फ आपके लिए व्यक्तिगत सीखने की युक्तियां प्राप्त करें"
        },
        {
          icon: Award,
          title: "प्रगति का हिसाब रखें",
          description: "देखें कि हर बार आप कितना सुधार करते हैं"
        }
      ]
    },
    tamil: {
      title: "டிஸ்லெக்சியா ஏஐ திரையிடல்",
      subtitle: "சிறப்பாக படிக்க உதவும் வேடிக்கையான விளையாட்டுகள்!",
      description: "உங்கள் தனித்துவமான கற்றல் பாணியைக் கண்டறிய இந்த விரைவான செயல்பாடுகளை முடிக்கவும்.",
      ageRange: "8-12 வயதினருக்கு சரியானது",
      startButton: "ஆரம்பிக்கலாம்!",
      features: [
        {
          icon: Rocket,
          title: "விரைவான விளையாட்டுகள்",
          description: "அனைத்து செயல்பாடுகளையும் முடிக்க வெறும் 5 நிமிடங்கள்"
        },
        {
          icon: BookOpen,
          title: "உங்கள் வழியில் கற்றுக்கொள்ளுங்கள்",
          description: "உங்களுக்கான தனிப்பயனாக்கப்பட்ட கற்றல் குறிப்புகளைப் பெறுங்கள்"
        },
        {
          icon: Award,
          title: "முன்னேற்றத்தைக் கண்காணிக்கவும்",
          description: "ஒவ்வொரு முறையும் நீங்கள் எவ்வளவு மேம்படுகிறீர்கள் என்பதைப் பாருங்கள்"
        }
      ]
    }
  };

  const content = translations[preferredLanguage];

  return (
    <div className="pt-16 pb-12 px-4 animate-fade-in">
      <div className="container mx-auto">
        <div className="flex justify-end mb-4">
          <LanguageSelector />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gradient-primary font-dyslexic">
            {content.title}
          </h1>
          <p className="text-xl mb-6 text-primary/80 font-dyslexic">
            {content.subtitle}
          </p>
          <p className="text-lg text-muted-foreground mb-6">
            {content.description}
          </p>
          <div className="inline-block bg-primary/10 text-primary rounded-full px-4 py-1 text-sm mb-8">
            {content.ageRange}
          </div>
          
          <Link to="/screening" className="btn-primary flex items-center justify-center gap-2 text-lg max-w-xs mx-auto font-dyslexic">
            {content.startButton} <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {content.features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm p-6 border border-primary/10 text-center hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-dyslexic">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto bg-secondary/50 rounded-lg p-6 border border-primary/10">
          <h2 className="text-xl font-semibold mb-4 text-center font-dyslexic">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium mb-3">1</div>
              <p className="text-sm text-muted-foreground">Complete fun visual and reading games</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium mb-3">2</div>
              <p className="text-sm text-muted-foreground">Get personalized learning suggestions</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium mb-3">3</div>
              <p className="text-sm text-muted-foreground">Track your progress over time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
