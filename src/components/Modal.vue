<template>
	<div v-if="showModal" class="fixed inset-0 flex items-center justify-center">
		<div v-if="showBackdrop">
			<div class="absolute inset-0 bg-black opacity-25" @click="close"></div>
		</div>
		<div v-if="showContent" class="relative">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'modal',
		props: ['open'],
		data() {
			return {
				showModal: false,
				showBackdrop: false,
				showContent: false,
				backdropLeaving: false,
				cardLeaving: false,
			};
		},
		created() {
			const onEscape = e => {
				if (this.open && e.keyCode === 27) {
					this.close();
				}
			};
			document.addEventListener('keydown', onEscape);
			this.$once('hook:destroyed', () => {
				document.removeEventListener('keydown', onEscape);
			});
		},
		watch: {
			open: {
				handler: function(newValue) {
					if (newValue) {
						this.show();
					} else {
						this.close();
					}
				},
				immediate: true,
			},
			leaving(newValue) {
				if (newValue === false) {
					this.showModal = false;
					this.$emit('close');
				}
			},
		},
		computed: {
			leaving() {
				return this.backdropLeaving || this.cardLeaving;
			},
		},
		methods: {
			show() {
				this.showModal = true;
				this.showBackdrop = true;
				this.showContent = true;
			},
			close() {
				this.showBackdrop = false;
				this.showContent = false;
			},
		},
	};
</script>

<style></style>
