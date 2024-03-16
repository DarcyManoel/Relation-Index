const year=new Date().getFullYear()
const month=new Date().getMonth()+1
const day=new Date().getDate()
var prevFocus=[]
var focusPlain=`darcy2000`
var yearDiff
function renderCard(){
	if(prevFocus.length){
		document.getElementById(`back`).classList.remove(`unavailable`)
	}else{
		document.getElementById(`back`).classList.add(`unavailable`)
	}
	var focus=window[focusPlain]
	document.getElementById(`main`).innerHTML=`<div id="title">`+focus.name+`</div>`
	document.getElementById(`main`).innerHTML+=`<div id="lifePoints"><span class="heading">b.</span> `+focus.birth.join(`-`)+`</div>`
	if(focus.birthPlace){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.birthPlace+`</span>`
	}
	if(focus.marriage){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">m.</span> `+focus.marriage.join(`-`)
		printYearRange(focus.birth,focus.death)
		if(focus.marriagePlace){
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.marriagePlace+`</span>`
		}
	}
	if(focus.death){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">d.</span> `+focus.death.join(`-`)
		printYearRange(focus.birth,focus.death)
		if(focus.deathPlace){
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.deathPlace+`</span>`
		}
		if(focus.deathCause){
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.deathCause+`</span>`
		}
	}
	if(focus.parents){
		document.getElementById(`main`).innerHTML+=`<br><div id="parents"><span class="heading">Parents:</span><br></div>`
		for(i1=0;i1<focus.parents.length;i1++){
			var parent=focus.parents[i1]
			if(containsUppercase(parent)){
				document.getElementById(`parents`).innerHTML+=`<span class="list nolink">`+parent+`</span><br>`
			}else{
				document.getElementById(`parents`).innerHTML+=`<span class="list link" onClick=changeFocus("`+parent+`")>`+window[parent].name+`</span><br>`
			}
		}
		if(window[focus.parents[0]]){
			if(window[focus.parents[0]].children){
				if(window[focus.parents[0]].children.length-1){
					document.getElementById(`main`).innerHTML+=`<br><div id="siblings"><span class="heading">Siblings:</span><br></div>`
					for(i1=0;i1<window[focus.parents[0]].children.length;i1++){
						var sibling=window[focus.parents[0]].children[i1]
						if(containsUppercase(sibling)){
							document.getElementById(`siblings`).innerHTML+=`<span class="list nolink">`+sibling+`</span><br>`
						}else{
							if(window[sibling].name==focus.name){
							}else{
								document.getElementById(`siblings`).innerHTML+=`<span class="list link" onClick=changeFocus("`+sibling+`")>`+window[sibling].name+`</span><br>`
							}
						}
					}
				}
			}
		}
	}
	if(focus.children){
		if(window[focus.children[0]]){
			if(window[focus.children[0]].parents){
				if(window[focus.children[0]].parents.length-1){
					document.getElementById(`main`).innerHTML+=`<br><div id="spouses"><span class="heading">Spouses:</span><br></div>`
					for(i1=0;i1<window[focus.children[0]].parents.length;i1++){
						var spouse=window[focus.children[0]].parents[i1]
						if(containsUppercase(spouse)){
							document.getElementById(`spouses`).innerHTML+=`<span class="list nolink">`+spouse+`</span><br>`
						}else{
							if(window[spouse].name==focus.name){
							}else{
								document.getElementById(`spouses`).innerHTML+=`<span class="list link" onClick=changeFocus("`+spouse+`")>`+window[spouse].name+`</span><br>`
							}
						}
					}
				}
			}
		}
		document.getElementById(`main`).innerHTML+=`<br><div id="children"><span class="heading">Children:</span><br></div>`
		for(i1=0;i1<focus.children.length;i1++){
			var child=focus.children[i1]
			if(containsUppercase(child)){
				document.getElementById(`children`).innerHTML+=`<span class="list nolink">`+child+`</span><br>`
			}else{
				document.getElementById(`children`).innerHTML+=`<span class="list link" onClick=changeFocus("`+child+`")>`+window[child].name+`</span><br>`
			}
		}
	}
}
function printYearRange(start,end){
	if(end[2]!==`?`){
		var yearDiff=end[2]-start[2]
		if(end[1]==`?`||start[1]==`?`){
			document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+`-`+yearDiff+` years)`
		}else if(end[1]>start[1]){
			document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+yearDiff+` years)`
		}else if(end[1]<start[1]){
			document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+` years)`
		}else if(end[1]==start[1]){
			if(end[0]==`?`||start[0]==`?`){
				document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+`-`+yearDiff+` years)`
			}else if(end[0]>=start[0]){
				document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+yearDiff+` years)`
			}else if(end[0]<start[0]){
				document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+` years)`
			}
		}
	}
}
function changeFocus(passedFocus){
	prevFocus.push(focusPlain)
	focusPlain=passedFocus
	renderCard()
}
function backFocus(){
	focusPlain=prevFocus.pop()
	renderCard()
}
function containsUppercase(string){
	return /[A-Z]/.test(string)
}