<template>
	<div class="flex items-center justify-center">
		<div class="mt-6">
			<Modal :open="open" @close="closeModal()">
				<div class="max-w-lg w-full bg-white rounded-lg shadow-2xl px-6 py-6">
					<h2
						class="font-semibold
            text-gray-900
            text-2xl
            leading-tight
            border-b-2
            border-gray-200
            pb-4"
					>
						Delete account
					</h2>
					<p class="mt-4 text-gray-700">
						Are you absolutely sure you want to cancel your subscription and
						delete your account? This action cannot be undone.
					</p>
					<div class="mt-6">
						<button
							type="button"
							@click="close"
							class="px-4
              py-2
              text-white
              font-semibold
              bg-red-500
              hover:bg-red-600
              border
              border-transparent
              rounded
              focus:outline-none
              focus:shadow-outline"
						>
							Delete my account
						</button>
						<button
							@click="close"
							class="ml-4
              px-4
              py-2
              text-gray-800
              font-semibold
              bg-white
              hover:bg-gray-100
              border
              rounded
              focus:outline-none
              focus:shadow-outline"
						>
							Cancel
						</button>
					</div>
				</div>
			</Modal>
		</div>
	</div>
</template>

<script>
	import Modal from './Modal.vue';

	import { mapActions } from 'vuex';

	export default {
		name: 'add-company-modal',
		components: {
			Modal,
		},
		props: ['open'],
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
			};
		},
		methods: {
			...mapActions(['newCompany']),
			createCompany() {
				this.newCompany(this.company)
					.then(() => {
						this.$parent.closeAdd();
						this.company = Object.assign({}, this.default);
					})
					.catch(error => console.error(error));
			},
			close() {
				this.$emit('closeModal');
			},
		},
	};
</script>

<style></style>
