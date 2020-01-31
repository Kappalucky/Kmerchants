<template>
	<header class="bg-white shadow-lg sticky top-0 relative">
		<div class="mx-4 py-4">
			<router-link to="/" class="flex justify-start">
				<h3
					class="md:hidden headers text-2xl font-thin subpixel-antialiased uppercase tracking-widest text-black"
				>
					KM
				</h3>
				<h3
					class="hidden md:block headers text-2xl font-thin subpixel-antialiased uppercase tracking-widest text-black"
				>
					KMerchants
				</h3>
			</router-link>
			<template v-if="userComplete">
				<div class="relative py-3 px-6">
					<button
						@click="isOpen = !isOpen"
						class="relative bg-black z-10 block h-8 w-8 rounded-full overflow-hidden"
					>
						<!--<img
							:src="require('~/assets/img/header/IMG_0054.JPG')"
							class="w-full h-full object-cover"
							alt="Avatar of Shaquille John-Foster"
						/>-->
					</button>
					<button
						v-if="isOpen"
						@click="isOpen = false"
						tabindex="-1"
						class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
					></button>
					<!--Drop Down-->
					<div
						v-if="isOpen"
						class="absolute right-0 bg-white mt-2 border rounded-lg py-2 w-48 bg-white rounded-lg shadow-xl"
					>
						<router-link
							to="/profile"
							class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
							>Profile</router-link
						>
						<a
							@click="logout"
							class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
							>Logout</a
						>
					</div>
				</div>
			</template>
		</div>
	</header>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'Navbar',
		data() {
			return {
				hidden: true,
				isOpen: false,
			};
		},
		computed: {
			...mapGetters(['userComplete']),
		},
		created() {
			const escape = e => {
				if (e.key === 'Esc' || e.key === 'Escape') {
					this.isOpen = false;
				}
			};

			document.addEventListener('keydown', escape);
		},
		beforeDestroy() {
			document.removeEventListener('keydown', escape);
		},
		methods: {
			...mapActions(['logout']),
		},
	};
</script>

<style>
	nav {
		background-color: white;
		color: black;
	}
	nav a {
		color: black;
	}
	.navbar {
		@apply flex;
		@apply items-center;
		@apply justify-between;
		@apply flex-wrap;
		@apply bg-white;
		@apply p-6;
		@apply shadow-lg;
	}
</style>
