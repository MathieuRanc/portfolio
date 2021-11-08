<template>
  <div class="container" v-if="feedback">
    <img class="photo" :src="src" :alt="feedback.Photo.alternativeText" />
    <div class="text">
      <img src="../assets/images/quote.svg" alt="Guillemet" />
      <p>“{{ feedback.text[0].Review }}”</p>
      <h4>{{ feedback.text[0].Title }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feedback: {
      type: Object,
      default: { Photo: { url: '', text: [{ Review: '', Title: '' }] } },
    },
  },
  computed: {
    src() {
      return process.env.apiUrl + this.feedback.Photo.url
    },
  },
}
</script>

<style lang="scss" scoped>
$gray: #afa7a7;
.container {
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px auto;
  padding: 0 40px;
}
.photo {
  margin-right: 40px;
  flex: 1;
  height: 400px;
}
.text {
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: auto;
  min-height: 300px;
  :nth-child(n) {
    margin: 20px 0;
  }
  @media screen and (min-width: 700px) {
    min-height: 400px;
    :first-child {
      margin-top: 0;
    }
    :last-child {
      margin-bottom: 0;
    }
  }
  p {
    font-size: 30px;
    font-weight: bold;
  }
  h4 {
    font-size: 20px;
    font-weight: normal;
    color: $gray;
  }
  img {
    max-width: 50px;
  }
}
</style>
