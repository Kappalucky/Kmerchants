<template>
  <section class="container pt-6 mx-auto merchant-form mr-2">
    <template v-if="identityFormCompleted == false">
      <merchant-identity-form />
    </template>
    <template v-else-if="miscellaneousFormCompleted == false">
      <merchant-miscellaneous-form />
    </template>
    <template v-else>
      <merchant-address-form />
    </template>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import MerchantIdentityForm from '../components/MerchantIdentityForm.vue';
import MerchantMiscellaneousForm from '../components/MerchantMiscellaneousForm.vue';
import MerchantAddressForm from '../components/MerchantAddressForm.vue';

export default {
  name: 'Onboarding',
  components: {
    MerchantIdentityForm,
    MerchantMiscellaneousForm,
    MerchantAddressForm,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      'error',
      'addressFormCompleted',
      'identityFormCompleted',
      'miscellaneousFormCompleted',
    ]),
  },
};
</script>
