<template>
  <section :class="$device.isMobile ? 'beLinkMobile' : 'beLink'">
    <!-- :style="'animation-delay:' + animationDelay + 's'" -->
    <a
      v-if="!$device.isMobile"
      :href="'https://www.behance.net/gallery/' + projectId + '/' + projectName"
      target="_blank"
      rel="nofollow,noopener,external"
      :title="displayName"
    >
      <img
        v-if="!$nuxt.isOffline"
        :src="'../behance/projects/' + projectId + '.png'"
        :alt="displayName"
      />
      <span class="projectName">
        {{ displayName }}
      </span>
    </a>

    <a
      v-if="$device.isMobile"
      :href="'https://www.behance.net/gallery/' + projectId + '/' + projectName"
      target="_blank"
      rel="nofollow,noopener,external"
    >
      <Icon icon="behance" :title="displayName" class="cardLink-Item" /><span>{{
        displayName
      }}</span>
    </a>
  </section>
</template>

<script>
import Icon from "~/components/common/Icon";

export default {
  components: {
    Icon,
  },

  props: {
    animationDelay: {
      type: String,
      required: false,
      default: "0",
    },
    projectId: {
      type: String,
      required: true,
      default: "",
    },
    projectName: {
      type: String,
      required: true,
      default: "",
    },
    displayName: {
      type: String,
      required: true,
      default: "",
    },
    projectDate: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.beLink {
  display: flex;
  opacity: 0;
  width: 280px;
  height: auto;
  border: 2px solid var(--scrollbarColor);
  margin-right: 1rem;
  margin-bottom: 1rem;

  a {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 213px; // TODO: Get from image
    text-decoration: none;
    color: #ffffff;
    position: relative;

    > img {
      height: inherit;
      width: inherit;
      text-align: center;
    }

    .projectName {
      opacity: 0;
      transition: ease opacity 0.5s;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }

    &:hover {
      // TODO: Fix on Chrome
      .projectName {
        opacity: 1;
        transition: ease opacity 0.5s;
      }
    }
  }

  .projectName {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    text-shadow: 1px 1px 2px black, 0 0 1rem black, 0 0 0.2rem black;
    text-decoration: none;
    text-align: center;
    padding: 0 10%;
  }
}

.beLinkMobile {
  opacity: 0;
  animation: fadeIn 0.5s ease-in;
  animation-fill-mode: forwards;

  a {
    display: inline-block;
    padding: 1vh 0;

    > img {
      display: none;
    }
  }

  &:hover {
    a {
      text-decoration-color: red;
    }
  }
}

.beLink,
.beLinkMobile {
  animation: fadeIn 0.5s ease-in;
  animation-fill-mode: forwards;
}
</style>
