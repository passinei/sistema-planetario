const astrosEl = document.querySelector('#astros')
const orbitasEl = document.querySelector('#orbitas')
const botaoCriarPlanetaEl = document.querySelector('#criar-planeta')
const botaoDestruirPlanetaEl = document.querySelector('#destruir-planeta')

function corAleatoria() {
	const cores = ['red', 'green', 'blue', 'orange', 'brown', 'purple']
	return cores[Math.floor(Math.random() * cores.length)]
}

function velocidadeAngularAleatoria() {
	const limite = 0.025
	return Math.random() * limite * 2 - limite
}

function tamanhoAleatorio() {
	return Math.random() * 20 + 10
}

const centro = {
	x: window.innerWidth / 2,
	y: window.innerHeight / 2,
}

function Astro(distancia, velocidadeAngular, tamanho, cor) {
	let _angulo = 0

	const _el = document.createElement('div')
	_el.classList.add('astro')
	_el.style.width = _el.style.height = `${tamanho}px`
	_el.style.backgroundColor = cor
	astrosEl.appendChild(_el)

	const _orbitaEl = document.createElement('div')
	_orbitaEl.classList.add('orbita')
	_orbitaEl.style.width = _orbitaEl.style.height = `${distancia * 2}px`
	orbitasEl.appendChild(_orbitaEl)

	this.move = () => {
		_angulo += velocidadeAngular
	}

	this.desenha = () => {
		const left = centro.x + Math.cos(_angulo) * distancia - tamanho / 2
		const top = centro.y - Math.sin(_angulo) * distancia - tamanho / 2
		_el.style.transform = `translate(${left}px, ${top}px)`
	}

	this.desenhaOrbita = () => {
		const left = centro.x - distancia
		const top = centro.y - distancia
		_orbitaEl.style.transform = `translate(${left}px, ${top}px)`
	}

	this.destroi = () => {
		astrosEl.removeChild(_el)
		orbitasEl.removeChild(_orbitaEl)
	}

	this.desenha()
	this.desenhaOrbita()
}

const estrela = new Astro(0, 0, 40, 'yellow')

const planetas = []

function criaPlaneta() {
	const distancia = (planetas.length + 1) * 50
	planetas.push(
		new Astro(
			distancia,
			velocidadeAngularAleatoria(),
			tamanhoAleatorio(),
			corAleatoria(),
		),
	)
}

function destroiPlaneta() {
	const planeta = planetas.pop()
	if (planeta) planeta.destroi()
}

setInterval(() => {
	centro.x = window.innerWidth / 2
	centro.y = window.innerHeight / 2

	estrela.desenha()
	estrela.desenhaOrbita()

	planetas.forEach(planeta => {
		planeta.move()
		planeta.desenha()
		planeta.desenhaOrbita()
	})
}, 10)

botaoCriarPlanetaEl.addEventListener('click', criaPlaneta)
botaoDestruirPlanetaEl.addEventListener('click', destroiPlaneta)

criaPlaneta()
