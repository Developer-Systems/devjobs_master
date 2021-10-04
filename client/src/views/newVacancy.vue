
<template>
  <div>
    <component :is="layout"></component>

    <newVacancies />
  </div>
</template>

<script>
import newVacancies from "@/components/newVacancies";
import Default from "@/components/layouts/Default.vue";

export default {
  data() {
    return { layout: "Default" };
  },

  name: "New Vacancy",

  components: {
    newVacancies,
    Default,

  },
};
</script>





