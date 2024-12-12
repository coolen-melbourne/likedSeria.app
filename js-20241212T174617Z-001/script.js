const advertice = document.querySelectorAll('.promo__adv')
const movieName = document.querySelector('.promo__title')
const movieInfo = document.querySelector('.promo__descr')
const bgChange = document.querySelector('.promo__bg')
const bgSub = document.querySelector('.add')
const yes = document.querySelector('#yourCheckboxId')





advertice.forEach((e)=>{
	e.addEventListener('click', function(e){
		e.target.remove()
	})
	
})
movieName.addEventListener('click', function(){
	movieName.textContent = 'Looking for Alaska'
})
movieInfo.addEventListener('click', function(){
	movieInfo.textContent = 'A new arrival at a boarding school falls in love with a beguiling female student.'
})

bgChange.addEventListener('click', function(){
	bgChange.style.backgroundImage = "url('../img-20241212T174616Z-001/img/1.jpg')"
})

function checker (){
yes.addEventListener('click', function(){
	let use = yes.checked

	if(use){
		console.log('true');
	} else {
		console.log('false');
		
	}
	
})
}

let invalue 
let counter = 1
bgSub.addEventListener('submit', function(e){
	e.preventDefault()
	invalue = document.querySelector('.adding__input').value;
	const newTags = document.createElement('li')
	newTags.classList = ('promo__interactive-item')
	newTags.textContent = `${counter}. ${invalue}`

	const listContainer = document.querySelector('.promo__interactive-list');
  listContainer.appendChild(newTags);
  document.querySelector('.adding__input').value = '';

  counter++
})









