<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld msg="Welcome to Your Vue.js App" />
		<input type="number" v-model.number="numb1" />
		<input type="number" v-model.number="numb2" />
		<p> Итог: {{ result}} </p>

		<button v-for="(operand, id) in operands"
		:key='id'
		:disabled="operand === '/' && numb2 === 0"
		@click="calculate(operand)"> {{ operand }}
		</button>

		<div class="error"> {{ error }} </div>
		<input type="checkbox"
		id="showKeyboard"
		value="showBtn"
		v-model="keyBoardShowed">
		<label for="showKeyboard"> Отобразить экранную клавиатуру</label>

		<div v-show="keyBoardShowed">
			<button v-for="(numbKeyboard, id) in numbKeyboards"
			:key='id'
			@click="numberBtn(numbKeyboard)"> {{ numbKeyboard }}
			</button>

			<div>
			<label>
			<input type="radio" id="one"  value="один"
			v-model="radioChange">
			Операнд1
			</label>

			<label>
			<input type="radio" id="two"
			value="два"
			v-model="radioChange">
			Операнд2</label>
			</div>
		</div>
	</div>
</template>
<script>
/* // @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' */
export default {
	// name: 'Home',
	// components: {
	//  HelloWorld
	// },
	data() {
		return {
			numb1: 0,
			numb2: 0,
			result: 0,
			isActive: true,
			operands: ['+', '-', '*', '/', 'X^'],
			error: '',
			numbKeyboards: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '<-'],
			keyBoardShowed: false,
			radioChange: 'один'
			
		}
	},
	methods: {
		calculate(operand = '+') {
			switch (operand) {
				case '+':
					this.sum();
					break;
				case '-':
					this.differ();
					break;
				case '*':
					this.mult();
					break;
				case '/':
					this.division();
					break;
				case 'X^':
					this.exponentiation();
					break;
			}
		},
		sum() {
			this.result = this.numb1 + this.numb2;
		},

		differ() {
			this.result = this.numb1 - this.numb2;
		},

		mult() {
			this.result = this.numb1 * this.numb2;
		},

		division() {
			if (this.numb2 === 0) {
				this.error = 'На 0 делить нельзя';
			} else {
				this.result = Math.floor(this.numb1 / this.numb2);
			}
		},

		exponentiation() {
			this.result = Math.pow(this.numb1, this.numb2);
		},

		numberBtn(numbKeyboard) {
		if (this.radioChange === 'один') {
			if (numbKeyboard === '<-') {
				this.numb1 = +String(this.numb1).slice(0, -1);
			} else {
				this.numb1 = +(this.numb1 + numbKeyboard);
			}
			} else {
			if (numbKeyboard === '<-') {
				this.numb2 = +String(this.numb2).slice(0, -1);
			} else {
				this.numb2 = +(this.numb2 + numbKeyboard);
			}
			}
		}
	}
}
</script>


