const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
let pontos = 0;

const jump = () => {
	mario.classList.add("jump");

	setTimeout(() => {
		mario.classList.remove("jump");
	}, 500);
};

const loop = setInterval(() => {

	pontos += 1;

	$("#pontuacao").html(pontos);

	console.log(pontos);

	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');

	if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) { 
		pipe.style.animation = "none";
		pipe.style.left = `${pipePosition}px`;

		mario.style.animation = "none";
		mario.style.bottom = `${marioPosition}px`;

		mario.src = './images/game-over.png';
		mario.style.width = '75px'
		mario.style.marginLeft = '50px'

		clearInterval(loop);
		Swal.fire({
			imageUrl: './images/game-over.gif',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'Custom image',
			confirmButtonText: 'Reiniciar',
		 }).then((result) => {
			if (result.isConfirmed) {
			  location.reload();
			}
		})
		
	}

}, 10);

document.addEventListener("keydown", jump);
