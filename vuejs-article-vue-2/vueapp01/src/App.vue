<template>
  <div id="app">
    <img src="./assets/logo.png" @click="foo = foo + 'hello!'" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      foo: "bar!",
    };
  },
  watch: {
    // whenever question changes, this function will run
    foo(newFoo, oldFoo) {
      this.$posthog.capture("Foo Changed", { foo: newFoo });
    },

  },
  created() {
    console.log("Created", this.$posthog); //posthog accessible anywhere!
    console.log("Posthog Method 3", this.$posthog);
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
