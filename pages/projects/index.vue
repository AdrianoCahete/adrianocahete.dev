<template>
  <section class="content">
    <section id="projects" class="section">
      <p class="description">
        Some projects and experiments that I directly made or being part of.
      </p>
      <section class="grid">
        <designCard
          animation-delay="0.1"
          title="phpMyAdmin Website"
          subtitle="Redesign and brand update to phpMyAdmin project"
          url="https://github.com/phpmyadmin/website/pull/137"
          tooltip="phpMyAdmin @ Github"
          data-theme="3"

          :items="[
            {name: 'Update brand to 2020'},
            {name: 'Redesign site to have a more up-to-date visuals'},
          ]"
        />

        <designCard
          animation-delay="0.3"
          title="This portfolio"
          subtitle="Made with NuxtJS (Vue), with constant updates and auto deployed on Netlify"
          url="https://github.com/AdrianoCahete/adrianocahete.dev"
          tooltip="adrianocahete.dev @ Github"
          data-theme="1"

          :items="[
            {name: 'Auto-deploy from Github'},
            {name: 'Scoped styles'},
            {name: 'Vue Components'},
            {name: 'CSS Custom Properties'},
            {name: 'Works offline'},
          ]"
        />
        <!--
          logo-image="teste"
          card-theme="1"
        -->

        <designCard
          animation-delay="0.5"
          title="Webfont Generator CLI"
          subtitle="Easy-to-use, pre-configured tool to generate webfont icon kits from a .svg files"
          url="https://github.com/AdrianoCahete/webfont-generator-cli"
          tooltip="webfont-generator-cli @ Github"
          data-theme="2"

          :items="[
            {name: 'Fixed problems from original repository'},
            {name: 'Updated documentation to match the current implementation'}
          ]"
        />

        <designCard
          animation-delay="0.7"
          title="Simple Badges"
          subtitle="Simple Badges for Github profiles"
          url="https://github.com/AdrianoCahete/SimpleBadges"
          tooltip="Simple Badges @ Github"
          data-theme="4"

          :items="[
            {name: 'Some generic SVG badges to use in Github README'}
          ]"
        />

        <designCard
          animation-delay="0.9"
          title="Better Adrena"
          subtitle="Chrome/Firefox extension to add new functionalities to a Brazilian forum"
          url="https://github.com/AdrianoCahete/AdrenalineLight"
          tooltip="BetterAdrena @ Github"
          data-theme="3"

          :items="[
            {name: 'Applied some styles to make the UI more readable'},
            {name: 'Added more styles and js content to create some useful features'}
          ]"
        />

        <designCard
          animation-delay="1"
          title="RocketChat"
          subtitle="Made some Product Design decisions, updated the stylesheet architecture and made some small UI fixes."
          url="https://github.com/RocketChat/Rocket.Chat/"
          tooltip="RocketChat @ Github"
          data-theme="1"

          :items="[
            {name: 'Built and shipped the Ui for ChatOps feature'},
            {name: 'A few small fixes for UI issues'},
            {name: 'Better organization for stylesheets/css variables'},
          ]"
        />

        <designCard
          animation-delay="1.3"
          title="Detect.JS"
          subtitle="Keeping the library updated with the latest browsers at the time"
          url="https://github.com/darcyclarke/Detect.js"
          tooltip="Detect.JS @ Github"
          data-theme="2"

          :items="[
            {name: 'Added detection of Edge, Opera, Internet Explorer 10/11 and some mobile browsers'},
            {name: 'Added detection of some new Operational Systems'}
          ]"
        />

        <designCard
          animation-delay="1.5"
          title="Google Chrome Lighthouse"
          subtitle="Automated auditing, performance metrics, and best practices for the web."
          url="https://github.com/GoogleChrome/lighthouse/blob/468c10bb9df7ded215b7a3c47e23f48c1af656f7/changelog.md#new-contributors-24"
          tooltip="Google Chrome Lighthouse @ Github"
          data-theme="4"

          :items="[
            {name: 'Fixes on CLI version on Windows OS'}
          ]"
          self-made
        />
      </section>
      <!-- <a href="https://github.com/GoogleChrome/lighthouse/pull/1307" /> -->
    </section>
  </section>
</template>

<script>
import designCard from '~/components/common/Card/designCard'

export default {
  components: {
    designCard
  },
  head () {
    return {
      title: 'Projects'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/styles/components/section.styl'

.description {
  margin-top: 1rem;
  margin-bottom: @margin-top;
}

.grid {
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 670px) {
  .grid {
    justify-content: center;
  }
}
</style>
