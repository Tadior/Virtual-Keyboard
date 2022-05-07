'use strict';
import './styles/style.scss';
const buttons = {
   row1: {
      button1: {
         code: 'Backquote',
         rus: {
            caseDown: '',
            caseUp: '',
            caps: '',
            shiftCaps: ''
         },
         en: {
            caseDown: '`',
            caseUp: '~',
            caps: '`',
            shiftCaps: '~'
         }
      },
      button2: {
         code: 'Digit1',
         general: {
            caseDown: '1',
            caseUp: '!',
            caps: '1',
            shiftCaps: '!'
         }
      },
      button3: {
         code: 'Digit2',
         rus: {
            caseDown: '2',
            caseUp: '"',
            caps: '2',
            shiftCaps: '"'
         },
         en: {
            caseDown: '2',
            caseUp: '@',
            caps: '2',
            shiftCaps: '@'
         }
      },
      button4: {
         code: 'Digit3',
         rus: {
            caseDown: '3',
            caseUp: '№',
            caps: '3',
            shiftCaps: '№'
         },
         en: {
            caseDown: '3',
            caseUp: '#',
            caps: '3',
            shiftCaps: '#'
         }
      },
      button5: {
         code: 'Digit4',
         rus: {
            caseDown: '4',
            caseUp: ';',
            caps: '4',
            shiftCaps: ';'
         },
         en: {
            caseDown: '4',
            caseUp: '$',
            caps: '4',
            shiftCaps: '$'
         }
      },
      button6: {
         code: 'Digit5',
         general: {
            caseDown: '5',
            caseUp: '%',
            caps: '5',
            shiftCaps: '%'
         }
      },
      button7: {
         code: 'Digit6',
         rus: {
            caseDown: '6',
            caseUp: ':',
            caps: '6',
            shiftCaps: ':'
         },
         en: {
            caseDown: '6',
            caseUp: '^',
            caps: '6',
            shiftCaps: '^'
         }
      },
      button8: {
         code: 'Digit7',
         rus: {
            caseDown: '7',
            caseUp: '?',
            caps: '7',
            shiftCaps: '?'
         },
         en: {
            caseDown: '7',
            caseUp: '&',
            caps: '7',
            shiftCaps: '&'
         }
      },
      button9: {
         code: 'Digit8',
         general: {
            caseDown: '8',
            caseUp: '*',
            caps: '8',
            shiftCaps: '*'
         }
      },
      button10: {
         code: 'Digit9',
         general: {
            caseDown: '9',
            caseUp: '(',
            caps: '9',
            shiftCaps: '('
         }
      },
      button11: {
         code: 'Digit0',
         general: {
            caseDown: '0',
            caseUp: ')',
            caps: '0',
            shiftCaps: ')'
         }
      },
      button12: {
         code: 'Minus',
         general: {
            caseDown: '-',
            caseUp: '_',
            caps: '-',
            shiftCaps: '_'
         }
      },
      button13: {
         code: 'Equal',
         general: {
            caseDown: '=',
            caseUp: '+',
            caps: '=',
            shiftCaps: '+'
         }
      },
      button14: {
         code: 'Backspace',
         class: 'big--btn',
         general: {
            caseDown: 'Backspace',
            caseUp: 'Backspace',
            caps: 'Backspace',
            shiftCaps: 'Backspace'
         }
      },
   },
   row2: {
      button1: {
         code: 'Tab',
         general: {
            caseDown: 'Tab',
            caseUp: 'Tab',
            caps: 'Tab',
            shiftCaps: 'Tab'
         }
      },
      button2: {
         code: 'KeyQ',
         rus: {
            caseDown: 'й',
            caseUp: 'Й',
            caps: 'Й',
            shiftCaps: 'й'
         },
         en: {
            caseDown: 'q',
            caseUp: 'Q',
            caps: 'Q',
            shiftCaps: 'q'
         }
      },
      button3: {
         code: 'KeyW',
         rus: {
            caseDown: 'ц',
            caseUp: 'Ц',
            caps: 'Ц',
            shiftCaps: 'ц'
         },
         en: {
            caseDown: 'w',
            caseUp: 'W',
            caps: 'W',
            shiftCaps: 'w'
         }
      },
      button4: {
         code: 'KeyE',
         rus: {
            caseDown: 'у',
            caseUp: 'У',
            caps: 'У',
            shiftCaps: 'у'
         },
         en: {
            caseDown: 'e',
            caseUp: 'E',
            caps: 'E',
            shiftCaps: 'e'
         }
      },
      button5: {
         code: 'KeyR',
         rus: {
            caseDown: 'к',
            caseUp: 'К',
            caps: 'К',
            shiftCaps: 'к'
         },
         en: {
            caseDown: 'r',
            caseUp: 'R',
            caps: 'R',
            shiftCaps: 'r'
         }
      },
      button6: {
         code: 'KeyT',
         rus: {
            caseDown: 'е',
            caseUp: 'Е',
            caps: 'Е',
            shiftCaps: 'е'
         },
         en: {
            caseDown: 't',
            caseUp: 'T',
            caps: 'T',
            shiftCaps: 't'
         }
      },
      button7: {
         code: 'KeyY',
         rus: {
            caseDown: 'н',
            caseUp: 'Н',
            caps: 'Н',
            shiftCaps: 'н'
         },
         en: {
            caseDown: 'y',
            caseUp: 'Y',
            caps: 'Y',
            shiftCaps: 'y'
         }
      },
      button8: {
         code: 'KeyU',
         rus: {
            caseDown: 'г',
            caseUp: 'Г',
            caps: 'Г',
            shiftCaps: 'г'
         },
         en: {
            caseDown: 'u',
            caseUp: 'U',
            caps: 'U',
            shiftCaps: 'u'
         }
      },
      button9: {
         code: 'KeyI',
         rus: {
            caseDown: 'ш',
            caseUp: 'Ш',
            caps: 'Ш',
            shiftCaps: 'ш'
         },
         en: {
            caseDown: 'i',
            caseUp: 'I',
            caps: 'I',
            shiftCaps: 'i'
         }
      },
      button10: {
         code: 'KeyO',
         rus: {
            caseDown: 'щ',
            caseUp: 'Щ',
            caps: 'Щ',
            shiftCaps: 'щ'
         },
         en: {
            caseDown: 'o',
            caseUp: 'O',
            caps: 'O',
            shiftCaps: 'o'
         }
      },
      button11: {
         code: 'KeyP',
         rus: {
            caseDown: 'з',
            caseUp: 'З',
            caps: 'З',
            shiftCaps: 'з'
         },
         en: {
            caseDown: 'p',
            caseUp: 'P',
            caps: 'P',
            shiftCaps: 'p'
         }
      },
      button12: {
         code: 'BracketLeft',
         rus: {
            caseDown: 'x',
            caseUp: 'X',
            caps: 'X',
            shiftCaps: 'x'
         },
         en: {
            caseDown: '[',
            caseUp: '{',
            caps: '[',
            shiftCaps: '{'
         }
      },
      button13: {
         code: 'BracketRight',
         rus: {
            caseDown: 'ъ',
            caseUp: 'Ъ',
            caps: 'Ъ',
            shiftCaps: 'ъ'
         },
         en: {
            caseDown: ']',
            caseUp: '}',
            caps: ']',
            shiftCaps: '}'
         }
      },
      button14: {
         code: 'Backslash',
         rus: {
            caseDown: '\/',
            caseUp: '/',
            caps: '\/',
            shiftCaps: '/'
         },
         en: {
            caseDown: '\/',
            caseUp: '|',
            caps: '\/',
            shiftCaps: '|'
         }
      },
      button15: {
         code: 'Delete',
         general: {
            caseDown: 'Del',
            caseUp: 'Del',
            caps: 'Del',
            shiftCaps: 'Del'
         }
      },
   },
   row3: {
      button1: {
         code: 'CapsLock',
         class: 'big--btn',
         general: {
            caseDown: 'CapsLock',
            caseUp: 'CapsLock',
            caps: 'CapsLock',
            shiftCaps: 'CapsLock'
         }
      },
      button2: {
         code: 'KeyA',
         rus: {
            caseDown: 'ф',
            caseUp: 'Ф',
            caps: 'Ф',
            shiftCaps: 'ф'
         },
         en: {
            caseDown: 'a',
            caseUp: 'A',
            caps: 'A',
            shiftCaps: 'a'
         }
      },
      button3: {
         code: 'KeyS',
         rus: {
            caseDown: 'ы',
            caseUp: 'Ы',
            caps: 'Ы',
            shiftCaps: 'ы'
         },
         en: {
            caseDown: 's',
            caseUp: 'S',
            caps: 'S',
            shiftCaps: 's'
         }
      },
      button4: {
         code: 'KeyD',
         rus: {
            caseDown: 'в',
            caseUp: 'В',
            caps: 'В',
            shiftCaps: 'в'
         },
         en: {
            caseDown: 'd',
            caseUp: 'D',
            caps: 'D',
            shiftCaps: 'd'
         }
      },
      button5: {
         code: 'KeyF',
         rus: {
            caseDown: 'а',
            caseUp: 'А',
            caps: 'А',
            shiftCaps: 'а'
         },
         en: {
            caseDown: 'f',
            caseUp: 'F',
            caps: 'F',
            shiftCaps: 'f'
         }
      },
      button6: {
         code: 'KeyG',
         rus: {
            caseDown: 'п',
            caseUp: 'П',
            caps: 'П',
            shiftCaps: 'п'
         },
         en: {
            caseDown: 'g',
            caseUp: 'G',
            caps: 'G',
            shiftCaps: 'g'
         }
      },
      button7: {
         code: 'KeyH',
         rus: {
            caseDown: 'р',
            caseUp: 'Р',
            caps: 'Р',
            shiftCaps: 'р'
         },
         en: {
            caseDown: 'h',
            caseUp: 'H',
            caps: 'H',
            shiftCaps: 'h'
         }
      },
      button8: {
         code: 'KeyJ',
         rus: {
            caseDown: 'о',
            caseUp: 'О',
            caps: 'О',
            shiftCaps: 'о'
         },
         en: {
            caseDown: 'j',
            caseUp: 'J',
            caps: 'J',
            shiftCaps: 'j'
         }
      },
      button9: {
         code: 'KeyK',
         rus: {
            caseDown: 'л',
            caseUp: 'Л',
            caps: 'Л',
            shiftCaps: 'л'
         },
         en: {
            caseDown: 'k',
            caseUp: 'K',
            caps: 'K',
            shiftCaps: 'k'
         }
      },
      button10: {
         code: 'KeyL',
         rus: {
            caseDown: 'д',
            caseUp: 'Д',
            caps: 'Д',
            shiftCaps: 'д'
         },
         en: {
            caseDown: 'l',
            caseUp: 'L',
            caps: 'L',
            shiftCaps: 'l'
         }
      },
      button11: {
         code: 'Semicolon',
         rus: {
            caseDown: 'ж',
            caseUp: 'Ж',
            caps: 'Ж',
            shiftCaps: 'ж'
         },
         en: {
            caseDown: ';',
            caseUp: ':',
            caps: ';',
            shiftCaps: ':'
         }
      },
      button12: {
         code: 'Quote',
         rus: {
            caseDown: 'э',
            caseUp: 'Э',
            caps: 'Э',
            shiftCaps: 'э'
         },
         en: {
            caseDown: `'`,
            caseUp: `''`,
            caps: `'`,
            shiftCaps: `''`
         }
      },
      button13: {
         code: 'Enter',
         class: 'big--btn',
         general: {
            caseDown: 'Enter',
            caseUp: 'Enter',
            caps: 'Enter',
            shiftCaps: 'Enter'
         }
      },
   },
   row4: {
      button1: {
         code: 'ShiftLeft',
         class: 'big--btn',
         general: {
            caseDown: 'Shift',
            caseUp: 'Shift',
            caps: 'Shift',
            shiftCaps: 'Shift'
         }
      },
      button2: {
         code: 'KeyZ',
         rus: {
            caseDown: 'я',
            caseUp: 'Я',
            caps: 'Я',
            shiftCaps: 'я'
         },
         en: {
            caseDown: 'z',
            caseUp: 'Z',
            caps: 'Z',
            shiftCaps: 'z'
         }
      },
      button3: {
         code: 'KeyX',
         rus: {
            caseDown: 'ч',
            caseUp: 'Ч',
            caps: 'Ч',
            shiftCaps: 'ч'
         },
         en: {
            caseDown: 'x',
            caseUp: 'X',
            caps: 'X',
            shiftCaps: 'x'
         }
      },
      button4: {
         code: 'KeyC',
         rus: {
            caseDown: 'с',
            caseUp: 'С',
            caps: 'С',
            shiftCaps: 'с'
         },
         en: {
            caseDown: 'c',
            caseUp: 'C',
            caps: 'C',
            shiftCaps: 'c'
         }
      },
      button5: {
         code: 'KeyV',
         rus: {
            caseDown: 'м',
            caseUp: 'М',
            caps: 'М',
            shiftCaps: 'м'
         },
         en: {
            caseDown: 'v',
            caseUp: 'V',
            caps: 'V',
            shiftCaps: 'v'
         }
      },
      button6: {
         code: 'KeyB',
         rus: {
            caseDown: 'и',
            caseUp: 'И',
            caps: 'И',
            shiftCaps: 'и'
         },
         en: {
            caseDown: 'b',
            caseUp: 'B',
            caps: 'B',
            shiftCaps: 'b'
         }
      },
      button7: {
         code: 'KeyN',
         rus: {
            caseDown: 'т',
            caseUp: 'Т',
            caps: 'Т',
            shiftCaps: 'т'
         },
         en: {
            caseDown: 'n',
            caseUp: 'N',
            caps: 'N',
            shiftCaps: 'n'
         }
      },
      button8: {
         code: 'KeyM',
         rus: {
            caseDown: 'ь',
            caseUp: 'Ь',
            caps: 'Ь',
            shiftCaps: 'ь'
         },
         en: {
            caseDown: 'm',
            caseUp: 'M',
            caps: 'M',
            shiftCaps: 'm'
         }
      },
      button9: {
         code: 'Comma',
         rus: {
            caseDown: 'б',
            caseUp: 'Б',
            caps: 'Б',
            shiftCaps: 'б'
         },
         en: {
            caseDown: ',',
            caseUp: '<',
            caps: ',',
            shiftCaps: '<'
         }
      },
      button10: {
         code: 'Period',
         rus: {
            caseDown: 'ю',
            caseUp: 'Ю',
            caps: 'Ю',
            shiftCaps: 'ю'
         },
         en: {
            caseDown: '.',
            caseUp: '>',
            caps: '.',
            shiftCaps: '>'
         }
      },
      button11: {
         code: 'Slash',
         rus: {
            caseDown: '.',
            caseUp: ',',
            caps: '.',
            shiftCaps: ','
         },
         en: {
            caseDown: '/',
            caseUp: '?',
            caps: '/',
            shiftCaps: '?'
         }
      },
      button12: {
         code: 'ArrowUp',
         general: {
            caseDown: '▲',
            caseUp: '▲',
            caps: '▲',
            shiftCaps: '▲'
         },
      },
      button13: {
         code: 'ShiftRight',
         class: 'big--btn',
         general: {
            caseDown: 'Shift',
            caseUp: 'Shift',
            caps: 'Shift',
            shiftCaps: 'Shift'
         }
      },
   },
   row5: {
      button1: {
         code: 'ControlLeft',
         class : 'ctrl',
         general: {
            caseDown: 'Ctrl',
            caseUp: 'Ctrl',
            caps: 'Ctrl',
            shiftCaps: 'Ctrl'
         }
      },
      button2: {
         code: 'MetaLeft',
         class : 'ctrl',
         general: {
            caseDown: 'Win',
            caseUp: 'Win',
            caps: 'Win',
            shiftCaps: 'Win'
         }
      },
      button3: {
         code: 'AltLeft',
         class : 'alt',
         general: {
            caseDown: 'Alt',
            caseUp: 'Alt',
            caps: 'Alt',
            shiftCaps: 'Alt'
         }
      },
      button4: {
         code: 'Space',
         class : 'space',
         general: {
            caseDown: '',
            caseUp: '',
            caps: '',
            shiftCaps: ''
         }
      },
      button5: {
         code: 'AltRight',
         class : 'alt',
         general: {
            caseDown: 'Alt',
            caseUp: 'Alt',
            caps: 'Alt',
            shiftCaps: 'Alt'
         }
      },
      button6: {
         code: 'ArrowLeft',
         general: {
            caseDown: '◄',
            caseUp: '◄',
            caps: '◄',
            shiftCaps: '◄'
         }
      },
      button7: {
         code: 'ArrowDown',
         general: {
            caseDown: '▼',
            caseUp: '▼',
            caps: '▼',
            shiftCaps: '▼'
         }
      },
      button8: {
         code: 'ArrowRight',
         general: {
            caseDown: '►',
            caseUp: '►',
            caps: '►',
            shiftCaps: '►'
         }
      },
      button9: {
         code: 'ControlRight',
         general: {
            caseDown: 'Ctrl',
            caseUp: 'Ctrl',
            caps: 'Ctrl',
            shiftCaps: 'Ctrl'
         }
      },
   },
};
const buttonsBlocked = ['ShiftLeft','ShiftRight','ControlLeft','ControlRight','MetaLeft','AltLeft','AltRight','CapsLock'];
class button {
   constructor(buttonName, buttonClass) {
      this.buttonName = buttonName;
      this.buttonClass = buttonClass;
   }
   createButton(buttonsInfoObj) {
      const btn = document.createElement('div');
      btn.classList.add('key');
      btn.classList.add(buttonsInfoObj.code);
      if(buttonsInfoObj.class) {
         btn.classList.add(buttonsInfoObj.class);
      }
      if (buttonsInfoObj.general) {
         btn.append(createLang('rus', buttonsInfoObj.general));
         btn.append(createLang('eng', buttonsInfoObj.general));
      } else {
         btn.append(createLang('rus', buttonsInfoObj.rus));
         btn.append(createLang('eng', buttonsInfoObj.en));
      }
      btn.addEventListener('mousedown', (event) => {
         btn.classList.add('active')
         if (checkBtn(btn , event) === false) {
            return false;
         }
         if (checkBlocked(btn,event) === false) {
            return false;
         }
         addText(btn)
      })
      btn.addEventListener('mouseup', (e) => {
         btn.classList.remove('active');
      })
      return btn;

      function createLang(language, dataObj) {
         const lang = document.createElement('div');
         let caseDownValue,caseUpValue,capsValue, shiftCapsValue;
         if (language === 'rus') {
            lang.classList.add('language','rus', 'hidden');
            caseDownValue = dataObj.caseDown;
            caseUpValue = dataObj.caseUp;
            capsValue = dataObj.caps;
            shiftCapsValue = dataObj.shiftCaps;
         } else {
            lang.classList.add('language','eng');
            caseDownValue = dataObj.caseDown;
            caseUpValue = dataObj.caseUp;
            capsValue = dataObj.caps;
            shiftCapsValue = dataObj.shiftCaps;
         }
         const caseDown = document.createElement('div');
         caseDown.classList.add( 'value','caseDown');
         caseDown.textContent = caseDownValue;
         const caseUp = document.createElement('div');
         caseUp.classList.add( 'value','caseUp', 'hidden');
         caseUp.textContent = caseUpValue;
         const caps = document.createElement('div');
         caps.classList.add( 'value','caps', 'hidden');
         caps.textContent = capsValue;
         const shiftCaps = document.createElement('div');
         shiftCaps.classList.add( 'value','shiftCaps' , 'hidden');
         shiftCaps.textContent = shiftCapsValue;
         lang.append(caseDown,caseUp,caps,shiftCaps);
         return lang;
      }
   }
}

