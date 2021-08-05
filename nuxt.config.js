export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // customize loading bar
  loading: {
    color: 'blue',
    height: '5px',
  },

  // loading indicator
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white',
  },

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'faqadelic',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/moment_filters.js' },
    { src: '~/plugins/vuelidate.js' },
    // { src: '~/plugins/dragula.js' },
    { src: '~/plugins/axios.js' },
    // { src: '~/plugins/compositionapi.js' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-animejs',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://firebase.nuxtjs.org/
    //'@nuxtjs/firebase',
    // https://github.com/nuxt-community/community-modules/tree/master/packages/toast
    '@nuxtjs/toast',
    '@nuxtjs/moment',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_URL,
    redirectError: {
      //401: '/login',
      //404: '/notfound',
    },
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/',
      //callback: '/login',
      home: '/dashboard',
    },
    strategies: {
      local: {
        url: process.env.API_URL,
        client_id: process.env.APP_CLIENT_ID,
        client_secret: process.env.APP_CLIENT_SECRET,
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: { url: '/logout', method: 'get' },
          user: { url: '/user', method: 'get' },
        },
        token: {
          property: 'access_token',
          //required: false, //default is true
          // type: false, //default Bearer
        },
      },
    },
    localStorage: true,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  //  Toast settings
  toast: {
    // position: 'top-center',
    duration: 1700,
    /*  register: [ // Register custom toasts
       {
         name: 'my-error',
         message: 'Oops...Something went wrong',
         options: {
           type: 'error'
         }
       }
    ] */
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
