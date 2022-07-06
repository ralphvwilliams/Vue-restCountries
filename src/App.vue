<template>
  <nav class="nav" :class="[isActive ? darkNav : '', defaultNav]">
    <div class="left-nav">
      <p :class="[isActive ? pDark : '']">Where in the world?</p>
    </div>
    <div class="right-nav">
      <p @click="changeActive" :class="[isActive ? pDark : '']">{{ mode }}</p>
    </div>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      modes: ['Dark Mode', 'Light Mode'],
      isActive: false,
      darkNav: 'nav-dark',
      defaultNav: 'nav',
      pDark: 'right-dark',
      black: '#000000',
      white: '#FFFFFF',
      bgColor: '#FFFFFF',
    };
  },
  methods: {
    changeActive() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
      if (this.isActive) {
        this.bgColor = '#000000';
      } else {
        this.bgColor = '#FFFFFF';
      }
    },
  },

  computed: {
    mode() {
      if (this.isActive) {
        return this.modes[1];
      } else {
        return this.modes[0];
      }
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Effra';
  src: local('Effra'), url(./Fonts/Effra_Std_Rg.ttf) format('truetype');
}

#app {
  // font-family: 'Poppins';
  // font-family: Helvetica, sans-serif;
  // font-family: 'Effra';
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, Roboto,
    'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

div {
  background: v-bind(bgColor);
}
nav {
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 5px 10px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  .left-nav,
  .right-nav {
    padding-left: 60px;
    padding-right: 60px;
    padding-top: 30px;
    padding-bottom: 30px;
  }
}

.nav-dark {
  background-color: #000000;
}

.right-dark {
  color: #ffffff;
}

.left-nav p,
.right-nav p {
  font-size: 18px;
  font-weight: 600;
}
</style>
