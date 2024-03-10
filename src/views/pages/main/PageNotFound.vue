<template>
  <section class="section">
    <div class="container">
      <h1 class="title sign-word">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </h1>
      <h2 class="subtitle">Ой. Ой-ёй-ёй.</h2>
      <div class="message">
        <p> Страница, которую вы ищете не найдена. </p>
        <p>Возможно, она переехала в другой раздел или была
          удалена. Попробуйте посетить
          <router-link class="link" to="/">главную страницу</router-link>
          или поискать ее в нашем
          <router-link class="link" to="/catalog/">каталоге</router-link>
          .
        </p>
      </div>

    </div>
  </section>
  <teleport to="#app">
    <div class="torch"></div>
    <div class="overlay"></div>
  </teleport>
</template>

<script lang="ts">
import breadcrumbs from 'src/views/components/sections/breadcrumbs.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    breadcrumbs,
  },
  name: 'PageNotFound',
  methods: {
    handleMouseMove(event: MouseEvent) {
      const { clientY, clientX } = event
      const torch = document.body.querySelector('.torch') as HTMLElement

      if (torch) {
        torch.style.top = clientY + 'px'
        torch.style.left = clientX + 'px'
      }
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove, {
      passive: true,
    })
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove)
  },
})
</script>

<style lang="scss" scoped>
@use 'src/styles/shared/index' as *;

.sign-word {
  color: #e6e6e6;
  text-shadow: 0 0 12px lightskyblue,
  2px 2px 14px mediumpurple,
  4px 4px 20px darkseagreen;

  span {
    animation: neon 3.9s linear 0.1s infinite;
  }
}

@keyframes neon {
  78% {
    color: inherit;
    text-shadow: inherit;
  }
  79% {
    color: black;
  }
  80% {
    text-shadow: none;
  }
  81% {
    color: inherit;
    text-shadow: inherit;
  }
  82% {
    color: black;
    text-shadow: none;
  }
  83% {
    color: inherit;
    text-shadow: inherit;
  }
  92% {
    color: black;
    text-shadow: none;
  }
  92.5% {
    color: inherit;
    text-shadow: inherit;
  }
}

.overlay {
  position: fixed;
  z-index: 499;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  box-shadow: inset 0 0 100px rgba(black, 0.7);
  //border-radius: 50%;
  pointer-events: none;
}

.section {
  @include section;
  height: clamp(50vh, 480px, 100vh);
  text-align: center;
  line-height: 1.4;
}

.title {
  font-size: 160px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.subtitle {
  font-size: 40px;
  margin-bottom: 1em;
}

.message {
  margin: 0 auto;
  font-size: 20px;
  letter-spacing: 0.01em;
  max-width: 764px;

  .link {
    color: darkseagreen;
    font-size: inherit;
  }

  p {
    margin-bottom: 0.5em;
  }
}

.torch {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 501;
  width: 480px;
  height: 480px;
  box-shadow: 0 0 0 100vw rgba(black, 0.7);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  &::before {
    content: '';
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: inset 0 0 40px 2px rgba(black, 0.5),
    0 0 20px 4px rgba(black, 0.25);
  }
}
</style>
