var search = document.getElementById("search");
var main = document.getElementById("section_main");
var types = document.getElementById("types");
var carrinho = document.getElementById("carrinho");
var carrinho_quant = document.getElementById("carrinho_quant");
var qtd = document.getElementById("qtd")
var sabores = [...document.querySelectorAll(".sabores")]
var tipo = "";
var carrinhos = [];
var whats_bt = document.getElementById("whtas_pay")
var carrinho_tela1 = document.getElementById("carrinho_tela")
var carrinho_tela = document.getElementById("carrinho_tela2")
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
var batidos = [
        {
            b_a1:"b_a1.jpg",
            b_a2:"b_a2.jpg",
            b_a3:"b_a3.jpg",
            b_a4:"b_a4.jpg",
            b_a5:"b_a5.jpg",
            b_atxt:"Ananás",
            b_aid:Math.round(Math.random()*100000000000*1010101)
        },
        {
        b_l1:"b_l1.jpg",
        b_l2:"b_l2.jpg",
        b_l3:"b_l3.jpg",
        b_l4:"b_l4.jpg",
        b_l5:"b_l5.jpg",
        b_ltxt:"Limão",
        b_lid:Math.round(Math.random()*100000000000*1010101)
        },
        {
            b_m1:"b_m1.jpg",
            b_m2:"b_m2.jpg",
            b_m3:"b_m3.jpg",
            b_m4:"b_m4.jpg",
            b_m5:"b_m5.jpg",
            b_mtxt:"Morango",
            b_mid:Math.round(Math.random()*100000000000*1010101)
        },
        {
            b_ma1:"b_ma1.jpg",
            b_ma2:"b_ma2.jpg",
            b_ma3:"b_ma3.jpg",
            b_ma4:"b_ma4.jpg",
            b_ma5:"b_ma5.jpg",
            b_matxt:"Manga",
            b_maid:Math.round(Math.random()*100000000000*1010101)
        },
        {
        b_mac1:"b_mac1.jpg",
        b_mac2:"b_mac2.jpg",
        b_mac3:"b_mac3.jpg",
        b_mac4:"b_mac4.jpg",
        b_mac5:"b_mac5.jpg",
        b_mactxt:"Maçã",
        b_macid:Math.round(Math.random()*100000000000*1010101)
        },
        {
        b_u1:"b_u1.jpg",
        b_u2:"b_u2.jpg",
        b_u3:"b_u3.jpg",
        b_u4:"b_u4.jpg",
        b_u5:"b_u5.jpg",
        b_utxt:"Uva",
        b_uid:Math.round(Math.random()*100000000000*1010101)
        }
    ];
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
                                <img src=public/bebidas/${batidos[0].b_a2} alt=>
                                <img src=public/bebidas/${batidos[0].b_a3} alt=>
                                <img src=public/bebidas/${batidos[0].b_a4} alt=>
                                <img src=public/bebidas/${batidos[0].b_a5} alt=>
                            </div>
                        </div>
                        <div class=img_batido>
                            <img src=public/bebidas/${batidos[0].b_a1} alt= srcset=>
                        </div>
                        <div>
                            <div class=description_batido>
                                <h3 style='color:rgb(236, 240, 6)'>O Melhor batido de ${batidos[0].b_atxt}</h3>
                                <p style='color:rgb(209, 165, 22)'>
                                    Uma mistura refrescante e nutritiva, o batido de abacaxi combina o sabor doce e ácido da fruta com um toque de cremosidade. Rico em vitamina C, auxilia na digestão e fortalece o sistema imunológico. Perfeito para um lanche leve, saudável e cheio de energia. Refresque-se com essa bebida deliciosa e revitalizante!.
                                </p>
                                <div class=bts_batidos>
                                    <button style='background-color:rgb(109, 107, 3)' onclick=batidos_mais(event)>+</button>
                                        <h3 data-id=${batidos[0].b_aid}>0</h3>
                                    <button style='background-color:rgb(109, 107, 3)' onclick=batidos_menos(event)>-</button>
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
                      <img src=public/bebidas/${batidos[1].b_l2} alt=>
                      <img src=public/bebidas/${batidos[1].b_l3} alt=>
                      <img src=public/bebidas/${batidos[1].b_l4} alt=>
                      <img src=public/bebidas/${batidos[1].b_l5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos[1].b_l1} alt= srcset=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(168, 231, 21)'>O Melhor batido de  ${batidos[1].b_ltxt}</h3>
                      <p style='color:rgb(90, 99, 5)'>
                        Refrescante e cítrico, o batido de limão traz um sabor vibrante e revigorante. Rico em vitamina C, ajuda a fortalecer o sistema imunológico e promove a digestão. Ideal para quem busca uma bebida leve e desintoxicante. Uma opção perfeita para começar o dia com energia e frescor!
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(73, 85, 3)'onclick=batidos_mais(event)>+</button>
                              <h3 data-id=${batidos[1].b_lid}>0</h3>
                          <button style='background-color: rgb(73, 85, 3)'onclick=batidos_menos(event)>-</button>
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
                      <img src=public/bebidas/${batidos[4].b_mac2} alt=>
                      <img src=public/bebidas/${batidos[4].b_mac3} alt=>
                      <img src=public/bebidas/${batidos[4].b_mac4} alt=>
                      <img src=public/bebidas/${batidos[4].b_mac5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos[4].b_mac1} alt=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(81, 231, 21)'>O Melhor batido de ${batidos[4].b_mactxt}</h3>
                      <p style='color: rgb(13, 99, 5)'>
                         O batido de maçã é uma opção deliciosa e saudável, combinando o sabor doce e suave da fruta com uma textura cremosa. Rico em fibras e antioxidantes, auxilia na digestão e no controle do colesterol. Uma bebida refrescante e nutritiva, ideal para um lanche ou café da manhã. Perfeito para quem busca energia e bem-estar de forma natural!
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(9, 46, 2)'onclick=batidos_mais(event)>+</button>
                              <h3 data-id=${batidos[4].b_macid}>0</h3>
                          <button style='background-color: rgb(9, 46, 2)'onclick=batidos_menos(event)>-</button>
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
                      <img src=public/bebidas/${batidos[3].b_ma2} alt=>
                      <img src=public/bebidas/${batidos[3].b_ma3} alt=>
                      <img src=public/bebidas/${batidos[3].b_ma4} alt=>
                      <img src=public/bebidas/${batidos[3].b_ma5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos[3].b_ma1} alt= srcset=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(231, 182, 21)'>O Melhor batido de  ${batidos[3].b_matxt}</h3>
                      <p style='color: rgb(99, 92, 5)'>
                        O batido de manga é uma explosão de sabor tropical, suave e doce, que traz frescor e cremosidade. Rico em vitamina A e C, ele fortalece o sistema imunológico e melhora a saúde da pele. Perfeito para hidratar e dar energia durante o dia. Uma bebida deliciosa e nutritiva que transporta você direto para o verão!
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(59, 56, 2)' onclick=batidos_mais(event)>+</button>
                              <h3 data-id=${batidos[3].b_maid}>0</h3>
                          <button style='background-color: rgb(59, 56, 2)' onclick=batidos_menos(event)>-</button>
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
                      <img src=public/bebidas/${batidos[5].b_u2} alt=>
                      <img src=public/bebidas/${batidos[5].b_u3} alt=>
                      <img src=public/bebidas/${batidos[5].b_u4} alt=>
                      <img src=public/bebidas/${batidos[5].b_u5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos[5].b_u1} alt= srcset=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(3, 12, 90)'>O Melhor batido de  ${batidos[5].b_utxt}</h3>
                      <p style='color: rgb(3, 17, 77)'>
                         O batido de uva oferece um sabor doce e refrescante, perfeito para quem busca uma bebida energética e saudável. Rico em antioxidantes, ele ajuda a combater os radicais livres e promove a saúde cardiovascular. Uma ótima escolha para um lanche nutritivo e revitalizante. Desfrute do frescor e dos benefícios das uvas em cada gole!
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(6, 1, 44)' onclick=batidos_mais(event)>+</button>
                              <h3 data-id=${batidos[5].b_uid}>0</h3>
                          <button style='background-color: rgb(6, 1, 44)' onclick=batidos_menos(event)>-</button>
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
                      <img src=public/bebidas/${batidos[2].b_m2} alt=>
                      <img src=public/bebidas/${batidos[2].b_m3} alt=>
                      <img src=public/bebidas/${batidos[2].b_m4} alt=>
                      <img src=public/bebidas/${batidos[2].b_m5} alt=>
                  </div>
              </div>
              <div class=img_batido>
                  <img src=public/bebidas/${batidos[2].b_m1} alt= srcset=>
              </div>
              <div>
                  <div class=description_batido>
                      <h3 style='color: rgb(245, 39, 73)'>O Melhor batido de  ${batidos[2].b_mtxt}</h3>
                      <p style='color: rgb(119, 6, 6)'>
                          O batido de morango é uma opção doce e cremosa, repleta de sabor e frescor. Rico em vitamina C e antioxidantes, ele fortalece o sistema imunológico e combate os radicais livres. Perfeito para um lanche nutritivo ou um café da manhã leve. Refresque-se com essa bebida deliciosa e cheia de benefícios para a saúde!
                      </p>
                      <div class=bts_batidos>
                          <button style='background-color: rgb(43, 3, 3)' onclick=batidos_mais(event)>+</button>
                              <h3 data-id=${batidos[2].b_mid}>0</h3>
                          <button style='background-color: rgb(43, 3, 3)' onclick=batidos_menos(event)>-</button>
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

