<template>
  <div>
    <div v-for="post in myQuotes" :key="post.quote">
      <div id="quote" :style="{backgroundColor: post.color}">
        <p id="text" :style="{fontFamily: post.font}">{{post.quote}}</p>
        <p id="author" :style="{fontFamily: post.font}">{{post.author}}</p>
      </div>
      <button id="remove" @click="remove(post)">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Saved',
  props: {
    myQuotes: Array
  },
  methods: {
    remove(post) {
      for (let i=0; i<this.$root.$data.myQuotes.length; ++i) {
        if (this.$root.$data.myQuotes[i].quote === post.quote) {
          this.$root.$data.myQuotes.splice(i, 1);
        }
      }
      if (this.$root.$data.myQuotes.length === 0) this.$root.$data.isEmpty = true;
    },
  },
};
</script>

<style scoped>
#quote {
  padding: 75px;
  border: 3px solid black;
  margin: 20px 0;
}

#text {
  font-size: 40px;
  padding-bottom: 15px;
}

#author {
  font-size: 30px;
}

#remove {
  background-color: #444444;
  border: none;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding: 15px 0;
  width: 200px;
}

@media screen and (max-width: 400px) {
  #quote {
    padding: 30px;
  }
}

@media screen and (min-width: 401px) and (max-width: 960px) {
  #quote {
    padding: 50px;
  }
}
</style>
