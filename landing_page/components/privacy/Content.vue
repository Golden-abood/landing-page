<template>
  <div class="mt-16">
    <div class="text-center text-primary">
      <h1 class="text-3xl font-bold text-primary-light">
        {{ $t('privacy.title') }}
      </h1>
      <p class="text-2xl mt-5">{{ $t('privacy.title-2') }}</p>
    </div>
    <div class="mt-16 max-w-[90%] md:max-w-[70%] mx-auto pb-16">
      <div class="text-xl text-primary">
        <span class="font-bold text-xl text-primary-light">
          {{ $t('privacy.preface') }}</span
        >
        <p class="mt-3 text-lg">
          {{ $t('privacy.description-line-1') }}
          <nuxt-link to="/" class="text-primary-light text-sm font-bold">{{
            $t('privacy.link')
          }}</nuxt-link>
          {{ $t('privacy.description-line-2') }}
        </p>
      </div>
      <div v-for="(item, index) in items">
        <div class="mt-10">
          <p class="text-primary-light text-xl font-bold">
            {{ index + 1 }}.
            {{ item.title }}
          </p>
          <div class="mt-3 text-primary text-base font-medium leading-9">
            <p>{{ item.descriptionLineOne }}</p>
            <p>{{ item.descriptionLineTwo }}</p>
            <p
              :class="index === 0 ? 'text-primary-light text-sm font-bold' : ''"
            >
              {{ item.descriptionLineThree }}
            </p>
            <p>{{ item.descriptionLineFour }}</p>
            <p>{{ item.descriptionLineFive }}</p>
            <p>{{ item.descriptionLineSix }}</p>
            <p>{{ item.descriptionLineSeven }}</p>
            <p>{{ item.descriptionLineEight }}</p>
            <p>{{ item.descriptionLineNine }}</p>
            <p>{{ item.descriptionLineTen }}</p>
            <p>{{ item.descriptionLine11 }}</p>
            <p>{{ item.descriptionLine12 }}</p>
            <p>{{ item.descriptionLine13 }}</p>
            <p>{{ item.descriptionLine14 }}</p>
            <p>{{ item.descriptionLine15 }}</p>
            <p>{{ item.descriptionLine16 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <TheFooter />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const items = computed(() => {
  return [
    {
      title: t('privacy.titles.one'),
      descriptionLineOne: t('privacy.descriptions.one.lineOne'),
      descriptionLineTwo: t('privacy.descriptions.one.lineTwo')
    },
    {
      title: t('privacy.titles.two'),
      descriptionLineOne: t('privacy.descriptions.two.lineOne'),
      descriptionLineTwo: t('privacy.descriptions.two.lineTwo'),
      descriptionLineThree: t('privacy.descriptions.two.lineThree'),
      descriptionLineFour: t('privacy.descriptions.two.lineFour')
    },
    {
      title: t('privacy.titles.three'),
      descriptionLineOne: t('privacy.descriptions.three.lineOne'),
      descriptionLineTwo: t('privacy.descriptions.three.lineTwo'),
      descriptionLineThree: t('privacy.descriptions.three.lineThree')
    },
    {
      title: t('privacy.titles.four'),
      descriptionLineOne: t('privacy.descriptions.four.lineOne'),
      descriptionLineTwo: t('privacy.descriptions.four.lineTwo'),
      descriptionLineThree: t('privacy.descriptions.four.lineThree'),
      descriptionLineFour: t('privacy.descriptions.four.lineFour'),
      descriptionLineFive: t('privacy.descriptions.four.lineFive'),
      descriptionLinesix: t('privacy.descriptions.four.lineSix'),
      descriptionLineSeven: t('privacy.descriptions.four.lineSeven'),
      descriptionLineEight: t('privacy.descriptions.four.lineEight'),
      descriptionLineNine: t('privacy.descriptions.four.lineNine'),
      descriptionLineTen: t('privacy.descriptions.four.lineTen'),
      descriptionLine11: t('privacy.descriptions.four.line11'),
      descriptionLine12: t('privacy.descriptions.four.line12'),
      descriptionLine13: t('privacy.descriptions.four.line13'),
      descriptionLine14: t('privacy.descriptions.four.line14'),
      descriptionLine15: t('privacy.descriptions.four.line15'),
      descriptionLine16: t('privacy.descriptions.four.line16')
    },
    {
      title: t('privacy.titles.five'),
      descriptionLineOne: t('privacy.descriptions.five.lineOne'),
      descriptionLineTwo: t('privacy.descriptions.five.lineTwo'),
      descriptionLineThree: t('privacy.descriptions.five.lineThree')
    },
    {
      title: t('privacy.titles.six'),
      descriptionLineOne: t('privacy.descriptions.six.lineOne'),
      descriptionLineTwo: t('privacy.descriptions.six.lineTwo'),
      descriptionLineThree: t('privacy.descriptions.six.lineThree'),
      descriptionLineFour: t('privacy.descriptions.six.lineFour'),
      descriptionLineFive: t('privacy.descriptions.six.lineFive'),
      descriptionLineSix: t('privacy.descriptions.six.lineSix')
    },
    {
      title: t('privacy.titles.seven'),
      descriptionLineOne: t('privacy.descriptions.seven.lineOne'),
      descriptionLineTwo: t('privacy.descriptions.seven.lineTwo'),
      descriptionLineThree: t('privacy.descriptions.seven.lineThree'),
      descriptionLineFour: t('privacy.descriptions.seven.lineFour'),
      descriptionLineFive: t('privacy.descriptions.seven.lineFive'),
      descriptionLineSix: t('privacy.descriptions.seven.lineSix')
    },
    {
      title: t('privacy.titles.eight'),
      descriptionLineOne: t('privacy.descriptions.eight.lineOne')
    },
    {
      title: t('privacy.titles.nine'),
      descriptionLineOne: t('privacy.descriptions.nine.lineOne')
    },
    {
      title: t('privacy.titles.ten'),
      descriptionLineOne: t('privacy.descriptions.ten.lineOne'),
      descriptionLineTwo: t('privacy.descriptions.ten.lineTwo')
    }
  ]
})
</script>

<style lang="scss" scoped></style>
