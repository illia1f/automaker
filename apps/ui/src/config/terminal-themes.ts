/**
 * Terminal themes that match the app themes
 * Each theme provides colors for xterm.js terminal emulator
 */

import type { ThemeMode } from '@automaker/types';

export interface TerminalTheme {
  background: string;
  foreground: string;
  cursor: string;
  cursorAccent: string;
  selectionBackground: string;
  selectionForeground?: string;
  black: string;
  red: string;
  green: string;
  yellow: string;
  blue: string;
  magenta: string;
  cyan: string;
  white: string;
  brightBlack: string;
  brightRed: string;
  brightGreen: string;
  brightYellow: string;
  brightBlue: string;
  brightMagenta: string;
  brightCyan: string;
  brightWhite: string;
}

// Dark theme (default)
const darkTheme: TerminalTheme = {
  background: '#0a0a0a',
  foreground: '#d4d4d4',
  cursor: '#d4d4d4',
  cursorAccent: '#0a0a0a',
  selectionBackground: '#264f78',
  black: '#1e1e1e',
  red: '#f44747',
  green: '#6a9955',
  yellow: '#dcdcaa',
  blue: '#569cd6',
  magenta: '#c586c0',
  cyan: '#4ec9b0',
  white: '#d4d4d4',
  brightBlack: '#808080',
  brightRed: '#f44747',
  brightGreen: '#6a9955',
  brightYellow: '#dcdcaa',
  brightBlue: '#569cd6',
  brightMagenta: '#c586c0',
  brightCyan: '#4ec9b0',
  brightWhite: '#ffffff',
};

// Light theme
const lightTheme: TerminalTheme = {
  background: '#ffffff',
  foreground: '#383a42',
  cursor: '#383a42',
  cursorAccent: '#ffffff',
  selectionBackground: '#add6ff',
  black: '#383a42',
  red: '#e45649',
  green: '#50a14f',
  yellow: '#c18401',
  blue: '#4078f2',
  magenta: '#a626a4',
  cyan: '#0184bc',
  white: '#fafafa',
  brightBlack: '#4f525e',
  brightRed: '#e06c75',
  brightGreen: '#98c379',
  brightYellow: '#e5c07b',
  brightBlue: '#61afef',
  brightMagenta: '#c678dd',
  brightCyan: '#56b6c2',
  brightWhite: '#ffffff',
};

// Retro / Cyberpunk theme - neon green on black
const retroTheme: TerminalTheme = {
  background: '#000000',
  foreground: '#39ff14',
  cursor: '#39ff14',
  cursorAccent: '#000000',
  selectionBackground: '#39ff14',
  selectionForeground: '#000000',
  black: '#000000',
  red: '#ff0055',
  green: '#39ff14',
  yellow: '#ffff00',
  blue: '#00ffff',
  magenta: '#ff00ff',
  cyan: '#00ffff',
  white: '#39ff14',
  brightBlack: '#555555',
  brightRed: '#ff5555',
  brightGreen: '#55ff55',
  brightYellow: '#ffff55',
  brightBlue: '#55ffff',
  brightMagenta: '#ff55ff',
  brightCyan: '#55ffff',
  brightWhite: '#ffffff',
};

// Dracula theme
const draculaTheme: TerminalTheme = {
  background: '#282a36',
  foreground: '#f8f8f2',
  cursor: '#f8f8f2',
  cursorAccent: '#282a36',
  selectionBackground: '#44475a',
  black: '#21222c',
  red: '#ff5555',
  green: '#50fa7b',
  yellow: '#f1fa8c',
  blue: '#bd93f9',
  magenta: '#ff79c6',
  cyan: '#8be9fd',
  white: '#f8f8f2',
  brightBlack: '#6272a4',
  brightRed: '#ff6e6e',
  brightGreen: '#69ff94',
  brightYellow: '#ffffa5',
  brightBlue: '#d6acff',
  brightMagenta: '#ff92df',
  brightCyan: '#a4ffff',
  brightWhite: '#ffffff',
};

