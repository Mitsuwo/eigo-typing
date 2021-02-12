import { KeyInfo } from '../views/components/typing/Keyboard';

const ua = navigator.userAgent.toLowerCase();
const isMac = ua.indexOf('mac') !== -1 && ua.indexOf('os') !== -1;

const keysForMac: KeyInfo[][] = [
  [
    { text: '~ `', code: 'Backquote', width: '54px' },
    { text: '! 1', code: 'Digit1', width: '54px' },
    { text: '@ 2', code: 'Digit2', width: '54px' },
    { text: '# 3', code: 'Digit3', width: '54px' },
    { text: '$ 4', code: 'Digit4', width: '54px' },
    { text: '% 5', code: 'Digit5', width: '54px' },
    { text: '^ 6', code: 'Digit6', width: '54px' },
    { text: '& 7', code: 'Digit7', width: '54px' },
    { text: '* 8', code: 'Digit8', width: '54px' },
    { text: '( 9', code: 'Digit9', width: '54px' },
    { text: ') 0', code: 'Digit0', width: '54px' },
    { text: '_ -', code: 'Minus', width: '54px' },
    { text: '+ =', code: 'Equal', width: '54px' },
    { text: '', code: '', width: '80px' }
  ],
  [
    { text: '', code: '', width: '80px' },
    { text: 'Q', code: 'KeyQ', width: '54px' },
    { text: 'W', code: 'KeyW', width: '54px' },
    { text: 'E', code: 'KeyE', width: '54px' },
    { text: 'R', code: 'KeyR', width: '54px' },
    { text: 'T', code: 'KeyT', width: '54px' },
    { text: 'Y', code: 'KeyY', width: '54px' },
    { text: 'U', code: 'KeyU', width: '54px' },
    { text: 'I', code: 'KeyI', width: '54px' },
    { text: 'O', code: 'KeyO', width: '54px' },
    { text: 'P', code: 'KeyP', width: '54px' },
    { text: '{ [', code: 'BracketLeft', width: '54px' },
    { text: '} ]', code: 'BracketRight', width: '54px' },
    { text: '| ¥', code: 'Backslash', width: '54px' }
  ],
  [
    { text: '', code: '', width: '93px' },
    { text: 'A', code: 'KeyA', width: '54px' },
    { text: 'S', code: 'KeyS', width: '54px' },
    { text: 'D', code: 'KeyD', width: '54px' },
    { text: 'F', code: 'KeyF', width: '54px' },
    { text: 'G', code: 'KeyG', width: '54px' },
    { text: 'H', code: 'KeyH', width: '54px' },
    { text: 'J', code: 'KeyJ', width: '54px' },
    { text: 'K', code: 'KeyK', width: '54px' },
    { text: 'L', code: 'KeyL', width: '54px' },
    { text: ': ;', code: 'Semicolon', width: '54px' },
    { text: `" '`, code: 'Quote', width: '54px' },
    { text: '', code: '', width: '93px' }
  ],
  [
    { text: 'shift', code: 'ShiftLeft', width: '125px' },
    { text: 'Z', code: 'KeyZ', width: '54px' },
    { text: 'X', code: 'KeyX', width: '54px' },
    { text: 'C', code: 'KeyC', width: '54px' },
    { text: 'V', code: 'KeyV', width: '54px' },
    { text: 'B', code: 'KeyB', width: '54px' },
    { text: 'N', code: 'KeyN', width: '54px' },
    { text: 'M', code: 'KeyM', width: '54px' },
    { text: '< ,', code: 'Comma', width: '54px' },
    { text: '> .', code: 'Period', width: '54px' },
    { text: '? /', code: 'Slash', width: '54px' },
    { text: 'shift', code: 'ShiftRight', width: '125px' }
  ],
  [
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '67px' },
    { text: 'space', code: '', width: '278px' },
    { text: '', code: '', width: '67px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' }
  ]
];

