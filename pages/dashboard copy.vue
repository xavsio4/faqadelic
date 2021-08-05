<template>
  <!-- component -->
  <div class="h-screen flex flex-col">
    <div class="flex-1 flex overflow-x-hidden">
      <!-- GROUPS -->
      <div class="w-64 p-6 bg-gray-100 overflow-y-auto">
        <nav>
          <span class="flex flex-row">
            <h2
              class="flex-1 font-semibold text-gray-600 uppercase tracking-wide"
            >
              FAQ Groups
            </h2>
            <div
              @click="writeToFirestore"
              class="rounded p-1 bg-blue-400 hover:bg-blue-600"
            >
              <PlusIcon size="1.3x" class="text-white" />
            </div>
          </span>

          <div
            class="mt-3"
            v-for="(item, index) in faqGroups"
            :key="item.id"
            :index="index"
          >
            <span
              v-if="edit !== index"
              class="
                -mx-3
                py-1
                px-3
                text-sm
                font-medium
                flex
                items-center
                justify-between
                bg-gray-200
                rounded-lg
              "
              v-anime="{
                rotate: 360,
                duration: 1500,
                loop: false,
              }"
            >
              <span
                class="
                  inline-block
                  px-4
                  py-1
                  text-center
                  py-1
                  leading-none
                  text-xs
                  font-semibold
                  text-gray-700
                  bg-gray-300
                  rounded-full
                "
                >{{ item.data.displayed }}
              </span>
              <span>
                <i
                  class="h-6 w-6 fa fa-envelope-o fill-current text-gray-700"
                  aria-hidden="true"
                ></i>
                <span
                  @click="selectGroup(item)"
                  class="curor-pointer text-gray-900"
                  >{{ item.data.entry }}
                </span>
              </span>
              <div class="float-right flex">
                <PencilIcon
                  size="1.1x"
                  class="mr-1"
                  @click="
                    edit = index
                    whatedit = item.data.entry
                  "
                />
                <TrashIcon
                  size="1.1x"
                  class="text-red-400"
                  @click="deleteEntry(item.id, index)"
                />
              </div>
            </span>
            <!-- editGroup -->
            <div
              v-if="edit === index"
              class="flex flex-col -mx-3 p-3 bg-gray-200 rounded-lg"
            >
              <input
                class="
                  p-2
                  text-gray-500
                  rounded
                  bbg-white
                  placeholder-gray-300
                  border border-gray-300
                  rounded-md
                  focus:outline-none
                  focus:ring
                  focus:ring-indigo-100
                  focus:border-indigo-300
                "
                type="text"
                v-model="whatedit"
              />
              <div class="flex mt-2 float-right">
                <button
                  @click="editEntry(item.id, index)"
                  class="
                    block
                    px-2
                    py-1
                    bg-indigo-500
                    hover:bg-indigo-700
                    focus:bg-indigo-700
                    text-white
                    rounded
                  "
                >
                  save
                </button>
                <button
                  @click="edit = null"
                  class="
                    ml-2
                    px-2
                    py-1
                    bg-blue-500
                    hover:bg-blue-700
                    focus:bg-blue-700
                    text-white
                    rounded
                  "
                >
                  cancel
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <!-- // GROUPS -->
      <!-- FAQS -->
      <main class="flex flex-1 bg-gray-200">
        <div class="flex-grow">
          <div
            class="
              px-4
              py-2
              items-center
              justify-between
              border-l border-r border-b
            "
          >
            <span class="flex flex-row">
              <div class="flex-1 font-semibold text-gray-600">
                {{ currentGroup.data.entry }}
              </div>
              <span v-if="currentGroup.data.entry !== ''" class="flex">
                <div
                  @click="addFaq"
                  class="
                    cursor-pointer
                    rounded
                    p-1
                    bg-purple-400
                    hover:bg-purple-600
                  "
                >
                  <PlusIcon size="1.3x" class="text-white" />
                </div>
                <div class="ml-2 rounded p-1 bg-gray-300 hover:bg-gray-500">
                  <DotsHorizontalIcon size="1.3x" class="text-white" />
                </div>
              </span>
            </span>
          </div>
          <div class="pt-3 pb-4">
            <div
              v-if="currentGroup.data.entry === ''"
              class="block bg-white py-3 border-t"
              v-anime="{
                translateX: 290,
                direction: 'reverse',
                easing: 'easeInElastic(1, .6)',
              }"
            >
              <div class="px-4 py-2 flex flex-1 justify-between">
                Please select a group
              </div>
            </div>
            <div
              v-if="currentGroup.data.entry !== '' && faqs.length === 0"
              class="block bg-white py-3 border-t"
              v-anime="{
                translateX: 290,
                direction: 'reverse',
                easing: 'easeInElastic(1, .6)',
              }"
            >
              <div class="px-4 py-2 flex flex-1 justify-between">
                Now add some faq entries
              </div>
            </div>
            <a
              v-for="(item, index) in faqs"
              :key="item.id"
              class="
                block
                bg-white
                py-3
                border-t
                shadow-lg
                pt-4
                m-2
                rounded-lg
                flex-grow
              "
              v-anime="{
                translateX: 250,
                direction: 'reverse',
                easing: 'easeInElastic(1, .6)',
                delay: $anime.stagger(300),
              }"
            >
              <span class="text-sm font-semibold text-gray-900 px-4 py-2">{{
                item.data.question
              }}</span>
              <p class="px-4 py-2 text-sm font-semibold text-gray-700">
                {{ item.data.answer }}
              </p>
            </a>
          </div>
        </div>
        <!-- // FAQS -->
        <!-- FAQ -->
      </main>
    </div>
  </div>
