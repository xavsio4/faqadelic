<template>
  <header class="flex flex-shrink-0">
    <div class="flex-shrink-0 px-4 py-3 bg-gray-800 w-64">
      <button class="flex items-center block w-full">
        <img
          class="h-8 w-8 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=144&q=80"
          alt=""
        />
        <span class="ml-4 text-sm font-medium text-white">Monica White</span>
        <svg
          class="ml-auto h-6 w-6 ml-10 stroke-current text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16 10l-4 4-4-4"
            stroke="4A5568"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
    <div class="flex-1 flex bg-gray-700 px-6 items-center justify-between">
      <nav>
        <a
          href="#"
          class="
            hover:bg-gray-600
            rounded-lg
            bg-gray-800
            inline-block
            text-sm
            font-medium
            text-white
            px-3
            py-2
            leading-none
          "
          >FAQ Groups</a
        >
        <a
          href="#"
          class="
            ml-2
            hover:bg-gray-600
            rounded-lg
            inline-block
            text-sm
            font-medium
            text-white
            px-3
            py-2
            leading-none
          "
          >Customers</a
        >
        <a
          href="#"
          class="
            hover:bg-gray-600
            rounded-lg
            inline-block
            text-sm
            font-medium
            text-white
            px-3
            py-2
            leading-none
          "
          >Reporting</a
        >
        <a
          href="#"
          class="
            hover:bg-gray-600
            rounded-lg
            inline-block
            text-sm
            font-medium
            text-white
            px-3
            py-2
            leading-none
          "
          >Manage</a
        >
      </nav>
      <div class="flex items-center">
        <span class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center">
            <i
              class="fa fa-search h-5 w-5 px-2"
              style="color: gray"
              aria-hidden="true"
            ></i>
          </span>
          <input
            class="
              focus:bg-white focus:text-gray-900 focus:placeholder-gray-700
              pl-10
              pr-4
              py-2
              leading-none
              block
              w-full
              bg-gray-900
              rounded-lg
              text-sm
              placeholder-gray-400
              text-white
            "
            placeholder="Search"
          />
        </span>
        <button class="ml-6 text-gray-400 hover:text-gray-200">
          <i
            class="fa fa-bell-o h-5 w-5 fill-current"
            aria-hidden="true"
            style="color: #fff"
          ></i>
        </button>
        <button class="ml-6 text-gray-400 hover:text-gray-200">
          <i
            class="fa fa-question-circle-o h-5 w-5 fill-current"
            aria-hidden="true"
            style="color: #fff"
          ></i>
        </button>
      </div>
    </div>
  </header>
</template>
