var search = document.getElementById("search");
var main = document.getElementById("section_main");
var types = document.getElementById("types");
var carrinho = document.getElementById("carrinho");
var carrinho_quant = document.getElementById("carrinho_quant");
var qtd = document.getElementById("qtd")
var sabores = [...document.querySelectorAll(".sabores")]
var tipo = "";
var carrinhos = [];
//630/1029
var bebida = [
    {   
        nome:"Cocacola",
        tipo:"sem_alcool",
        frase:" A mais refrescante gasificada bebida para si. Não perca mais tempo eencomende agora",
        preco:"1.000",
        img:"public/bebidas/cocacola1.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {   
        nome:"Sprite",
        tipo:"sem_alcool",
        frase:"Das mais concorridas do mercado até aos dias de hoje",
        preco:"900",
        img:"public/bebidas/sprite1.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {   
        nome:"Pepsi",
        tipo:"sem_alcool",
        frase:"Refrescante, Zero açucar, gasificada e muito mais",
        preco:"750",
        img:"public/bebidas/pepsi1.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {   
        nome:"Fanta de Laranja",
        tipo:"sem_alcool",
        frase:"Com o toque especial de laranja para adoçar o teu dia",
        preco:"750",
        img:"public/bebidas/fanta.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {   
        nome:"Fanta de Maçã",
        tipo:"sem_alcool",
        frase:"Com o toque especial de Maça , nutricional , idratante , ati-oxidante e refrescante",
        preco:"750",
        img:"public/bebidas/fanta_maca.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },

    {   
        nome:"SMIRNOFF",
        tipo:"alcool",
        frase:" Smirnof, com baixa consentração de alcool e ideal para lazer em família e amigos",
        preco:23.34,
        img:"public/bebidas/smi1.png",
        desc:"A melhor com.....",
        sabor:"manga",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"RAD LABEL",
        tipo:"alcool",
        frase:" RAD LABEL, chick, resuzente, elegante e totalmente da pura e refinada mercadoria para os de alta class",
        preco:23.34,
        img:"public/bebidas/leb1.png",
        desc:"A melhor com.....",
        sabor:"banana",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"HEINEKEN",
        tipo:"alcool",
        frase:" HEINEKEN , a bebida top estrela para os Top...",
        preco:23.34,
        img:"public/bebidas/hei1.png",
        desc:"A melhor com.....",
        sabor:"Uva",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"ANTARTICA",
        tipo:"alcool",
        frase:" A mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"public/bebidas/ant1.png",
        desc:"A melhor com.....",
        sabor:"Pera",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"SKYY",
        frase:" Direito para o cêu com a SKYY  dentre as mais refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        tipo:"alcool",
        preco:23.34,
        img:"public/bebidas/sky1.png",
        desc:"A melhor com.....",
        sabor:"Pera",
        id:Math.round(Math.random()*10000000000*1000000000)

    },
    {
        nome:"JACK DANIELS",
        tipo:"alcool",
        frase:" JACK DANIELS Elegância e refrescante de todas e com o doce de manga , desfrute do que tu mereces",
        preco:23.34,
        img:"public/bebidas/jack1.png",
        desc:"A melhor com.....",
        sabor:"Pera",
        id:Math.round(Math.random()*10000000000*1000000000)

    },

];
var alcool = [

];
var sem_alcool = [

];
var batidos = {
        b_a1:"b_a1.jpg",
        b_a2:"b_a2.jpg",
        b_a3:"b_a3.jpg",
        b_a4:"b_a4.jpg",
        b_a5:"b_a5.jpg",
        b_atxt:"Ananás",

        b_l1:"b_l1.jpg",
        b_l2:"b_l2.jpg",
        b_l3:"b_l3.jpg",
        b_l4:"b_l4.jpg",
        b_l5:"b_l5.jpg",
        b_ltxt:"Limão",

        b_m1:"b_m1.jpg",
        b_m2:"b_m2.jpg",
        b_m3:"b_m3.jpg",
        b_m4:"b_m4.jpg",
        b_m5:"b_m5.jpg",
        b_mtxt:"Morango",

        b_ma1:"b_ma1.jpg",
        b_ma2:"b_ma2.jpg",
        b_ma3:"b_ma3.jpg",
        b_ma4:"b_ma4.jpg",
        b_ma5:"b_ma5.jpg",
        b_matxt:"Manga",

        b_mac1:"b_mac1.jpg",
        b_mac2:"b_mac2.jpg",
        b_mac3:"b_mac3.jpg",
        b_mac4:"b_mac4.jpg",
        b_mac5:"b_mac5.jpg",
        b_mactxt:"Maçã",

        b_u1:"b_u1.jpg",
        b_u2:"b_u2.jpg",
        b_u3:"b_u3.jpg",
        b_u4:"b_u4.jpg",
        b_u5:"b_u5.jpg",
        b_utxt:"Uva",
    
    };
var xx = [
    {
        b_a2:"b_a2.jpg",
        b_a3:"b_a3.jpg",
        b_a4:"b_a4.jpg",
        b_a5:"b_a5.jpg",
    },
];
var seach_bebida = [];
function sabor(params){
    if(params=="ananas"){
        main.innerHTML=`
            	  <section class=batidos>
                        <div>
                            <div class=options>
                                <img src=public/bebidas/${batidos.b_a2} alt=>
                                <img src=public/bebidas/${batidos.b_a3} alt=>
                                <img src=public/bebidas/${batidos.b_a4} alt=>
                                <img src=public/bebidas/${batidos.b_a5} alt=>
                            </div>
                        </div>
                        <div class=img_batido>
                            <img src=public/bebidas/${batidos.b_a1} alt= srcset=>
                        </div>
                        <div>
                            <div class=description_batido>
                                <h3 style='color:rgb(236, 240, 6)'>O Melhor batido de ${batidos.b_atxt}</h3>
                                <p style='color:rgb(209, 165, 22)'>
                                    Lorem ipsum dolor sit amet consectetur, 
                                    adipisicing elit. Quaerat asperiores blanditiis,
                                    facere tempora totam excepturi eligendi molestias tempore rerum.
                                </p>
                                <div class=bts_batidos>
                                    <button style='background-color:rgb(109, 107, 3)'>+</button>
                                        <h3>0</h3>
                                    <button style='background-color:rgb(109, 107, 3)'>-</button>
                                </div>
                            </div>
                        </div>
                    </section>
        `;
    }else  if(params=="limao"){
        main.innerHTML=`
        <section class=batidos>
              <div>
                  <div class=options>
                      <img src=public/bebidas/${batidos.b_l2} alt=>
                      <img src=public/bebidas/${batidos.b_l3} alt=>
                      <img src=public/bebidas/${batidos.b_l4} alt=>
                      <img src=public/bebidas/${batidos.b_l5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos.b_l1} alt= srcset=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(168, 231, 21)'>O Melhor batido de  ${batidos.b_ltxt}</h3>
                      <p style='color:rgb(90, 99, 5)'>
                          Lorem ipsum dolor sit amet consectetur, 
                          adipisicing elit. Quaerat asperiores blanditiis,
                          facere tempora totam excepturi eligendi molestias tempore rerum.
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(73, 85, 3)'>+</button>
                              <h3>0</h3>
                          <button style='background-color: rgb(73, 85, 3)'>-</button>
                      </div>
                  </div>
              </div>
          </section>
`;
    }else if(params=="maca"){
        main.innerHTML=`
        <section class=batidos>
              <div>
                  <div class=options>
                      <img src=public/bebidas/${batidos.b_mac2} alt=>
                      <img src=public/bebidas/${batidos.b_mac3} alt=>
                      <img src=public/bebidas/${batidos.b_mac4} alt=>
                      <img src=public/bebidas/${batidos.b_mac5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos.b_mac1} alt=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(81, 231, 21)'>O Melhor batido de ${batidos.b_mactxt}</h3>
                      <p style='color: rgb(13, 99, 5)'>
                          Lorem ipsum dolor sit amet consectetur, 
                          adipisicing elit. Quaerat asperiores blanditiis,
                          facere tempora totam excepturi eligendi molestias tempore rerum.
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(9, 46, 2)'>+</button>
                              <h3>0</h3>
                          <button style='background-color: rgb(9, 46, 2)'>-</button>
                      </div>
                  </div>
              </div>
          </section>
        `;
    }else if(params=="manga"){
        main.innerHTML=`
        <section class=batidos>
              <div>
                  <div class=options>
                      <img src=public/bebidas/${batidos.b_ma2} alt=>
                      <img src=public/bebidas/${batidos.b_ma3} alt=>
                      <img src=public/bebidas/${batidos.b_ma4} alt=>
                      <img src=public/bebidas/${batidos.b_ma5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos.b_ma1} alt= srcset=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(231, 182, 21)'>O Melhor batido de  ${batidos.b_matxt}</h3>
                      <p style='color: rgb(99, 92, 5)'>
                          Lorem ipsum dolor sit amet consectetur, 
                          adipisicing elit. Quaerat asperiores blanditiis,
                          facere tempora totam excepturi eligendi molestias tempore rerum.
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(59, 56, 2)'>+</button>
                              <h3>0</h3>
                          <button style='background-color: rgb(59, 56, 2)'>-</button>
                      </div>
                  </div>
              </div>
          </section>
        `;
    }else if(params=="uva"){
        main.innerHTML=`
        <section class=batidos>
              <div>
                  <div class=options>
                      <img src=public/bebidas/${batidos.b_u2} alt=>
                      <img src=public/bebidas/${batidos.b_u3} alt=>
                      <img src=public/bebidas/${batidos.b_u4} alt=>
                      <img src=public/bebidas/${batidos.b_u5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos.b_u1} alt= srcset=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(3, 12, 90)'>O Melhor batido de  ${batidos.b_utxt}</h3>
                      <p style='color: rgb(3, 17, 77)'>
                          Lorem ipsum dolor sit amet consectetur, 
                          adipisicing elit. Quaerat asperiores blanditiis,
                          facere tempora totam excepturi eligendi molestias tempore rerum.
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(6, 1, 44)'>+</button>
                              <h3>0</h3>
                          <button style='background-color: rgb(6, 1, 44)'>-</button>
                      </div>
                  </div>
              </div>
          </section>
        `;
    }else if(params=="morango"){
        main.innerHTML=`
        <section class=batidos>
              <div>
                  <div class=options>
                      <img src=public/bebidas/${batidos.b_m2} alt=>
                      <img src=public/bebidas/${batidos.b_m3} alt=>
                      <img src=public/bebidas/${batidos.b_m4} alt=>
                      <img src=public/bebidas/${batidos.b_m5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos.b_m1} alt= srcset=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(245, 39, 73)'>O Melhor batido de  ${batidos.b_mtxt}</h3>
                      <p style='color: rgb(119, 6, 6)'>
                          Lorem ipsum dolor sit amet consectetur, 
                          adipisicing elit. Quaerat asperiores blanditiis,
                          facere tempora totam excepturi eligendi molestias tempore rerum.
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(43, 3, 3)'>+</button>
                              <h3>0</h3>
                          <button style='background-color: rgb(43, 3, 3)'>-</button>
                      </div>
                  </div>
              </div>
          </section>
        `;
    }   
}
sabores.map((ele,pos)=>{
    ele.addEventListener("click",(evt)=>{
        sabor(evt.target.alt)
    })
})


function tipos(params){
    if(tipo=="sem_alcool"){
        bebida.filter((beb,pos)=>{
            if(beb.tipo=="sem_alcool"){
                sem_alcool.unshift(beb)
            }else{
                
            }
        })
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
        bebida.filter((beb,pos)=>{
            if(beb.tipo=="alcool"){
                alcool.unshift(beb)
            }else{
                
            }
        })
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
        // types.setAttribute("value","Escolher")
        tipo=""
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
    console.log();
    if(!carrinhos.length<1){
        console.log(carrinhos)

       let item = carrinhos.find(ele=>ele.id==id)
       if(item){
        item.quant--
        quantidade.innerHTML=item.quant;
        if(item.quant<1){
        let fora = carrinhos.findIndex(ele=>ele.id==item.id)
            carrinhos.splice(fora,1)
            quantidade.innerHTML=0;
            comprar()
        }
       }
    }

}
tipos();