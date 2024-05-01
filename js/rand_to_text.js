"use strict";

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
  }

  setText(newText) {
    const oldText = this.el.textContent;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];

    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({
        from,
        to,
        start,
        end
      });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }

  update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let {
        from,
        to,
        start,
        end,
        char
      } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }

        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    const fragment = document.createDocumentFragment();
    const wrapper = document.createElement('div');
    wrapper.innerHTML = output;
    while (wrapper.firstChild) {
      fragment.appendChild(wrapper.firstChild);
    }
    this.el.textContent = '';
    this.el.appendChild(fragment);

    if (complete !== this.queue.length) {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    } else {
      this.resolve();
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

/*
function shuffle(array) {
  for (let i = array.length - 1; i > 0; --i) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
*/

const phrases = ['Wεlcοmε Tο Μγ Rοκαspacε <3', 'Hοmε Ιs Α Hουsε Wιth Α Hεαrτ', 'Ι\'m Jυsτ Sο Hαppγ Tο Sεε Υου'];
/*shuffle(phrases);*/

const el = document.querySelector('.nexus');
const fx = new TextScramble(el);
let counter = 0;

const startDelay = 2000;

const startTextAnimation = () => {
  setTimeout(() => {
    next();
  }, startDelay);
};

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % phrases.length;
};

startTextAnimation();