// Nord theme
const nordTheme: TerminalTheme = {
  background: '#2e3440',
  foreground: '#d8dee9',
  cursor: '#d8dee9',
  cursorAccent: '#2e3440',
  selectionBackground: '#434c5e',
  black: '#3b4252',
  red: '#bf616a',
  green: '#a3be8c',
  yellow: '#ebcb8b',
  blue: '#81a1c1',
  magenta: '#b48ead',
  cyan: '#88c0d0',
  white: '#e5e9f0',
  brightBlack: '#4c566a',
  brightRed: '#bf616a',
  brightGreen: '#a3be8c',
  brightYellow: '#ebcb8b',
  brightBlue: '#81a1c1',
  brightMagenta: '#b48ead',
  brightCyan: '#8fbcbb',
  brightWhite: '#eceff4',
};

// Monokai theme
const monokaiTheme: TerminalTheme = {
  background: '#272822',
  foreground: '#f8f8f2',
  cursor: '#f8f8f2',
  cursorAccent: '#272822',
  selectionBackground: '#49483e',
  black: '#272822',
  red: '#f92672',
  green: '#a6e22e',
  yellow: '#f4bf75',
  blue: '#66d9ef',
  magenta: '#ae81ff',
  cyan: '#a1efe4',
  white: '#f8f8f2',
  brightBlack: '#75715e',
  brightRed: '#f92672',
  brightGreen: '#a6e22e',
  brightYellow: '#f4bf75',
  brightBlue: '#66d9ef',
  brightMagenta: '#ae81ff',
  brightCyan: '#a1efe4',
  brightWhite: '#f9f8f5',
};

// Tokyo Night theme
const tokyonightTheme: TerminalTheme = {
  background: '#1a1b26',
  foreground: '#a9b1d6',
  cursor: '#c0caf5',
  cursorAccent: '#1a1b26',
  selectionBackground: '#33467c',
  black: '#15161e',
  red: '#f7768e',
  green: '#9ece6a',
  yellow: '#e0af68',
  blue: '#7aa2f7',
  magenta: '#bb9af7',
  cyan: '#7dcfff',
  white: '#a9b1d6',
  brightBlack: '#414868',
  brightRed: '#f7768e',
  brightGreen: '#9ece6a',
  brightYellow: '#e0af68',
  brightBlue: '#7aa2f7',
  brightMagenta: '#bb9af7',
  brightCyan: '#7dcfff',
  brightWhite: '#c0caf5',
};

// Solarized Dark theme
const solarizedTheme: TerminalTheme = {
  background: '#002b36',
  foreground: '#839496',
  cursor: '#839496',
  cursorAccent: '#002b36',
  selectionBackground: '#073642',
  black: '#073642',
  red: '#dc322f',
  green: '#859900',
  yellow: '#b58900',
  blue: '#268bd2',
  magenta: '#d33682',
  cyan: '#2aa198',
  white: '#eee8d5',
  brightBlack: '#002b36',
  brightRed: '#cb4b16',
  brightGreen: '#586e75',
  brightYellow: '#657b83',
  brightBlue: '#839496',
  brightMagenta: '#6c71c4',
  brightCyan: '#93a1a1',
  brightWhite: '#fdf6e3',
};

// Gruvbox Dark theme
const gruvboxTheme: TerminalTheme = {
  background: '#282828',
  foreground: '#ebdbb2',
  cursor: '#ebdbb2',
  cursorAccent: '#282828',
  selectionBackground: '#504945',
  black: '#282828',
  red: '#cc241d',
  green: '#98971a',
  yellow: '#d79921',
  blue: '#458588',
  magenta: '#b16286',
  cyan: '#689d6a',
  white: '#a89984',
  brightBlack: '#928374',
  brightRed: '#fb4934',
  brightGreen: '#b8bb26',
  brightYellow: '#fabd2f',
  brightBlue: '#83a598',
  brightMagenta: '#d3869b',
  brightCyan: '#8ec07c',
  brightWhite: '#ebdbb2',
};

