'use strict';
import './styles/style.scss';
const buttons = {
   row1: {
      button1: {
         code: 'Backquote',
         rus: {
            caseDown: 'ё',
            caseUp: 'Ё',
            caps: 'Ё',
            shiftCaps: 'ё'
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
const buttonElements = [];
const buttonVariables = [];
let isCaps = false;
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
      let hiddenLanguage;
         if (localStorage.getItem('currentLanguage') !== null) {
            hiddenLanguage = localStorage.getItem('currentLanguage');
         } else {
            localStorage.setItem('currentLanguage', 'eng');
            hiddenLanguage = 'eng';
         }
      if (buttonsInfoObj.general) {
         btn.append(createLang('rus', buttonsInfoObj.general, hiddenLanguage));
         btn.append(createLang('eng', buttonsInfoObj.general, hiddenLanguage));
      } else {
         btn.append(createLang('rus', buttonsInfoObj.rus, hiddenLanguage));
         btn.append(createLang('eng', buttonsInfoObj.en, hiddenLanguage));
      }
      //------------------------ Click on button----------------------------------
      btn.addEventListener('mousedown', (event) => {
         if (btn.classList.contains('CapsLock')) {
            if (btn.classList.contains('active')) {
               isCaps = false;
               btn.classList.remove('active');
               changeActive('caseDown');
               return false;
            }
            isCaps = true;
            btn.classList.add('active');
            changeActive('caps');
            return false;
         } else if (btn.classList.contains('ShiftLeft') || btn.classList.contains('ShiftRight')) {
            btn.classList.add('active');
            if (isCaps === true) {
               changeActive('shiftCaps');
            } else {
               changeActive('caseUp');
            }
            return false;
         }
         btn.classList.add('active');
         if (checkBtn(btn , event) === false) {
            return false;
         }
         if (checkBlocked(btn,event) === false) {
            return false;
         }
         addText(btn);
      })
      btn.addEventListener('mouseup', (event) => {
         if (btn.classList.contains('CapsLock')) {
            return false;
         } else if (btn.classList.contains('ShiftLeft') || btn.classList.contains('ShiftRight')) {
            if (isCaps === true) {
               changeActive('caps')
            } else {
               changeActive('caseDown')
            }
         }
         btn.classList.remove('active');
      })
      buttonElements.push(btn)
      return btn;

      function createLang(language, dataObj, hiddenLanguage) {
         const lang = document.createElement('div');
         let caseDownValue,caseUpValue,capsValue, shiftCapsValue;
         function create(hidden) {
            lang.classList.add('language','rus', hidden);
            caseDownValue = dataObj.caseDown;
            caseUpValue = dataObj.caseUp;
            capsValue = dataObj.caps;
            shiftCapsValue = dataObj.shiftCaps;
         }
         if (language === 'rus') {
            if (hiddenLanguage === 'rus') {
               create('hidden')
            } else {
               create();
            }
         } else {
            if (hiddenLanguage === 'eng') {
               create('hidden')
            } else {
               create();
            }
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
         buttonVariables.push(caseDown,caseUp,caps,shiftCaps)
         return lang;
      }
   }
}

class Area {
   constructor() {

   }
   setArea() {
      const container = document.createElement('div');
      container.classList.add('container');
      const textArea = document.createElement('textarea');
      textArea.classList.add('area');
      textArea.cols = 50;
      textArea.rows = 10;
      textArea.readOnly = 'false'; 
      const title = document.createElement('div');
      title.classList.add('title');
      title.textContent = 'Rolling Scopes School, Task: Virtual Keyboard';
      container.append(title,textArea)
      document.body.append(container);
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
      const  info = document.createElement('div');
      info.classList.add('info');
      info.textContent = 'Смена раскладки производится нажатием на левый Ctrl и левый Alt';
      document.querySelector('.container').append(wrapper, info);
   }
   setButtonsRow(obj) {
      const row = document.createElement('div');
      row.classList.add('keyboard-row');
      for (let btn in obj) {
         row.append(new button().createButton(obj[btn]));
      }
      return row;
   }
   createListener() {
      window.addEventListener('keydown', (event) => {

         if (event.code === 'ControlLeft' || event.code === 'AltLeft') {
            document.querySelector(`.${event.code}`).classList.add('active');
            const ctrl = document.querySelector('.ControlLeft');
            const alt = document.querySelector('.AltLeft');
            if (alt.classList.contains('active') && ctrl.classList.contains('active')) {
               let currentLanguage = localStorage.getItem('currentLanguage');
               if (currentLanguage === 'eng') {
                  localStorage.setItem('currentLanguage', 'rus');
               } else {
                  localStorage.setItem('currentLanguage', 'eng');
               }
               let languages = [];
               for (let button of buttonElements) {
                  languages.push(button.querySelectorAll('.language'))
               }
               languages.forEach( elem => {
                  if (elem[0].classList.contains('hidden')) {
                     elem[0].classList.remove('hidden')
                     elem[1].classList.add('hidden')
                  } else {
                     elem[0].classList.add('hidden')
                     elem[1].classList.remove('hidden')
                  }
               })
            }
         }
         if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            const shift = document.querySelector(`.${event.code}`)
            if (shift.classList.contains('active')) {
               return false;
            }
            shift.classList.add('active')
            if (isCaps === false) {
               changeActive('caseUp')
            } else {
               changeActive('shiftCaps')
            }
         } else if (event.code === 'CapsLock') {
            const caps = document.querySelector(`.${event.code}`)
            if (caps.classList.contains('active')) {
               caps.classList.remove('active');
               isCaps = false
               changeActive('caseDown')
               return false
            }
            caps.classList.add('active');
            changeActive('caps')
            isCaps = true;
         } else {
            const code = event.code;
            const key = document.querySelector(`.${code}`);
            document.querySelector(`.${code}`).classList.add('active');
            if (checkBtn(key,event) === false) {
               return false;
            }
            if (checkBlocked(key,event) === false) {
               return false;
            }
            const language = key.querySelectorAll('.language');
            addText(language)
         }
      })
      window.addEventListener('keyup', (event) => {
         const code = event.code;
         if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
            buttonVariables.forEach(btn => {
               if (isCaps === true) {
                  if (btn.classList.contains('caps')) {
                     btn.classList.remove('hidden');
                  } else if (btn.classList.contains('shiftCaps')) {
                     btn.classList.add('hidden');
                  }
               } else {
                  if (btn.classList.contains('caseDown')) {
                        btn.classList.remove('hidden');
                     }else if (btn.classList.contains('caseUp')) {
                        btn.classList.add('hidden');
                     }
               }
            })
         } else if (event.code === 'CapsLock') {
            return false;
         }
         document.querySelector(`.${code}`).classList.remove('active');
      })
   }
}
function changeActive(type) {
   buttonVariables.forEach(btn => {
      if (!btn.classList.contains('hidden')) {
         btn.classList.add('hidden')
      }
      else if (btn.classList.contains(type)) {
         btn.classList.remove('hidden');
      }
   })
}
const area = new Area();
const keyboard = new Keyboard();
area.setArea();
keyboard.setKeyboard();
keyboard.createListener();


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