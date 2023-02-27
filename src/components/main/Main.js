import alface from "../../assets/alface.png"
import  beterraba from "../../assets/beterraba.png"
import  cenoura  from "../../assets/cenoura.png"
import  cereja from "../../assets/cereja.png"
import  laranja from "../../assets/laranja.png"
import  limao from "../../assets/limao.png"
import  manga from "../../assets/manga.png"
import  tomate from "../../assets/tomate.png"
import styles from './Main.module.css'
import React from 'react'
import cart from "../../assets/ShoppingCart.png"
import MinusCircle from "../../assets/MinusCircle.png"
import PlusCircle from "../../assets/PlusCircle.png"



const frutas = [ alface,beterraba,cenoura,cereja,laranja,limao,manga,tomate ]

 function Main() {
  return (
    <div>
      <main >
         
            <div  >
              {frutas.map ((img) => {
                    return  <img  src={img}></img> 
              })}
           
           <section className={styles.carrinhoContainer}>
              <img alt="carrinho" src={cart}/>
              <h2>Arraste seu produto aqui para colocar no carrinho</h2>
            </section>
            <div className={styles.botoes}>
              <img src={MinusCircle} alt="negativo"/>
              <img src={PlusCircle} alt="positivo"/>
            </div>
            </div>
            
              


          
      </main>

      </div>
  )
}


export default Main