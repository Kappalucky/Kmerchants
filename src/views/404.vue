<template>
  <section class="m-4 px-4 h-screen flex justify-center items-center">
    <div class="p4 container text-center mx-auto">
      <h1 class="text-4xl headers text-mono tracking-widest">Page not found</h1>
      <p class="text mt-2">Sorry, but what you are looking for is not here.</p>
      <br />
      <router-link to="/">
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
          Return To Home
        </button>
      </router-link>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Error404',
};
</script>
