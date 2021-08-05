<template>
  <!-- Container -->
  <div class="container mx-auto">
    <div class="flex justify-center px-6 my-12">
      <!-- Row -->
      <div class="w-full xl:w-3/4 lg:w-11/12 flex">
        <!-- Col -->
        <div
          class="
            w-full
            h-auto
            bg-gray-400
            hidden
            lg:block lg:w-5/12
            bg-cover
            rounded-l-lg
          "
          style="
            background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
          "
        ></div>
        <!-- Col -->
        <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
          <a
            href="#"
            class="
              flex
              items-center
              justify-center
              mt-4
              text-white
              rounded-lg
              shadow-md
              hover:bg-gray-100
            "
          >
            <div class="px-4 py-3">
              <svg class="h-6 w-6" viewBox="0 0 40 40">
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#FFC107"
                />
                <path
                  d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                  fill="#FF3D00"
                />
                <path
                  d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                  fill="#4CAF50"
                />
                <path
                  d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                  fill="#1976D2"
                />
              </svg>
            </div>
            <h1 class="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
              Sign up with Google
            </h1>
          </a>
          <div class="mt-4 flex items-center justify-between">
            <span class="border-b w-1/5 lg:w-1/4"></span>
            <a href="#" class="text-xs text-center text-gray-500 uppercase"
              >or signup with email</a
            >
            <span class="border-b w-1/5 lg:w-1/4"></span>
          </div>
          <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
          <div
            class="border border-red text-md italic text-red-500 error"
            v-if="!result"
          >
            sorry, we could not register you. {{ errors }}
          </div>

          <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded form">
            <div class="mb-4">
              <label
                class="block mb-2 text-sm font-bold text-gray-700"
                for="email"
              >
                Email
              </label>

              <input
                v-model.trim="email"
                @input="setEmail($event.target.value)"
                class="
                  w-full
                  px-3
                  py-2
                  mb-3
                  text-sm
                  leading-tight
                  text-gray-700
                  border
                  rounded
                  shadow
                  appearance-none
                  focus:outline-none focus:shadow-outline
                "
                id="email"
                type="email"
                placeholder="Email"
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
            <div class="mb-4 md:flex md:justify-between">
              <div class="mb-4 md:mr-2 md:mb-0">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  v-model="password"
                  class="
                    w-full
                    px-3
                    py-2
                    mb-3
                    text-sm
                    leading-tight
                    text-gray-700
                    border border-red-500
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="password"
                  type="password"
                  placeholder="******************"
                  required
                />
                <div v-if="this.$v.password.$dirty">
                  <div
                    class="text-xs italic text-red-500 error"
                    v-if="!$v.password.required"
                  >
                    Choose a password
                  </div>
                  <div
                    class="text-xs italic text-red-500 error"
                    v-if="!$v.password.minLength"
                  >
                    Your password must be at least 9 characters
                  </div>
                </div>
              </div>
              <div class="md:ml-2">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="c_password"
                >
                  Confirm Password
                </label>
                <input
                  v-model="passwordc"
                  class="
                    w-full
                    px-3
                    py-2
                    mb-3
                    text-sm
                    leading-tight
                    text-gray-700
                    border
                    rounded
                    shadow
                    appearance-none
                    focus:outline-none focus:shadow-outline
                  "
                  id="c_password"
                  type="password"
                  placeholder="******************"
                  required
                />
                <div v-if="this.$v.passwordc.$dirty">
                  <div
                    class="text-xs italic text-red-500 error"
                    v-if="!$v.passwordc.required"
                  >
                    type the same password to make sure
                  </div>
                  <div
                    class="text-xs italic text-red-500 error"
                    v-if="!$v.passwordc.sameAs"
                  >
                    Ooops ! It is not the same password you've typed.
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-6 text-center">
              <button
                @click.prevent="submit"
                class="
                  w-full
                  px-4
                  py-2
                  font-bold
                  text-white
                  bg-blue-500
                  rounded-full
                  hover:bg-blue-700
                  focus:outline-none focus:shadow-outline
                "
                type="button"
              >
                Register Account
              </button>
            </div>
            <hr class="mb-6 border-t" />
            <div class="text-center">
              <NuxtLink
                to="forgot"
                class="
                  inline-block
                  text-sm text-blue-500
                  align-baseline
                  hover:text-blue-800
                "
              >
                Forgot Password?
              </NuxtLink>
            </div>
            <div class="text-center">
              <NuxtLink
                to="login"
                class="
                  inline-block
                  text-sm text-blue-500
                  align-baseline
                  hover:text-blue-800
                "
                href="./index.html"
              >
                Already have an account? Login!
              </NuxtLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  components: { validationMixin },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(9),
    },
    passwordc: {
      required,
      sameAs: sameAs('password'),
    },
  },
  data() {
    return {
      email: '',
      password: '',
      passwordc: '',
      token: '',
      result: true,
      show: false,
      errors: '',
    }
  },

  methods: {
    async submit() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        console.log('Error')
      } else {
        // if valid form
        try {
          // const token = await this.$recaptcha.execute('login')
          // console.log('ReCaptcha token:', token)
          //this.token = token
          await this.$axios
            .$post('register', {
              email: this.email,
              password: this.password,
              passwordc: this.passwordc,
            })
            .then((r) => {
              console.log(r.response)
              this.result = true
            })
            .catch((e) => {
              console.log(e.response.data.error)
              this.errors = e.response.data.error
              this.result = false
            })
          console.log(this.result)
          if (this.result === true) {
            await this.$auth.loginWith('local', {
              data: {
                email: this.email,
                password: this.password,
              },
            })
            this.$router.push('/dashboard')
          }
        } catch (e) {
          // console.log(e)
          this.show = false
          this.errors = e
        }
        console.log('Done!')
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
    setPasswordc(value) {
      this.passwordc = value
      this.$v.passwordc.$touch()
    },
  },
}
</script>
