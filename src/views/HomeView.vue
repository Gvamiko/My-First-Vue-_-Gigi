<template>
  <div>
    <div class="cotainer">
        <div class="row d-flex justify-content-center">
            <div class="col-md-5 text-center">
                <img class="welcomeimg" src="@/assets/images/Ellipse 104.png" alt="img">
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12 col-md-5 text-center">
                <p class="welcometext mt-4"><b>ჩვენ ვეხმარებით ადამიანებს დასაქმებაში <br> და მეტი შემოსავლის მიღებაში</b></p>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-10 col-md-4 justify-content-center">
                <a href="/login"><button type="button" class="btn btn-warning search-btn w-100 mt-3" style="color: #424242;">შემდეგი</button> </a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>  

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
@import '../assets/css/style.css';
</style>