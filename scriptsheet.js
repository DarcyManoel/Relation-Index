const year=new Date().getFullYear()
const month=new Date().getMonth()+1
const day=new Date().getDate()
var prevFocus=[]
if(localStorage.getItem(`prevFocus`)){
	prevFocus=localStorage.getItem(`prevFocus`).split(`,`)
}
var focusPlain=`darcy1`
if(localStorage.getItem(`focusPlain`)){
	focusPlain=localStorage.getItem(`focusPlain`)
}
var focus=window[focusPlain]
var yearDiff
function renderCard(){
	localStorage.setItem(`prevFocus`,prevFocus)
	localStorage.setItem(`focusPlain`,focusPlain)
	focus=window[focusPlain]
	document.getElementById(`main`).innerHTML=`<div id="title">`+focus.name+`</div>`
	document.getElementById(`main`).innerHTML+=`<div id="lifePoints"><span class="heading">b.</span> `+focus.birth.join(`-`)+`</div>`
	if(!focus.death){
		printYearRange(focus.birth,[day,month,year])
	}
	if(focus.birthPlace){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.birthPlace+`</span>`
	}
	if(focus.marriage){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">m.</span> `+focus.marriage.join(`-`)
		printYearRange(focus.birth,focus.marriage)
		if(focus.marriagePlace){
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.marriagePlace+`</span>`
		}
	}
	if(focus.death){
		if(focus.birth[2]==focus.death[2]){
			document.getElementById(`lifePoints`).innerHTML=`<span class="heading">b. & d.</span> `+focus.birth.join(`-`)
		}else{
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">d.</span> `+focus.death.join(`-`)
			printYearRange(focus.birth,focus.death)
			if(focus.deathPlace){
				document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.deathPlace+`</span>`
			}
			if(focus.deathCause){
				document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.deathCause+`</span>`
			}
			if(focus.buried){
				document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">bur.</span> `+focus.buried
			}
		}
	}
	if(focus.parents){
		document.getElementById(`main`).innerHTML+=`<br><div id="parents"><span class="heading">Parents:</span><br></div>`
		for(i1=0;i1<focus.parents.length;i1++){
			var parent=focus.parents[i1]
			if(containsUppercase(parent)){
				document.getElementById(`parents`).innerHTML+=`<span class="list nolink">`+parent+`</span><br>`
			}else{
				if(prevFocus[prevFocus.length-1]==parent){
					document.getElementById(`parents`).innerHTML+=`<span class="list link visited" onClick=changeFocus("`+parent+`")>`+window[parent].name+`</span><br>`
				}else{
					document.getElementById(`parents`).innerHTML+=`<span class="list link" onClick=changeFocus("`+parent+`")>`+window[parent].name+`</span><br>`
				}
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
								if(prevFocus[prevFocus.length-1]==sibling){
									document.getElementById(`siblings`).innerHTML+=`<span class="list link visited" onClick=changeFocus("`+sibling+`")>`+window[sibling].name+`</span><br>`
								}else{
									document.getElementById(`siblings`).innerHTML+=`<span class="list link" onClick=changeFocus("`+sibling+`")>`+window[sibling].name+`</span><br>`
								}
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
								if(prevFocus[prevFocus.length-1]==spouse){
									document.getElementById(`spouses`).innerHTML+=`<span class="list link visited" onClick=changeFocus("`+spouse+`")>`+window[spouse].name+`</span><br>`
								}else{
									document.getElementById(`spouses`).innerHTML+=`<span class="list link" onClick=changeFocus("`+spouse+`")>`+window[spouse].name+`</span><br>`
								}
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
				if(prevFocus[prevFocus.length-1]==child){
					document.getElementById(`children`).innerHTML+=`<span class="list link visited" onClick=changeFocus("`+child+`")>`+window[child].name+`</span><br>`
				}else{
					document.getElementById(`children`).innerHTML+=`<span class="list link" onClick=changeFocus("`+child+`")>`+window[child].name+`</span><br>`
				}
			}
		}
	}
	if(focus.accomplishments){
		document.getElementById(`main`).innerHTML+=`<br><div id="accomplishments"><span class="heading">Accomplishments:</span><br></div>`
		for(i1=0;i1<focus.accomplishments.length;i1++){
			if(focus.accomplishments[i1][0]==`author`){
				document.getElementById(`accomplishments`).innerHTML+=`<span class="list">Author of <a href="writings/`+focus.accomplishments[i1][1]+`.pdf" target="_blank">`+focus.accomplishments[i1][1]+`</span></span><br>`
			}
		}
	}
	if(focus.photos){
		document.getElementById(`main`).innerHTML+=`<br><div id="photos"></div>`
		for(i1=0;i1<focus.photos.length;i1++){
			document.getElementById(`photos`).innerHTML+=`<a href="images/photos/`+focus.photos[i1]+`.jpg" target="_blank"><img src="images/photos/`+focus.photos[i1]+`.jpg"></img></a>`
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
	if(passedFocus==`darcy1`){
		prevFocus=[]
	}else if(prevFocus[prevFocus.length-1]==passedFocus){
		prevFocus.pop()
	}else{
		prevFocus.push(focusPlain)
	}
	focusPlain=passedFocus
	renderCard()
}
function containsUppercase(string){
	return /[A-Z]/.test(string)
}