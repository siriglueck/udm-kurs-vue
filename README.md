# Vue - The Complete Guide (Progress Tracker)

### 🟢 1. Getting Started

#### gs-02 to gs-03 : comparing Vanilla JS with Vue syntax
- Need to install Vue either via npm or cdn
- Define scope of Vue in HTML file
- Create App in JS file and mount it with the defined scope


---

### 🟢 2. Basic & Core Concepts

#### basics-02 : Interpolation & Data binding
- ```{{ Interpolation }}``` with expression
- ```v-bind``` to bind attribute and make it dynamic

#### basics-03 to basic-04 : Event binding & Event modifiers
- ```v-on:click``` comparable with addEventListener('click', () => {})
- ```v-on:input``` to garsp input from built-in event such event.target.value
- ```v-on:submit.prevent``` using with Form to prevent reloading page after form submmission
- ```v-on:keyup.enter``` comparable with addEventListener('keyup', () => {})
- ```v-once to prevent``` data re-rendering and make it static

#### basics-05 to basic-09 : Data and Event binding, shorthands and new features (method, computed, watch)
- ```v-modell``` both data and event binding, comparable with v-on and v-bind
- ```method: { incretment() {} }``` feature - action once event got trickled ohne cache
- ```computed: { fullName() {} }``` feature - cache, return a value once depedencies are changed - calculation
- ```watch: { search(newValue) {} }``` feature - action after value changed - validation, async
- ```:class``` shorthand for v-bind:class
- ```@click``` shorthand for v-on:click (also possible for div not only on button listening)

#### basics-10 to basic-13 : Dynamic Styling
- ```:style={borderColor: boxASelected ? 'red' : '#ccc'} @click="boxSelected('A')"``` dynamic inline styles

- ```:class={boxASelected ? 'demo active' : 'demo'} @click="boxSelected('A')"``` dynamic css class styles

- ```class="demo" :class={active: boxSelected}``` easier dynamic css class styles

- ```class="demo" :class={active: boxSelected}``` dynamic css array class syntax


---

### 🟢 3. Conditional Rendering and Iteration

#### lists-cond-02 :  Conditional Rendering
   
- v-if, v-else-if, v-else really removes and adds elements from and to the DOM, suitable for adding list elements
    - ```v-if="goals.length === 0"``` if condition
    - ```v-else-if="goals.length > 5" ``` else if
    - ```v-else``` else
    
- Alternative, suitable for toggle visibility
    - ```v-show``` just hide and show elements with CSS which is equivalent to ```style="display: none;"```

#### lists-cond-03 to list-cond-04 : Iteration
- ```<li v-for="g in goals">{{ g }}</li>``` loop and render, g can be rendered within its scope only

- ```<li v-for="(goal, index) in goals">{{ goal }} - {{ index }}</li>``` loop an array with index numbers

- ```<li v-for="(value, key, index) in {name: 'Max', age: 31}">{{ key }}: {{ value }} - {{ index }}</li>``` loop an object through keys and values





