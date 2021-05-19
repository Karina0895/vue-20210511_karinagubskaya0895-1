import Vue from './vendor/vue.esm.browser.js';

const fetchMeetups = () =>
  fetch('https://course-vue.javascript.ru/api/meetups/').then((res) => res.json());


const radioButtons =  [1, 2, 3, 4, 5];

// Создаём новое Vue приложением через конструктор, передавая опции, описывающие приложение
const app = new Vue({
  // Шаблон в #app
  template: `#app`,
  data() {
    return {
        radioButtons,
        rawMeetups: null,
        radioTitle: ' ',
    }
  },
  methods: {
    buttonChangeTitle (e) {
     let buttonValue =  e.target.value;
     return this.radioTitle = this.rawMeetups[buttonValue].title
    }
  },
  mounted() {
    fetchMeetups().then((meetups) => {
      this.rawMeetups = meetups;
    });
  },
});
app.$mount('#app');