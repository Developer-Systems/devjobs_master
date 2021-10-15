<template>
  <div>
    <UpdateUsersProfile/>
  </div>
</template>

<script>

export default {
  middleware: "isAuthenticated",
  layout: 'AuthReady',
};
</script>
