let col_1 = []
let col_2 = []
let count = 3
let button_clicked = 4
let countdown = document.getElementById('countdown')
countdown.innerText= `Magic will happen in : `+count + ` steps`


function shuffler(col_1,col_2){
    let C = []
    let D = []
    
    for (let x=0; x<8; x++){
      
        if (x<4){
          C.push(col_1 [ col_1.length - x -1 ] )
          C.push(col_2 [ col_2.length - x -1 ] )  
                }
      
        if(x>=4){
          D.push(col_1 [ col_1.length - x -1 ] )
          D.push(col_2 [ col_2.length - x -1 ] )  
                }
                          }
    return {C,D}
                          
  }
  

// inner html generator

function test(){
        
        button_clicked = button_clicked - 1
        // anime({
        //     targets: 'div.box.red',
        //     translateX: [
        //         { value: 120, duration: 500 },
        //         { value: 0, duration: 800 }
        //         ],
        //     rotate:{
        //     value: '1turn',
        //     easing: 'easeInOutSine'
        //     }
        //     });
        
        // anime({
        //     targets: 'div.box.blue',
        //     translateX: [
        //         { value: -120, duration: 500 },
        //         { value: 0, duration: 800 }
        //         ],
        //     rotate:{
        //     value: '1turn',
        //     easing: 'easeInOutSine'
        //     }
        //     });

        let box_red = document.getElementById("box_red");
        let box_blue = document.getElementById("box_blue")
        
        // var content = document.createTextNode("1,2,3");
        // theDiv.appendChild(content);
        
        if(document.getElementById('col_1').checked) {   
            let result = shuffler(col_1,col_2)
            col_1 = result['C']
            col_2 = result['D']
            let col_2_sentence = ``
            let col_1_sentence = ``
            for (let x=0; x<col_1.length; x++){
                col_1_sentence += col_1[x] + `<br><br>`
                col_2_sentence += col_2[x] + `<br><br>`
                                              }
           

            if (count > 0){
            count = count -1 
            countdown.innerText= `Magic will happen in : `+count + ` steps`
            box_red.innerHTML  = (`<br><b>` + col_1_sentence )
            box_blue.innerHTML =(`<b><br>` + col_2_sentence )
            }

            if (count ==0 ){
                countdown.innerText= `Select your column and click on magic : `
            }
        
        }  
               

     if(document.getElementById('col_2').checked) { 
        let result = shuffler(col_2,col_1)
        col_1 = result['C']
        col_2 = result['D']  
        var selectedValue = document.getElementById('col_2').value;  
        let col_2_sentence = ``
        let col_1_sentence = ``

            for (let x=0; x<col_1.length; x++){
                col_1_sentence += col_1[x] + `<br><br>`
                col_2_sentence += col_2[x] + `<br><br>`
                                              }
            // box_red.innerHTML  = (`<br><b>` + col_1_sentence )
            // box_blue.innerHTML = (`<br><b>` + col_2_sentence )

            if (count > 0){
                count = count -1 
                countdown.innerText= `Magic will happen in : `+count + ` steps`
                box_red.innerHTML  = (`<br><b>` + col_1_sentence )
                box_blue.innerHTML =(`<b><br>` + col_2_sentence )
                }
            if (count ==0 ){
                countdown.innerText= `Select your column and click on magic : `
            }
    
              
            
             
        
        }  
         
 }  



function play(){
    col_1 = [1,2,3,4,5,6,7,8]
    col_2 = [9,10,11,12,13,14,15,16]

    let col_2_sentence = ``
    let col_1_sentence = ``
    for (let x=0; x<col_1.length; x++){
        col_1_sentence += col_1[x] + `<br><br>`
        col_2_sentence += col_2[x] + `<br><br>`
                                      }
    box_red.innerHTML  = (`<b><br>` + col_1_sentence )
    box_blue.innerHTML =(`<b><br>` + col_2_sentence )
    count = 3
    countdown.innerText= `Magic will happen in  : `+ count + ` steps`
}

function magic(){
    if(document.getElementById('col_1').checked){
        console.log(col_1[2])
        countdown.innerText= `Magic tells us your number is : `+ col_1[2]
    }

    if(document.getElementById('col_2').checked){
        console.log(col_2[2])
        countdown.innerText= `Magic tells us your number is : `+ col_2[2]
    }




}