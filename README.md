# Vue - The Complete Guide (Progress Tracker)

### 🟢 1. Getting Started

#### gs-02 to gs-03 : comparing Vanilla JS with Vue syntax
- Need to install Vue either via npm or cdn
- In app.js
  - An object {} is defined within .createApp() which is mounted to element id="app"
  ```
  Vue.createApp({}).mount('#app');
  ```
- We can use vue to control the whole page like SPA or parts of web like widgets. This depends on which ID we mount with the app


---

### 🟢 1. Basic & Core Concepts

#### basics-02 : Interpolation & Data binding

- within createApp() is an object which is always required data as an object key.
- this key is a function() which can be written in a short-hand form, and this always returns an object
  - We can freely name object keys in the return object from Data's function
  ```
  const app = Vue.createApp({
      data() {
          return {
            customizedKeyName: 'Hier is up to you',
          };
      }
  });
  app.mount('#user-goal');
  ``` 
  - Then to display this object key we bind it with interpolation {{ customizedKeyName }}
  - Note that this will be linked and only worked under the scope of Vue App which we have mounted with