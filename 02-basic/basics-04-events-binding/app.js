const app = Vue.createApp({
  data() {
    return {
      counter: 1,
      name: '',
      enteredName: ''
    };
  },
  methods: {
    enterName() {
      this.enteredName = this.name;
    },
    submitForm(event) {
      event.preventDefault();
      alert('Submitted!!');
    },
    setName(ev, lastName) {
      this.name = ev.target.value + ' ' + lastName;
    },
    add() { this.counter++ },
    remove(num) {this.counter = this.counter - num }
  }
});

app.mount('#events');