// Catppuccin Mocha theme
const catppuccinTheme: TerminalTheme = {
  background: '#1e1e2e',
  foreground: '#cdd6f4',
  cursor: '#f5e0dc',
  cursorAccent: '#1e1e2e',
  selectionBackground: '#45475a',
  black: '#45475a',
  red: '#f38ba8',
  green: '#a6e3a1',
  yellow: '#f9e2af',
  blue: '#89b4fa',
  magenta: '#cba6f7',
  cyan: '#94e2d5',
  white: '#bac2de',
  brightBlack: '#585b70',
  brightRed: '#f38ba8',
  brightGreen: '#a6e3a1',
  brightYellow: '#f9e2af',
  brightBlue: '#89b4fa',
  brightMagenta: '#cba6f7',
  brightCyan: '#94e2d5',
  brightWhite: '#a6adc8',
};

// One Dark theme
const onedarkTheme: TerminalTheme = {
  background: '#282c34',
  foreground: '#abb2bf',
  cursor: '#528bff',
  cursorAccent: '#282c34',
  selectionBackground: '#3e4451',
  black: '#282c34',
  red: '#e06c75',
  green: '#98c379',
  yellow: '#e5c07b',
  blue: '#61afef',
  magenta: '#c678dd',
  cyan: '#56b6c2',
  white: '#abb2bf',
  brightBlack: '#5c6370',
  brightRed: '#e06c75',
  brightGreen: '#98c379',
  brightYellow: '#e5c07b',
  brightBlue: '#61afef',
  brightMagenta: '#c678dd',
  brightCyan: '#56b6c2',
  brightWhite: '#ffffff',
};

// Synthwave '84 theme
const synthwaveTheme: TerminalTheme = {
  background: '#262335',
  foreground: '#ffffff',
  cursor: '#ff7edb',
  cursorAccent: '#262335',
  selectionBackground: '#463465',
  black: '#262335',
  red: '#fe4450',
  green: '#72f1b8',
  yellow: '#fede5d',
  blue: '#03edf9',
  magenta: '#ff7edb',
  cyan: '#03edf9',
  white: '#ffffff',
  brightBlack: '#614d85',
  brightRed: '#fe4450',
  brightGreen: '#72f1b8',
  brightYellow: '#f97e72',
  brightBlue: '#03edf9',
  brightMagenta: '#ff7edb',
  brightCyan: '#03edf9',
  brightWhite: '#ffffff',
};

// Red theme - Dark theme with red accents
const redTheme: TerminalTheme = {
  background: '#1a0a0a',
  foreground: '#c8b0b0',
  cursor: '#ff4444',
  cursorAccent: '#1a0a0a',
  selectionBackground: '#5a2020',
  black: '#2a1010',
  red: '#ff4444',
  green: '#6a9a6a',
  yellow: '#ccaa55',
  blue: '#6688aa',
  magenta: '#aa5588',
  cyan: '#558888',
  white: '#b0a0a0',
  brightBlack: '#6a4040',
  brightRed: '#ff6666',
  brightGreen: '#88bb88',
  brightYellow: '#ddbb66',
  brightBlue: '#88aacc',
  brightMagenta: '#cc77aa',
  brightCyan: '#77aaaa',
  brightWhite: '#d0c0c0',
};

// Cream theme - Warm, soft, easy on the eyes
const creamTheme: TerminalTheme = {
  background: '#f5f3ee',
  foreground: '#5a4a3a',
  cursor: '#9d6b53',
  cursorAccent: '#f5f3ee',
  selectionBackground: '#d4c4b0',
  black: '#5a4a3a',
  red: '#c85a4f',
  green: '#7a9a6a',
  yellow: '#c9a554',
  blue: '#6b8aaa',
  magenta: '#a66a8a',
  cyan: '#5a9a8a',
  white: '#b0a090',
  brightBlack: '#8a7a6a',
  brightRed: '#e07060',
  brightGreen: '#90b080',
  brightYellow: '#e0bb70',
  brightBlue: '#80a0c0',
  brightMagenta: '#c080a0',
  brightCyan: '#70b0a0',
  brightWhite: '#d0c0b0',
};

