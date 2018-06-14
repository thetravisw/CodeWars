//Short answer

gimme = (input) => input.indexOf(input.slice(0,3).sort((a, b) => a - b)[1])


//Legible answer

function gimme (input) {
    let at0 = input[0]
    let at1 = input[1]
    let at2 = input[2]
  
    if((at0 > at1 && at1 > at2) || (at2 > at1 && at1 >at0)){ return 1}
    if((at0 > at2 && at2 > at1) || (at1 > at2 && at2 >at0)){ return 2}
    return 0
  }

//  The short answer is reasonably close to the whiteboard plan.  The legible answer is nothing at all like it.