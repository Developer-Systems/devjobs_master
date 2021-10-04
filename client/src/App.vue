<template>
  <div><router-view /></div>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {},
};
</script>

<style>
  html {
  font-family: "Mukta", sans-serif;
  -ms-overflow-style: hidden !important;
  overflow-y: hidden !important;
  width: 100vw;
  height: 100vh;
  background-color: #100e17;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>