// Sunset theme - Mellow oranges and soft pastels
const sunsetTheme: TerminalTheme = {
  background: '#1e1a24',
  foreground: '#f2e8dd',
  cursor: '#dd8855',
  cursorAccent: '#1e1a24',
  selectionBackground: '#3a2a40',
  black: '#1e1a24',
  red: '#dd6655',
  green: '#88bb77',
  yellow: '#ddaa66',
  blue: '#6699cc',
  magenta: '#cc7799',
  cyan: '#66ccaa',
  white: '#e8d8c8',
  brightBlack: '#4a3a50',
  brightRed: '#ee8866',
  brightGreen: '#99cc88',
  brightYellow: '#eebb77',
  brightBlue: '#88aadd',
  brightMagenta: '#dd88aa',
  brightCyan: '#88ddbb',
  brightWhite: '#f5e8dd',
};

// Gray theme - Modern, minimal gray scheme inspired by Cursor
const grayTheme: TerminalTheme = {
  background: '#2a2d32',
  foreground: '#d0d0d5',
  cursor: '#8fa0c0',
  cursorAccent: '#2a2d32',
  selectionBackground: '#3a3f48',
  black: '#2a2d32',
  red: '#d87070',
  green: '#78b088',
  yellow: '#d0b060',
  blue: '#7090c0',
  magenta: '#a880b0',
  cyan: '#60a0b0',
  white: '#b0b0b8',
  brightBlack: '#606068',
  brightRed: '#e88888',
  brightGreen: '#90c8a0',
  brightYellow: '#e0c878',
  brightBlue: '#90b0d8',
  brightMagenta: '#c098c8',
  brightCyan: '#80b8c8',
  brightWhite: '#e0e0e8',
};

// Forest theme - Deep green
const forestTheme: TerminalTheme = {
  background: '#1a2e1a',
  foreground: '#c8e0c8',
  cursor: '#50c878',
  cursorAccent: '#1a2e1a',
  selectionBackground: '#2a4a2a',
  black: '#1a2e1a',
  red: '#c85050',
  green: '#50c878',
  yellow: '#c8b050',
  blue: '#5080c0',
  magenta: '#a060a0',
  cyan: '#50a090',
  white: '#a8c0a8',
  brightBlack: '#4a6a4a',
  brightRed: '#e87878',
  brightGreen: '#78e0a0',
  brightYellow: '#e0c878',
  brightBlue: '#78a0e0',
  brightMagenta: '#c088c0',
  brightCyan: '#78c0b0',
  brightWhite: '#d0e8d0',
};

// Ocean theme - Deep blue
const oceanTheme: TerminalTheme = {
  background: '#1a1e2e',
  foreground: '#c8d0e8',
  cursor: '#5090e0',
  cursorAccent: '#1a1e2e',
  selectionBackground: '#2a3a5a',
  black: '#1a1e2e',
  red: '#e06070',
  green: '#60b080',
  yellow: '#d0b060',
  blue: '#5090e0',
  magenta: '#a070c0',
  cyan: '#50b0c0',
  white: '#a0b0c8',
  brightBlack: '#4a5a7a',
  brightRed: '#f08090',
  brightGreen: '#80d0a0',
  brightYellow: '#f0d080',
  brightBlue: '#70b0f0',
  brightMagenta: '#c090e0',
  brightCyan: '#70d0e0',
  brightWhite: '#d0e0f0',
};

// Solarized Light theme
const solarizedlightTheme: TerminalTheme = {
  background: '#fdf6e3',
  foreground: '#657b83',
  cursor: '#657b83',
  cursorAccent: '#fdf6e3',
  selectionBackground: '#eee8d5',
  black: '#073642',
  red: '#dc322f',
  green: '#859900',
  yellow: '#b58900',
  blue: '#268bd2',
  magenta: '#d33682',
  cyan: '#2aa198',
  white: '#eee8d5',
  brightBlack: '#002b36',
  brightRed: '#cb4b16',
  brightGreen: '#586e75',
  brightYellow: '#657b83',
  brightBlue: '#839496',
  brightMagenta: '#6c71c4',
  brightCyan: '#93a1a1',
  brightWhite: '#fdf6e3',
};

