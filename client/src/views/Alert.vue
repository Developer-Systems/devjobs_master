<template>
<div>
  <Header/>
  <Alerts />
</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Alerts from "@/components/Alerts";

export default {
  name: "Alert",

  components: {
    Alerts,
    Header
  },
};
</script>
