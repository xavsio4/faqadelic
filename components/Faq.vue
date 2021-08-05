<template>
  <div
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8 lg:py-20
    "
  >
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div
        class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
      >
        <div>
          <p
            class="
              inline-block
              px-3
              py-px
              mb-4
              text-xs
              font-semibold
              tracking-wider
              text-teal-900
              uppercase
              rounded-full
              bg-teal-accent-400
            "
          >
            Brand new
          </p>
        </div>
        <h2
          class="
            max-w-lg
            mb-6
            font-sans
            text-3xl
            font-bold
            leading-none
            tracking-tight
            text-gray-900
            sm:text-4xl
            md:mx-auto
          "
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="
                absolute
                top-0
                left-0
                z-0
                hidden
                w-32
                -mt-8
                -ml-20
                text-blue-gray-100
                lg:w-32 lg:-ml-28 lg:-mt-10
                sm:block
              "
            >
              <defs>
                <pattern
                  id="70326c9b-4a0f-429b-9c76-792941e326d5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect
                fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                width="52"
                height="24"
              ></rect>
            </svg>
            <span class="relative">You'll</span>
          </span>
          never believe from where we are managing those faqs below ? :-)
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          We are our first customers.
        </p>
      </div>
    </div>
    <div class="max-w-screen-xl sm:mx-auto">
      <div>
        <div class="w-full" v-if="loading">
          <img src="loaders.puff.svg" />
        </div>
        <div class="flex flex-wrap" v-else>
          <div
            style="min-width: 35%"
            class="flex-1 m-4 xs:w-full xs:min-w-full"
            v-for="(item, index) in faqs"
            :index="index"
            :key="item.id"
          >
            <p class="mb-4 text-xl font-medium">
              {{ item.question }}
            </p>
            <p class="text-gray-700">
              {{ item.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div id="faqadelic" class="mt-6 text-xs text-gray-300 text-right">
      Faq served by
      <a href="https://faqadelic.com" target="_blank">Faqadelic</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      faqs: {},
      loading: true,
    }
  },
  methods: {
    readFaqs() {
      this.loading = true
      this.$axios
        .get(
          'http://localhost/faqadelicapi/public/api/faqsbykey/179659212756962170447522033'
        )
        .then((response) => {
          this.faqs = response.data[0].faqs
          this.loading = false
          console.log(response.data[0].faqs)
        })
    },
  },
  mounted() {
    this.readFaqs()
  },
}
</script>
