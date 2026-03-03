# Vue - The Complete Guide (Progress Tracker)

### 🟢 1. Getting Started

#### gs-02 to gs-03 : comparing Vanilla JS with Vue syntax
- Need to install Vue either via npm or cdn
- Define scope of Vue in HTML file
- Create App in JS file and mount it with the defined scope


---

### 🟢 1. Basic & Core Concepts

#### basics-02 : Interpolation & Data binding
- ```{{ Interpolation }}``` with expression
- ```v-bind``` to bind attribute and make it dynamic

#### basics-03 to basic-04 : Event binding & Event modifiers
- ```v-on:click``` comparable with addEventListener('click', () => {})
- ```v-on:input``` to garsp input from built-in event such event.target.value
- ```v-on:submit.prevent``` using with Form to prevent reloading page after form submmission
- ```v-on:keyup.enter``` comparable with addEventListener('keyup', () => {})
- ```v-once to prevent``` data re-rendering and make it static

#### basics-05 : Data and Event binding with new features
- ```v-modell``` both data and event binding, comparable with v-on and v-bind
- ```method: { incretment() {} }``` feature - action once event got trickled ohne cache
- ```computed: { fullName() {} }``` feature - cache, return a value once depedencies are changed - calculation
- ```watch: { search(newValue) {} }``` feature - action after value changed - validation, async