// GitHub Light theme
const githubTheme: TerminalTheme = {
  background: '#ffffff',
  foreground: '#24292f',
  cursor: '#0969da',
  cursorAccent: '#ffffff',
  selectionBackground: '#add6ff',
  black: '#24292f',
  red: '#cf222e',
  green: '#1a7f37',
  yellow: '#9a6700',
  blue: '#0969da',
  magenta: '#8250df',
  cyan: '#1b7c83',
  white: '#6e7781',
  brightBlack: '#57606a',
  brightRed: '#a40e26',
  brightGreen: '#2da44e',
  brightYellow: '#bf8700',
  brightBlue: '#218bff',
  brightMagenta: '#a475f9',
  brightCyan: '#3192aa',
  brightWhite: '#8c959f',
};

// Paper theme - Clean minimal
const paperTheme: TerminalTheme = {
  background: '#fafafa',
  foreground: '#1a1a1a',
  cursor: '#333333',
  cursorAccent: '#fafafa',
  selectionBackground: '#e0e0e0',
  black: '#1a1a1a',
  red: '#c04040',
  green: '#408040',
  yellow: '#907020',
  blue: '#406090',
  magenta: '#704080',
  cyan: '#307070',
  white: '#808080',
  brightBlack: '#505050',
  brightRed: '#d06060',
  brightGreen: '#60a060',
  brightYellow: '#b09040',
  brightBlue: '#6080b0',
  brightMagenta: '#9060a0',
  brightCyan: '#509090',
  brightWhite: '#a0a0a0',
};

// Rose theme - Soft pink
const roseTheme: TerminalTheme = {
  background: '#fdf2f4',
  foreground: '#4a3035',
  cursor: '#e11d48',
  cursorAccent: '#fdf2f4',
  selectionBackground: '#fce7f3',
  black: '#4a3035',
  red: '#e11d48',
  green: '#059669',
  yellow: '#d97706',
  blue: '#3b82f6',
  magenta: '#c026d3',
  cyan: '#0891b2',
  white: '#9f8c91',
  brightBlack: '#6b5a5f',
  brightRed: '#f43f5e',
  brightGreen: '#10b981',
  brightYellow: '#f59e0b',
  brightBlue: '#60a5fa',
  brightMagenta: '#e879f9',
  brightCyan: '#22d3ee',
  brightWhite: '#c4b3b8',
};

// Mint theme - Fresh green
const mintTheme: TerminalTheme = {
  background: '#f0fdf4',
  foreground: '#14532d',
  cursor: '#10b981',
  cursorAccent: '#f0fdf4',
  selectionBackground: '#dcfce7',
  black: '#14532d',
  red: '#dc2626',
  green: '#10b981',
  yellow: '#ca8a04',
  blue: '#2563eb',
  magenta: '#9333ea',
  cyan: '#0891b2',
  white: '#6b7c71',
  brightBlack: '#3f5c47',
  brightRed: '#ef4444',
  brightGreen: '#34d399',
  brightYellow: '#eab308',
  brightBlue: '#3b82f6',
  brightMagenta: '#a855f7',
  brightCyan: '#06b6d4',
  brightWhite: '#8fa196',
};

// Lavender theme - Soft purple
const lavenderTheme: TerminalTheme = {
  background: '#faf5ff',
  foreground: '#3b2e50',
  cursor: '#9333ea',
  cursorAccent: '#faf5ff',
  selectionBackground: '#f3e8ff',
  black: '#3b2e50',
  red: '#dc2626',
  green: '#16a34a',
  yellow: '#ca8a04',
  blue: '#2563eb',
  magenta: '#9333ea',
  cyan: '#0891b2',
  white: '#7c7089',
  brightBlack: '#5a4d6b',
  brightRed: '#ef4444',
  brightGreen: '#22c55e',
  brightYellow: '#eab308',
  brightBlue: '#3b82f6',
  brightMagenta: '#a855f7',
  brightCyan: '#06b6d4',
  brightWhite: '#a094ab',
};

