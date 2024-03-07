<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

interface iUserData {
  gender: 'male' | 'female',
  name: {
    title: string,
    first: string,
    last: string,
  },
  location: {
    street: {
      number: number,
      name: string,
    },
    city: string,
    state: string,
    country: string,
    postcode: number,
    coordinates: {
      latitude: number,
      longitude: number
    },
    timezone: {
      offset: string,
      description: string,
    }
  },
  email: string,
  login: {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string,
  },
  dob: {
    date: string,
    age: number
  },
  registered: {
    date: string,
    age: number
  },
  phone: string,
  cell: string,
  id: {
    name: string,
    value: string
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string,
  },
  nat: string,
  // mod
  fullname?: string,
}

export default defineComponent({
  name: 'TestPage',
  data: function () {
    return {
      users: [] as Array<iUserData>,
      usersPerPageLimit: 20,
      tableColumns: [
        'Avatar',
        'Fullname',
        'Birthday ',
        'Email ',
        'Phone ',
        'Location ',
        'Национальность',
      ],
    }
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios('https://randomuser.me/api/', {
          method: 'get',
          params: {
            results: this.usersPerPageLimit,
          }
        })
        this.users = response.data.results.map((user: iUserData) => {
          const result = user
          result.fullname = `${ user.name.title } ${ user.name.first } ${ user.name.last }`
          return result
        })
        console.log(this.users)
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
    this.fetchData()
  }
})
</script>

<template>
  <div class="main">
    <div class="main-container">
      <div class="table">
        <div class="tableHeader">
          <div v-for="col in tableColumns" :key="col" class="tableHeaderColumn">
            {{ col }}
          </div>
        </div>
        <div class="tableBody">
          <div v-for="user in users" :key="user.id.value" class="tableBodyRow">
            <div class="tableBodyColumn">
              <picture>
                <source :srcset="user.picture.large" media="(min-width: 1024px)">
                <source :srcset="user.picture.medium" media="(min-width: 320px)">
                <img :alt="user.fullname" :src="user.picture.thumbnail" loading="lazy">
              </picture>
            </div>
            <div class="tableBodyColumn"> {{ user.fullname }}</div>
            <div class="tableBodyColumn"> {{ user.dob.date }} {{ user.dob.age }}</div>
            <div class="tableBodyColumn"> {{ user.email }}</div>
            <div class="tableBodyColumn"> {{ user.phone }}</div>
            <div class="tableBodyColumn"> {{ user.location.country }} {{ user.location.city }}</div>
            <div class="tableBodyColumn"> {{ user.nat }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'src/styles/shared/index' as *;

.main {
  @include section;

  &-container {
    @include container;
  }
}

.table {
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 4px 4px 16px 0 rgba(black, 0.05);

  &Header {
    @include flex;
    background: #f5f5f5;

    &Column {
      padding: 16px;
      flex: 0 0 auto;
      width: calc(100% / 7);
    }
  }

  &Body {

    background: white;

    &Row {
      @include flex;
      border-bottom: 2px solid #f5f5f5;
    }

    &Column {
      flex: 0 0 auto;
      width: calc(100% / 7);
      padding: 16px;
    }
  }
}
</style>
