<template>
  <!-- component -->
  <div class="py-6">
    <div
      class="
        flex
        bg-white
        rounded-lg
        shadow-lg
        overflow-hidden
        mx-auto
        max-w-sm
        lg:max-w-4xl
      "
    >
      <div
        class="hidden lg:block lg:w-1/2 bg-cover"
        style="
          background-image: url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80');
        "
      ></div>
      <div class="w-full p-8 lg:w-1/2">
        <h2 class="text-2xl font-semibold text-gray-700 text-center">
          Faqadelic
        </h2>
        <p class="text-xl text-gray-600 text-center">Welcome back!</p>

        <div class="mt-4 flex items-center justify-between">
          <span class="border-b w-1/5 lg:w-1/4"></span>
          <a href="#" class="text-xs text-center text-gray-500 uppercase"
            >or login with email</a
          >
          <span class="border-b w-1/5 lg:w-1/4"></span>
        </div>
        <div class="mt-4">
          <label class="block text-gray-700 text-sm font-bold mb-2"
            >Email Address</label
          >
          <input
            v-model="email"
            class="
              bg-gray-200
              text-gray-700
              focus:outline-none focus:shadow-outline
              border border-gray-300
              rounded
              py-2
              px-4
              block
              w-full
              appearance-none
            "
            type="email"
            required
          />
          <div v-if="this.$v.email.$dirty">
            <div
              class="text-xs italic text-red-500 error"
              v-if="!$v.email.required"
            >
              email is required
            </div>
            <div
              class="text-xs italic text-red-500 error"
              v-if="!$v.email.email"
            >
              must be an email
            </div>
          </div>
        </div>
        <div class="mt-4">
          <div class="flex justify-between">
            <label class="block text-gray-700 text-sm font-bold mb-2"
              >Password</label
            >
            <NuxtLink to="/forgot" class="text-xs text-gray-500"
              >I forgot my password?</NuxtLink
            >
          </div>
          <input
            v-model="password"
            class="
              bg-gray-200
              text-gray-700
              focus:outline-none focus:shadow-outline
              border border-gray-300
              rounded
              py-2
              px-4
              block
              w-full
              appearance-none
            "
            type="password"
            required
          />
          <div v-if="this.$v.password.$dirty">
            <div
              class="text-xs italic text-red-500 error"
              v-if="!$v.password.required"
            >
              Type your password
            </div>
          </div>
        </div>
        <div class="mt-8">
          <button
            @click.prevent="submit()"
            class="
              bg-gray-700
              text-white
              font-bold
              py-2
              px-4
              w-full
              rounded
              hover:bg-gray-600
            "
          >
            Login
          </button>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <span class="border-b w-1/5 md:w-1/4"></span>
          <NuxtLink to="/register" class="text-xs text-gray-500 uppercase"
            >or sign up</NuxtLink
          >
          <span class="border-b w-1/5 md:w-1/4"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  auth: 'guest',
  components: { validationMixin },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },
  components: {
    // SignIn
  },
  data() {
    return {
      email: '',
      password: '',
      remember_me: true,
    }
  },
  methods: {
    async submit() {
      this.errors = {}
      this.show = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('Error')
      } else {
        try {
          await this.$auth
            .loginWith('local', {
              data: {
                email: this.email,
                password: this.password,
                remember_me: this.remember_me,
              },
            })
            .then((res) => {
              console.log('Auth Success')
              console.log(this.$auth.token)
              console.log(this.$auth.loggedIn)
            })
            .catch((error) => {
              this.show = false
              console.log(error)
              /*  this.$notify({
            title: 'Important message',
            text: err
            }) */
              this.errors = 'Wrong login password'
            })
        } catch (e) {
          this.errors = 'Wrong login password'
        }
      }
    },
    setEmail(value) {
      this.email = value
      this.$v.email.$touch()
    },
    setPassword(value) {
      this.password = value
      this.$v.password.$touch()
    },
  },
}
</script>
