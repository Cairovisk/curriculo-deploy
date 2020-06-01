<template>
	<div id="navbar">
		<div class="container">
			<router-link :to="'/'">
				<img class="navbar-logo" src="" alt="Logo Cairo">
			</router-link>
			<div class="menubar" @click="opened = !opened">
				<template v-if="opened">
					<img src="@/assets/icon-times-solid.svg" alt="Fechar">
				</template>
				<template v-else>
					<img src="@/assets/icon-bars-solid.svg" alt="Abrir menu">
				</template>
			</div>
			<div class="navbar-links" :class="{opened: opened}">
				<nav>
					<ul>
						<li>
							<router-link @click.native="opened = !opened" class="navbar-link" :to="'/'">Início</router-link>
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</li>
						<li>
							<router-link @click.native="opened = !opened" class="navbar-link" :to="'habilidades'">Habilidades</router-link>
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</li>
						<li>
							<router-link @click.native="opened = !opened" class="navbar-link" :to="'profissional'">Profissional</router-link>
							<font-awesome-icon :icon="['fas', 'chevron-right']" />
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				opened: false
			}
		},
		// beforeRouterUpdate(to, from, next) {
		// 	this.opened = !this.opened
		// }
	}
</script>

<style lang="scss" scoped>
	#navbar {
		width: 100%;
		height: 60px;
		background: $white;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 1000;

		.container {
			display: flex;
		}

		.navbar-logo {
			width: 153px;
			height: auto;
			display: block;
			margin-right: 15px;

			@media (max-width: 1200px) {
				margin-right: 5px;
			}
		}

		.menubar {
			width: 60px;
			height: 60px;
			position: absolute;
			top: 0;
			right: 0;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			display: none;

			@media (max-width: 991px) {
				display: flex;
			}

			svg {
				font-size: 22px;
				color: $black;
			}

			img {
				width: 18px;
				height: 18px;
				color: $black;
			}
		}
		
		.navbar-links {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row-reverse;
			width: 100%;

			@media (max-width: 991px) {
				z-index: 100;
				width: 100%;
				height: 100%;
				position: fixed;
				top: 60px;
				right: 0;
				flex-flow: column;
				justify-content: flex-start;
				background: $white-secondary;
				padding: 0 15px;
				display: none;

				&.opened {
					display: flex;
				}
			}

			nav {
				@media (max-width: 991px) {
					width: 100%;
					order: 2;
					padding-top: 20px;
				}

				ul {
					list-style: none;
					padding: 0;
					margin: 0;
					display: flex;
					height: 40px;

					@media (max-width: 991px) {
						flex-flow: column;
						justify-content: flex-start;
						height: 100%;
					}

					li {
						height: 40px;
						padding: 0;
						margin: 0;
						position: relative;

						&.mobile {
							display: none;

							@media (max-width: 576px) {
								display: block;
							}
						}

						&.spotlight {
							
							.navbar-link {
								color: $yellow;
							}

							svg {
								color: $yellow;
							}
						}

						@media (max-width: 991px) {
							height: 50px;
						}

						.navbar-link {
							font-weight: $medium;
							font-size: 18px;
							line-height: 22px;
							color: $black;
							text-decoration: none;
							display: flex;
							align-items: center;
							height: 40px;
							margin: 0 15px;
							position: relative;
							transition: 0.2s;

							@media (max-width: 991px) {
								height: 50px;
								margin: 0;
								border-bottom: 1px solid $grey-primary;
							}

							&:after {
								position: absolute;
								bottom: 0;
								left: 0;
								right: 0;
								margin: auto;
								width: 0%;
								content: '.';
								color: transparent;
								background: $black;
								height: 1px;
								transition: 0.2s;
							}

							&:hover:after {
								transition: 0.2s;
								width: 100%;
							}

						}

						svg {
							font-size: 14px;
							position: absolute;
							right: 15px;
							top: 17px;
							color: $black;
							display: none;
							pointer-events: none;

							@media (max-width: 991px) {
								display: block;
							}
						}
					}
				}
			}

			.btn {

				@media (max-width: 1200px) {
					font-size: 13px;
				}

				@media (max-width: 991px) {
					width: 100%;
					order: 1;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
			
	}
	
</style>