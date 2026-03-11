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
- Dont use v-if and v-for one the same element, use a wrapper with v-if instead
    - ```<li v-for="g in goals">{{ g }}</li>``` loop and render, g can be rendered within its scope only

    - ```<li v-for="(goal, index) in goals">{{ goal }} - {{ index }}</li>``` loop an array with index numbers

    - ```<li v-for="(value, key, index) in {name: 'Max', age: 31}">{{ key }}: {{ value }} - {{ index }}</li>``` loop an object through keys and values

#### lists-cond-05 : adding and removing list items

- adding a list
    - ```<input type="text" v-model="enteredGoalValue" /><button @click="addGoal">Add Goal</button>```

- removing a list
    - ```<ul v-else> <li v-for="(goal, index) in goals" @click="removeGoal(index)">{{ goal }} - {{ index }}</li></ul>```

- sample methods
    - ```methods: { addGoal() { this.goals.push(this.enteredGoalValue); }, removeGoal(idx) { this.goals.splice(idx, 1); }} ```


#### lists-cond-06 : List & Keys

- Vue reuses DOM to optimize performance. This can lead to bugs if elements contain state
- Bind the ```:key="goal"``` attribute to a unique value help Vue identify elements that belong to list content (usually use with ```v-for```)
- ```@click.stop``` this can stop an event which is inherited into its nest
    - ```<li v-for="(goal, index) in goals" :key="goal" @click="removeGoal(index)"> <p>{{ goal }} - {{ index }}</p> <input type="text" @click.stop></li>```

---

### 🟢 5. Behind the scence

#### behind-scenes-03 : One App vs Multiple Apps
- We can have as many apps as we wants this is like widgets but these apps can NOT communicate with each other unlike components
- Also the app can be ```app.unmount();``` as well

#### behind-scenes-05 : refs
- Direct access, point to the DOM without going through data or props. (manipulate it directly, without reactivity)
- ```<ChildComponent ref="child" />```
- ```this.$refs.child.someMethod()```

#### behind-scenes-06 : Vue Life Cycle
- Inside the app object, there are actually predefined built-in functions reflecting time sequences 
  ```beforeCreate() {},```
  ```created() {},```
  ```beforeMount() {},```
  ```mounted() {},```
  ```beforeUpdate() {},```
  ```updated() {},```
  ```beforeUnmount() {},```
  ```unmounted() {},```

---

### 🟢 7. Vue Cli : creating project with a build tool

#### vue-cli-01 to vue-cli-03 : Overview of Project Struture
- Define a component under ``` src/components/PascalCaseName.vue``` following a convention
- Adding the component in .js (do not forget to import) 
    - ```import FriendContact from './components/FriendContact.vue';```
    - ```app.component('friend-contact', FriendContact);```
- Call the component like this ```<friend-contact></friend-contact>```
- Props can be validated by setting it as an object and also add a validator. The error will be shown in console. This help regulating when work with other developers. ``` https://vuejs.org/guide/components/props.html ```
    ```
    props: {
    isFavorite: {
      type: String,
      required: false,
      default: '0',
      validator: function(value) {
        return value === '1' || value === '0';
      }
    },
    ```

- Also we can bind props with v-bind to make it dynamic 
    ```
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="true"
      ></friend-contact>
    </ul>
    ```

#### vue-cli-05: Child -> Parent Communication
- Emit is a built-in function ```this.$emit()``` which can be called from inside a component and send a data as a second argument to the parent element ```this.$emit('toggle-favorite', this.id);```
- The parent component listen to its child ```@toggle-favorite="toggleFavoriteStatus"``` and recieved the sent value 
    ```
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
    ```
    - ```https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find```
- ```kebab-case``` ist a naming convention for this custom event 