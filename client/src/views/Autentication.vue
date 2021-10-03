
<template>
  <div>
    <component :is="layout"></component>

    <Autentications />
  </div>
</template>

<script>
import Autentications from "@/components/Autentications";
import AuteHome from "@/components/layouts/AuteHome.vue";

export default {
  data() {
    return { layout: "AuteHome" };
  },

  name: "Autentication",

  components: {
    Autentications,
    AuteHome,
  },
};
</script>
