<template>
  <div id="content">
    <h1>My Saved Quotes</h1>
    <p v-if="this.$root.$data.isEmpty" id="empty">You have no saved quotes right now!</p>
    <div v-else>
      <Saved :myQuotes="myQuotes" />
    </div>
  </div>
</template>

<script>
import Saved from "../components/Saved.vue"
export default {
  name: 'Quotes',
  components: {
    Saved
  },
  computed: {
    myQuotes() {
      return this.$root.$data.myQuotes;
    },
  },
};
</script>

<style scoped>
h1 {
  color: #333333;
  padding-top: 20px;
}

#empty {
  padding-top: 20px;
}

#content {
  width: 50%;
  margin: 0 auto;
}

@media screen and (max-width: 960px) {
  #content {
    width: 80%;
  }
}
</style>
