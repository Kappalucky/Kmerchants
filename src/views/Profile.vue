<template>
  <div class="mx-auto my-16 container">
    <h1 class="text-2xl headers text-mono mb-4 tracking-widest">Profile</h1>
    <section class="border-b">
      <div class="flex flex-col md:flex-row justify-center">
        <div class="w-full md:w-1/2 mx-2">
          <form class="text">
            <!-- Full Name -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="full-name"
              >
                Full Name
              </label>
              <input
                id="full-name"
                v-model="identity.fullName"
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
                placeholder="Full Name*"
              />
            </div>
            <!-- Birth Date -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="birth-date"
              >
                Date of Birth
              </label>
              <input
                id="birth-date"
                v-model="identity.birthDate"
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
                type="date"
                placeholder="Date of Birth*"
              />
            </div>
            <!-- Email -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                id="email"
                v-model="identity.email"
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
                type="email"
                placeholder="Email*"
              />
            </div>
            <!-- Phone Number -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="phone-number"
              >
                Phone Number
              </label>
              <input
                id="phone-number"
                v-model="identity.phone"
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
                placeholder="Phone Number*"
              />
            </div>
          </form>
        </div>
        <div class="w-full md:w-1/2 mx-2">
          <form id="address-form" class="text">
            <!-- Street -->
            <div class="mb-4">
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
            </div>
            <!-- City -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="city"
              >
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
            </div>
            <!-- State -->
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="state"
              >
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
            </div>
            <!-- Zip Code -->
            <div class="mb-4">
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
            </div>
          </form>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <button class="btn mb-4" type="button" @click="savePersonal">
          Save
        </button>
      </div>
    </section>
    <hr />
    <section class="px-4 w-full">
      <div class="flex flex-col md:flex-row justify-center mt-4">
        <div class="w-full">
          <form class="text">
            <!-- Social Security Number -->
            <div class="mb-4">
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
            </div>
            <!-- Credit Score Number -->
            <div class="mb-4">
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
            </div>
          </form>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button class="btn mb-4" type="button" @click="setMiscellaneous">
          Save
        </button>
      </div>
    </section>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'profile',
  data() {
    return {
      identity: {
        fullName: '',
        email: '',
        birthDate: '',
        phone: '',
      },
      address: {
        street: '',
        city: '',
        state: '',
        zip: '',
      },
      miscellaneous: {
        ssn: '',
        creditScore: '',
      },
    };
  },
  computed: {
    ...mapState(['userProfile']),
  },
  mounted() {
    this.identity.fullName = this.userProfile.fullName;
    this.identity.email = this.userProfile.email;
    this.identity.birthDate = this.userProfile.birthDate;
    this.identity.phone = this.userProfile.phone;

    this.address = { ...this.userProfile.address };

    this.miscellaneous = { ...this.userProfile.miscellaneous };
  },
  destroyed() {
    this.identity = {
      fullName: '',
      email: '',
      birthDate: '',
      phone: '',
    };

    this.address = {
      street: '',
      city: '',
      state: '',
      zip: '',
    };

    this.miscellaneous = {
      ssn: '',
      creditScore: '',
    };
  },
  methods: {
    ...mapActions([
      'setUserIdentity',
      'setUserAddress',
      'setUserMiscellaneous',
    ]),
    savePersonal() {
      this.setUserIdentity(this.identity);
      this.setUserAddress(this.address);
    },
    setMiscellaneous() {
      this.setUserMiscellaneous(this.miscellaneous);
    },
  },
};
</script>