class Area {
   constructor() {

   }
   setArea() {
      const textArea = document.createElement('textarea');
      textArea.classList.add('area');
      textArea.cols = 50;
      textArea.rows = 5;
      textArea.readOnly = 'false'; 
      document.body.append(textArea);
   }
}
class Keyboard {
   constructor() {

   }
   setKeyboard() {
      const wrapper = document.createElement('div');
      wrapper.classList.add('keyboard');
      for (let row in buttons) {
         wrapper.append(this.setButtonsRow(buttons[row]));
      }
      document.querySelector('body').append(wrapper);
   }
   setButtonsRow(obj) {
      const row = document.createElement('div');
      row.classList.add('keyboard-row');
      for (let btn in obj) {
         row.append(new button().createButton(obj[btn]));
      }
      return row;
   }
}
const area = new Area();
const keyboard = new Keyboard();
area.setArea();
keyboard.setKeyboard();

window.addEventListener('keydown', (e) => {
   const code = e.code;
   document.querySelector(`.${code}`).classList.add('active');
   const key = document.querySelector(`.${code}`);
   if (checkBtn(key,e) === false) {
      return false;
   }
   if (checkBlocked(key,e) === false) {
      return false;
   }
   const language = key.querySelectorAll('.language')
   addText(language)
});

