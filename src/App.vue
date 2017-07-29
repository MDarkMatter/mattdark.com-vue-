<template>
  <div id="app">
    <Navblar></Navblar>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import Navblar from "./shared/navblar/Navblar.vue"
  export default {
    name: 'app',
    components: {
      Navblar
    }
  }
</script>

<style>
  #app {
    font-family: 'Cutive Mono', monospace;
    text-align: center;
    color: #2c3e50;
  }

  body {
    background: url('./assets/img/home.jpg') no-repeat center center fixed;
    margin-top: 5rem;
    background-size: cover;
  }
  .slide-fade-enter-active {
  transition: all .8s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for <2.1.8 */ {
    transform: translateX(5px);
    opacity: 0;
  }
</style>
