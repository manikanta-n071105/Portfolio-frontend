import { useEffect, useState, useRef } from 'react';
import { Sparkles, FileText } from 'lucide-react';
import resumePDF from '../assets/Resume.pdf';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const codeWindowRef = useRef(null);

  // Syntax highlighting function
  const highlightSyntax = (lineText, currentText) => {
    if (!currentText.includes(lineText.substring(0, 3))) return null;
    
    const parts = [];
    let text = lineText;
    
    // Parse and highlight the line
    const tokens = [];
    let i = 0;
    
    while (i < text.length) {
      // Check for keywords
      if (/\b(const|let|var|function|return)\b/.test(text.substring(i))) {
        const match = text.substring(i).match(/\b(const|let|var|function|return)\b/);
        if (match && match.index === 0) {
          tokens.push({ type: 'keyword', value: match[0] });
          i += match[0].length;
          continue;
        }
      }
      
      // Check for strings
      if (text[i] === '"') {
        let str = '"';
        i++;
        while (i < text.length && text[i] !== '"') {
          str += text[i];
          i++;
        }
        if (i < text.length) str += '"';
        tokens.push({ type: 'string', value: str });
        i++;
        continue;
      }
      
      // Check for properties (word followed by colon)
      if (/\w+:/.test(text.substring(i))) {
        const match = text.substring(i).match(/(\w+):/);
        if (match && match.index === 0) {
          tokens.push({ type: 'property', value: match[1] });
          tokens.push({ type: 'punctuation', value: ':' });
          i += match[0].length;
          continue;
        }
      }
      
      // Check for punctuation
      if (/[{}[\](),;]/.test(text[i])) {
        tokens.push({ type: 'punctuation', value: text[i] });
        i++;
        continue;
      }
      
      // Regular text
      tokens.push({ type: 'text', value: text[i] });
      i++;
    }
    
    return (
      <>
        {tokens.map((token, idx) => {
          if (token.type === 'keyword') return <span key={idx} className="keyword">{token.value}</span>;
          if (token.type === 'string') return <span key={idx} className="string">{token.value}</span>;
          if (token.type === 'property') return <span key={idx} className="property">{token.value}</span>;
          if (token.type === 'punctuation') return <span key={idx} className="punctuation">{token.value}</span>;
          return <span key={idx}>{token.value}</span>;
        })}
      </>
    );
  };
  
  const codeLines = [
    { text: 'const developer = {' },
    { text: '  name: "Nookala Manikanta",' },
    { text: '  role: "Full Stack Developer",' },
    { text: '  location: "India",' },
    { text: '  skills: {' },
    { text: '    backend: ["NodeJS", "ExpressJS", "RESTFull API"],' },
    { text: '    frontend: ["React", "JavaScript", "HTML/CSS"],' },
    { text: '    database: ["MySQL", "MongoDB"],' },
    { text: '  },' },
    { text: '  currentFocus: "Building scalable web applications"' },
    { text: '};' }
  ];
  
  const fullText = codeLines.map(line => line.text).join('\n');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!codeWindowRef.current) return;
      
      const card = codeWindowRef.current;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation for "pushing door" effect
      // The corner you point at moves backward, opposite corner comes forward
      const rotateX = ((y - centerY) / centerY) * 12; // Not inverted - natural push
      const rotateY = ((x - centerX) / centerX) * -12; // Inverted - natural push
      
      // Scale down slightly to compensate for visual size increase during rotation
      const scale = 0.98;
      
      // Apply transform
      card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        scale(${scale})
      `;
      card.style.transition = 'transform 0.15s ease-out';
      
      // Update shine effect position
      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${percentX}%`);
      card.style.setProperty('--mouse-y', `${percentY}%`);
    };

    const handleMouseLeave = () => {
      if (!codeWindowRef.current) return;
      codeWindowRef.current.style.transform = 'rotateY(-5deg) rotateX(5deg) translateX(0) translateY(0)';
      codeWindowRef.current.style.transition = 'transform 0.5s ease';
    };

    const card = codeWindowRef.current;
    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="availability-badge">
            <Sparkles size={16} />
            <span>Available for opportunities</span>
          </div>
          
          <h1 className="hero-title">
            Hi, I'm<br />
            <span className="gradient-text">MANIKANTA</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Full Stack <span className="highlight">Developer</span>
          </h2>
          
          <p className="hero-description">
            Passionate about building robust web applications with
            modern technologies. Recently completed Full Stack Web Development
            training with internship at SureTrust ProED.
          </p>
          
          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => scrollToSection('projects')}>
              View My Work
            </button>
            <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="secondary-btn">
              <FileText size={20} />
              View Resume
            </a>
            <button className="secondary-btn" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="hero-code">
          <div className="code-window" ref={codeWindowRef}>
            <div className="code-header">
              <div className="code-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <span className="code-title">developer.js</span>
            </div>
            <div className="code-content">
              <div className="code-lines">
                {codeLines.map((line, index) => {
                  const lineNumber = index + 1;
                  
                  // Calculate how much of this line should be visible
                  const previousLinesLength = codeLines
                    .slice(0, index)
                    .reduce((sum, l) => sum + l.text.length + 1, 0); // +1 for newline
                  
                  const currentLineStart = previousLinesLength;
                  const currentLineEnd = currentLineStart + line.text.length;
                  
                  const typedLength = text.length;
                  
                  let visibleText = '';
                  let showCursor = false;
                  
                  if (typedLength > currentLineStart) {
                    const charsToShow = Math.min(typedLength - currentLineStart, line.text.length);
                    visibleText = line.text.substring(0, charsToShow);
                    showCursor = typedLength >= currentLineStart && typedLength <= currentLineEnd;
                  }
                  
                  return (
                    <div key={index} className={`code-line ${visibleText ? 'visible' : ''}`}>
                      <span className="line-number">{lineNumber}</span>
                      <span className="line-content">
                        {visibleText && highlightSyntax(visibleText, text)}
                        {showCursor && <span className="cursor">|</span>}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  );
};

export default Hero;