function checkBtn(key,event) {
   if (key.classList.contains('Backspace')) {
      const area = document.querySelector('.area')
      const areaContent = area.textContent
      area.textContent = areaContent.slice(0, areaContent.length - 1);
      return false;
   } else if (key.classList.contains('Delete')) {
      return false;
   } else if (key.classList.contains('Enter')) {
      const area = document.querySelector('.area')
      area.textContent += '\n'
      return false;
   } else if (key.classList.contains('Space')) {
      const area = document.querySelector('.area')
      area.textContent += '  '
      return false;
   } else if (key.classList.contains('Tab')) {
      event.preventDefault()
      const area = document.querySelector('.area')
      area.textContent += '    '
      return false;
   } 
}
function checkBlocked(key, event) {
   for (let button of buttonsBlocked) {
      if (key.classList.contains(button)) {
         event.preventDefault()
         return false;
      }
   }
}

function addText(elements) {
   let search;
   if (elements.length === undefined) {
      search = elements.querySelectorAll('.language');
   } else {
      search = elements
   }
   for(let item of search) {
      if (!item.classList.contains('hidden')) {
         const values = item.querySelectorAll('.value');
         values.forEach(element => {
            if (!element.classList.contains('hidden')) {
               const value = element.textContent;
               document.querySelector('.area').textContent += value;
            }
         })
      }
   }
}
window.addEventListener('keyup', (e) => {
   const code = e.code;
   document.querySelector(`.${code}`).classList.remove('active');
})