const keysForWindows: KeyInfo[][] = [
  [
    { text: '', code: 'Backquote', width: '54px' },
    { text: '! 1', code: 'Digit1', width: '54px' },
    { text: '" 2', code: 'Digit2', width: '54px' },
    { text: '# 3', code: 'Digit3', width: '54px' },
    { text: '$ 4', code: 'Digit4', width: '54px' },
    { text: '% 5', code: 'Digit5', width: '54px' },
    { text: '& 6', code: 'Digit6', width: '54px' },
    { text: "' 7", code: 'Digit7', width: '54px' },
    { text: '( 8', code: 'Digit8', width: '54px' },
    { text: ') 9', code: 'Digit9', width: '54px' },
    { text: ' 0', code: 'Digit0', width: '54px' },
    { text: '= -', code: 'Minus', width: '54px' },
    { text: '~ ^', code: 'Equal', width: '54px' },
    { text: '| ¥', code: 'IntlYen', width: '100%' },
    { text: '', code: 'Backspace', width: '100%' }
  ],
  [
    { text: '', code: '', width: '80px' },
    { text: 'Q', code: 'KeyQ', width: '54px' },
    { text: 'W', code: 'KeyW', width: '54px' },
    { text: 'E', code: 'KeyE', width: '54px' },
    { text: 'R', code: 'KeyR', width: '54px' },
    { text: 'T', code: 'KeyT', width: '54px' },
    { text: 'Y', code: 'KeyY', width: '54px' },
    { text: 'U', code: 'KeyU', width: '54px' },
    { text: 'I', code: 'KeyI', width: '54px' },
    { text: 'O', code: 'KeyO', width: '54px' },
    { text: 'P', code: 'KeyP', width: '54px' },
    { text: '` @', code: 'BracketLeft', width: '54px' },
    { text: '{ [', code: 'BracketRight', width: '54px' },
    { text: '', code: '', width: '100%' }
  ],
  [
    { text: '', code: '', width: '93px' },
    { text: 'A', code: 'KeyA', width: '54px' },
    { text: 'S', code: 'KeyS', width: '54px' },
    { text: 'D', code: 'KeyD', width: '54px' },
    { text: 'F', code: 'KeyF', width: '54px' },
    { text: 'G', code: 'KeyG', width: '54px' },
    { text: 'H', code: 'KeyH', width: '54px' },
    { text: 'J', code: 'KeyJ', width: '54px' },
    { text: 'K', code: 'KeyK', width: '54px' },
    { text: 'L', code: 'KeyL', width: '54px' },
    { text: '+ ;', code: 'Semicolon', width: '54px' },
    { text: `* :`, code: 'Quote', width: '54px' },
    { text: '} ]', code: 'Backslash', width: '54px' },
    { text: '', code: '', width: '100%' }
  ],
  [
    { text: 'shift', code: 'ShiftLeft', width: '125px' },
    { text: 'Z', code: 'KeyZ', width: '54px' },
    { text: 'X', code: 'KeyX', width: '54px' },
    { text: 'C', code: 'KeyC', width: '54px' },
    { text: 'V', code: 'KeyV', width: '54px' },
    { text: 'B', code: 'KeyB', width: '54px' },
    { text: 'N', code: 'KeyN', width: '54px' },
    { text: 'M', code: 'KeyM', width: '54px' },
    { text: '< ,', code: 'Comma', width: '54px' },
    { text: '> .', code: 'Period', width: '54px' },
    { text: '? /', code: 'Slash', width: '54px' },
    { text: '_ \\', code: 'IntlRo', width: '54px' },
    { text: 'shift', code: 'ShiftRight', width: '100%' }
  ],
  [
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: 'space', code: '', width: '100%' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' },
    { text: '', code: '', width: '60px' }
  ]
];

export const keys: KeyInfo[][] = isMac ? keysForMac : keysForWindows;
