<template>
    <div class="container my-5 pb-3">
        <div class="my-4">
            <h2 class="text-center title">Kontaktirajte nas</h2>
            <p>Ukoliko imate bilo kakvih pitanja osjećajte se slobodno da nas kontaktirate putem kontakt forme ispod. Trudit ćemo se da Vam odgovorimo u najbržem mogućem roku.</p>
        </div>
        <div class="row justify-content-center">
            <div class="d-none d-md-block col-12 col-md-6 d-flex flex-column justify-content-around">
                <div class="row justify-content-center">
                    <img src="@/assets/img/logo.png" alt="Logo" class="w-50">
                </div>
            </div>
            <div class="col-12 col-md-6 d-flex flex-column justify-content-around">
                <form>
                    <div class="form-group">
                        <label for="name">Ime i prezime</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                        <label for="email">Email adresa</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="name@example.com">
                    </div>
                    <div class="form-group">
                        <label for="question">Vaše pitanje</label>
                        <textarea class="form-control" id="question" rows="5" name="question"></textarea>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: black;
}
</style>