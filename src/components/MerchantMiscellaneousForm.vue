<template>
  <div class="container mx-auto my-16">
    <p class="mb-4 headers w-1/2 text-3xl font-medium text-center mx-auto">
      Miscellaneous Details
    </p>
    <div class="w-4/5 md:w-1/2 mx-auto">
      <form
        @submit.prevent="validateBeforeSubmit"
        id="Miscellaneous-form"
        class="bg-white text shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <!-- Social Security Number -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.ssn != ''" class="error-message">
              <p>{{ error.ssn }}</p>
            </div>
          </transition>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="social-security"
          >
            SSN #
          </label>
          <input
            id="social-security"
            v-model.number="miscellaneous.ssn"
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
            placeholder="xxx-xxx-xxxx*"
            maxlength="10"
          />
          <!--<p class="text-red-500 text-xs italic">A SSN is Required.</p>-->
        </div>
        <!-- Credit Score Number -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.creditScore != ''" class="error-message">
              <p>{{ error.creditScore }}</p>
            </div>
          </transition>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="credit-score"
          >
            Credit Score
          </label>
          <input
            id="credit-score"
            v-model.number="miscellaneous.creditScore"
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
            pattern="\d*"
            placeholder="Credit Score*"
            maxlength="3"
          />
          <!--<p class="text-red-500 text-xs italic">A Credit Score is Required.</p>-->
        </div>
        <div class="flex items-center justify-center">
          <button class="btn" type="submit">Next</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'merchant-miscellaneous-form',
  data() {
    return {
      miscellaneous: {
        ssn: '',
        creditScore: '',
      },
      error: {
        ssn: '',
        creditScore: '',
      },
      performingRequest: false,
    };
  },
  methods: {
    ...mapActions(['setUserMiscellaneous']),
    // Call validation functions here
    validateBeforeSubmit() {
      this.setMiscellaneous();
    },
    setMiscellaneous() {
      this.performingRequest = true;
      this.setUserMiscellaneous(this.miscellaneous).then(() => {
        this.performingRequest = false;
      });
    },
  },
};
</script>

<style></style>
