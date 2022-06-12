<template>
  <div class="home">
    <Acropolis></Acropolis>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Acropolis from '../components/Acropolis.vue'; // @ is an alias to /src

@Options({
  components: {
    Acropolis,
  },
})
export default class Home extends Vue {}
</script>
