var search = document.getElementById("search");
var main = document.getElementById("section_main");
var types = document.getElementById("types");
var carrinho = document.getElementById("carrinho");
var carrinho_quant = document.getElementById("carrinho_quant");
var qtd = document.getElementById("qtd")
var tipo = "";
var carrinhos = [];
//630/1029
var bebida = [
    {   
        nome:"Cocacola",
        tipo:"sem_alcool",
        frase:" A mais refrescante gasificada bebida para si. Não perca mais tempo eencomende agora",
        preco:"1.000",
        img:"../public/bebidas/cocacola1.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {   
        nome:"Sprite",
        tipo:"sem_alcool",
        frase:"Das mais concorridas do mercado até aos dias de hoje",
        preco:"900",
        img:"../public/bebidas/sprite1.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {   
        nome:"Pepsi",
        tipo:"sem_alcool",
        frase:"Refrescante, Zero açucar, gasificada e muito mais",
        preco:"750",
        img:"../public/bebidas/pepsi1.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {   
        nome:"Fanta de Laranja",
        tipo:"sem_alcool",
        frase:"Com o toque especial de laranja para adoçar o teu dia",
        preco:"750",
        img:"../public/bebidas/fanta.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {   
        nome:"Fanta de Maçã",
        tipo:"sem_alcool",
        frase:"Com o toque especial de Maça , nutricional , idratante , ati-oxidante e refrescante",
        preco:"750",
        img:"../public/bebidas/fanta_maca.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },

];
var alcool = [
    {   
        nome:"Booster",
        tipo:"alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"Tigra",
        tipo:"alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"banana",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"Booster",
        tipo:"alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"Uva",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"SmiNof",
        tipo:"sem_alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"Pera",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"GiM",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        tipo:"alcool",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"Pera",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"Milk",
        tipo:"alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"Pera",
        id:Math.round(Math.random()*10000000000*1000000000)

    }
];
var sem_alcool = [
    {   
        nome:"Fanta",
        tipo:"sem_alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"manga",
                id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"Cocacola",
        tipo:"sem_alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"banana",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"Zimp",
        tipo:"sem_alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"Uva",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"Speed",
        tipo:"sem_alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"Pera",
                id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"Top",
        tipo:"sem_alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"Pera",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"Sprite",
        tipo:"sem_alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"/",
        desc:"A melhor com.....",
        sabor:"Pera",
        id:Math.round(Math.random()*10000000000*1000000000)

    }
];
var seach_bebida = [];
function tipos(params){
    if(tipo=="sem_alcool"){
        main.innerHTML="";
        sem_alcool.map((ele,pos)=>{
            main.innerHTML+=`<div class="drink">
            <div class="description">
                <h2>
                    ${ele.nome}
                </h2>
                <p>
                    ${ele.frase}
                </p>
                <div>
                    <h3><span>${ele.preco}</span>.00kz</h3>
                    <button onclick=menos(${ele.id})>-</button><h3 id=qtd>0</h3><button  onclick=mais(${ele.id})>+</button>
                </div>
            </div>
                <div class="drink_img">
                <img src=${ele.img}>
                </div>
            </div>
        `; 
        })
    }else if(tipo=="alcool"){
        main.innerHTML="";
        alcool.map((ele,pos)=>{
            main.innerHTML+=`<div class="drink">
            <div class="description">
                <h2>
                    ${ele.nome}
                </h2>
                <p> 
                    ${ele.frase}
                </p>
                <div>
                    <h3><span>${ele.preco}</span>.00kz</h3>
                    <button onclick=menos(${ele.id})>-</button><h3 id=qtd>0</h3><button  onclick=mais(${ele.id})>+</button>
                </div>
            </div>
                <div class="drink_img">
                <img src=${ele.img}>
                </div>
            </div>
        `; 
        })
    }else{
        main.innerHTML="";
        bebida.map((ele,pos)=>{
            main.innerHTML+=`<div class="drink">
            <div class="description">
                <h2>
                    ${ele.nome}
                </h2>
                <p>
                    ${ele.frase}
                </p>
                <div>
                    <h3><span>${ele.preco}</span>.00kz</h3>
                    <button onclick=menos(event) data-id=${ele.id}>-</button><h3 id=qtd  data-id=${ele.id}>0</h3><button  onclick=mais(event) data-id=${ele.id}>+</button>
                </div>
            </div>
                <div class="drink_img">
                <img src=${ele.img}>
                </div>
            </div>
            `; 
        })
    }
    console.log()
}
search.addEventListener("keyup",(evt)=>{
    seach_bebida = [];
    if(evt.target.value.length>0){
        let bb_ = bebida.filter((ele,pos)=>{return ele.nome.toLowerCase().includes(evt.target.value.toLowerCase())})
        seach_bebida.unshift(...bb_)
        console.log(bb_);
        console.log(seach_bebida);
        
        let beb = [];
            main.innerHTML="";
            seach_bebida.map((ele,pos)=>{
               main.innerHTML+=`<div class="drink">
               <div class="description">
                   <h2>
                       ${ele.nome}
                   </h2>
                   <p>
                       ${ele.frase}
                   </p>
                   <div>
                       <h3><span>${ele.preco}</span>.00kz</h3>
                       <button>-</button><h3 id=qtd>0</h3><button>+</button>
                   </div>
               </div>
                   <div class="drink_img">
                   <img src=${ele.img}>
                   </div>
               </div>
               `;
            })
    }else{
        main.innerHTML="";
        bebida.map((ele,pos)=>{
            main.innerHTML+=`<div class="drink">
            <div class="description">
                <h2>
                    ${ele.nome}
                </h2>
                <p>
                    ${ele.frase}
                </p>
                <div>
                    <h3><span>${ele.preco}</span>.00kz</h3>
                    <button>-</button><h3 id=qtd>0</h3><button>+</button>
                </div>
            </div>
                <div class="drink_img">
                <img src=${ele.img}>
                </div>
            </div>
        `;
        })
    }
    // main.innerHTML=`<div class="drink">
    //                 <div class="description">
    //                     <h2>
    //                         Booster de Banana
    //                     </h2>
    //                     <p>
    //                         A mais refrescante de todas e com o doce de manga , 
    //                         desfrute do que tu mereces
    //                     </p>
    //                     <div>
    //                         <h3><span>12.35</span>.00kz</h3>
    //                         <button>-</button><h3>1</h3><button>+</button>
    //                     </div>
    //                 </div>
    //                 <div class="drink_img">
    //                 </div>
    //             </div>
    //             `;
})
types.addEventListener("change",(evt)=>{
    console.log(evt.target.value)
    if(evt.target.value!=""){
        tipo = evt.target.value;
        tipos();
    }
})
carrinho.addEventListener("click",()=>{
    console.log(carrinhos)
})
function  comprar(){
    carrinho_quant.innerText = carrinhos.length;
}
const mais = (elemento)=>{
    let id = elemento.target.getAttribute("data-id")
    let quantidade = elemento.target.parentNode.firstElementChild.nextElementSibling.nextElementSibling;
    let bebida_ = {};
    bebida.filter((beb,pos)=>{
        if(beb.id==id){ 
            bebida_ = beb
        }
    })
    if (carrinhos.length>0){
        let item = carrinhos.find(it=>it.id==id)
        // let item = carrinhos.find((it)=>{return it.id==id}) tambem deu
        if(item){
            console.log(item)
            item.quant++;
            console.log(carrinhos)
            quantidade.innerHTML=item.quant;
        }else{
            carrinhos.push({bebida:bebida_.nome,sabor:bebida_.sabor,id:bebida_.id,quant:1,img:bebida_.img})
            quantidade.innerHTML=1;
        }
    }
    if (carrinhos.length<1){
        carrinhos.push({bebida:bebida_.nome,sabor:bebida_.sabor,id:bebida_.id,quant:1,img:bebida_.img})
        console.log("acrescentou de primeira");
        quantidade.innerHTML=1;
             
    }
    bebida_ = {};


    comprar()
}
const menos = (elemento)=>{
    let id = elemento.target.dataset.id;
    let quantidade = elemento.target.parentNode.firstElementChild.nextElementSibling.nextElementSibling;
    console.log(id);

}
tipos();