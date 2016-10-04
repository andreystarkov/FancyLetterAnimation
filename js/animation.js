(function() {

	var svgFx1 = document.querySelector('.letters--effect-1'),

		phrase1 = new Phrase(svgFx1, aniEffects.one),
		phrase2 = new Phrase(svgFx1, aniEffects.two),
		phrase3 = new Phrase(svgFx1, aniEffects.three),
		phrase4 = new Phrase(svgFx1, aniEffects.four),

		i = 0;

		setInterval(function(){

			i++;

			if ( i == 1 ) phrase1.animate();
			if ( i == 2 ) phrase2.animate();
			if ( i == 3 ) phrase3.animate();
			if ( i == 4 ) phrase4.animate();

			if ( i == 4 ) i = 0;

		}, 2000);


})();