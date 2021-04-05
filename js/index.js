function showimg(){
	var imgArr=['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg'];
	var textArr=['Enjoy Aromatherapy','Focus on Breathing','Hug Your Loved One','Laugh with Your Friends','Exercise','Take a Walk']
	var num=Math.floor(Math.random()*imgArr.length);
	var objImg=document.getElementById('banner');
	var objH2=document.getElementById('h2');
	objImg.src="img/"+imgArr[num];
	objH2.innerHTML=textArr[num];
}
showimg();

document.getElementById('quhuan').addEventListener('click', showimg);
