let container = $('#container');
let genDie = $('#genDie');
let sumDie = $('#sumDie');
let rollDie = $('#rollDie');
let diceArr = [];

class Die {
	constructor() {
		this.div = $('<div></div>');
		this.span = $('<span></span>');
		$(this.div).addClass('die');
		this.roll()
		this.div.append(this.span);
		container.append(this.div);
		this.div.click(() => {
			this.roll();
		});
		this.div.dblclick(() => {
			this.div.remove();
			let index = diceArr.indexOf(this);
			diceArr.splice(index, 1);
		})
	}
	roll() {
		// Added Char for better display
		let die = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"]
		let dieVal = Math.floor(Math.random() * 6);
		this.value = dieVal + 1;
		console.log(this.value);
		this.span.html(die[dieVal]);
	}
}

genDie.click(() => {
    let dice = new Die();
    diceArr.push(dice);
});

rollDie.click(() => {
	for (let i = 0; i < diceArr.length; i++) {
		diceArr[i].roll();
	}
})

sumDie.click(() => {
	let sum = 0;
	for (let i = 0; i < diceArr.length; i++) {
		sum += diceArr[i].value
	}
	alert(`The sum is ${sum}`)
});
