const app = Vue.createApp({
    data() {
        return {
            objectKey: 'Here is the key defined as an return object property in the data function. This will be rendered in the section with the id user-goal inside Interpolation, {{ objectKey }}.',
            courseGoal: 'Finish the course and learn Vue!',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h2>Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else if (randomNumber < 0.75) {
                return this.courseGoalB;
            } else {
                return 'Here is an outcome from a method!';
            }
            }
        }
    }
);
app.mount('#user-goal');