<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
body {
  padding: 0;
  margin: 0;
  background: #17171f;
}
#app {
  font-family: "Urbanist", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 375px;
  height: 812px;
  background: #2d2d3a;
  margin-left: calc((100vw - 375px) / 2);
  margin-top: calc((100vh - 812px) / 2);
  overflow: auto;
  box-sizing: border-box;
}
</style>