// Sand theme - Sandy beige
const sandTheme: TerminalTheme = {
  background: '#faf5f0',
  foreground: '#45392d',
  cursor: '#d97706',
  cursorAccent: '#faf5f0',
  selectionBackground: '#fef3c7',
  black: '#45392d',
  red: '#dc2626',
  green: '#65a30d',
  yellow: '#d97706',
  blue: '#0369a1',
  magenta: '#9333ea',
  cyan: '#0e7490',
  white: '#8a7e71',
  brightBlack: '#6b5d4f',
  brightRed: '#ef4444',
  brightGreen: '#84cc16',
  brightYellow: '#f59e0b',
  brightBlue: '#0284c7',
  brightMagenta: '#a855f7',
  brightCyan: '#06b6d4',
  brightWhite: '#aea196',
};

// Sky theme - Light blue
const skyTheme: TerminalTheme = {
  background: '#f0f9ff',
  foreground: '#1e3a5f',
  cursor: '#0ea5e9',
  cursorAccent: '#f0f9ff',
  selectionBackground: '#e0f2fe',
  black: '#1e3a5f',
  red: '#dc2626',
  green: '#16a34a',
  yellow: '#ca8a04',
  blue: '#0ea5e9',
  magenta: '#9333ea',
  cyan: '#0891b2',
  white: '#64748b',
  brightBlack: '#475569',
  brightRed: '#ef4444',
  brightGreen: '#22c55e',
  brightYellow: '#eab308',
  brightBlue: '#38bdf8',
  brightMagenta: '#a855f7',
  brightCyan: '#06b6d4',
  brightWhite: '#94a3b8',
};

// Peach theme - Soft coral
const peachTheme: TerminalTheme = {
  background: '#fff7ed',
  foreground: '#431407',
  cursor: '#f97316',
  cursorAccent: '#fff7ed',
  selectionBackground: '#fed7aa',
  black: '#431407',
  red: '#dc2626',
  green: '#16a34a',
  yellow: '#d97706',
  blue: '#2563eb',
  magenta: '#c026d3',
  cyan: '#0891b2',
  white: '#78716c',
  brightBlack: '#57534e',
  brightRed: '#ef4444',
  brightGreen: '#22c55e',
  brightYellow: '#f59e0b',
  brightBlue: '#3b82f6',
  brightMagenta: '#e879f9',
  brightCyan: '#22d3ee',
  brightWhite: '#a8a29e',
};

// Snow theme - Clean white with cool tints
const snowTheme: TerminalTheme = {
  background: '#fafbff',
  foreground: '#1e293b',
  cursor: '#6366f1',
  cursorAccent: '#fafbff',
  selectionBackground: '#e0e7ff',
  black: '#1e293b',
  red: '#dc2626',
  green: '#16a34a',
  yellow: '#ca8a04',
  blue: '#6366f1',
  magenta: '#8b5cf6',
  cyan: '#0891b2',
  white: '#64748b',
  brightBlack: '#475569',
  brightRed: '#ef4444',
  brightGreen: '#22c55e',
  brightYellow: '#eab308',
  brightBlue: '#818cf8',
  brightMagenta: '#a78bfa',
  brightCyan: '#06b6d4',
  brightWhite: '#94a3b8',
};

// Sepia theme - Warm parchment
const sepiaTheme: TerminalTheme = {
  background: '#f5f0e6',
  foreground: '#3d3225',
  cursor: '#92400e',
  cursorAccent: '#f5f0e6',
  selectionBackground: '#e8dcc8',
  black: '#3d3225',
  red: '#9a3412',
  green: '#4d7c0f',
  yellow: '#92400e',
  blue: '#1d4ed8',
  magenta: '#7e22ce',
  cyan: '#0e7490',
  white: '#78716c',
  brightBlack: '#57534e',
  brightRed: '#c2410c',
  brightGreen: '#65a30d',
  brightYellow: '#b45309',
  brightBlue: '#2563eb',
  brightMagenta: '#9333ea',
  brightCyan: '#0891b2',
  brightWhite: '#a8a29e',
};

