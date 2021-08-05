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
              @click="addGroup"
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
                >{{ item.displayed }}
              </span>
              <span>
                <i
                  class="h-6 w-6 fa fa-envelope-o fill-current text-gray-700"
                  aria-hidden="true"
                ></i>
                <span
                  @click="selectGroup(item)"
                  class="curor-pointer text-gray-900"
                  >{{ item.title }}
                </span>
              </span>
              <div class="float-right flex">
                <PencilIcon
                  size="1.1x"
                  class="mr-1"
                  @click="
                    edit = index
                    whatedit = item.title
                  "
                />
                <TrashIcon
                  size="1.1x"
                  class="text-red-400"
                  @click="delGroup(item.id, index)"
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
                  @click="editGroup(item.id, index)"
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
                {{ currentGroup.title }}
              </div>
              <span v-if="currentGroup.title !== ''" class="flex">
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
            <div class="text-gray-400 text-xs font-italic">
              {{ currentGroup.key }}
              <span
                @click="copyKey(currentGroup.key)"
                class="
                  cursor-pointer
                  rounded
                  p-1
                  bg-purple-400
                  hover:bg-purple-600
                  text-white
                "
              >
                Copy key
              </span>
              <div class="mt-1">
                <span class="font-bold">Displayed:</span>
                {{ currentGroup.counter }} <span class="font-bold">Faqs:</span>
                {{ faqs.length }}
              </div>
            </div>
          </div>
          <div class="pt-3 pb-4">
            <div
              v-if="currentGroup.title === ''"
              class="block bg-white py-3 border-t"
            >
              <div class="px-4 py-2 flex flex-1 justify-between mr-4">
                Please select a group
              </div>
            </div>
            <div
              v-if="currentGroup.title !== '' && faqs.length === 0"
              class="block bg-white py-3 border-t mr-6"
            >
              <div class="px-4 py-2 flex flex-1 justify-between">
                Now add some faq entries
                <span
                  class="
                    cursor-pointer
                    rounded
                    p-1
                    bg-purple-400
                    hover:bg-purple-600
                    text-white
                  "
                  @click="addFaq"
                  ><PlusIcon size="1.3x" class="text-white"
                /></span>
              </div>
            </div>
            <draggable @change="faqDrop()" :list="faqs">
              <ul
                v-for="(item, index) in faqs"
                :key="item.id"
                :index="index"
                class="
                  block
                  bg-white
                  py-3
                  border-t
                  shadow-lg
                  pt-4
                  m-2
                  mr-6
                  rounded-lg
                  flex-grow
                "
              >
                <li
                  :key="item"
                  v-if="faqedit !== index"
                  class="font-semibold text-gray-900 px-4 py-2"
                >
                  {{ item.question }}
                  <div class="cursor-pointer float-right flex">
                    <PencilIcon
                      size="1.1x"
                      class="mr-1"
                      @click="
                        faqedit = index
                        currentFaq = item
                      "
                    />
                    <TrashIcon
                      size="1.1x"
                      class="cursor-pointer text-red-400"
                      @click="delFaq(item.id, index)"
                    />
                  </div>
                  <p class="px-4 py-2 text-sm font-semibold text-gray-700">
                    {{ item.answer }}
                  </p>
                </li>

                <div
                  v-if="faqedit === index"
                  class="font-semibold text-gray-900 px-4 py-2 bg-gray-100"
                >
                  <label>Question</label>
                  <textarea
                    v-model="currentFaq.question"
                    class="w-full border-gray-600 p-3"
                  >
                  </textarea>
                  <label>Answer</label>
                  <textarea
                    v-model="currentFaq.answer"
                    class="w-full border-gray-600 mt-2 p-3"
                  >
                  </textarea>
                  <div class="flex mt-2 float-right">
                    <button
                      @click="editFaq(item.id, index)"
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
                      @click="faqedit = null"
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
                <!-- faqedit -->
              </ul>
            </draggable>
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
  ThumbUpIcon,
  ThumbDownIcon,
} from '@vue-hero-icons/outline'

import draggable from 'vuedraggable'

