<template>
  <div class="dashboard mt-8 container mx-auto">
    <section class="mx-4">
      <div class="flex">
        <!---<div class="w-full md:w-2/3 float-left mx-2">
          <input
            id="search"
            v-model="search"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Search..."
          />
        </div>-->
        <div class="summary-aside w-full md:w-1/2 text-center mx-auto">
          <router-link to="/add-company" class="btn" type="button"
            >Add Company</router-link
          >
        </div>
      </div>
    </section>
    <section>
      <template v-if="companies.length">
        <template v-for="(company, index) in companies">
          <router-link :to="`/company/${index}`" :key="index">
            <div class="w-full">
              <div
                class="my-4 h-32 border border-gray-400 bg-white rounded-b p-4 flex flex-col justify-between leading-normal"
              >
                <div class="pb-4 my-auto flex items-center">
                  <div
                    class="bg-black text-white block h-8 w-8 mx-1 rounded-full text-center text-xl font-bold align-middle overflow-hidden"
                  >
                    {{ company.name[0] }}
                  </div>
                  <div class>
                    <p class="text-sm text-gray-600 flex items-center"></p>
                    <div
                      class="text-gray-900 headers font-medium tracking-widest capitalize text-3xl"
                    >
                      {{ company.name }}
                    </div>
                    <p class="text-gray-700 italic text-sm">
                      {{ company.dba }}
                    </p>
                  </div>
                </div>

                <div class="flex justify-end">
                  <div class="text-sm">
                    <p class="text-gray-900 leading-none">
                      {{ company.address.city }}, {{ company.address.state }}
                      {{ company.address.zip }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </template>
      </template>
      <template v-else>
        <div class="p4 mt-8 container text-center mx-auto">
          <p class="text mt-2">
            You do not have any companies. Click 'Add Company" to update
            listing.
          </p>
          <br />
        </div>
      </template>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'dashboard',
  components: {},
  data() {
    return {
      search: '',
    };
  },
  computed: {
    ...mapState(['companies']),
  },
  methods: {
    ...mapActions(['getCompany']),
  },
};
</script>
