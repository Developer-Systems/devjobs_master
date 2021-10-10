<template>
    <div class="container">
        <!--::before-->
        <!--<div class="log area_p">

            <img class="logo" src="" alt="Imagen DejJobs">
        </div>-->
        <div class="information_content">
        <section class="content">
            <h1 class="companyName text-white">DevJobs</h1>
            <h1 class="slogan text-white-50">Conectando talentos y oportunidades</h1>

            <div class="section text-white-50">
            <article class="article">
                DevJobs es una aplicación Web, que tiene como propósito ser el puente entre  
                los mejores desarrolladores y las oportunidades laborales más interesantes. 
                Queremos contribuir positivamente a la sociedad, ayudando a los emprendedores 
                que requieren el mejor talento para adelantar sus proyectos y a los desarrolladores a conectarse 
                con los empleos más llamativos, nuestra visión poder conectar al mundo.
                

            </article>
            <br> 

            <article class="article">
                Somos concientes de la existencia de diversas plataformas de empleo, sin embargo nos destacamos porque
                somo una comunidad especializada en el talento en desarrollo de software y estamos a la vanguardia de las 
                tendencias y de las tecnologías, ofreciendo la oportunidad a las personas que han capaticado de ser visibles
                en el mercado laboral.

            </article>
            <br>

            <article class="article">
                En DevJobs hemos entendido que el papel de los desarrolladores en la sociedad es muy importante, 
                en este mundo globalizado, tenemos la responsabilidad de atender a las crecientes necesidades 
                de expasión de todos los sectores: la economía, la educación, la salud, la cultura, el deporte, la agricultura 
                no existe un campo en donde no se involucre la tecnología, y  por eso queremos ser el canal
                que facilite este proceso. 

            </article>

            <br>
            <article class="article">
                DevJobs es un sitio web para emprendedores hecho por emprendedores, los integrantes de este equipo
                nos desenvolvemos en diferentes disciplinas y aportamos nuestros conocimientos a la comunidad
                para generar un espacio intuitivo y dinámico. Hacemos parte de la <mark><b>MisiónTic UTP 2022</b></mark>
                
               <p>

                <div class="contact">
                    
                        <p>John Alexander Andrade Díaz <br>  
                        <a href="#" class="text-white-50">sistemas@johnandrade.com</a>  
                        </p>

                        <p>Juan Felipe Tamayo Ospina <br>
                        <a href="#" class="text-white-50">tamayo998@hotmail.com</a>  
                        </p>

                        <p>Juan Pablo Aguirre Martinez <br>
                        <a href="#" class="text-white-50">jpaguirre@unal.edu.com</a>  
                        </p>

                        <p>Oscar Santiago Pinilla Caicedo <br>
                        <a href="#" class="text-white-50">santiago.pinilla.45672@gmail.com</a>  
                        </p>

                        <p>Viviana Castelblanco Fajardo <br> 
                        <a href="#" class="text-white-50">vivi.c11@hotmail.com</a>
                        </p> 
                </div>
            
            </article>
            </div>
        </section>
        

        <aside class="aside_image">
            <img src="Copia.png" class="img-responsive" alt="DejJobs">
        </aside>
        </div>
    
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding:0;
}

@font-face {
    font-family: SloganFont;
    src: url(Crystal_symphony.ttf);

}

.companyName {
    font-family: "PoppinsBold.ttf";
    
  }

h1{
    display: flex;
    align-items: center;
    justify-content: center;
}

.display-1{
    src: url(PoppinsBold.ttf);
}

body{
    background: #1A1A1A;
}
.slogan{
    font-family:SloganFont;
}

.container{
    width: 1200px;
    height: 1000px;
    margin: 0.5em auto;
    padding: 0.5em;
}

.information_content{
    height: 40%;
}

.section{
    height: 95%;
    width: 70%;
    float: left;
    margin: 0.6em;
}

.aside_image{
    height: 95%;
    width: 25%;
    float: right;
    margin: 0.6em;
}

.aside_image{
    display: grid;
    align-items: center;
    justify-content: center;
}

.article{
    width: 90%;
    height: 20%;
    margin:  1em;
}

.contact{
    display: grid;
    align-items: center;
    justify-content: center;
}

.end{
    display: grid;
    align-items: center;
    justify-content: center;
}
</style>