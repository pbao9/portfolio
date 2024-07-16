<script setup>
import { ref } from 'vue'
import HeaderItem from './components/HeaderItem.vue'
import FooterItem from './components/FooterItem.vue'

// Define reactive states
const counter = ref(0)
const isModalOpen = ref(false)

// Methods to increment the counter and toggle the modal
const incrementCounter = () => {
  counter.value++
}

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <HeaderItem></HeaderItem>
  <main></main>
  <div class="flex flex-col justify-center items-center h-[100vh]">
    <h1 class="font-bold uppercase text-[50px]">Web Portfolio - VUE - TailwindCSS</h1>
    <button @click="incrementCounter" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
      Click Me
    </button>
    <p class="mt-2 text-xl">You have clicked the button {{ counter }} times.</p>
    <button @click="openModal" class="mt-4 px-4 py-2 bg-green-500 text-white rounded">
      Open Modal
    </button>
  </div>

  <!-- Modal -->
  <transition
    enter-active-class="transition-opacity duration-300 ease-out"
    leave-active-class="transition-opacity duration-300 ease-in"
  >
    <div
      v-if="isModalOpen"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white p-6 rounded shadow-lg">
        <h2 class="text-xl font-bold">Modal Title</h2>
        <p class="mt-2">This is the modal content.</p>
        <button @click="closeModal" class="mt-4 px-4 py-2 bg-red-500 text-white rounded">
          Close Modal
        </button>
      </div>
    </div>
  </transition>

  <FooterItem></FooterItem>
</template>

<style scoped>
/* Optional scoped styles */
.transition-opacity {
  opacity: 0;
}

.transition-opacity-enter-active,
.transition-opacity-leave-active {
  opacity: 1;
}
</style>
