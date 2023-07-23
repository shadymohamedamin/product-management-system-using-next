//document.getElementById("id").innerHTML="hello shady";
//document.write('hello world');
//var x=document.getElementsByClassName("class");
//if(x.value===""){x.value="name";}
/*Handlebars.registerHelper("inc", function (inindex) {
    return inindex + 1
  });*/
//  Handlebars.registerHelper('print_person', function () {
//    return this.username + ' ' + this.usermail
//})

if (typeof document !== 'undefined') {
        var price=document.getElementById("price");
        var taxes=document.getElementById("taxes");
        var ads=document.getElementById("ads");
        var discount=document.getElementById("discount");
        var total=document.getElementById("in_total"); 
        var category=document.getElementById("category");
    /*title.focus();  
    title.onblur=function()
    {
        price.focus();
    }
    price.onblur=function()
    {
        taxes.focus();
    }
    taxes.onblur=function()
    {
        ads.focus();
    }
    ads.onblur=function()
    {
        discount.focus();
    }
    discount.onblur=function()
    {
        count.focus();
    }
    count.onblur=function()
    {
        category.focus();
    }*/
    
    

    price.onchange=function()
    {
        if(price.value!=""&&taxes.value!=""&&ads.value!=""&&discount.value!="")
        {
            var temp=0;
            temp=Number(price.value)+Number(taxes.value)+Number(ads.value)-Number(discount.value);
            //total.value=eval(price.value+taxes.value+ads.value-discount.value);
            total.value=temp;//eval(`${price.value}`+`${taxes.value}`+`${ads.value}`-`${discount.value}`);
        }
    }
    taxes.onchange=function()
    {
        if(price.value!=""&&taxes.value!=""&&ads.value!=""&&discount.value!="")
        {
            var temp=0;
            temp=Number(price.value)+Number(taxes.value)+Number(ads.value)-Number(discount.value);
            //total.value=eval(price.value+taxes.value+ads.value-discount.value);
            total.value=temp;//eval(`${price.value}`+`${taxes.value}`+`${ads.value}`-`${discount.value}`);
        }
    }
    ads.onchange=function()
    {
        if(price.value!=""&&taxes.value!=""&&ads.value!=""&&discount.value!="")
        {
            var temp=0;
            temp=Number(price.value)+Number(taxes.value)+Number(ads.value)-Number(discount.value);
            //total.value=eval(price.value+taxes.value+ads.value-discount.value);
            total.value=temp;//eval(`${price.value}`+`${taxes.value}`+`${ads.value}`-`${discount.value}`);
        }

    }
    discount.onchange=function()
    {
        if(price.value!=""&&taxes.value!=""&&ads.value!=""&&discount.value!="")
        {
            var temp=0;
            temp=Number(price.value)+Number(taxes.value)+Number(ads.value)-Number(discount.value);
            //total.value=eval(price.value+taxes.value+ads.value-discount.value);
            total.value=temp;//eval(`${price.value}`+`${taxes.value}`+`${ads.value}`-`${discount.value}`);
        }
    }
    var category=document.getElementById("category1");
    category.onclick=function()
    {
        document.getElementById("form_search").action="/category";
    }  
}