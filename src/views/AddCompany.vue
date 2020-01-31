<template>
  <div class="container mx-auto my-16">
    <p class="mb-4 w-1/2 headers text-3xl font-medium text-center mx-auto">
      Add Company
    </p>
    <div class="w-4/5 md:w-1/2 mx-auto">
      <form
        @submit.prevent="validateBeforeSubmit"
        id="company-form"
        class="bg-white text shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <!-- Name -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.name != ''" class="error-message">
              <p>{{ error.name }}</p>
            </div>
          </transition>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            id="name"
            v-model="company.name"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Name*"
          />
          <!--<p class="text-red-500 text-xs italic">A name is Required.</p>-->
        </div>
        <!-- Doing Business As -->
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="dba">
            Doing Business As
          </label>
          <input
            id="dba"
            v-model="company.dba"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Doing Business As...*"
          />
        </div>
        <!-- Street -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.street != ''" class="error-message">
              <p>{{ error.street }}</p>
            </div>
          </transition>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="street"
          >
            Street
          </label>
          <input
            id="street"
            v-model="company.address.street"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Street*"
          />
          <!--<p class="text-red-500 text-xs italic">A street is required.</p>-->
        </div>
        <!-- City -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.city != ''" class="error-message">
              <p>{{ error.city }}</p>
            </div>
          </transition>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="city">
            City
          </label>
          <input
            id="city"
            v-model="company.address.city"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="City*"
          />
          <!--<p class="text-red-500 text-xs italic">A city is required.</p>-->
        </div>
        <!-- State -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.state != ''" class="error-message">
              <p>{{ error.state }}</p>
            </div>
          </transition>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="state">
            State
          </label>
          <input
            id="state"
            v-model="company.address.state"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="State*"
          />
          <!--<p class="text-red-500 text-xs italic">A state is required.</p>-->
        </div>
        <!-- Zip Code -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.zip != ''" class="error-message">
              <p>{{ error.zip }}</p>
            </div>
          </transition>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="zipcode"
          >
            Zipcode
          </label>
          <input
            id="zipcode"
            v-model.number="company.address.zip"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Zipcode*"
          />
          <!--<p class="text-red-500 text-xs italic">A zipcode is required.</p>-->
        </div>
        <div class="flex items-center justify-around">
          <button class="btn" type="button" @click="back()">
            Back
          </button>
          <button class="btn" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'add-company',
  data() {
    return {
      company: {
        name: '',
        dba: '',
        address: {
          street: '',
          city: '',
          state: '',
          zip: '',
        },
      },
      default: {
        name: '',
        dba: '',
        address: {
          street: '',
          city: '',
          state: '',
          zip: '',
        },
      },
      error: {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
      },
    };
  },
  methods: {
    ...mapActions(['newCompany']),
    // Call validation functions here
    validateBeforeSubmit() {
      this.createCompany();
    },
    createCompany() {
      this.newCompany(this.company)
        .then(() => {
          this.$router.push('/dashboard');
          this.company = Object.assign({}, this.default);
          this.error = {};
        })
        .catch(error => console.error(error));
    },
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
