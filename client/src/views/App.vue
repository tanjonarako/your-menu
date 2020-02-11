<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  
  data: () => ({
    dialog: false
  })
}
</script>

<style>
html, body {
  height: 100%;
}

#root {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  border: none;
  cursor : pointer;

  &:focus {
    outline: none;
  }
}

input::placeholder {
  color:#888;
}

.row-flex {
  display: flex;
  .col-flex {
    flex: 1 1 auto;
  }
}

.text-grey {
  color: #7d7d7d;
}

.app {
  margin: 0 auto;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  background: white;
  overflow: auto;
  position: relative;
}

.app ul {
  padding: 0;
  list-style: none;
}

.separator {
  width: 100%;
  height: 1px;
  background-color: black;
  margin: 10px 0;
}
</style>
