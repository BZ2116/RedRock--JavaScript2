const equal = function(x,y){
if(typeof(x)==typeof(y)){
    return x===y;
    }
    else if(typeof(x)==Number&&typeof(y)==String){//3
        return x==Number(y);
    }else if(typeof(y)==Number&&typeof(x)==String){//4
        return Number(x)==y;
    }else if(typeof(x)==Boolean){//5
        return Number(x)==y;
    }else if(typeof(y)==Boolean){//6
        return x==Number(y);
    }else if(typeof(y)==Object&&( typeof(x)==String||typeof(x)==Number||typeof(x)==Symbol)){//7
        return x==Primitive(y);
    }else if(typeof(x)==Object&&( typeof(y)==String||typeof(y)==Number||typeof(y)==Symbol)){//8
        return Primitive(x)==y;
    }else if(typeof(x)==null&&typeof(y)==undefined){//1
        return true;
    }else if(typeof(x)==undefined&&typeof(y)==null){//2
        return true;
    }else{//9
        return false;
    }
}
console.log(equal(12,'a'))