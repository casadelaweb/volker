<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs-container">
      <ul class="list" itemscope itemtype="http://schema.org/BreadcrumbList">
        <li v-for="(item, index) in list" :key="index" class="list-item"
            itemprop="itemListElement" itemscope itemtype="http://schema.org/ListItem">
          <router-link :title="item.name" :to="item.to" class="list-link" itemprop="item">
            {{ item.name }}
          </router-link>
          <meta :content="index + 1" itemprop="position">
          <meta :content="item.name" itemprop="name">
        </li>
        <li class="list-item last" itemprop="itemListElement" itemscope
            itemtype="http://schema.org/ListItem">
          <router-link :title="route.name" :to="route.path" class="list-link" itemprop="item">
            {{ route.params.category }}
          </router-link>
          <meta :content="8" itemprop="position">
          <meta :content="route.name" itemprop="name">
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data: function () {
    return {
      list: this.$route.meta.breadcrumbs,
      route: this.$route,
    }
  },
  //mounted() {
  //  console.log(this.$route, this.$router)
  //},
}
</script>

<style lang="scss" scoped>
@use 'src/styles/shared' as *;

.breadcrumbs {
  @include section;

  &-container {
    @include container;
  }
}

.list {
  @include flex($w: wrap);

  &-item {
    @include flex(center);
    position: relative;
    z-index: 0;
    margin-right: 12px;

    &::before {
      content: ' ';
      position: static;
      //z-index: 1;
      //top: 8px;
      //left: 100%;
      width: 8px;
      height: 8px;
      margin: 0 8px;
      border-radius: 50%;
      background: black;
    }

    &.last {
      &::before {
        background: #ff648d;
      }
    }
  }

  &-link {
  }
}
</style>
