<template>
<div>
  <AppBar></AppBar>
  <p>this is the home component</p>
</div>
</template>
<script>

import {defineComponent} from "vue";
import AppBar from "@/components/AppBar.vue";

export default defineComponent({
  components: {AppBar}
})
</script>
<style>

</style>