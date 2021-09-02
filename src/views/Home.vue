<template>
  <section class="m-4 px-4 h-screen flex justify-center items-center">
    <div class="p4 container text-center mx-auto">
      <h1 class="text-4xl headers text-mono tracking-widest">
        Welcome to KMerchants!
      </h1>
      <p class="text">
        The right place to keep track of companies and various merchant data.
        Click below to begin.
      </p>
      <br />
      <router-link to="/onboard">
        <button
          class="
            bg-gray-400
            text text-xs
            mt-4
            hover:bg-black
            w-1/2
            text-white
            font-bold
            py-2
            uppercase
          "
          type="button"
        >
          Get Started
        </button>
      </router-link>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {},
};
</script>
