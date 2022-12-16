// CITATION: https://trvswgnr.github.io/bs5-lightbox/
import Lightbox from 'bs5-lightbox';

const options = {
	keyboard: true,
	size: 'fullscreen'
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));

// boba js
// var menuColors = 
//     [["matcha", 'linear-gradient(#637c34,#6d874b,#efe7d6 70%,#efe7d6 75%,#230d02 95%)'],
//      ["black", 'linear-gradient(tan 80%, #230d02 98%)'],
//      ["strawberry", 'linear-gradient(#F5DBDC, #F7C3CF, #BF6567 70%,  #230d02 95%)']];
// var colorMap = new Map(menuColors);

// $(function() {
//   $(".color").click(function(){
// 		const item = $(this).attr("data-value");
//     const color = colorMap.get(item)
//     $(".content").css("background", color);
// 	});
// });
