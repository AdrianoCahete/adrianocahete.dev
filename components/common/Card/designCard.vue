<template>
  <transition name="slide-fade">
    <section
      class="card-design"
      :class="{ isMinor: isMinor, selfMade: isSelfMade }"
      :data-theme="cardTheme ? 'theme-' + cardTheme : ''"
      :style="'animation-delay:' + animationDelay + 's'"
    >
      <a :href="url" target="_blank" rel="nofollow,noopener,external">
        <section class="cardContent">
          <h3 class="cardTitle">
            <span v-if="isMinor">[Minor] </span>
            {{ title }}
          </h3>
          <section v-if="logoImage">logoImage</section>
          <h4 class="cardSubTitle">
            {{ subtitle }}
          </h4>
          <h5 v-if="info" class="cardInfo">
            {{ info }}
          </h5>
        </section>
      </a>
    </section>
  </transition>
</template>

<script>
export default {
  components: {},

  props: {
    animationDelay: {
      type: String,
      required: false,
      default: "0",
    },
    cardTheme: {
      type: String,
      required: false,
      default: "",
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    logoImage: {
      type: String,
      required: false,
      default: "",
    },
    subtitle: {
      type: String,
      required: true,
      default: "",
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    info: {
      type: String,
      required: false,
      default: "",
    },
    url: {
      type: String,
      required: false,
      default: "",
    },
    tooltip: {
      type: String,
      required: false,
      default: "",
    },
    isMinor: {
      type: Boolean,
      required: false,
      default: false,
    },
    isSelfMade: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-design {
  display: flex;
  flex-direction: column;
  height: 12vw;
  width: 25vw;
  max-height: 200px;
  max-width: 300px;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
  padding: 1.2rem;
  border-radius: 5px;
  text-align: center;
  transition: all 0.5s ease-in-out;
  background-color: #e3e3e3;
  // color: inherit;

  a {
    height: 100%;
    width: 100%;
    text-decoration: none;
  }

  &:not(.noAnimation) {
    opacity: 0;
    animation: fadeIn 0.5s ease-in;
    animation-fill-mode: forwards;
  }

  .cardContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .cardSubTitle,
  .cardInfo {
    font-weight: 300;
  }

  .cardTitle {
    font-weight: 500;
  }

  .cardSubTitle {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  .cardInfo {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .cardItems {
    list-style-type: none;
    padding-left: 0.5rem;

    li {
      &::before {
        content: "▹";
        color: var(--subtitleColor);
      }
    }
  }

  &.isMinor {
    .cardTitle {
      font-size: 1.8rem;
    }

    .cardSubTitle {
      font-size: 1.5rem;
    }

    .cardInfo {
      font-size: 1.3rem;
    }
  }

  &:hover {
    box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.7);
    transition: all 0.7s ease-in-out;
    transform: scale(1.02);
    z-index: 2;
  }

  &[data-theme$="1"] {
    background: var(--colorHighlight-100);
    color: #000;
  }

  &[data-theme$="2"] {
    background: var(--colorHighlight-200);

    // a {
    //   color: #FFFFFF;
    // }
  }

  &[data-theme$="3"] {
    background: var(--colorHighlight-300);
    color: #000;
  }

  &[data-theme$="4"] {
    background: var(--colorHighlight-400);
    color: #000;
  }
}

// Tablet
@media (max-width: 670px) {
  .card-design {
    max-width: 100%;
    width: calc(50% - 1rem);
    height: 20vh;
    max-height: 30%;
    margin-bottom: 2rem;
  }
}

// Phone
@media (max-width: 490px) {
  .card-design {
    max-width: 100%;
    width: 100%;
    height: 20vh;
    max-height: 30%;
    margin-bottom: 2rem;
  }
}
</style>
