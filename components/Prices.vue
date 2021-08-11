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
    <a name="price" />
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
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
          Our Pricing
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
          <span class="relative">Transparent</span>
        </span>
        pricing. Pay as you grow.
      </h2>
      <p class="text-base text-gray-700 md:text-lg">
        Right now we are in BETA. In order to use faqadelic you need an
        invitation link.
      </p>
    </div>
    <div
      class="
        grid
        max-w-md
        gap-10
        row-gap-5
        lg:max-w-screen-lg
        sm:row-gap-10
        lg:grid-cols-3
        xl:max-w-screen-lg
        sm:mx-auto
      "
    >
      <div></div>
      <div
        class="
          flex flex-col
          p-8
          transition-shadow
          duration-300
          bg-white
          border
          rounded
          shadow-sm
          sm:items-center
          hover:shadow
        "
      >
        <div class="text-center">
          <div class="text-lg font-semibold">Start</div>
          <div class="flex items-center justify-center mt-2">
            <div class="mr-1 text-5xl font-bold">Free</div>
          </div>
          <div class="mt-2 space-y-3">
            <div class="text-gray-700">Unlimited faqs and groups</div>
            <div class="text-gray-700">500 api requests</div>
            <div class="text-gray-700">from unlimited domains</div>
          </div>
        </div>
        <div>
          <a
            to="/"
            class="
              inline-flex
              items-center
              justify-center
              w-full
              h-12
              px-6
              mt-6
              font-medium
              tracking-wide
              text-white
              transition
              duration-200
              bg-gray-800
              rounded
              shadow-md
              hover:bg-gray-900
              focus:shadow-outline focus:outline-none
            "
          >
            Start for free
          </a>
          <p
            class="
              max-w-xs
              mt-6
              text-xs text-gray-600
              sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto
            "
          ></p>
        </div>
      </div>
    </div>
  </div>
</template>
