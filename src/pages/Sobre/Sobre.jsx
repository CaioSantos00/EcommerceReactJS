import React from 'react';
import Header from '../../assets/Components/Header/Header';
import '../../assets/Sass/style.scss'
import './Sobre.scss'
import Footer from '../../assets/Components/Footer/Footer';
export default function Sobre() {
    return (
        <>
        <Header/>
        <main>
            <section id='sections'>
                <div id='divHoldSobre'>
                <div className='titlesForms'>Sobre</div>
                    <div id='textSobre'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex ipsum, a omnis quo tenetur provident ducimus dolore culpa numquam distinctio adipisci atque labore modi! Labore molestiae recusandae blanditiis incidunt sint.
                        Voluptates, saepe? Quis, incidunt, ut iusto ex totam assumenda hic commodi et porro beatae aut ad itaque, consequatur sunt eveniet in eos ipsum perferendis alias magni. Nulla modi sint consequuntur?
                        <div id='divImg'>
                        <img src="" alt="Foto" />
                    </div>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex quos repellat nemo. Praesentium ullam ipsam, enim, recusandae exercitationem aspernatur repellendus in maxime quia itaque a sapiente quis illum pariatur.
                    Suscipit dolores molestias maiores ipsa, autem odit accusantium corrupti dolore quasi praesentium esse laborum. Eum rerum aperiam fugit eos vero facere maxime deleniti quae id eveniet similique, molestiae, cupiditate laudantium?
                    Cumque dolores, quaerat facere odio similique ex assumenda a labore tempore quos nisi laudantium nam, numquam dolorum unde voluptatem culpa eveniet ipsa. Vel facere nam laboriosam reprehenderit numquam distinctio sapiente?
                    </div>

                    
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}