const app = Vue.createApp({
    data() {
        return {
            name: 'Name',
            enteredName: ''
        }
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
        },
        clickButton() {
            alert('The Button is clicked!!');
        },
        enterValue(event) {
            this.enteredName = event.target.value;
        }
    }
});

app.mount('#assignment');