<template>
  <div>
    <component :is="layout"></component>

    <Alerts />
  </div>
</template>

<script>
import Alerts from "@/components/Alerts";
import Default from "@/components/layouts/Default.vue";

export default {
  data() {
    return { layout: "Default" };
  },

  name: "Alert",

  components: {
    Alerts,
    Default,
  },
};
</script>
