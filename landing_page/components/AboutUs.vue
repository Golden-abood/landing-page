<template>
  <div class="container overflow-hidden">
    <div
      class="grid grid-cold-1 lg:grid-cols-3 justify-items-center gap-y-10 relative"
    >
      <CardsAbout
        :title="$t('aboutSection.one.title')"
        :isActive="false"
        icon="/images/chat-square-heart.svg"
        :text="$t('aboutSection.one.text')"
        data-aos="fade-left"
      />
      <CardsAbout
        :title="$t('aboutSection.two.title')"
        :isActive="true"
        icon="/images/stars.svg"
        :text="$t('aboutSection.two.text')"
        data-aos="fade-down"
        class="hidden lg:block"
      />
      <CardsAbout
        :title="$t('aboutSection.two.title')"
        :isActive="true"
        icon="/images/stars.svg"
        :text="$t('aboutSection.two.text')"
        data-aos="fade-right"
        class="lg:hidden"
      />
      <CardsAbout
        :title="$t('aboutSection.three.title')"
        :isActive="false"
        icon="/images/bullseye.svg"
        :text="$t('aboutSection.three.text')"
        data-aos="fade-right"
        class="hidden lg:block"
      />
      <CardsAbout
        :title="$t('aboutSection.three.title')"
        :isActive="false"
        icon="/images/bullseye.svg"
        :text="$t('aboutSection.three.text')"
        data-aos="fade-left"
        class="lg:hidden"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const dir = inject('dir')
</script>

<style scoped></style>
