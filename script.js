const stringLength=(Str)=>{
    if (Str.length >= 1 && Str.length <= 10) {
        return Str.length;
      } else {
        throw new Error("one error It should be in betwen 1 and 10")
      }
}

module.exports=stringLength;