</template>
<script>
import {
  TrashIcon,
  PencilIcon,
  PlusIcon,
  BanIcon,
  CheckIcon,
  ShareIcon,
  DotsHorizontalIcon,
} from '@vue-hero-icons/outline'
export default {
  components: {
    TrashIcon,
    PencilIcon,
    BanIcon,
    CheckIcon,
    PlusIcon,
    ShareIcon,
    DotsHorizontalIcon,
  },
  middleware: 'authenticated',
  computed: {
    today() {
      return this.ndate.getDay() + '/' + this.ndate.getMonth()
    },
    year() {
      return this.ndate.getFullYear()
    },
    currentUser() {
      return this.$store.state.user
    },
  },
  data() {
    return {
      edit: null,
      whatedit: null,
      currentGroup: { data: { entry: '' } },
      faqGroups: [],
      faqs: [],
      entry_date: new Date(),
      undate: Math.round(new Date().getTime() / 1000),
    }
  }, // data
  methods: {
    selectGroup(item) {
      this.currentGroup = item
      this.readFaqs()
    },
    // -------------------------------------
    async readFaqs() {
      const faqRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('faqgroup')
        .doc(this.currentGroup.id)
        .collection('faqs')
      try {
        const snapshot = await faqRef.orderBy('order', 'asc').get()
        //  const doc = snapshot.data() //  for one doc
        const doc = snapshot.docs.map((dd) => {
          return { id: dd.id, data: dd.data() }
        }) //   all faqs
        //  const doc2 = snapshot.docs.map((doc) => doc)
        if (!doc) {
          this.$toast.error('Faqs not there !')
          return
        }
        this.faqs = doc
        console.log(this.faqs)
      } catch (e) {
        this.$toast.error('Ooops, the app could not read the faqs...' + e)
      }
    },
    // -------------------------------------
    async addFaq() {
      let docRef = null //  to save the recently added ref
      const groupRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('faqgroup')
        .doc(this.currentGroup.id)
        .collection('faqs')
      try {
        await groupRef
          .add({
            //   set to replace and add to add
            question: 'New question ?',
            answer: 'A new answer',
            entry_date: this.entry_date,
            order: 0,
            lang: 'en',
          })
          .then(function (docid) {
            docRef = docid.id
          })
      } catch (e) {
        this.$toast.error('Ooops, something went wrong ...like...' + e)
      }
      this.faqs.unshift({
        id: docRef,
        data: {
          question: 'New question ?',
          answer: 'A new answer',
          entry_date: this.entry_date,
          order: 0,
          lang: 'en',
        },
      })

      this.$toast.success('Another faq added !')
      this.what = null
    },
    // -------------------------------------
    async editEntry(id, index) {
      console.log(this.whatedit)
      const faqRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('faqgroup')
      try {
        await faqRef.doc(id).update({
          entry: this.whatedit,
          mod_date: this.entry_date,
        })
        this.$toast.success('Entry edited.')
        this.edit = null
        this.faqGroups[index].data.entry = this.whatedit
        this.faqGroups[index].data.mod_date.seconds = Math.round(
          this.entry_date.getTime() / 1000
        )
      } catch (e) {
        this.$toast.error('Sorry,Could not update this entry...' + e)
      }
    },
    // -------------------------------------
    async deleteEntry(id, index) {
      const faqRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('faqgroup')
      try {
        await faqRef.doc(id).delete()
        this.faqGroups.splice(index, 1)
        this.$toast.success('Entry deleted.')
      } catch (e) {
        this.$toast.error('Ooops, Could not delete this entry.')
      }
    }, // delete group entry
    // -------------------------------------
    async writeToFirestore() {
      let docRef = null //  to save the recently added ref
      const faqRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('faqgroup')
      // .doc('journal') // if add
      try {
        await faqRef
          .add({
            //   set to replace and add to add
            entry: 'untitled',
            entry_date: this.entry_date,
            mod_date: this.entry_date,
            uid: this.currentUser.uid,
            displayed: 0,
            lang: 'en',
          })
          .then(function (docid) {
            docRef = docid.id
          })
      } catch (e) {
        this.$toast.error('Ooops, something went wrong ...like...' + e)
      }

      this.faqGroups.unshift({
        id: docRef,
        data: {
          entry: 'untitled',
          entry_date: { seconds: Math.round(this.entry_date.getTime() / 1000) },
          displayed: 0,
          lang: 'en',
        },
      })

      console.log(Math.round(new Date().getTime() / 1000))

      this.$toast.success('Yeaaah, well done !')
      this.what = null
    }, // write firestore
    // -------------------------------------
    async readFromFirestore() {
      const faqRef = this.$fire.firestore
        .collection('users')
        .doc(this.currentUser.uid)
        .collection('faqgroup')
      try {
        const snapshot = await faqRef.orderBy('entry_date', 'desc').get()
        //  const doc = snapshot.data() //  for one doc
        const doc = snapshot.docs.map((dd) => {
          return { id: dd.id, data: dd.data() }
        }) //   all collection
        //  const doc2 = snapshot.docs.map((doc) => doc)
        if (!doc) {
          this.$toast.error('Document not there !')
          return
        }
        this.faqGroups = doc
        // this.docEntries = doc2
        console.log(this.faqGroups)
      } catch (e) {
        this.$toast.error('Ooops, the app could not read a thing...' + e)
      }
    },
    // -------------------------------------
  }, // methods
  mounted() {
    this.readFromFirestore()
  },
}
</script>
