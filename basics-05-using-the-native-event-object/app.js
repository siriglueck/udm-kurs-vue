const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullName: '',
      lastName: ''
    };
  },
  watch: {
    name(newValue, oldValue) {
      if (newValue === '') {
        this.fullName = '';
      } else {
        this.fullName = newValue + ' ' + this.lastName;
      }
    },
    lastName(newValue, oldValue) {
      if (newValue === '') {
        this.fullName = '';
      } else {
        this.fullName = this.name + ' ' + newValue;
      }
    }
  },
  computed: {
    // fullName() {
    //   console.log('Running again...');
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + this.lastName;
    // }
  },
  methods: {
    // outputFullName() {
    //   console.log('Running again...');
    //   if (this.name === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + 'Schwarzmüller';
    // },
    resetInput() {
      this.name = '';
      this.lastName = '';
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
