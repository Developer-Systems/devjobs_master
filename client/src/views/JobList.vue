<template>
  <div>
    <component :is="layout"></component>

    <JobsList/>
  </div>
</template>

<script>
import JobsList from "@/components/JobsList";
import Default from "@/components/layouts/Default.vue";

export default {
  data() {
    return { layout: "Default" };
  },

  name: "JobList",

  components: {
    JobsList,
    Default,
  },
};
</script>
