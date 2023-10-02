<template>
  <section class="tags">
    <div class="container">
      <h2 class="tags-title">Теги</h2>
      <router-link v-for="tag in tags" :key="tag.id" :title="tag.title" :to="tag.link" class="tag">
        {{ tag.name }}
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  data: function() {
    return {
      tags: [
        {
          id: 'tag-1',
          name: 'популярное',
          link: '#',
          title: 'показать популярные посты',
        },
        {
          id: 'tag-2',
          name: 'актуальное',
          link: '#',
          title: 'показать актуальное посты',
        },
        {
          id: 'tag-3',
          name: 'javascript',
          link: '#',
          title: 'показать посты про javascript',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@use 'src/styles/shared' as *;

.tags {
  @include section;

  &-title {
    @include h2;
    margin-bottom: 20px;
  }
}

.tag {
  display: inline-block;
  margin: 0 10px 10px 0;
  padding: 8px 20px;
  transition: color 0.25s, background-color 0.25s;
  background: #f5f5f5;

  &:hover {
    color: white;
    background: darkseagreen;
  }
}
</style>
