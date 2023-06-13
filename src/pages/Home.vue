<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  Home {{ count }}
  <router-link to="/detail">Go to Detail</router-link>
</template>