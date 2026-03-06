const app = Vue.createApp({
    data() {
        return {
            result: 0
        }
    },
    methods: {
        add(number) {
            this.result += number
        }
    },
    computed: {
        resultMessage() {
            if (this.result < 37) {
                return 'Not there yet'
            } else if (this.result === 37) {
                return 'Exactly 37!'
            } else {
                return 'Too much!'
            }
        }
    },
    watch: {
        result() {
            // If there's an existing timer, clear it before starting a new one
            if (this.timer) {
                clearTimeout(this.timer);
            }
            
            // Set a new timeout to reset result after 5 seconds
            this.timer = setTimeout(() => {
                this.result = 0;
            }, 5000);
        }
    }
})
app.mount('#assignment')