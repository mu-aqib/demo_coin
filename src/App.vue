<template>
  <div>
    <Header @userLogin="userLogin" />
    <main>
      <Home :authToken="token" />
    </main>
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Home from "@/components/Home.vue";
export default {
  name: "App",
  data() {
    return {
      token: undefined,
    };
  },
  components: {
    Header,
    Home,
  },
  methods: {
    async userLogin() {
      fetch("http://devapi.finansiada.com:8084/uc/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "chanin.t@smartblocktech.ai",
          password: "Zxcv1234",
        }),
      })
        .then((data) => data.json())
        .then((user) => console.log(user));
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #141b1f;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.border-dark {
  border: 1px solid #28363e;
}
.border-left-dark {
  border-left: 1px solid #28363e;
}
.border-right-dark {
  border-right: 1px solid #28363e;
}
.border-top-dark {
  border-top: 1px solid #28363e;
}
.border-bottom-dark {
  border-bottom: 1px solid #28363e;
}
.form-control:focus {
  box-shadow: unset;
  outline: 0;
}
</style>
