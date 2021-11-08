<template>
  <nav>
    <div class="brand">mth</div>
    <div class="navigation">
      <a href="#service">{{ $t('nav.services') }}</a>
      <a href="#works">{{ $t('nav.works') }}</a>
      <a href="#contact">{{ $t('nav.contact') }}</a>
      <nuxt-link v-if="$i18n.locale !== 'en'" to="/">󠁧󠁢󠁥🇫🇷</nuxt-link>
      <nuxt-link v-else to="/fr">🇬🇧</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
  .brand {
    font-size: 24px;
    margin: 40px;
    @media screen and (max-width: 700px) {
      display: none;
      // font-size: 18px;
      // margin: 20px;
    }
  }
  .navigation {
    display: flex;
  }
  a {
    text-decoration: none;
    color: black;
    margin: 20px;
    padding: 20px;
    display: flex;
    @media screen and (max-width: 700px) {
      margin: 10px;
      padding: 10px;
      font-size: 14px;
    }
    align-items: center;
    &:last-child {
      @media screen and (min-width: 700px) {
        margin-right: 40px;
      }
    }
  }
}
</style>
