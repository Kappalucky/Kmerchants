<template>
  <div class="container mx-auto my-16">
    <p class="mb-4 headers w-1/2 text-3xl font-medium text-center mx-auto">
      Merchant Address
    </p>
    <div class="w-4/5 md:w-1/2 mx-auto">
      <form
        @submit.prevent="validateBeforeSubmit"
        id="address-form"
        class="bg-white text shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
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
            Street Address
          </label>
          <input
            id="street"
            v-model="address.street"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="Street Address*"
          />
          <!--<p class="text-red-500 text-xs italic">A street is Required.</p>-->
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
            v-model="address.city"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
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
            v-model="address.state"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
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
            v-model.number="address.zip"
            class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              text-gray-700
              mb-3
              leading-tight
              focus:outline-none focus:shadow-outline
            "
            type="text"
            placeholder="Zipcode*"
          />
          <!--<p class="text-red-500 text-xs italic">A zipcode is required.</p>-->
        </div>
        <div class="flex items-center justify-center">
          <button class="btn" type="submit">Complete</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'merchant-address-form',
  data() {
    return {
      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
      },
      error: {
        street: '',
        city: '',
        state: '',
        zip: '',
      },
      performingRequest: false,
    };
  },
  methods: {
    ...mapActions(['setUserAddress']),
    // Call validation functions here
    validateBeforeSubmit() {
      this.setAddress();
    },
    setAddress() {
      this.performingRequest = true;
      this.setUserAddress(this.address).then(() => {
        this.$router.push('/dashboard');
      });
    },
  },
};
</script>

<style></style>
