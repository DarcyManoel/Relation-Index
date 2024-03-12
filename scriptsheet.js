const year=new Date().getFullYear()
const month=new Date().getMonth()+1
const day=new Date().getDate()
var focus=`darcy2000`
var yearDiff
function renderCard(){
	document.getElementById(`main`).innerHTML=`<div id="title">`+window[focus][0].join(` `)+`</div>`
	document.getElementById(`main`).innerHTML+=`<div id="lifePoints"><span class="heading">b.</span> `+window[focus][1][0][0].join(`-`)+`</div>`
	if(window[focus][1][0][1].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+window[focus][1][0][1]+`</span>`
	}
	yearDiff=0
	if(window[focus][1][1][0].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">m.</span> `+window[focus][1][1][0].join(`-`)
		yearDiff=window[focus][1][1][0][2]-window[focus][1][0][0][2]
		if(window[focus][1][1][0][2]==`?`||window[focus][1][0][0][2]==`?`){
		}else if(window[focus][1][1][0][1]==`?`&&window[focus][1][0][0][1]==`?`){
			printYearRange(0)
		}else if(window[focus][1][1][0][1]>window[focus][1][0][0][1]){
			printYearRange(1)
		}else if(window[focus][1][1][0][1]<window[focus][1][0][0][1]){
			printYearRange(-1)
		}else if(window[focus][1][1][0][1]==window[focus][1][0][0][1]){
			if(window[focus][1][1][0][0]>=window[focus][1][0][0][0]){
				printYearRange(1)
			}else if(window[focus][1][1][0][0]<window[focus][1][0][0][0]){
				printYearRange(-1)
			}else if(window[focus][1][1][0][0]==`?`||window[focus][1][0][0][0]==`?`){
				printYearRange(0)
			}
		}else if(window[focus][1][1][0][1]==`?`||window[focus][1][0][0][1]==`?`){
			printYearRange(0)
		}
	}
	if(window[focus][1][1][1].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+window[focus][1][1][1]+`</span>`
	}
	if(window[focus][1][2][0].length){
		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">d.</span> `+window[focus][1][2][0].join(`-`)
		yearDiff=window[focus][1][2][0][2]-window[focus][1][0][0][2]
		if(window[focus][1][2][0][2]==`?`||window[focus][1][0][0][2]==`?`){
		}else if(window[focus][1][2][0][1]==`?`&&window[focus][1][0][0][1]==`?`){
			printYearRange(0)
		}else if(window[focus][1][2][0][1]>window[focus][1][0][0][1]){
			printYearRange(1)
		}else if(window[focus][1][2][0][1]<window[focus][1][0][0][1]){
			printYearRange(-1)
		}else if(window[focus][1][2][0][1]==window[focus][1][0][0][1]){
			if(window[focus][1][2][0][0]>=window[focus][1][0][0][0]){
				printYearRange(1)
			}else if(window[focus][1][2][0][0]<window[focus][1][0][0][0]){
				printYearRange(-1)
			}else if(window[focus][1][2][0][0]==`?`||window[focus][1][0][0][0]==`?`){
				printYearRange(0)
			}
		}else if(window[focus][1][2][0][1]==`?`||window[focus][1][0][0][1]==`?`){
			printYearRange(0)
		}
		if(window[focus][1][2][1].length){
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+window[focus][1][2][1]+`</span>`
		}
		if(window[focus][1][2][2].length){
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+window[focus][1][2][2]+`</span>`
		}
	}else{
		yearDiff=year-window[focus][1][0][0][2]
		if(window[focus][1][0][0][2]==`?`){
		}else if(month>window[focus][1][0][0][1]){
			printYearRange(1)
		}else if(month<window[focus][1][0][0][1]){
			printYearRange(-1)
		}else if(month==window[focus][1][0][0][1]){
			if(day>=window[focus][1][0][0][0]){
				printYearRange(1)
			}else if(day<window[focus][1][0][0][0]){
				printYearRange(-1)
			}else if(window[focus][1][0][0][0]==`?`){
				printYearRange(0)
			}
		}else if(window[focus][1][2][0][1]==`?`||window[focus][1][0][0][1]==`?`){
			printYearRange(0)
		}
	}
	if(window[focus][2].length){
		document.getElementById(`main`).innerHTML+=`<br><div id="parents"><span class="heading">Parents:</span><br></div>`
		for(i1=0;i1<window[focus][2].length;i1++){
			if(containsUppercase(window[focus][2][i1])){
				document.getElementById(`parents`).innerHTML+=`<span class="list nolink">`+window[focus][2][i1]+`</span><br>`
			}else{
				document.getElementById(`parents`).innerHTML+=`<span class="list link" onClick=changeFocus("`+window[focus][2][i1]+`")>`+window[window[focus][2][i1]][0].join(` `)+`</span><br>`
			}
		}
	}
	if(window[focus][2].length){
		if(window[window[focus][2][0]]){
			if(window[window[focus][2][0]][3].length-1){
				document.getElementById(`main`).innerHTML+=`<br><div id="siblings"><span class="heading">Siblings:</span><br></div>`
				for(i1=0;i1<window[window[focus][2][0]][3].length;i1++){
					if(containsUppercase(window[window[focus][2][0]][3][i1])){
						document.getElementById(`siblings`).innerHTML+=`<span class="list nolink">`+window[window[focus][2][0]][3][i1]+`</span><br>`
					}else{
						if(window[window[window[focus][2][0]][3][i1]][0].join(` `)==window[focus][0].join(` `)){
						}else{
							document.getElementById(`siblings`).innerHTML+=`<span class="list link" onClick=changeFocus("`+window[window[focus][2][0]][3][i1]+`")>`+window[window[window[focus][2][0]][3][i1]][0].join(` `)+`</span><br>`
						}
					}
				}
			}
		}
	}
	if(window[focus][3].length){
		if(window[window[focus][3][0]][2].length-1){
			document.getElementById(`main`).innerHTML+=`<br><div id="spouses"><span class="heading">Spouses:</span><br></div>`
			for(i1=0;i1<window[window[focus][3][0]][2].length;i1++){
				if(containsUppercase(window[window[focus][3][0]][2][i1])){
					document.getElementById(`spouses`).innerHTML+=`<span class="list nolink">`+window[window[focus][3][0]][2][i1]+`</span><br>`
				}else{
					if(window[window[window[focus][3][0]][2][i1]][0].join(` `)==window[focus][0].join(` `)){
					}else{
						document.getElementById(`spouses`).innerHTML+=`<span class="list link" onClick=changeFocus("`+window[window[focus][3][0]][2][i1]+`")>`+window[window[window[focus][3][0]][2][i1]][0].join(` `)+`</span><br>`
					}
				}
			}
		}
	}
	if(window[focus][3].length){
		document.getElementById(`main`).innerHTML+=`<br><div id="children"><span class="heading">Children:</span><br></div>`
		for(i1=0;i1<window[focus][3].length;i1++){
			if(containsUppercase(window[focus][3][i1])){
				document.getElementById(`children`).innerHTML+=`<span class="list nolink">`+window[focus][3][i1]+`</span><br>`
			}else{
				document.getElementById(`children`).innerHTML+=`<span class="list link" onClick=changeFocus("`+window[focus][3][i1]+`")>`+window[window[focus][3][i1]][0].join(` `)+`</span><br>`
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
	renderCard()
}
function containsUppercase(string){
	return /[A-Z]/.test(string)
}