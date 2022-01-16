
function converter(infix){
	let postfix =[];
	let oper=[];
	let sym;
	function priority(x){
	  if(x==='+' || x==='-')
	     return 1 ;
	 else if(x==='*' || x==='/' ||x==='%')
	     return 2 ;
	 else if(x==='^')
		 return 3; 
	 else
		 return 0;
	}
	for(let i=0;i<infix.length;i++)
	{
		switch(infix[i])
		{
			case '(':oper.push(infix[i]);
					 break;
			case ')':while((sym=oper.pop()) !== '(')
					  postfix.push(sym);
					  
					  break;
			case '+':
			case '-':
			case '*':
			case '/':
			case '%':
			case '^':
					while(oper.length !== 0 &&  priority(oper[oper.length-1]) >= priority(infix[i]))
					postfix.push(oper.pop());
					
					oper.push(infix[i]);
					break;
			default: postfix.push(infix[i]);
		}
	}
	while(oper.length !== 0)
	 postfix.push(oper.pop());
    
	if(document.getElementById("postfix").placeholder === "Postfix Expression is...(ex:ab+)")
		document.getElementById("postfix").value= postfix.join("");
	
	if(document.getElementById("postfix").placeholder==="Prefix Expression is...(ex:+ab)")
	{
		postfix.reverse();
		document.getElementById("postfix").value= postfix.join("");
	}
}
function infixToPrefix(){
	document.getElementById("postfix").placeholder="Prefix Expression is...(ex:+ab)";
	document.getElementById("button").innerHTML="Get Prefix Expression";
	document.getElementById("prefix").style.backgroundColor="#ec9747";
	document.getElementById("post").style.backgroundColor="#fff";
	document.getElementById("post").style.color="#000";
	document.getElementById("button").onclick=function conversion(){
		let string =document.getElementById("infix").value;
		string=string.split("");
		for (let i = 0; i < string.length; i++) {
         if (string[i] === '(') {
            string[i] = ')';
            i++;
        }
        else if (string[i] === ')') {
            string[i] = '(';
            i++;
        }
      }
	   let infix=string.reverse().join("");
		converter(infix);
	};
}
function infixToPostfix(){
	document.getElementById("postfix").placeholder="Postfix Expression is...(ex:ab+)";
	document.getElementById("button").innerHTML="Get Postfix Expression";
	document.getElementById("post").style.backgroundColor="#ec9747";
	document.getElementById("prefix").style.backgroundColor="#fff";
	document.getElementById("prefix").style.color="#000";
	document.getElementById("button").onclick=function conversion(){
		let infix =document.getElementById("infix").value;
		converter(infix);
	}
}

