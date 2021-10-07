<template>
  <div>
    <component :is="layout"></component>

    <UpdateUsersProfile/>
  </div>
</template>

<script>
import UpdateUsersProfile from "@/components/UpdateUsersProfile.vue";
import Default from "@/components/layouts/Default.vue";

export default {
  data() {
    return { layout: "Default" };
  },

  name: "UpdateUserProfile",

  components: {
    UpdateUsersProfile,
    Default,
  },
};
</script>