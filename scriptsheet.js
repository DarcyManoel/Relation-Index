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
	if(focus.b){
		document.getElementById(`main`).innerHTML+=`<div id="lifePoints"><span class="heading">b.</span> `+focus.b.join(`-`)+`</div>`
		if(!focus.d){
			printYearRange(focus.b,[day,month,year])
		}
		if(focus.bx){
			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.bx.join(`</span><br><span class="list">`)+`</span>`
		}
		if(focus.d){
			if(focus.b[2]==focus.d[2]){
				document.getElementById(`lifePoints`).innerHTML=`<span class="heading">b. & d.</span> `+focus.b.join(`-`)
			}else{
				document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">d.</span> `+focus.d.join(`-`)
				printYearRange(focus.b,focus.d)
				if(focus.dx){
					document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.dx.join(`</span><br><span class="list">`)+`</span>`
				}
				if(focus.bur){
					document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">bur.</span> `+focus.bur
				}
			}
		}
	}
//	if(focus.marriage){
//		document.getElementById(`lifePoints`).innerHTML+=`<br><span class="heading">m.</span> `+focus.marriage.join(`-`)
//		printYearRange(focus.b,focus.marriage)
//		if(focus.marriagePlace){
//			document.getElementById(`lifePoints`).innerHTML+=`<br><span class="list">`+focus.marriagePlace+`</span>`
//		}
//	}
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
	var spouses=[]
	if(focus.children){
		for(i1=0;i1<focus.children.length;i1++){
			if(!containsUppercase(focus.children[i1])){
				for(i2=0;i2<window[focus.children[i1]].parents.length;i2++){
					if(!spouses.includes(window[focus.children[i1]].parents[i2])){
						spouses.push(window[focus.children[i1]].parents[i2])
					}
				}
			}
		}
		if(spouses.length){
			document.getElementById(`main`).innerHTML+=`<br><div id="spouses"><span class="heading">Spouses:</span><br></div>`
		}
		for(i1=0;i1<spouses.length;i1++){
			if(containsUppercase(spouses[i1])){
				document.getElementById(`spouses`).innerHTML+=`<span class="list nolink">`+spouses[i1]+`</span><br>`
			}else{
				if(window[spouses[i1]].name==focus.name){
				}else{
					if(prevFocus[prevFocus.length-1]==spouses[i1]){
						document.getElementById(`spouses`).innerHTML+=`<span class="list link visited" onClick=changeFocus("`+spouses[i1]+`")>`+window[spouses[i1]].name+`</span><br>`
					}else{
						document.getElementById(`spouses`).innerHTML+=`<span class="list link" onClick=changeFocus("`+spouses[i1]+`")>`+window[spouses[i1]].name+`</span><br>`
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
	if(focus.works){
		document.getElementById(`main`).innerHTML+=`<br><div id="works"><span class="heading">Creative Works:</span><br></div>`
		for(i1=0;i1<focus.works.length;i1++){
			if(focus.works[i1][0]==`author`){
				document.getElementById(`works`).innerHTML+=`<span class="list">Author of <a href="writings/`+focus.works[i1][1]+`.pdf" target="_blank">`+focus.works[i1][1]+`</span></span><br>`
			}
		}
	}
	if(focus.img){
		document.getElementById(`main`).innerHTML+=`<br><div id="photos"><span class="heading">Photos:</span><br></div>`
		for(i1=0;i1<focus.img.length;i1++){
			document.getElementById(`photos`).innerHTML+=`<a href="images/photos/`+focus.img[i1]+`.jpg" target="_blank"><img src="images/photos/`+focus.img[i1]+`.jpg"></img></a>`
		}
	}
	if(focus.src){
		document.getElementById(`main`).innerHTML+=`<br><div id="sources"><span class="heading">Sources:</span><br></div>`
		for(i1=0;i1<focus.src.length;i1++){
			if(Array.isArray(focus.src[i1])){
				document.getElementById(`sources`).innerHTML+=`<span class="list"><a href="`+focus.src[i1][1]+`">`+focus.src[i1][0]+`</a></span><br>`
			}else{
				document.getElementById(`sources`).innerHTML+=`<span class="list">`+focus.src[i1]+`</span><br>`
			}
		}
	}
}
function printYearRange(start,end){
	if(end[2]){
		if(start[2]){
			var yearDiff=end[2]-start[2]
			if(!end[1]||!start[1]){
				document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+`-`+yearDiff+` years)`
			}else if(end[1]>start[1]){
				document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+yearDiff+` years)`
			}else if(end[1]<start[1]){
				document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+` years)`
			}else if(end[1]==start[1]){
				if(!end[0]||!start[0]){
					document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+`-`+yearDiff+` years)`
				}else if(end[0]>=start[0]){
					document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+yearDiff+` years)`
				}else if(end[0]<start[0]){
					document.getElementById(`lifePoints`).innerHTML+=`&nbsp;(`+(yearDiff-1)+` years)`
				}
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