function carrinho_mostra(){
    carrinho_tela.innerHTML="";
    if(carrinhos.length<1){
        alert("O seu carrinho está vazio")
    }else{
        carrinho_tela1.classList.toggle("mostra")
        carrinho_tela.classList.toggle("mostra")
        carrinhos.map((ele,pos)=>{carrinho_tela.innerHTML+=`
              <div class="itens">
                                <h2>${ele.bebida}</h2>
                                <div class="item_img">
                                    <img src=${ele.img} alt="" srcset="">
                                </div>
                                <h3 id=qtd  data-id=${ele.id}>${ele.quant}</h3>
                                <h3>Sabor a ${ele.sabor}</h3>
                                <p>
                                   ${ele.desc}
                                </p>
                                <button onclick=menos(event) data-id=${ele.id}>-</button><button  onclick=mais(event) data-id=${ele.id}>+</button>
                                <div class=bts_carrinhos>
                                </div>
                        </div>
        `;
        })
    }
}
function atualizar_carrinho_tela(params){
    carrinho_tela.innerHTML="";
    carrinhos.map((ele,pos)=>{carrinho_tela.innerHTML+=`
    
        <div class="itens">
                          <h2>${ele.bebida}</h2>
                          <div class="item_img">
                              <img src=${ele.img} alt="" srcset="">
                          </div>
                          <h3 id=qtd  data-id=${ele.id}>${ele.quant}</h3>
                          <h3>Sabor a ${ele.sabor}</h3>
                          <p>
                             ${ele.desc}
                          </p>
                          <button onclick=menos(event) data-id=${ele.id}>-</button><button  onclick=mais(event) data-id=${ele.id}>+</button>
                          <div class=bts_carrinhos>
                          </div>
                  </div>
  `;
  })
  if (carrinhos.length<1){
    carrinho_tela.classList.remove("mostra")
  }
}

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
                   <button onclick=menos(event) data-id=${ele.id}>-</button><h3 id=qtd  data-id=${ele.id}>0</h3><button  onclick=mais(event) data-id=${ele.id}>+</button>                </div>
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
                   <button onclick=menos(event) data-id=${ele.id}>-</button><h3 id=qtd  data-id=${ele.id}>0</h3><button  onclick=mais(event) data-id=${ele.id}>+</button>                </div>
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
    carrinho_mostra()
})
function  comprar(){
    carrinho_quant.innerText = carrinhos.length;
}
const mais = (elemento)=>{
    let id = elemento.target.getAttribute("data-id")
    var spans = document.querySelectorAll(".description h3")
    let h3 = null;
    let quantidade = elemento.target.parentNode.firstElementChild.nextElementSibling.nextElementSibling;
    let bebida_ = {};

    bebida.filter((beb,pos)=>{
        if(beb.id==id){ 
            bebida_ = beb
        }
    })
    spans.forEach((sp,po)=>{
            if(sp.dataset.id==id){
            h3 = sp
        }
    })
    if (carrinhos.length>0){
        let item = carrinhos.find(it=>it.id==id)
        // let item = carrinhos.find((it)=>{return it.id==id}) tambem deu
        if(item){
            item.quant++;
            quantidade.innerHTML=item.quant;
            if(h3){
                h3.innerHTML=item.quant;
            }
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
    var spans = document.querySelectorAll(".description h3")
    let h3 = null;
    spans.forEach((sp,po)=>{
        if(sp.dataset.id==id){
            h3 = sp
        }
    })
    if(!carrinhos.length<1){

       let item = carrinhos.find(ele=>ele.id==id)
       if(item){
        item.quant--
        quantidade.innerHTML=item.quant;
        if(h3){
            h3.innerHTML=item.quant
        }
        if(item.quant<1){
        let fora = carrinhos.findIndex(ele=>ele.id==item.id)
            carrinhos.splice(fora,1)
            quantidade.innerHTML=item.quant;
            comprar()
            atualizar_carrinho_tela()
        }
       }
    }
    if (carrinhos.length<1){
        carrinho_quant.innerHTML="";
        carrinho_tela1.classList.remove("mostra")
        carrinho_tela.classList.remove("mostra")
    }

}
const batidos_mais = (params)=>{
    let h3 = params.target.parentNode.firstElementChild.nextElementSibling;
    alert("Sinto muito , mas os batidos estão fora de serviço até ao momento")

}
const batidos_menos = (params)=>{
    alert("Sinto muito , mas os batidos estão fora de serviço até ao momento")
    
}

whats_bt.addEventListener("click",(evt)=>{
    let compra = [];
    if(carrinhos.length>0){
        carrinhos.map((pro,pos)=>{
            compra.push(`Bebida : ${pro.bebida} ;%20 Sabor : ${pro.sabor} ;%20 Quantidade : ${pro.quant} %0A`)
        })
    }

    let sms = compra.join(",")
    window.open(`https://wa.me/244941137038?text=Saudações carissímos! %0A Gostaria de adquirir esses items : %0A ${sms}`,"_blank")
})

tipos();