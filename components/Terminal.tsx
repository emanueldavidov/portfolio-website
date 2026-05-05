'use client';

import { useState, useRef, useEffect } from 'react';
import { VscTerminal, VscClose } from 'react-icons/vsc';

import { THEME_KEYS } from '@/lib/themes';
import styles from '@/styles/Terminal.module.css';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
}

const commands: Record<string, () => string[]> = {
  help: () => [
    'Available commands:',
    '  help      - Show this help message',
    '  about     - About Emanuel',
    '  skills    - Technical expertise',
    '  projects  - View my technical projects',
    '  contact   - Contact information',
    '  theme     - Change theme (usage: theme <name>)',
    '  themes    - List available themes',
    '  clear     - Clear terminal',
    '  date      - Show current date',
    '  whoami    - Who am I?',
    '  ls        - List directory contents',
    '  pwd       - Print working directory',
  ],
  about: () => [
    "Hi, I'm Emanuel Davidov!",
    "I'm a B.Sc. Software Engineering graduate (Dean’s List) from Braude College.",
    "I specialize in building high-concurrency systems and distributed architectures.",
    "Passionate about Networking protocols, Infrastructure, and AI research.",
  ],
  skills: () => [
    'Technical Expertise:',
    '  Languages:  Java, Python, C, JavaScript, SQL',
    '  Networking: TCP/IP Stack, UDP, DNS, Routing Algorithms',
    '  Infrastructure: Docker, GitHub Actions, Linux',
    '  Web:        React, Node.js, Redux, Tailwind CSS',
    '  Data/AI:    BERT, PyTorch, Pandas, NumPy',
  ],
  projects: () => [
    'Featured Projects:',
    '  1. The Digital Philologist - Unsupervised authorship detection (BERT/Python)',
    '  2. Multi-threaded Chat Server - High-concurrency Java server with Docker',
    '  3. NutriPlus - Full-stack nutrition management (React/Node.js)',
    '  4. pandas-pyarrow - Open-source contribution to high-performance data libs',
    '  5. GoNature - Desktop park management system (JavaFX/MySQL)',
    '  6. ChainAbuse - Bitcoin fraud detection using Design Patterns',
  ],
  contact: () => [
    'Contact Information:',
    '  Email:    emanuel12342111@gmail.com',
    '  GitHub:   github.com/emanueldavidov',
    '  LinkedIn: linkedin.com/in/emanuel-davidov',
  ],
  themes: () => [
    'Available themes:',
    ...THEME_KEYS.map((theme, i) => `  ${theme}${i === 0 ? '  (default)' : ''}`),
    '',
    'Use "theme <name>" to change theme.',
  ],
  date: () => [new Date().toString()],
  whoami: () => ['Software Engineer'],
  ls: () => ['about/', 'projects/', 'contact/', 'README.md'], // הסרנו את articles ו-github
  pwd: () => ['/home/emanuel/portfolio'],
};

// שאר הקוד של ה-Component נשאר ללא שינוי מבחינה לוגית
const processCommand = (input: string): TerminalLine[] => {
  const trimmed = input.trim();
  const lines: TerminalLine[] = [{ type: 'input', content: `$ ${trimmed}` }];

  if (!trimmed) {
    return lines;
  }

  const parts = trimmed.split(' ');
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (cmd === 'clear') {
    return [];
  }

  if (cmd === 'theme' && args[0]) {
    if ((THEME_KEYS as string[]).includes(args[0])) {
      document.documentElement.setAttribute('data-theme', args[0]);
      localStorage.setItem('theme', args[0]);
      lines.push({ type: 'output', content: `Theme changed to ${args[0]}` });
    } else {
      lines.push({ type: 'error', content: `Unknown theme: ${args[0]}. Type "themes" for available options.` });
    }
    return lines;
  }

  if (cmd === 'theme') {
    lines.push({ type: 'error', content: 'Usage: theme <name>. Type "themes" for available options.' });
    return lines;
  }

  if (cmd === 'echo') {
    lines.push({ type: 'output', content: args.join(' ') });
    return lines;
  }

  if (commands[cmd]) {
    const output = commands[cmd]();
    output.forEach(line => {
      lines.push({ type: 'output', content: line });
    });
  } else {
    lines.push({ type: 'error', content: `Command not found: ${cmd}. Type "help" for available commands.` });
  }

  return lines;
};

interface TerminalProps {
  onToggle: () => void;
}

const Terminal = ({ onToggle }: TerminalProps) => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: 'output', content: 'Welcome to Emanuel\'s interactive terminal!' },
    { type: 'output', content: 'Type "help" for available commands.' },
    { type: 'output', content: '' },
  ]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (trimmed === 'clear') {
      setLines([]);
    } else {
      const newLines = processCommand(input);
      setLines(prev => [...prev, ...newLines]);
    }

    if (trimmed) {
      setCommandHistory(prev => [...prev, trimmed]);
    }
    setHistoryIndex(-1);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex < commandHistory.length - 1 ? historyIndex + 1 : historyIndex;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex] || '');
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <VscTerminal className={styles.terminalIcon} />
          <span>Terminal</span>
        </div>
        <div className={styles.headerRight}>
          <button onClick={onToggle} className={styles.headerBtn} title="Close">
            <VscClose size={14} />
          </button>
        </div>
      </div>
      <div className={styles.body} ref={terminalRef} onClick={handleTerminalClick}>
        {lines.map((line, index) => (
          <div
            key={index}
            className={`${styles.line} ${
              line.type === 'error' ? styles.error : line.type === 'input' ? styles.input : ''
            }`}
          >
            {line.content}
          </div>
        ))}
        <form onSubmit={handleSubmit} className={styles.inputLine}>
          <span className={styles.prompt}>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className={styles.input}
            autoComplete="off"
            spellCheck={false}
          />
        </form>
      </div>
    </div>
  );
};

export default Terminal;