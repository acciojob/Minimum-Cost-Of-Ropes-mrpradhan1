function compar(a,b){
	if(a>b)
		return 1;
	else if(a<b)
		return -1;
	else
		return 0;
}

function calculateMinCost() {
  //your code here
  let str = document.getElementById("rope-lengths").value.split(",");
	let arr=str.map((str)=>perseInt(str));
  // console.log(arr);
	let total=0;
	arr=arr.sort(compar);
	while(arr.length>=2){
		let sum = arr[0]+arr[1];
		let rem=[];
		rem.push(sum);
		for(let i=2;i<arr.length;i++)
			rem.push(arr[i]);
		rem=rem.sort(compar);
		arr=[...rem];
		total=total+sum;
	}  
	console.log(total);

	let result = document.getElementById("result");
	result.innerHTML=total;
}