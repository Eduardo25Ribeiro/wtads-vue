<template>
  <div>
    <SiteHeader />
    <router-view />
    <footer>
      <p> Feito por Eduardo reutilizando o site do wtads! </p>
    </footer>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'

export default {
  components: {
    SiteHeader
  }
}
</script>
