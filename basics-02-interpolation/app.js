const app = Vue.createApp({
    data() {
        return {
            objectKey: 'Here is the key defined as an return object property in the data function. This will be rendered in the section with the id user-goal inside Interpolation, {{ objectKey }}.',
            courseGoal: 'Finish the course and learn Vue!',
        };
    }
});
app.mount('#user-goal');