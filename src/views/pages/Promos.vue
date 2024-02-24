<template>
  <section class="posts">
    <div class="posts-container">
      <h1 class="posts-title">Акции и предложения</h1>
      <div class="posts-list">
        <template v-if="isLoading">
          <article v-for="(post,index) in postsLimit" :key="index" class="post">
            <h2 class="post-title _loading"></h2>
            <div class="post-body _loading"></div>
            <div class="post-button _loading"></div>
          </article>
        </template>
        <template v-else>
          <article v-for="post in posts" :key="post.id" class="post">
            <h2 class="post-title">{{ post.title }}</h2>
            <div class="post-body">{{ post.body }}</div>
            <router-link class="post-button" to="/promo/test">
              Подробнее
            </router-link>
          </article>
        </template>
      </div>

    </div>
  </section>
</template>

<script lang="ts">
import breadcrumbs from 'src/views/components/sections/breadcrumbs.vue'
import axios from 'axios'

interface iPost {
  id: string | number,
  body: string,
  //url: string,
}

export default {
  components: {
    breadcrumbs,
  },
  data: function () {
    return {
      isLoading: true,
      posts: [] as iPost[],
      postsLimit: 24,
    }
  },
  mounted() {
    setTimeout(this.fetchPosts, 1000)
  },
  methods: {
    async fetchPosts() {
      try {
        this.isLoading = true
        const response = await axios.get(`/api/posts/?_limit=${ this.postsLimit }`)
        console.log(response)
        this.posts = response.data as iPost[]
        //this.posts = this.posts.map((post) => post.url = `/promo/${ post.id }`)
      } catch (error) {
        console.log(error)
      } finally {
        this.isLoading = false
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.posts {
  @include section;

  &-container {
    @include container;
  }

  &-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 16px;
    row-gap: 16px;
    @include mediaTabletM {
      grid-template-columns: repeat(3, 1fr);
    }
    @include mediaTabletL {
      grid-template-columns: repeat(4, 1fr);
      column-gap: 20px;
      row-gap: 20px;
    }
  }

  &-title {
    @include h1;
    margin-bottom: 1em;
  }
}

.post {
  @include flex($d: column);
  row-gap: 16px;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.05);
  border: 1px solid #f0f0f0;

  &-title {
    font-size: 18px;
    line-height: 1.25;
    font-weight: 600;

    &._loading {
      height: 18px * 1.25;
      border-radius: 8px;
      @include loadingPlaceholder;
    }
  }

  &-body {
    font-size: 16px;
    line-height: 1.25;

    &._loading {
      border-radius: 8px;
      height: 16px * 1.25 * 4;
      @include loadingPlaceholder;
    }
  }

  &-button {
    &._loading {
      height: 20px;
      @include loadingPlaceholder;
    }
  }
}


</style>
