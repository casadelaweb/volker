<template>
  <section class="post">
    <div class="post-container">
      <h1 class="post-title">{{ title }}</h1>
      <div class="post-body" v-html="body"></div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data: function () {
    return {
      title: 'Post title',
      body: `
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aperiam atque culpa distinctio dolorem doloremque, doloribus impedit in iusto laudantium nostrum nulla optio quasi, repellat sunt suscipit tenetur ullam, veniam! Alias aliquam aut beatae culpa delectus dolorem est explicabo facere fuga illo ipsa iste labore laboriosam maxime, nemo nihil officia perspiciatis quas quasi quos saepe sequi sint soluta tempora veniam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quis.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi asperiores blanditiis dicta eius ipsam libero minus molestiae repellat sunt?</p>
<h2>Lorem ipsum dolor sit amet.</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam magnam nam officia pariatur velit? Ad alias aut autem deleniti eaque eos exercitationem inventore ipsum iure laborum libero, maxime nihil nobis officia pariatur porro praesentium quam recusandae sed, tempore, ullam veniam.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam at aut dolorem earum eveniet laudantium magnam nostrum provident, soluta! Adipisci cum eius et harum iusto officia perspiciatis vel velit.</p>
<p>Lorem ipsum dolor sit amet, <a href="mailto:test@test.test">consectetur</a> adipisicing elit. Consectetur cupiditate error est ipsa ipsum libero neque perferendis quia repudiandae rerum.</p>
<h3>Lorem ipsum dolor sit amet, consectetur adipisicing.</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur corporis cum dolores doloribus eos, error ex fuga id numquam placeat ratione repellendus sunt, totam ut vitae. Ab aliquam aperiam architecto consequuntur distinctio dolorem ducimus est exercitationem harum hic inventore ipsa molestiae, nemo nostrum nulla quidem quo velit voluptates?</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut autem dolor nam quaerat soluta voluptas? Debitis deserunt, error ipsum magni nulla provident quo tempore! Necessitatibus.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita harum inventore libero perspiciatis reiciendis sed tempora unde. Aliquid aperiam asperiores delectus incidunt iste molestiae nihil, quaerat quia quos. Architecto autem deserunt eligendi error fuga hic illum impedit laboriosam minus molestiae molestias non, nulla qui, quod reiciendis, repudiandae sapiente similique voluptatum!</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur nam optio rem voluptate. Adipisci, omnis, voluptatibus! Debitis distinctio magni nihil.</p>
`
    }
  },
})
</script>

<style lang="scss">
@use 'src/styles/shared' as *;

.post {
  @include section;

  &-container {
    @include container;
  }

  &-title {
    @include h1;
    margin-bottom: 0.5em;
  }

  &-body {
    font-size: 16px;
    letter-spacing: 0.01em;

    h2, h3, h4, h5, h6 {
      margin: 1em 0 0.5em;
    }

    h2 {
      font-size: 32px;
      font-weight: 600;
    }

    h3 {
      font-size: 24px;
      font-weight: 600;
    }

    p, ul, ol {
      margin: 1em 0;
    }

    a {
      @include addBottomLineOnHover($bg: dodgerblue);
      color: dodgerblue;
    }
  }
}
</style>
