<template>
  <div>
    <Signin />
  </div>
</template>

<script>
export default {
  middleware: 'isRedirect',
  layout: 'LayoutSignin',
  head() {
    return {
      title: 'Sign in | DevJobs',
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
