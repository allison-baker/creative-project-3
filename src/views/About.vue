<template>
  <div id="content">
    <h1>About the Creator of Quote Post Generator</h1>
    <div id="image"></div>
    <p>My name is Allison Baker and I am currently a student at Brigham Young
      University studying Computer Science. I made this web application for
      my Intro to Web Programming Class as an activity to learn the Vue CLI.</p>
    <p>The GitHub repository for this project is linked in the footer, and you
      can find other repositories for other projects I've made for this class
      <a href="https://github.com/allison-baker" target="_blank">here</a>.</p>
    <p>Thank you for using my app, and I hope you enjoy!</p>
  </div>
</template>

<script>

</script>

<style scoped>
h1 {
  color: #333333;
  padding: 30px;
}

p {
  margin-top: 30px;
  font-size: 18px;
}

#content {
  width: 60%;
  margin: 0 auto;
}

#image {
  background-image: url("../assets/profile_pic.png");
  background-position: center;
  background-repeat: none;
  background-size: cover;
  height: 300px;
  width: 300px;
  margin: 0 auto;
}

@media screen and (max-width: 960px) {
  #content {
    width: 80%;
  }
}
</style>
