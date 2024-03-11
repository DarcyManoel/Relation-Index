var focus=`darcy2000`
function renderCard(){
	document.getElementById(`main`).innerHTML=`<div id="title">`+window[focus][0].join(` `)+`</div>`
	document.getElementById(`main`).innerHTML+=`<div id="lifePoints" class="back20">b. `+window[focus][1][0].join(`-`)+`</div>`
	if(window[focus][1][1].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br>m. `+window[focus][1][1].join(`-`)
	}
	if(window[focus][1][2].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br>d. `+window[focus][1][2].join(`-`)
	}
	if(window[focus][2].length){
		document.getElementById(`main`).innerHTML+=`<div id="parents"><span class="back20">Parents:</span><br></div>`
		for(i1=0;i1<window[focus][2].length;i1++){
			if(containsUppercase(window[focus][2][i1])){
				document.getElementById(`parents`).innerHTML+=`<span class="blank">`+window[focus][2][i1]+`</span><br>`
			}else{
				document.getElementById(`parents`).innerHTML+=`<span onClick=changeFocus("`+window[focus][2][i1]+`")>`+window[window[focus][2][i1]][0].join(` `)+`</span><br>`
			}
		}
	}
	if(window[focus][3].length){
		document.getElementById(`main`).innerHTML+=`<div id="children"><span class="back20">Children:</span><br></div>`
		for(i1=0;i1<window[focus][3].length;i1++){
			if(containsUppercase(window[focus][3][i1])){
				document.getElementById(`children`).innerHTML+=`<span class="blank">`+window[focus][3][i1]+`</span><br>`
			}else{
				document.getElementById(`children`).innerHTML+=`<span onClick=changeFocus("`+window[focus][3][i1]+`")>`+window[window[focus][3][i1]][0].join(` `)+`</span><br>`
			}
		}
	}
}
function changeFocus(passedFocus){
	focus=passedFocus
	renderCard()
}
function containsUppercase(string){
	return /[A-Z]/.test(string)
}