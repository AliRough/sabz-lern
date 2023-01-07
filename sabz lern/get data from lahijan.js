let dataOBJ=[];
function dataGeter(){
    let allNews=document.querySelector('#ctl00_cphMain_ctl01_ItemsGroupLV_table1').children[0].children  // all news in lahijan page
     for(child of allNews ){
        let isThere=child.children[0].children[0] //be some ERR here
        if(isThere){
            
            let data={id:dataOBJ.length+1, //id
                page:document.querySelector('.current').innerHTML, //pagination number
                src:child.children[0].children[0].src, 
                titelLink:child.children[1].children[0].href,
                titel:child.children[1].children[0].children[0].innerHTML
            };
            dataOBJ.push(data); 
            }
        }
    localStorage.setItem('Data',JSON.stringify(dataOBJ))
}

async function dataHandler(dataGeter,callback){
    await dataGeter()
    await callback('ctl00$cphMain$ctl01$ItemsGroupLV$DataPager$ctl02$ctl00','')  
}




for(var a=0;a<=5;a++){
    dataHandler(dataGeter,__doPostBack);
}

`کد بالا باید توی  کنسول این سایت پیست شود
 https://lahijan.ir/default_.aspx?page_=news&order=list&lang=1&sub=0&tempname=showpage&PageIdF=3&PageId=4
 `