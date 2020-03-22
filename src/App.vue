<template>
  <div id="app">
    <div class="info-input-box">
      <label>Name:</label>
      <input type="text" v-model="name"/>
      <button @click="submitName()">Add</button>
    </div>

    <div class="info-box">
      <ul>
        <li v-for="personName of names"
        v-bind:key="personName['.key']"
        >
        {{personName.name}} , {{personName.uid}} 
        <button @click="removeName(personName['.key'])">Remove</button>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
import { namesRef } from './firebase'
import { v4 as uuidv4 } from 'uuid';
export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      uid: uuidv4(),
      name: "",
      names: this.names,
    }
  },
  firebase: {
    names: namesRef
  },
  methods: {
    submitName() {
      namesRef.push({ name: this.name, edit: false, uid: this.uid })
    },
    removeName(key) {
      namesRef.child(key).remove();
      console.log(key);
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
