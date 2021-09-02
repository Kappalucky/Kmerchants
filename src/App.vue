<template>
  <div id="app">
    <app-navbar />
    <main id="main" role="main">
      <router-view />
    </main>
  </div>
</template>
<script>
import AppNavbar from './components/AppNavbar.vue';

export default {
  components: {
    AppNavbar,
  },
};
</script>
<style>
@import 'https://fonts.googleapis.com/css?family=Arima+Madurai:100|Nixie+One|Scope+One|Montserrat|Permanent+Marker&display=swap';
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  margin: 0;
}
body {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
main {
  flex: 1;
  min-height: 100vh;
}
h2 {
  font-size: 2rem;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.titles {
  font-family: 'Permanent Marker';
}
.headers {
  font-family: 'Scope One';
}
.text {
  font-family: 'Montserrat', sans-serif;
}
.btn {
  background-color: #175899;
  @apply shadow-md;
  @apply tracking-wide;
  @apply font-bold;
  @apply py-2;
  @apply px-6;
  @apply border-black;
  @apply rounded;
  @apply text-white;
}
.btn:hover {
  background-color: #1d6ab8;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
