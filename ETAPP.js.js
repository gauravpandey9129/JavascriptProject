const form=document.querySelector('#form');
const ul=document.querySelector('#list');
form.addEventListener('submit',function (event){
    event.preventDefault();
    let amount=document.querySelector('#amount').value;
    let discription =document.querySelector('#discription').value;
    let category=document.querySelector('#category').value;

    let obj={
        Amount:`${amount}`,
        Discription:`${discription}`,
        Category:`${category}`

    }
    
    let newli=document.createElement('li');
    newli.id="li"
    let newliText=document.createTextNode(obj.Amount +" -" + obj.Category+ " -"+obj.Discription)
     newli.appendChild(newliText);
      let dltbutton=document.createElement('button');
      let dltbuttonText=document.createTextNode('Delete')
     dltbutton.appendChild(dltbuttonText);
     dltbutton.id="dltbutton";
     newli.appendChild(dltbutton);
     let editButton=document.createElement('button');
     let editButtonText=document.createTextNode('Edit');
     editButton.appendChild(editButtonText);
     newli.appendChild(editButton);

     ul.appendChild(newli);
    
     let stringifyobj=JSON.stringify(obj);
     localStorage.setItem(obj.Amount,stringifyobj);
     

     dltbutton.onclick=()=>{
        ul.removeChild(newli);
        localStorage.removeItem(obj.Amount);
     }
     
     editButton.onclick=()=>{
        ul.removeChild(newli);
        localStorage.removeItem(obj.Amount);
        document.getElementById('amount').value=amount;
        document.getElementById('discription').value=discription;
        document.getElementById('category').value=category;
     }
        

     
   


})
window.addEventListener("DOMContentLoaded",()=>{
   const LSObject=localStorage;
   const LSObjectkeys=Object.keys(LSObject);
   for(i=0;i<LSObjectkeys.length;i++){
      const key=LSObjectkeys[i];
      const string=LSObject[key];
      const userDetail=JSON.parse(string);
      show(userDetail);
      
   }

   function show(userDetail){
      let amount=document.querySelector('#amount').value;
    let discription =document.querySelector('#discription').value;
    let category=document.querySelector('#category').value;

      let newli=document.createElement('li');
      FileList.id="li"
      let newliText=document.createTextNode(userDetail.Amount +" -" + userDetail.Category+ " -"+userDetail.Discription)
       newli.appendChild(newliText);
        let dltbutton=document.createElement('button');
        let dltbuttonText=document.createTextNode('Delete')
       dltbutton.appendChild(dltbuttonText);
       dltbutton.id="dltbutton";
       newli.appendChild(dltbutton);
       let editButton=document.createElement('button');
       let editButtonText=document.createTextNode('Edit');
       editButton.appendChild(editButtonText);
       newli.appendChild(editButton);
  
       ul.appendChild(newli);

       dltbutton.onclick=()=>{
         ul.removeChild(newli);
         localStorage.removeItem(userDetail.Amount);
      }
      
      editButton.onclick=()=>{
         ul.removeChild(newli);
         localStorage.removeItem(userDetail.Amount);
         document.getElementById('amount').value=amount;
         document.getElementById('discription').value=discription;
         document.getElementById('category').value=category;
      }


   }
   
   
 })