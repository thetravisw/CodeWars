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

  //  Tried to do it with regex and a while loop, as I figured that's what Sam wanted.  Apparently doing that is much harder than it sounds.