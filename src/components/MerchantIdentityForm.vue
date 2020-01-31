<template>
  <div class="container mx-auto my-16">
    <p class="mb-4 w-1/2 headers text-3xl font-medium text-center mx-auto">
      Merchant Identity
    </p>
    <div class="w-4/5 md:w-1/2 mx-auto">
      <form
        @submit.prevent="validateBeforeSubmit"
        class="bg-white text shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <!-- Full Name -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.fullName != ''" class="error-message">
              <p>{{ error.fullName }}</p>
            </div>
          </transition>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="full-name"
          >
            Full Name
          </label>
          <input
            id="full-name"
            v-model="identity.fullName"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Full Name*"
          />
          <!--<p class="text-red-500 text-xs italic">A name is Required.</p>-->
        </div>
        <!-- Birth Date -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.birthDate != ''" class="error-message">
              <p>{{ error.birthDate }}</p>
            </div>
          </transition>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="birth-date"
          >
            Date of Birth
          </label>
          <input
            id="birth-date"
            v-model="identity.birthDate"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="date"
            placeholder="Date of Birth*"
          />
          <!--<p class="text-red-500 text-xs italic">A date is required.</p>-->
        </div>
        <!-- Email -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.email != ''" class="error-message">
              <p>{{ error.email }}</p>
            </div>
          </transition>
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            id="email"
            v-model="identity.email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
          />
          <!--<p class="text-red-500 text-xs italic">An email is required.</p>-->
        </div>
        <!-- Phone Number -->
        <div class="mb-4">
          <transition
            enter-active-class="animated fadeInUp shake"
            leave-active-class="animated fadeOutDown"
          >
            <div v-show="error.phone != ''" class="error-message">
              <p>{{ error.phone }}</p>
            </div>
          </transition>
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="phone-number"
          >
            Phone Number
          </label>
          <input
            id="phone-number"
            v-model="identity.phone"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Phone Number*"
          />
          <!--<p class="text-red-500 text-xs italic">A phone number is required.</p>-->
        </div>
        <div class="flex items-center justify-center">
          <button class="btn" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

// eslint-disable-next-line no-useless-escape
const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default {
  name: 'merchant-identity-form',
  data() {
    return {
      identity: {
        fullName: '',
        email: '',
        birthDate: '',
        phone: '',
      },
      error: {
        fullName: '',
        email: '',
        birthDate: '',
        phone: '',
      },
      performingRequest: false,
    };
  },
  methods: {
    ...mapActions(['setUserIdentity']),
    // General validation
    validate(type, value) {
      if (type === 'email') {
        return this.isEmail(value);
      }
    },
    // Check for valid email
    isEmail(value) {
      return emailRegExp.test(value);
    },
    // Call validation functions here
    validateBeforeSubmit() {
      //if (this.validate('email', this.identity.email) === true) {
      this.setIdentity();
      //	}
    },
    setIdentity() {
      this.performingRequest = true;
      this.setUserIdentity(this.identity).then(() => {
        this.performingRequest = false;
      });
    },
  },
};
</script>

<style></style>
