const prioritets={
	'(':0,
	')':1,
	'^':2,
	'*':3,
	'/':3,
	'+':4,
	'-':4,
}
function getLexems(str){
	const subAr=[]
	let n=''
	str.split('').forEach((el,i) => {
		if(isNaN(+el)){
			subAr.push(el)
			return
		}
		if(!isNaN(+str[i+1]))n+=el
		else{
			subAr.push(n+el)
			n=''
		}

	});
	return subAr
}
function leftPolishString(str){
	const strLexAr=getLexems(str)
	let output=[]
	const stack=[]
	strLexAr.forEach((el)=>{
		if(!isNaN(+el)){
			output.push(+el)
		}else{
			if(stack.length===0){
				stack.push(el)
				return
			}
			const getCurPr=prioritets[el]
			const getPrevPr=prioritets[stack[stack.length-1]]
			if(getCurPr===1){
				const openInd=stack.indexOf('(')
				const s=stack.splice(openInd+1)
				output.push(...s)
				stack.pop()
				return
			}
			if(getCurPr>getPrevPr){
				if(getPrevPr===0) {
					stack.push(el)
					return
				}
				const findOpenBracket=stack.indexOf('(')
				if(findOpenBracket>=0){
					const e=stack.splice(findOpenBracket+1)
					output.push(...e)
				}
				else{
					const findStartPoint= stack.findIndex((e,i)=>prioritets[e]<getCurPr)
					const splEls=stack.splice(findStartPoint)
					output.push(...splEls)
					//	stack.length=0
				}
				stack.push(el)
			}else{
				//	console.log(el,'##',stack)
				stack.push(el)
			}
		}
	})
	output.push(...stack.reverse())
	return output
}
export default function polishNotation(str){
	const dataForCalc=(leftPolishString(str))
	let currentIndex=0
	const actions={
		'/':(a,b)=>a/b,
		'*':(a,b)=>a*b,
		'+':(a,b)=>a+b,
		'-':(a,b)=>a-b
	}
	do{
		if(typeof dataForCalc[currentIndex]==='string'){
			const calc = actions[dataForCalc[currentIndex]](dataForCalc[currentIndex-2], dataForCalc[currentIndex-1])
			dataForCalc.splice(currentIndex-2,3,calc)
			currentIndex-=2
		}else{
			currentIndex++
		}

	}while (currentIndex<dataForCalc.length)
	return dataForCalc[0]
}
