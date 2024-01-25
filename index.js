const form=document.querySelector('#form');
const ul= document.querySelector('#ul');
let onep=0;
    let twop=0;
    let threep=0;
    let fourp=0;
    let fivep=0;
let div=document.querySelector('#totalratings')
form.addEventListener('submit',function(event){
    event.preventDefault();
    let name=document.querySelector('#name').value;
    let rating=document.querySelector('#rating').value;
    

    if(rating==1){
        onep+=1;
        
       let p=document.querySelector('#one');
       div.removeChild(p);
       let newp=document.createElement('p');
       let newpText=document.createTextNode(`*${onep}`);
       newp.appendChild(newpText);
       newp.id='one';
       let betweene=document.querySelector('#two');
       div.insertBefore(newp,betweene)
    }
    if(rating==2){
        twop+=1;
        
       let p=document.querySelector('#two');
       div.removeChild(p);
       let newp=document.createElement('p');
       let newpText=document.createTextNode(`**${twop}`);
       newp.appendChild(newpText);
       newp.id='two';
       
      let  betweene=document.querySelector('#three')
       div.insertBefore(newp,betweene)
    }
    if(rating==3){
        threep+=1;
        
       let p=document.querySelector('#three');
       div.removeChild(p);
       let newp=document.createElement('p');
       let newpText=document.createTextNode(`***${threep}`);
       newp.appendChild(newpText);
       newp.id='three';
       
      let  betweene=document.querySelector('#four')
       div.insertBefore(newp,betweene)
    }
    if(rating==4){
        fourp+=1;
        
       let p=document.querySelector('#four');
       div.removeChild(p);
       let newp=document.createElement('p');
       let newpText=document.createTextNode(`****${fourp}`);
       newp.appendChild(newpText);
       newp.id='four';
       
      let  betweene=document.querySelector('#five')
       div.insertBefore(newp,betweene)
    }
    if(rating==5){
        fivep+=1;
        
       let p=document.querySelector('#five');
       div.removeChild(p);
       let newp=document.createElement('p');
       let newpText=document.createTextNode(`*****${fivep}`);
       newp.appendChild(newpText);
       newp.id='five';
       
      let  betweene=document.querySelector('#six')
       div.insertBefore(newp,betweene)
    }

    
    let ci="";
    axios.post(" https://crudcrud.com/api/d05e4b0481ee492ca481a1641501cd25/data ",{
        "name":`"${name}"`,
        "rating":`"${rating}"`
        }).then((response)=>{
         ci= response.data._id;
         const newli=document.createElement('li');
        newliText=document.createTextNode(`${name}--${rating}`);
        newli.appendChild(newliText);
        newli.id="li";
       newli.className=`${ci}`
      let dltbutton=document.createElement('button');
      let dltbuttonText=document.createTextNode('Delete')
     dltbutton.appendChild(dltbuttonText);
     dltbutton.id="dltbutton";
     newli.appendChild(dltbutton);
     let editButton=document.createElement('button');
     let editButtonText=document.createTextNode('Edit');
     editButton.appendChild(editButtonText);
     newli.appendChild(editButton);
      ul.appendChild(newli)
      dltbutton.onclick=(event)=>{
        ul.removeChild(newli);
        let toDelete=event.target.parentElement.className;
        axios.delete(`https://crudcrud.com/api/d05e4b0481ee492ca481a1641501cd25/data/${toDelete}`)
        .then((response)=>{
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
        if(rating==1){
            onep-=1;
            
           let p=document.querySelector('#one');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`*${onep}`);
           newp.appendChild(newpText);
           newp.id='one';
           let betweene=document.querySelector('#two');
           div.insertBefore(newp,betweene)
        }
        if(rating==2){
            twop-=1;
            
           let p=document.querySelector('#two');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`**${twop}`);
           newp.appendChild(newpText);
           newp.id='two';
           
          let  betweene=document.querySelector('#three')
           div.insertBefore(newp,betweene)
        }
        if(rating==3){
            threep-=1;
            
           let p=document.querySelector('#three');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`***${threep}`);
           newp.appendChild(newpText);
           newp.id='three';
           
          let  betweene=document.querySelector('#four')
           div.insertBefore(newp,betweene)
        }
        if(rating==4){
            fourp-=1;
            
           let p=document.querySelector('#four');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`****${fourp}`);
           newp.appendChild(newpText);
           newp.id='four';
           
          let  betweene=document.querySelector('#five')
           div.insertBefore(newp,betweene)
        }
        if(rating==5){
            fivep-=1;
            
           let p=document.querySelector('#five');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`*****${fivep}`);
           newp.appendChild(newpText);
           newp.id='five';
           
          let  betweene=document.querySelector('#six')
           div.insertBefore(newp,betweene)
        }
        
     }
        

        editButton.onclick=(event)=>{
            let toDelete=event.target.parentElement.className;
            axios.delete(`https://crudcrud.com/api/d05e4b0481ee492ca481a1641501cd25/data/${toDelete}`)
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
           ul.removeChild(newli);
           document.getElementById('name').value=name;
           document.getElementById('rating').value=rating;
           
       
        if(rating==1){
            onep-=1;
            
           let p=document.querySelector('#one');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`*${onep}`);
           newp.appendChild(newpText);
           newp.id='one';
           let betweene=document.querySelector('#two');
           div.insertBefore(newp,betweene)
        }
        if(rating==2){
            twop-=1;
            
           let p=document.querySelector('#two');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`**${twop}`);
           newp.appendChild(newpText);
           newp.id='two';
           
          let  betweene=document.querySelector('#three')
           div.insertBefore(newp,betweene)
        }
        if(rating==3){
            threep-=1;
            
           let p=document.querySelector('#three');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`***${threep}`);
           newp.appendChild(newpText);
           newp.id='three';
           
          let  betweene=document.querySelector('#four')
           div.insertBefore(newp,betweene)
        }
        if(rating==4){
            fourp-=1;
            
           let p=document.querySelector('#four');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`****${fourp}`);
           newp.appendChild(newpText);
           newp.id='four';
           
          let  betweene=document.querySelector('#five')
           div.insertBefore(newp,betweene)
        }
        if(rating==5){
            fivep-=1;
            
           let p=document.querySelector('#five');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`*****${fivep}`);
           newp.appendChild(newpText);
           newp.id='five';
           
          let  betweene=document.querySelector('#six')
           div.insertBefore(newp,betweene)
        }
        
     }

        })
        .catch((err)=>{
        console.log(err)
        
        
    })
    
    
    
    
    



})
window.addEventListener('DOMContentLoaded',()=>{
    axios.get("https://crudcrud.com/api/d05e4b0481ee492ca481a1641501cd25/data")
    .then((response)=>{
        
        for(let i=0;i<response.data.length;i++){
           let rename=(response.data[i].name);
           let rerating=(response.data[i].rating);
           let id=(response.data[i]._id);
           

          if(rerating=="\"1\""){
            onep+=1;
            
           let p=document.querySelector('#one');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`*${onep}`);
           newp.appendChild(newpText);
           newp.id='one';
           
           let betweene=document.querySelector('#two');
           div.insertBefore(newp,betweene)
         }
          if(rerating=="\"2\""){
        
            twop+=1;
            
           let p=document.querySelector('#two');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`**${twop}`);
           newp.appendChild(newpText);
           newp.id='two';
           
          let  betweene=document.querySelector('#three')
           div.insertBefore(newp,betweene)
        }
        if(rerating=="\"3\""){
            threep+=1;
            
           let p=document.querySelector('#three');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`***${threep}`);
           newp.appendChild(newpText);
           newp.id='three';
           
          let  betweene=document.querySelector('#four')
           div.insertBefore(newp,betweene)
        }
        if(rerating=="\"4\""){
            fourp+=1;
            
           let p=document.querySelector('#four');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`****${fourp}`);
           newp.appendChild(newpText);
           newp.id='four';
           
          let  betweene=document.querySelector('#five')
           div.insertBefore(newp,betweene)
        }
        if(rerating=="\"5\""){
            fivep+=1;
            
           let p=document.querySelector('#five');
           div.removeChild(p);
           let newp=document.createElement('p');
           let newpText=document.createTextNode(`*****${fivep}`);
           newp.appendChild(newpText);
           newp.id='five';
           
          let  betweene=document.querySelector('#six')
           div.insertBefore(newp,betweene)
        }
              
            const newli=document.createElement('li');
            newliText=document.createTextNode(`${rename}--${rerating}`);
           newli.appendChild(newliText);
            newli.id="li"
            newli.className=`${id}`
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

            dltbutton.onclick=(event)=>{
                
                ul.removeChild(newli);
                axios.delete(`https://crudcrud.com/api/d05e4b0481ee492ca481a1641501cd25/data/${id}`)
                .then(response)
                .catch((error)=>{
                    console.log(error)
                })
                if(rerating=="\"1\""){
                    onep-=1;
                    
                   let p=document.querySelector('#one');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`*${onep}`);
                   newp.appendChild(newpText);
                   newp.id='one';
                   let betweene=document.querySelector('#two');
                   div.insertBefore(newp,betweene)
                }
                if(rerating=="\"2\""){
                    twop-=1;
                    
                   let p=document.querySelector('#two');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`**${twop}`);
                   newp.appendChild(newpText);
                   newp.id='two';
                   
                  let  betweene=document.querySelector('#three')
                   div.insertBefore(newp,betweene)
                }
                if(rerating=="\"3\""){
                    threep-=1;
                    
                   let p=document.querySelector('#three');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`***${threep}`);
                   newp.appendChild(newpText);
                   newp.id='three';
                   
                  let  betweene=document.querySelector('#four')
                   div.insertBefore(newp,betweene)
                }
                if(rerating=="\"4\""){
                    fourp-=1;
                    
                   let p=document.querySelector('#four');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`****${fourp}`);
                   newp.appendChild(newpText);
                   newp.id='four';
                   
                  let  betweene=document.querySelector('#five')
                   div.insertBefore(newp,betweene)
                }
                if(rerating=="\"5\""){
                    fivep-=1;
                    
                   let p=document.querySelector('#five');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`*****${fivep}`);
                   newp.appendChild(newpText);
                   newp.id='five';
                   
                  let  betweene=document.querySelector('#six')
                   div.insertBefore(newp,betweene)
                }
                
             }
        
             editButton.onclick=()=>{
                ul.removeChild(newli);
                   document.getElementById('name').value=rename;
                   document.getElementById('rating').value=rerating;
                   axios.delete(`https://crudcrud.com/api/d05e4b0481ee492ca481a1641501cd25/data/${id}`)
                .then(response)
                .catch((error)=>{
                    console.log(error)
                })
                if(rerating=="\"1\""){
                    onep-=1;
                    
                   let p=document.querySelector('#one');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`*${onep}`);
                   newp.appendChild(newpText);
                   newp.id='one';
                   let betweene=document.querySelector('#two');
                   div.insertBefore(newp,betweene)
                }
                if(rerating=="\"2\""){
                    twop-=1;
                    
                   let p=document.querySelector('#two');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`**${twop}`);
                   newp.appendChild(newpText);
                   newp.id='two';
                   
                  let  betweene=document.querySelector('#three')
                   div.insertBefore(newp,betweene)
                }
                if(rerating=="\"3\""){
                    threep-=1;
                    
                   let p=document.querySelector('#three');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`***${threep}`);
                   newp.appendChild(newpText);
                   newp.id='three';
                   
                  let  betweene=document.querySelector('#four')
                   div.insertBefore(newp,betweene)
                }
                if(rerating=="\"4\""){
                    fourp-=1;
                    
                   let p=document.querySelector('#four');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`****${fourp}`);
                   newp.appendChild(newpText);
                   newp.id='four';
                   
                  let  betweene=document.querySelector('#five')
                   div.insertBefore(newp,betweene)
                }
                if(rerating=="\"5\""){
                    fivep-=1;
                    
                   let p=document.querySelector('#five');
                   div.removeChild(p);
                   let newp=document.createElement('p');
                   let newpText=document.createTextNode(`*****${fivep}`);
                   newp.appendChild(newpText);
                   newp.id='five';
                   
                  let  betweene=document.querySelector('#six')
                   div.insertBefore(newp,betweene)
                }
                
             }
            
    
        }
    }).catch((error)=>{
        console.log(error)
    })
   
})