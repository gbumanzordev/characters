<template>
  <div id='nav'>
    <router-link to='/'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/1280px-Marvel_Logo.svg.png'
           alt=''>
    </router-link>
    <router-link to='/'>Characters</router-link>
    <router-link to='/comics'>Comics</router-link>
    <router-link to='/stories'>Stories</router-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
img {
  width: 64px;
}

#nav {
  padding-bottom: 24px;
  display: flex;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a + a {
  margin-left: 24px;
}

#nav a:hover {
  text-decoration: underline;
}

#nav a.router-link-exact-active {
  color: #F0131E;
}
</style>
