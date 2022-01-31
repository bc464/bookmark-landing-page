const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function(){
	navbarEl.classList.toggle("nav-open");
});

const featureTabs = document.querySelectorAll(".features-link");
const features = document.querySelector(".features");
const content = document.querySelectorAll(".content");

features.addEventListener("click", function(e){
	const id = e.target.dataset.id;
	if(id) {
		featureTabs.forEach(function(featureTab){
			featureTab.classList.remove("active");
			e.target.classList.add("active");
		});
		content.forEach(function(feature){
			feature.classList.remove("active");
		});
		const element = document.getElementById(id);
		element.classList.add("active");
	}
});

const questions = document.querySelectorAll(".question-title");

	questions.forEach(function(question){
	
	const arrow = question.querySelector(".icon-arrow");
	question.addEventListener("click", function(){

		questions.forEach(function(item){
			if(item !== question) {
				item.classList.remove("show-text");
			}

		})
		question.classList.toggle("show-text");
	})
})


const btnEmail = document.querySelector(".btn-cta");
const errorMsg = document.querySelector(".error-text");
const errorIcon = document.querySelector(".icon-error");
const inputEmail = document.querySelector(".cta-email-input");
let isRequired = value => value == "" ? false : true;
let isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

btnEmail.addEventListener("click", function(){
let valid = false;
const email = inputEmail.value.trim();
	if(!isRequired(email)){
		inputEmail.style.border = "5px solid hsl(0, 94%, 66%)";
		inputEmail.style.opacity = "1";
		
	} else if (!isEmailValid(email)){
    errorIcon.style.display
     = "block";
     errorMsg.style.display = "block";
     inputEmail.style.border = "2px solid hsl(0, 94%, 66%)";
  }
    else {
      errorIcon.style.display = "none"
      ;
      errorMsg.style.display = "none";
      inputEmail.style.border = "";

      valid = true;
    }
    return valid;
})