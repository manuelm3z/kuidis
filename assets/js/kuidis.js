jQuery(document).ready(function($){
    carousel = document.getElementById('carousel');
    formularios = document.querySelector('.forms-carousel');
	sizeInit();
	window.addEventListener("resize", resize);
});
var carousel,formularios;
function resize() {
	var width = window.innerWidth;
	var height = 683;
	if ((width * 0.45) <= height) {
		height = (width * 0.50);
	}
	carousel.style.maxHeight = height + 'px';
	formularios.style.maxHeight = height + 'px';
}
function sizeInit() {
	var width = window.innerWidth, height = window.innerHeight;
	if (height < width) {
		if (height <= 683) {
			carousel.style.maxHeight = height + 'px';
			formularios.style.maxHeight = height + 'px';
		} else {
			carousel.style.maxHeight = '683px';
			formularios.style.maxHeight = '683px';
		}
	} else {
		resize();
	}
}