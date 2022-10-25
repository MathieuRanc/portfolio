<template>
  <div>
    <Navbar />
    <header>
      <div class="container">
        <div class="title">
          <h1>Mathieu<br />Ranc</h1>
          <p>{{ $t('header.p') }}</p>
          <button @click="$router.push('#contact')">
            {{ $t('header.button') }}
          </button>
        </div>
        <div>
          <img
            class="me"
            src="../assets/images/mathieu.png"
            alt="photo de Mathieu Ranc"
          />
          <img
            class="circle"
            src="../assets/images/circle_red.svg"
            alt="red circle"
          />
        </div>
      </div>
      <div class="technos">
        <div>
          <img src="../assets/images/nuxt_logo.svg" alt="Nuxt logo" />
          <img src="../assets/images/strapi_logo.svg" alt="Strapi logo" />
          <img src="../assets/images/symfony_logo.svg" alt="Symfony logo" />
        </div>
        <div></div>
      </div>
    </header>
    <div id="service">
      <h2>
        <span class="year-experience">2</span><span class="plus">+</span>
        <br />
        {{ $t('service.h2') }}
      </h2>
      <div class="content">
        <p>{{ $t('service.content.p') }}</p>
        <div class="wrapper">
          <div class="box red">
            <h3>
              {{ $t('service.content.box.red.title') }}
            </h3>
            <p>{{ $t('service.content.box.red.description') }}</p>
            <!-- <button class="more">
              {{ $t('service.content.box.red.more') }}
            </button> -->
          </div>
          <div class="box">
            <h3>
              {{ $t('service.content.box.uiux.title') }}
            </h3>
            <p>{{ $t('service.content.box.uiux.description') }}</p>
          </div>
          <div class="box">
            <h3>
              {{ $t('service.content.box.frontend.title') }}
            </h3>
            <p>{{ $t('service.content.box.frontend.description') }}</p>
          </div>
          <div class="box">
            <h3>
              {{ $t('service.content.box.backend.title') }}
            </h3>
            <p>{{ $t('service.content.box.backend.description') }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="works" v-if="portfolio">
      <kinesis-container class="container" event="scroll">
        <kinesis-element
          v-for="(projet, i) in portfolio.data.attributes.projets"
          :key="projet.id"
          tag="a"
          :strength="
            width > 768
              ? Math.floor(i / 4) % 2
                ? 200
                : -200
              : Math.floor(i / 2) % 2
              ? 200
              : -200
          "
          type="translate"
          axis="x"
          :href="projet.url"
          target="_blank"
        >
          <div :style="'background-color: ' + projet.background_color">
            <img
              :src="projet.image.data.attributes.url"
              alt="Projet Notacoeur"
            />
          </div>
        </kinesis-element>
      </kinesis-container>
    </div>
    <!-- <div class="portfolio">
      <transition-group :name="direction" mode="ease-in-out">
        <Feedback v-if="feedback" :key="feedback.id" :feedback="feedback" />
      </transition-group>
      <div class="arrows">
        <div @click="less" :class="left">
          <img src="../assets/images/arrow_left.svg" alt="Flèche gauche" />
        </div>
        <div @click="plus" :class="right">
          <img src="../assets/images/arrow_right.svg" alt="Flèche droite" />
        </div>
      </div>
    </div> -->
    <div id="contact">
      <div class="container">
        <div>
          <h2>{{ $t('contact.h2') }}</h2>
          <p>{{ $t('contact.description') }}</p>
          <img src="../assets/images/circle_light.svg" alt="light circle" />
        </div>
        <form action="" @submit="contact">
          <!-- <h3>{{ $t('contact.form.h3') }}</h3>
          <input
            type="text"
            name="name"
            id="name"
            :placeholder="$t('contact.form.name')"
          />
          <input
            type="email"
            name="email"
            id="email"
            :placeholder="$t('contact.form.email')"
          />
          <textarea
            name="description"
            id="description"
            rows="5"
            :placeholder="$t('contact.form.description')"
          ></textarea>
          <input type="submit" :value="$t('contact.form.submit')" /> -->
          <a href="mailto:contact@mathieuranc.fr">
            {{ $t('contact.h2') }}
          </a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import portfolio from '../assets/data/portfolio'
export default {
  // fetchOnServer: false,
  data() {
    return {
      id: 0,
      portfolio,
      direction: '',
      apiUrl: process.env.API_URL,
      width: window.innerWidth,
    }
  },
  computed: {
    projects() {
      return this.portfolio.data.attributes.projets
    },
  },
  // computed: {
  //   portfolio() {
  //     this.id
  //     if (this.portfolio.length > 0) return this.portfolio[this.id]
  //     return null
  //     // return this.portfolio[this.id]
  //   },
  //   left() {
  //     return this.id === 0 ? 'hidden' : null
  //   },
  //   right() {
  //     return this.id === this.portfolio.length - 1 ? 'hidden' : null
  //   },
  // },
  methods: {
    less() {
      this.direction = 'right'
      if (this.id > 0) this.id -= 1
    },
    plus() {
      this.direction = 'left'
      if (this.id < this.portfolio.length - 1) this.id += 1
    },
    contact(target) {
      target.preventDefault()
      console.log('Envoi du message')
    },
    onResize() {
      this.width = window.innerWidth
    },
  },
  // async fetch() {
  //   this.portfolio = await fetch(this.apiUrl + "/api/portfolio", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((response) => response.json());
  // },
  mounted() {
    this.$nextTick(() => window.addEventListener('resize', this.onResize))
    window.scrollTo(0, 0)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style lang="scss" scoped>
$main: #e14646;
$gray: #afa7a7;
input {
  border-radius: 0;
}
input[type='submit'],
button {
  -webkit-appearance: none;
  cursor: url('/cursor_pointer.svg') 15 15, pointer;
  transition: background-color 200ms, transform 200ms;
  background-color: $main;
  &:hover {
    background-color: #c23b3b;
    transform: scale(1.05);
  }
}
.technos,
#service,
.portfolio {
  background-color: #fefafa;
}
header {
  position: relative;
  .container {
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
  }
  div {
    flex: 1;
  }
  .title {
    display: flex;
    flex-direction: column;
    padding: 100px 40px 260px 40px;
    @media screen and (max-width: 700px) {
      padding: 40px;
    }
    justify-content: center;
    h1 {
      font-size: 80px;
      @media screen and (max-width: 700px) {
        font-size: 60px;
      }
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      margin-bottom: 40px;
      color: $gray;
    }
    button {
      font-size: 14px;
      color: white;
      padding: 10px 20px;
      border: none;
      margin-right: auto;
    }
  }
  img {
    max-height: 100vh;
    height: 600px;
    width: 100%;
    object-fit: contain;
    &.me {
      padding: 40px 40px 0 0;
      @media screen and (max-width: 700px) {
        padding: 20px;
      }
    }
    &.circle {
      z-index: -2;
      max-width: 60%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(40%, 10%);
    }
  }
  @media screen and (max-width: 700px) {
    .container {
      flex-direction: column;
    }
    .circle {
      display: none;
    }
  }
}
.technos {
  padding: 55px;
  z-index: -1;
  width: 100vw;
  @media screen and (min-width: 700px) {
    position: absolute;
  }
  bottom: 0;
  display: flex;
  align-items: center;
  div {
    &:nth-child(1) {
      flex: 3;
    }
    &:nth-child(2) {
      flex: 2;
      @media screen and (max-width: 700px) {
        display: none;
      }
    }
    display: flex;
    justify-content: space-between;
  }
  img {
    object-fit: contain;
    max-height: 50px;
    max-width: 25%;
  }
}
#service {
  display: flex;
  padding: 0 40px;
  padding-bottom: 140px;
  @media screen and (max-width: 700px) {
    padding: 20px;
    flex-direction: column;
  }
  h2 {
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    @media screen and (max-width: 700px) {
      position: static;
    }
    margin-right: 40px;
    margin-bottom: auto;
    width: min-content;
    font-size: 24px;
    .year-experience,
    .plus {
      color: $main;
    }
    .year-experience {
      font-size: 140px;
    }
    .plus {
      font-size: 100px;
    }
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 60px;
    @media screen and (max-width: 700px) {
      padding: 0;
    }
    p {
      font-size: 24px;
      @media screen and (max-width: 700px) {
        font-size: 18px;
      }
      margin: 60px 0;
      font-weight: bold;
    }
    .wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
      width: 100%;
      .box {
        max-width: 100%;
        background-color: #f9f6f6;
        h3 {
          font-size: 24px;
          margin: 20px;
          @media screen and (min-width: 700px) {
            margin-top: 140px;
          }
        }
        p {
          margin: 20px;
          font-size: 16px;
          font-weight: 300;
        }
      }
      .red {
        background-color: $main;
        color: white;
      }
    }
  }
}
#works {
  border: none;
  .container {
    padding: 10%;
    padding-bottom: 20%;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 50px;
    max-width: 1500px;
    margin: 0 auto;
    a {
      display: block;
      div {
        // box-shadow: inset 0px 0px 1px rgba(0, 0, 0, 1);
        filter: brightness(0.95);
        aspect-ratio: 1 / 1;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        transition: all 300ms ease-in-out;
      }
      img {
        padding: 40px;
        cursor: url('/cursor_pointer.svg') 15 15, pointer;
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: all 300ms ease-in-out;
      }
      &:hover div {
        filter: brightness(0.98);
        clip-path: polygon(5% 10%, 95% 5%, 95% 90%, 5% 95%);
        img {
          padding: 30px;
        }
      }
      margin-bottom: auto;
    }
  }
}
.portfolio {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  span {
    position: relative;
    margin: 0 auto;
    width: 1100px;
    max-width: 100%;
  }
  .container {
    max-width: 1100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px auto;
    padding: 0 40px;
    @media screen and (max-width: 700px) {
      flex-direction: column;
    }
  }
  .arrows {
    display: flex;
    align-items: center;
    min-height: 50px;
    div {
      cursor: url('/cursor_pointer.svg') 15 15, pointer;
      padding: 10px;
    }
    &:first-child {
      height: 11px;
      width: 23px;
    }
    &:last-child {
      height: 23px;
      width: 50px;
    }
    img {
      // padding: 10px;
      margin: 10px;
      transition: opacity 500ms;
    }
    .hidden {
      cursor: url('/cursor.svg') 15 15, auto;
      img {
        opacity: 0;
      }
    }
    img:not(:last-child) {
      margin-right: 20px;
    }
  }
}
#contact {
  overflow-y: hidden;
  .container {
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 100px 40px;
    position: relative;
    @media screen and (max-width: 1100px) {
      flex-direction: column;
    }
  }
  div {
    margin-right: 40px;
    @media screen and (max-width: 1100px) {
      margin: 40px auto 40px 0;
    }
    h2 {
      font-size: 40px;
      margin-bottom: 20px;
    }
    p {
      color: $gray;
      max-width: 75%;
    }
    img {
      z-index: -1;
      position: absolute;
      left: 0;
      top: 40px;
      width: 60%;
      transform: translateX(-20%);
      @media screen and (max-width: 1100px) {
        display: none;
      }
    }
  }
  a {
    display: block;
    text-decoration: none;
    background-color: $main;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-right: auto;
    transition: background-color 200ms, transform 200ms;
    background-color: $main;
    &:hover {
      background-color: #c23b3b;
      transform: scale(1.05);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    min-width: 500px;
    @media screen and (max-width: 1100px) {
      width: 100%;
      min-width: auto;
    }
    :not(:last-child) {
      margin-bottom: 20px;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      box-shadow: 0 0 0 30px #f9f6f6 inset !important;
    }
    input[type='text'],
    input[type='email'],
    textarea {
      outline: none;
      border: none;
      background-color: #f9f6f6;
      padding: 16px 20px;
      &::placeholder {
        color: $gray;
      }
    }
    input[type='submit'] {
      background-color: $main;
      color: white;
      border: none;
      padding: 10px 20px;
      margin-right: auto;
      transition: background-color 200ms, transform 200ms;
      background-color: $main;
      &:hover {
        background-color: #c23b3b;
        transform: scale(1.05);
      }
    }
  }
}
@media screen and (max-width: 768px) {
  #works {
    .container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}
</style>

<style lang="scss">
.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition: transform 500ms, opacity 1000ms;
}
.left-leave-active,
.right-leave-active {
  position: absolute;
}
.left-leave-to /* .fade-leave-active below version 2.1.8 */ ,
.right-enter {
  transform: translate(calc(-50vw - 100%));
}
.left-enter ,
.right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translate(calc(50vw + 100%));
}
ƒ input,
textarea {
  cursor: url('/cursor_pointer.svg') 10 10, auto;
}
html {
  overflow-x: hidden;
  cursor: url('/cursor.svg') 15 15, auto;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
html,
textarea {
  font-family: 'Avenir', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
textarea {
  resize: vertical;
}
a {
  cursor: url('/cursor_pointer.svg') 15 15, pointer;
}
</style>
