function calculatePrice() {
	let price = 100

	const coefficients = {
		education: {
			bachelor: 1.5,
			college: 1.2,
			high_school: 1.05,
			middle_school: 0.9,
		},
		netWorth: {
			upper_class: 2,
			middle_class: 1.5,
			lower_class: 1.2,
		},
		caste: {
			brahmin: 100,
			kshatriya: 50,
			vaishya: 20,
			shudra: 10,
			varna: -50,
		},
		skills: {
			skill1: 10,
			skill2: 20,
			skill3: 15,
			skill4: 10,
		},
		age: {
			'18-23': 1.5,
			'24-27': 1.2,
			'28+': 0.95,
		},
		reputation: {
			rep1: 0.85,
			rep2: 0.9,
			rep3: -20,
		},
	}

	const education = document.getElementById('education').value
	if (education) {
		price *= coefficients.education[education]
	}

	const netWorth = document.getElementById('networth').value
	if (netWorth) {
		price *= coefficients.netWorth[netWorth]
	}

	const caste = document.getElementById('caste').value
	if (caste) {
		price += coefficients.caste[caste]
	}

	for (let skill in coefficients.skills) {
		if (document.getElementById(skill).checked) {
			price += coefficients.skills[skill]
		}
	}

	const ageRadios = document.getElementsByName('age')
	for (let radio of ageRadios) {
		if (radio.checked) {
			price *= coefficients.age[radio.value]
			break
		}
	}

	if (document.getElementById('rep1').checked)
		price *= coefficients.reputation.rep1
	if (document.getElementById('rep2').checked)
		price *= coefficients.reputation.rep2
	if (document.getElementById('rep3').checked)
		price += coefficients.reputation.rep3

	const finalPriceElement = document.getElementById('final-price')
	finalPriceElement.innerText = `Final Price: $${price.toFixed(2)}`
	finalPriceElement.style.color = 'red'
	finalPriceElement.style.fontWeight = 'bold'
}

document.getElementById('submit').addEventListener('click', calculatePrice)
