<template>
    <header>
        <h1>
            <img src="../assets/marca-wtads.png"> <br>
            Wtards-teste

        </h1>
        <nav>
            <ol>
                <li><router-link to="/">Programação</router-link></li>
                <li><router-link to="/projetos">Projetos</router-link></li>
            </ol>
        </nav>
        <h1><img src="../assets/imagem-destaque.png" alt=""></h1>
    </header>
    
</template>
<script>
        export default {
            name: "SiteHeader"
        }
    </script>