export default {
  components: {
    TrashIcon,
    PencilIcon,
    BanIcon,
    CheckIcon,
    PlusIcon,
    ShareIcon,
    DotsHorizontalIcon,
    ThumbUpIcon,
    ThumbDownIcon,
    draggable,
  },

  middleware: 'auth',
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
      options: {
        dropzoneSelector: 'ul',
        draggableSelector: 'li',
        handlerSelector: null,
        reactivityEnabled: true,
        multipleDropzonesItemsDraggingEnabled: false,
        showDropzoneAreas: true,
      },
      edit: null,
      faqedit: null,
      whatedit: null,
      currentFaq: {},
      currentGroup: { title: '' },
      faqGroups: [],
      faqs: [],
      entry_date: new Date(),
      undate: Math.round(new Date().getTime() / 1000),
    }
  }, // data
  methods: {
    faqDrop() {
      let treeorder = []
      treeorder = this.faqs.map((p) => p.id)
      this.$axios.post('/faqreorder', { tree: treeorder }).then((response) => {
        console.log(response)
      })
      // console.log(treeorder)
    },
    selectGroup(item) {
      this.currentGroup = item
      this.readFaqs()
      this.faqedit = null
    },
    // -------------------------------------
    copyKey(key) {
      navigator.clipboard.writeText(key)
      this.$toast.success('Key copied to clipboard')
    },
    // -------------------------------------
    async readFaqs() {
      // this.$axios.setToken(this.$auth.getToken('local'))
      await this.$axios
        .post('/faqgrouplist', { id: this.currentGroup.id })
        .then((response) => {
          this.faqs = []
          this.faqs.push(...response.data.result)
          // this.cleaning()
          console.log(response.data.result)
          this.$toast.success(this.currentGroup.title + "'s Faqs loaded")
        })
        .finally(function () {
          // always executed
        })
    },
    // -------------------------------------
    async readFaqgroups() {
      // this.$axios.setToken(this.$auth.getToken('local'))
      await this.$axios
        .get('/faqgroup')
        .then((response) => {
          this.faqGroups = []
          this.faqGroups.push(...response.data.result.data)
          // this.cleaning()
          console.log(response.data.result.data)
          this.$toast.success('Faq Groups loaded')
        })
        .finally(function () {
          // always executed
        })
    },
    //--------------------------------------
    async addGroup() {
      await this.$axios
        .post('/addgroup')
        .then((response) => {
          this.faqGroups.unshift(response.data.result)
        })
        .finally(function () {
          // always executed
        })
    },
    // ------------------------------------
    async delGroup(id, index) {
      await this.$axios.delete('/delgroup/' + id).then((response) => {
        this.faqGroups.splice(index, 1)
        this.$toast.success('Group deleted.')
      })
    },
    // -------------------------------------
    async editGroup(id, index) {
      await this.$axios
        .put('/editgroup/' + id, { title: this.whatedit })
        .then((response) => {
          this.$toast.success('Entry edited.')
          this.edit = null
          this.faqGroups[index].title = this.whatedit
        })
        .catch((e) => {
          this.$toast.error('Sorry,Could not update this entry...' + e.message)
        })
    },
    // -------------------------------------
    async addFaq() {
      await this.$axios
        .post('/addfaq', { group_id: this.currentGroup.id })
        .then((response) => {
          this.faqs.unshift(response.data.result)
        })
        .finally(function () {
          // always executed
        })
      this.$toast.success('Another faq added !')
      this.what = null
    },
    // ------------------------------------
    async delFaq(id, index) {
      await this.$axios.delete('/delfaq/' + id).then((response) => {
        this.faqs.splice(index, 1)
        this.$toast.success('Faq deleted.')
      })
    },
    async editFaq(id, index) {
      await this.$axios
        .put('/editfaq/' + id, {
          question: this.currentFaq.question,
          answer: this.currentFaq.answer,
        })
        .then((response) => {
          this.$toast.success('Faq edited.')
          this.faqedit = null
          this.faqs[index].answer = this.currentFaq.answer
          this.faqs[index].question = this.currentFaq.question
        })
        .catch((e) => {
          this.$toast.error('Sorry,Could not update this entry...' + e.message)
        })
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
        id: id,
        data: {
          title: 'untitled',
          description: '',
          order: 0,
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
    this.readFaqgroups()
  },
  created() {},
}
</script>
