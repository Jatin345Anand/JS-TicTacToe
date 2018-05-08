const GameOperation={
    isComplete:false,
    isFill:false,
    isSameRow :function(A,B,C){
        return (A.innerHTML==B.innerHTML && A.innerHTML==C.innerHTML) ?"true":"false";
    },
    isSameColumn :function(A,B,C){
        if(A.innerHTML===B.innerHTML && A.innerHTML===C.innerHTML){
            this.isFill=true;
        }
        return this.isFill;
     },
     isSameDaigonal :function(A,B,C){
        if(A.innerHTML===B.innerHTML && A.innerHTML===C.innerHTML){
            this.isFill=true;
        }
        return this.isFill;
     },
     isRow:function(A,B,C){
        if(this.isNotBlank(A) && this.isNotBlank(B) && this.isNotBlank(C)){
            if(this.isSameRow(A,B,C)){
               return true;
            }
         return false;
        } 
     },
     isColumn:function(A,B,C){
        if(this.isNotBlank(A) && this.isNotBlank(B) && this.isNotBlank(C)){
           if(this.isSameColumn(A,B,C)){
              this.isComplete=true;
           }
        }
        return this.isComplete;
       },
       isDiagonal:function(A,B,C){
        if(this.isNotBlank(A) && this.isNotBlank(B) && this.isNotBlank(C)){
           if(this.isSameDaigonal(A,B,C)){
              this.isComplete=true;
           }
        }
        return this.isComplete;
       },
     isNotBlank:function(A){
       return A.innerHTML?"true":"false";
     }
}