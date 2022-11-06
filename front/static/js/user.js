const slider= document.getElementById('sliders')

const paginationSystem= (()=>{
	let pageNbr= 0;
	return {
		next: function(){
			pageNbr++;
			slider.style.transform= `translateX(calc( -1 * (${pageNbr}*(25% + var(--padding-right-col)))  ))`;
		},
		prev: function(){
			pageNbr--;
			slider.style.transform= `translateX(calc( -1 * (${pageNbr}*(25% + var(--padding-right-col)))  ))`;
		}
	}
})()