// Gruvbox Light theme
const gruvboxlightTheme: TerminalTheme = {
  background: '#fbf1c7',
  foreground: '#3c3836',
  cursor: '#b57614',
  cursorAccent: '#fbf1c7',
  selectionBackground: '#ebdbb2',
  black: '#3c3836',
  red: '#9d0006',
  green: '#79740e',
  yellow: '#b57614',
  blue: '#076678',
  magenta: '#8f3f71',
  cyan: '#427b58',
  white: '#7c6f64',
  brightBlack: '#928374',
  brightRed: '#cc241d',
  brightGreen: '#98971a',
  brightYellow: '#d79921',
  brightBlue: '#458588',
  brightMagenta: '#b16286',
  brightCyan: '#689d6a',
  brightWhite: '#a89984',
};

// Nord Light theme
const nordlightTheme: TerminalTheme = {
  background: '#eceff4',
  foreground: '#2e3440',
  cursor: '#5e81ac',
  cursorAccent: '#eceff4',
  selectionBackground: '#d8dee9',
  black: '#2e3440',
  red: '#bf616a',
  green: '#a3be8c',
  yellow: '#ebcb8b',
  blue: '#5e81ac',
  magenta: '#b48ead',
  cyan: '#88c0d0',
  white: '#4c566a',
  brightBlack: '#434c5e',
  brightRed: '#bf616a',
  brightGreen: '#a3be8c',
  brightYellow: '#ebcb8b',
  brightBlue: '#81a1c1',
  brightMagenta: '#b48ead',
  brightCyan: '#8fbcbb',
  brightWhite: '#3b4252',
};

// Blossom theme - Cherry blossom pink
const blossomTheme: TerminalTheme = {
  background: '#fdf2f8',
  foreground: '#4a2040',
  cursor: '#ec4899',
  cursorAccent: '#fdf2f8',
  selectionBackground: '#fce7f3',
  black: '#4a2040',
  red: '#e11d48',
  green: '#059669',
  yellow: '#d97706',
  blue: '#3b82f6',
  magenta: '#ec4899',
  cyan: '#0891b2',
  white: '#9f708c',
  brightBlack: '#6b4060',
  brightRed: '#f43f5e',
  brightGreen: '#10b981',
  brightYellow: '#f59e0b',
  brightBlue: '#60a5fa',
  brightMagenta: '#f472b6',
  brightCyan: '#22d3ee',
  brightWhite: '#c4a0b4',
};

// Theme mapping
const terminalThemes: Record<ThemeMode, TerminalTheme> = {
  // Special
  system: darkTheme, // Will be resolved at runtime
  // Dark themes (16)
  dark: darkTheme,
  retro: retroTheme,
  dracula: draculaTheme,
  nord: nordTheme,
  monokai: monokaiTheme,
  tokyonight: tokyonightTheme,
  solarized: solarizedTheme,
  gruvbox: gruvboxTheme,
  catppuccin: catppuccinTheme,
  onedark: onedarkTheme,
  synthwave: synthwaveTheme,
  red: redTheme,
  sunset: sunsetTheme,
  gray: grayTheme,
  forest: forestTheme,
  ocean: oceanTheme,
  // Light themes (16)
  light: lightTheme,
  cream: creamTheme,
  solarizedlight: solarizedlightTheme,
  github: githubTheme,
  paper: paperTheme,
  rose: roseTheme,
  mint: mintTheme,
  lavender: lavenderTheme,
  sand: sandTheme,
  sky: skyTheme,
  peach: peachTheme,
  snow: snowTheme,
  sepia: sepiaTheme,
  gruvboxlight: gruvboxlightTheme,
  nordlight: nordlightTheme,
  blossom: blossomTheme,
};

/**
 * Get terminal theme for the given app theme
 * For "system" theme, it checks the user's system preference
 */
export function getTerminalTheme(theme: ThemeMode): TerminalTheme {
  if (theme === 'system') {
    // Check system preference
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? darkTheme : lightTheme;
    }
    return darkTheme; // Default to dark for SSR
  }
  return terminalThemes[theme] || darkTheme;
}

export default terminalThemes;
