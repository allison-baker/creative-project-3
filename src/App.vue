<template>
  <div id="app">
    <div id="content">
      <div id="header">
          <h1>Quote Post Generator</h1>
      </div>
      <div id="menu">
        <div id="menu-content">
          <div><router-link to="/">Generator</router-link></div>
          <div><router-link to="/quotes">My Quotes</router-link></div>
          <div><router-link to="/about">About</router-link></div>
        </div>
      </div>
      <router-view />
    </div>
    <div id="footer">
      <p>You can find my GitHub repository
        <a href="https://github.com/allison-baker/creative-project-3" target="_blank"
          id="footer-link">here</a>.</p>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Space Grotesk', sans-serif;
  text-align: center;
  position: relative;
  min-height: 100vh;
}

h1 {
  font-weight: 600;
  color: white;
}

#header {
  padding: 30px;
  background-color: #333333;
}

#menu {
  background-color: #444444;
  padding: 15px 0;
  border-bottom: 4px solid #E76161;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
}

#menu a {
  color: white;
  font-weight: 400;
  text-decoration: none;
}

#menu a.router-link-exact-active {
  color: #E76161;
}

#menu-content {
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#content {
  padding-bottom: 75px;
}

#footer {
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75px;
  position: absolute;
  bottom: 0;
  width: 100%;
}

#footer p {
  color: white;
}

#footer-link {
  text-decoration: none;
  color: #E76161;
}

@media screen and (max-width: 960px) {
  #menu-content {
    width: 100%;
    justify-content: space-around;
  }
}
</style>
