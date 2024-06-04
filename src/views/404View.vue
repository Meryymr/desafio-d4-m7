<template>
    <header>
        <h1 class="title text-center my-5">Ups, página no encontrada</h1>
        <div class="d-flex justify-content-center">
            <img class="notFound w-25" src="../assets/img/notFound.svg" alt="">
        </div>
        <div class="text-center">
            <router-link class="btn my-5" to="/">Volver al
                Inicio</router-link>
        </div>
    </header>
</template>

<script>
</script>

<style scoped>
.title {
    color: rgb(160, 0, 102);
}

.notFound {
    display: flex;
    justify-content: center
}

.btn {
    background-color: rgb(150, 0, 60);
    color: white;
}
</style>