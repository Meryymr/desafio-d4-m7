<template>
    <div class="contact">
        <h1 class="text-center fw-bold my-3">Contacto</h1>
        <p class="text-center">Si tienes alguna duda o consulta, ¡contáctanos!
        </p>
        <form class="container row">
            <div class="col-12 col-md-8 col-lg-6">
                <div class="mb-3">
                    <label for="formLabel"
                        class="form-label fw-bold">Nombre</label>
                    <input type="text" class="form-control" id="nombre"
                        placeholder="Juanín Juan Harry">
                </div>
                <div class="mb-3">
                    <label for="formLabel" class="form-label fw-bold">Correo
                        Electrónico</label>
                    <input type="email" class="form-control" id="email"
                        placeholder="correodejuanin@gmail.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1"
                        class="form-label fw-bold">Mensaje</label>
                    <textarea class="form-control"
                        id="exampleFormControlTextarea1" rows="3"
                        placeholder="¡Hola! quisiera más información..."></textarea>
                </div>
                <button class="btnForm btn">Enviar</button>
            </div>
        </form>
        <div class="text-center">
            <router-link class="btn my-5" to="/">Volver al
                Inicio</router-link>
        </div>

    </div>
</template>

<script>
export default {
    name: "ContactView"
}
</script>

<style scoped>
.btn {
    background-color: rgb(185, 0, 86);
    color: white;
}

h1 {
    color: black;
}

form {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.btnForm {
    background-color: rgb(29, 155, 205);
}
</style>
