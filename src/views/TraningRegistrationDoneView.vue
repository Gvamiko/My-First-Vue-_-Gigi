<template>
    <div>
        <Header/>
        <div>
            <div class="container d-flex justify-content-center align-item-center mt-5">
            <div class="row mt-5">
            <div class="col-12 text-center mt-5">  
                <img src="@/assets/images/done.png" alt="icon">
            </div>
            <div class="row mt-1">
                <div class="col-12 text mb-5">
                <h5><b>თქვენ წარმატებით გაიარეთ რეგისტრაცია</b></h5>
                </div>
            </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
      import Header from '@/components/Header.vue'
      import Footer from '@/components/Footer.vue'
      export default {
        name: 'TraningRegistrationdone',
        components: {
          Header,
          Footer
        }
      }
</script>