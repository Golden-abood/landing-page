<template>
  <div
    :class="$props.isActive ? 'activeCard ' : ''"
    class="flex-col justify-center text-center max-w-[80%] h-full border-solid border-[3px] border-primary rounded-[20px] p-5"
  >
    <img class="mx-auto pt-11" :src="$props.icon" alt="" />
    <h3
      :class="$props.isActive ? 'text-[#fff]' : 'text-primary'"
      class="relative before:bg-secondary before:absolute before:left-[50%] before:bottom-[-35%] before:md:bottom-[-40%] before:translate-x-[-50%] before:h-[8px] before:w-[30px] before:rounded-[20px] text-xl font-bold pt-4"
    >
      {{ $props.title }}
    </h3>
    <p
      :class="$props.isActive ? 'text-[#fff]' : 'text-primary'"
      class="pt-12 pb-[50px] text-base font-normal"
    >
      {{ $props.text }}
    </p>
  </div>
</template>

<script setup>
defineProps(['text', 'icon', 'title', 'isActive'])
</script>

<style lang="scss" scoped></style>
