<template>
  <div id="content">
    <div id="buttons">
      <div><button class="button" @click="generate">Generate</button></div>
      <div><button class="button" @click="save">Save Quote</button></div>
    </div>
    <div id="quote">
      <p id="text">Click the "Generate" button to generate a random quote and
        colored background, and the "Save Quote" button to save the design to
        My Quotes.</p>
      <p id="author"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Generator",
  methods: {
    generate() {
      let fontNum = Math.floor(Math.random()*10);
      let font = this.$root.$data.fontArray[fontNum];
      document.getElementById("text").style.fontFamily = font;
      document.getElementById("author").style.fontFamily = font;
      document.getElementById("text").style.fontSize = "40px";
      document.getElementById("author").style.fontSize = "30px";
      document.getElementById("text").style.paddingBottom = "15px";
      let colorURL = "http://www.colr.org/json/colors/random/50";
      let quoteURL = "https://type.fit/api/quotes";
      fetch(colorURL)
        .then(response => {
          return response.json();
        }).then(json => {
          let colorNum = Math.floor(Math.random()*50);
          let color = json.colors[colorNum].hex;
          document.getElementById("quote").style.backgroundColor = "#" + color;
          return fetch(quoteURL);
        }).then(response => {
          return response.json();
        }).then(json => {
          let quoteNum = Math.floor(Math.random()*1643);
          let quote = json[quoteNum].text;
          let author = json[quoteNum].author;
          document.getElementById("text").innerHTML = quote;
          document.getElementById("author").innerHTML = "-" + author;
        });
    },
    save() {
      this.$root.$data.isEmpty = false;
      let font_ = document.getElementById("text").style.fontFamily;
      let quote_ = document.getElementById("text").innerHTML;
      let author_ = document.getElementById("author").innerHTML;
      let color_ = document.getElementById("quote").style.backgroundColor;
      let post = {
        font: font_,
        quote: quote_,
        author: author_,
        color: color_,
      };
      this.$root.$data.myQuotes.push(post);
      console.log(this.$root.$data.myQuotes);
    },
  },
};
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 20px auto;
}

#buttons {
  display: flex;
  flex-direction: column;
  width: 20%;
}

.button {
  background-color: #E76161;
  border: none;
  color: white;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 400;
  font-size: 16px;
  padding: 20px 0;
  margin: 20px auto;
  width: 150px;
}

#quote {
  border: 3px solid black;
  padding: 75px;
  width: 80%;
  position: relative;
  background-color: white;
}

#text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
  padding-bottom: 0px;
}

#author {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 18px;
}

@media screen and (max-width: 400px) {
  #content {
    flex-direction: column;
    width: 100%;
  }

  #buttons {
    width: 100%;
  }

  .button {
    width: 80%;
    padding: 15px 0;
  }

  #quote {
    margin: 0 auto;
    padding: 30px;
  }
}

@media screen and (min-width: 401px) and (max-width: 960px) {
  #content {
    flex-direction: column;
  }

  #buttons {
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
  }

  #quote {
    width: 100%;
    padding: 50px;
  }
}
</style>
