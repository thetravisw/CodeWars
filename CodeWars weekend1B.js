function capitalize(s){
    let a = '', b=''
    for (var i=0; i < s.length-1; i+=2){
      a+= s[i].toUpperCase();
      a+= s[i+1];
      b+=s[i];
      b+=s[i+1].toUpperCase();
    }
    if (s.length % 2)
    {a+= s[s.length-1].toUpperCase();
    b+= s[s.length-1];}
    return [a,b];
  };

  //  Tried to do it with regex and a while loop, (see whiteboard) I figured that's what Sam wanted.  
  //  However that proved much more difficult than it sounded, so I switched to this, which truthfully
  //  is how I'd have done it in production code anyways, on account of it being far easier to read.

  //  Also, don't have a whiteboard at home, so my 'whiteboard' was done digitally.
  //  I figure that's probably frowned on, but acceptable in this case.