<script>
	var eprev = document.querySelector('.prev');
	var enext = document.querySelector('.next');
		var esico = document.getElementById('icolist').getElementsByTagName('li');
		var eicolist = document.querySelector('#icolist');
		var eimglist = document.querySelector('#imglist');
		var left = 0;
		var timer;
		run()
		function run() {
			if (left <= -4400) {
				left = 0;
			}
			var m = Math.floor(-left / 1100);
			imglist.style.marginLeft = left + 'px';
			var n = (left % 1100 == 0) ? n = 3000 : n = 10;
			left -= 50;
			timer = setTimeout(run, n);
			icochange(m);
		}
		function imgchange(n) {
			let lt = - (n * 1100);
			imglist.style.marginLeft = lt + 'px';
			left = lt;
		}
		eprev.onclick = function () {
			let prevgo = Math.floor(-left / 1100) - 1;
			if (prevgo == -1) {
				prevgo = 3;
			}
			imgchange(prevgo);
		}
		enext.onclick = function () {
			let nextgo = Math.floor(-left / 1100) + 1;
			if (nextgo == 4) {
				nextgo = 0;
			}
			imgchange(nextgo);
		}
		function icochange(m) {
			for (let index = 0; index < esico.length; index++) { esico[index].style.backgroundColor = ''; }
			if (m < esico.length) {
				esico[m].style.backgroundColor = '#003366';
			}
		}
		eicolist.onclick = function () {
			var tg = event.target;
			let ico = tg.innerHTML - 1;
			imgchange(ico);
			icochange(ico);
		}

		eimglist.onmouseover = function () {
			clearTimeout(timer);
		}
		eimglist.onmouseout = function () {
			run();
		}
</script>