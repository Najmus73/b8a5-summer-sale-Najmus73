let total = 0;
function fullDivClick(target){
   const selectedItemName = document.getElementById('selectedItem-name')
   const itemName = target.childNodes[3].childNodes[3].innerText
   const count = selectedItemName.childElementCount;
   const li = document.createElement('li')
   
   li.innerHTML = `${count+1}. ${itemName}`;
   li.style.listStyle = 'none';
   li.style.fontSize = '19px';
   li.style.fontWeight = 'bold';
   selectedItemName.appendChild(li);

   const price = target.childNodes[3].childNodes[5].childNodes[1].innerText.split(" ")[0];
   total = total + parseInt(price);
   document.getElementById('totalPrice').innerText = total.toFixed(2) +' '+ 'Tk';
   const grandTotal = document.getElementById('grand-total');
   grandTotal.innerText = total.toFixed(2)+' '+ 'Tk';

    
   const makePurchase = document.getElementById('make-purchase');
    addEventListener('click',function(){
        if(total>0){  
            makePurchase.removeAttribute('disabled')
        }else{
            makePurchase.setAttribute('disabled');
        }
    })

     const applyBtn = document.getElementById('apply-btn');
   addEventListener('click',function(){
         if(total>=200){
            applyBtn.removeAttribute('disabled');
         }else{
            applyBtn.setAttribute('disabled');
         }
   })
      document.getElementById('go-home').addEventListener('click',function(){
         location.reload();
      })
}
const applyBtn = document.getElementById('apply-btn');
document.getElementById("input-field").addEventListener('keyup',function(inputText){
    const text = inputText.target.value;
    
        applyBtn.addEventListener('click',function(){
            if(text === 'SELL200'){
                const  sum = total/100*20;
                const discount = document.getElementById('discount');
                discount.innerText = sum.toFixed(2)+' '+ 'Tk';
                const grandTotal = document.getElementById('grand-total');
                const grandTotalAfter = total - sum;
                grandTotal.innerText = grandTotalAfter.toFixed(2)+' '+ 'Tk';
                const inputField = document.getElementById("input-field");
                inputField.value = '';

            }else{
                applyBtn.setAttribute('disabled',true);
            }
        });
     

  })
  

