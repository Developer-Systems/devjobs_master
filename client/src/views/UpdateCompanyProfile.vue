<template>
  <div>
    <component :is="layout"></component>

    <UpdateCompaniesProfile/>
  </div>
</template>

<script>
import UpdateCompaniesProfile from "@/components/UpdateCompaniesProfile.vue";
import Default from "@/components/layouts/Default.vue";

export default {
  data() {
    return { layout: "Default" };
  },

  name: "UpdateCompanyProfile",

  components: {
    UpdateCompaniesProfile,
    Default,
  },
};
</script>