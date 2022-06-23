<template>
  <div class="home">
    <AcropolisMain></AcropolisMain>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AcropolisMain from '../components/AcropolisMain.vue'; // @ is an alias to /src

@Options({
  components: {
    AcropolisMain,
  },
})
export default class Home extends Vue {}
</script>
