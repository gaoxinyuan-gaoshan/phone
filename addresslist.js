$(function () {
    let input=$('input');
    let main=$('main');
    let slide=$('.slide');


    let arr=[
        {
            name:'高心愿',tel:1803507126,py:'gaoxinyuan'
        },
        {
            name:'姜雨杏',tel:13620820563,py:'jiangyuxing'
        },
        {
            name:'荣艺煊',tel:13589675932,py:'rongyixuan'
        },
        {
            name:'范治超',tel:1375315475,py:'fangzhichao'
        },
        {
            name:'猪八戒',tel:15936522360,py:'zhubajie'
        },
        {
            name:'孙悟空',tel:15536859636,py:'sunwukong'
        },
        {
            name:'荣艺煊',tel:13589675932,py:'rongyixuan'
        },
        {
            name:'范治超',tel:1375315475,py:'fangzhichao'
        },
        {
            name:'猪八戒',tel:15936522360,py:'zhubajie'
        },
        {
            name:'孙悟空',tel:15536859636,py:'sunwukong'
        },
    ];
    input.on('input',function () {
        let val=$(this).val();
        let arr1=arr.filter(ele=>ele.name.includes(val)||ele.py.includes(val));
        render(arr1);
    })
    render(arr);
    function render(arr){
        main.empty();  //清空
        slide.empty();
        let person={
            // C:[ {},{},],
            // L:[{},]
        };
        arr.forEach(elem=>{ //elem对象
            let firstChar=elem.py.charAt(0).toUpperCase();
            if(!person[firstChar]){
                person[firstChar]=[];
            }
            person[firstChar].push(elem);
        });
        //查看对象属性，浅拷贝，将对象属性转为数组
        let keyarr=Object.keys(person).sort();
        // console.log(keyarr);
        let html1='';
        let html='';
        for(let i=0;i<keyarr.length;i++){
            let ele=keyarr[i];
            html1+=
                `
               <li>${ele}</li>
            `;
            // person[ele];
            html+=
                `
               <section>
             <h2>${ele}</h2>
            `;
            for(let j=0;j<person[ele].length;j++){
                html+=`
                 <div>
                 <a href="${person[ele][j].tel}">${person[ele][j].name}</a>
                 </div>
              `
            }
            html+=` </section>`;
            // $("section").before(`<h2>${ele}</h2>`);
            $(window).scroll( function() {
                let section=$('section');
                console.log(section.position());
            } );
            // main.empty();
            main.html(html);
            slide.html(html1);
        }
    }
});