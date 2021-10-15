<template>
  <div>
    <Signup />
  </div>
</template>

<script>
export default {
  middleware: 'isRedirect',
  layout: 'LayoutSignup',
  head() {
    return {
      title: 'Sign up | DevJobs',
      meta: [
        {
          name: 'description',
          content: 'Portal de empleos para desarrolladores',
          hid: 'description',
        },
      ],
      htmlAttr: {
        lang: 'es',
      },
      link: [
        {
          hid: 'shortcut-icon',
          rel: 'shortcut icon',
          href: '/favicon.png',
        },
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          href: '/favicon.png',
          sizes: '512x512',
        },
      ],
    }
  },
}
</script>
