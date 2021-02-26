'use strict'

class Cart {
	constructor(parentSelector,image,alt,model,text,prise){
		this.parent=document.querySelector(parentSelector);
		this.image=image;
		this.alt=alt;
		this.model=model;
		this.text=text;
		this.prise=prise;
		}
		render (){
			const elememt = document.createElement("div");
			elememt.innerHTML =`<article class="slider_items">
				<div class="image_velo"><img src=${this.image} alt=${this.alt}></div>
				<div class="about_items">
					<div class="about_velo">
					<div class="title_velo"><a href="#"><p class="title_velo_1">${this.model}</p></a>
					<p class="subtitle_velo">${this.text}</p></div>
					<div class="price_velo"><p>${this.prise}$</p></div>
					</div>
					<a href="#"><div class="btn_sold"><p class="add_to_bad">Add to Shopping bag</p></div></a>
				 </div>
			</article>`;
			this.parent.append(elememt);


		}
}

new Cart (
	'.slider_velo',
	"assets/images/bikes/bikes_01.jpg",
	'gopescript',
	'Sport Bicycle 988',
	'by Enrique Salmo',
	150
	).render();


const banner = document.querySelector(".banner"),
tabs = document.querySelectorAll(".image_slider a");

console.dir(tabs);

function showAss (key){
		//banner.classList = ["banner"];
		
		banner.className = "banner";
		banner.classList.add(`ass`+ key);
}


tabs.forEach((item,key)=>{
	item.addEventListener('click', (event)=>{
		const target = event.target;
		event.preventDefault();

		if (target){
		showAss (key)
		
	}
	})
} );

