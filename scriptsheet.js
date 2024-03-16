const year=new Date().getFullYear()
const month=new Date().getMonth()+1
const day=new Date().getDate()
var focus=`darcy2000`
var names=window[focus][0]
var timeline=window[focus][1]
var parents=window[focus][2]
var children=window[focus][3]
var yearDiff
function renderCard(){
	document.getElementById(`main`).innerHTML=`<div id="title">`+names.join(` `)+`</div>`
	document.getElementById(`main`).innerHTML+=`<div id="lifePoints"><span class="heading">b.</span> `+timeline[0][0].join(`-`)+`</div>`
	if(timeline[0][1].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+timeline[0][1]+`</span>`
	}
	yearDiff=0
	if(timeline[1][0].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">m.</span> `+timeline[1][0].join(`-`)
		yearDiff=timeline[1][0][2]-timeline[0][0][2]
		if(timeline[1][0][2]==`?`||timeline[0][0][2]==`?`){
		}else if(timeline[1][0][1]==`?`&&timeline[0][0][1]==`?`){
			printYearRange(0)
		}else if(timeline[1][0][1]>timeline[0][0][1]){
			printYearRange(1)
		}else if(timeline[1][0][1]<timeline[0][0][1]){
			printYearRange(-1)
		}else if(timeline[1][0][1]==timeline[0][0][1]){
			if(timeline[1][0][0]>=timeline[0][0][0]){
				printYearRange(1)
			}else if(timeline[1][0][0]<timeline[0][0][0]){
				printYearRange(-1)
			}else if(timeline[1][0][0]==`?`||timeline[0][0][0]==`?`){
				printYearRange(0)
			}
		}else if(timeline[1][0][1]==`?`||timeline[0][0][1]==`?`){
			printYearRange(0)
		}
	}
	if(timeline[1][1].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+timeline[1][1]+`</span>`
	}
	if(timeline[2][0].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">d.</span> `+timeline[2][0].join(`-`)
		yearDiff=timeline[2][0][2]-timeline[0][0][2]
		if(timeline[2][0][2]==`?`||timeline[0][0][2]==`?`){
		}else if(timeline[2][0][1]==`?`&&timeline[0][0][1]==`?`){
			printYearRange(0)
		}else if(timeline[2][0][1]>timeline[0][0][1]){
			printYearRange(1)
		}else if(timeline[2][0][1]<timeline[0][0][1]){
			printYearRange(-1)
		}else if(timeline[2][0][1]==timeline[0][0][1]){
			if(timeline[2][0][0]>=v[0][0][0]){
				printYearRange(1)
			}else if(timeline[2][0][0]<timeline[0][0][0]){
				printYearRange(-1)
			}else if(timeline[2][0][0]==`?`||timeline[0][0][0]==`?`){
				printYearRange(0)
			}
		}else if(timeline[2][0][1]==`?`||timeline[0][0][1]==`?`){
			printYearRange(0)
		}
		if(timeline[2][1].length){
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+timeline[2][1]+`</span>`
		}
		if(timeline[2][2].length){
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+timeline[2][2]+`</span>`
		}
	}else{
		yearDiff=year-timeline[0][0][2]
		if(timeline[0][0][2]==`?`){
		}else if(month>timeline[0][0][1]){
			printYearRange(1)
		}else if(month<timeline[0][0][1]){
			printYearRange(-1)
		}else if(month==timeline[0][0][1]){
			if(day>=timeline[0][0][0]){
				printYearRange(1)
			}else if(day<timeline[0][0][0]){
				printYearRange(-1)
			}else if(timeline[0][0][0]==`?`){
				printYearRange(0)
			}
		}else if(timeline[2][0][1]==`?`||timeline[0][0][1]==`?`){
			printYearRange(0)
		}
	}
	if(parents.length){
		document.getElementById(`main`).innerHTML+=`<br><div id="parents"><span class="heading">Parents:</span><br></div>`
		for(i1=0;i1<parents.length;i1++){
			var parent=parents[i1]
			if(containsUppercase(parent)){
				document.getElementById(`parents`).innerHTML+=`<span class="list nolink">`+parent+`</span><br>`
			}else{
				document.getElementById(`parents`).innerHTML+=`<span class="list link" onClick=changeFocus("`+parent+`")>`+window[parent][0].join(` `)+`</span><br>`
			}
		}
	}
	if(parents.length){
		if(window[parents[0]]){
			if(window[parents[0]][3].length-1){
				document.getElementById(`main`).innerHTML+=`<br><div id="siblings"><span class="heading">Siblings:</span><br></div>`
				for(i1=0;i1<window[parents[0]][3].length;i1++){
					var sibling=window[parents[0]][3][i1]
					if(containsUppercase(sibling)){
						document.getElementById(`siblings`).innerHTML+=`<span class="list nolink">`+sibling+`</span><br>`
					}else{
						if(window[sibling][0].join(` `)==names.join(` `)){
						}else{
							document.getElementById(`siblings`).innerHTML+=`<span class="list link" onClick=changeFocus("`+sibling+`")>`+window[sibling][0].join(` `)+`</span><br>`
						}
					}
				}
			}
		}
	}
	if(children.length){
		if(window[children[0]]){
			if(window[children[0]][2].length-1){
				document.getElementById(`main`).innerHTML+=`<br><div id="spouses"><span class="heading">Spouses:</span><br></div>`
				for(i1=0;i1<window[children[0]][2].length;i1++){
					if(containsUppercase(window[children[0]][2][i1])){
						document.getElementById(`spouses`).innerHTML+=`<span class="list nolink">`+window[children[0]][2][i1]+`</span><br>`
					}else{
						if(window[window[children[0]][2][i1]][0].join(` `)==names.join(` `)){
						}else{
							document.getElementById(`spouses`).innerHTML+=`<span class="list link" onClick=changeFocus("`+window[children[0]][2][i1]+`")>`+window[window[children[0]][2][i1]][0].join(` `)+`</span><br>`
						}
					}
				}
			}
		}
	}
	if(children.length){
		document.getElementById(`main`).innerHTML+=`<br><div id="children"><span class="heading">Children:</span><br></div>`
		for(i1=0;i1<children.length;i1++){
			var child=children[i1]
			if(containsUppercase(child)){
				document.getElementById(`children`).innerHTML+=`<span class="list nolink">`+child+`</span><br>`
			}else{
				document.getElementById(`children`).innerHTML+=`<span class="list link" onClick=changeFocus("`+child+`")>`+window[child][0].join(` `)+`</span><br>`
			}
		}
	}
}
function printYearRange(year){
	if(year==-1){
		document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+` years)`
	}else if(year==0){
		document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+`-`+yearDiff+` years)`
	}else if(year==1){
		document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+yearDiff+` years)`
	}
}
function changeFocus(passedFocus){
	focus=passedFocus
	names=window[focus][0]
	timeline=window[focus][1]
	parents=window[focus][2]
	children=window[focus][3]
	renderCard()
}
function containsUppercase(string){
	return /[A-Z]/.test(string)
}