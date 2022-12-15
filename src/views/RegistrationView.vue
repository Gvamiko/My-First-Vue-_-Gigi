<template>
    <div>
        <Header/>
        <div>
            <main class="flex-shrink-0">
              <div class="container mt-5">
                  <div class="row">
                      <div class="col-12 col-md-6 mt-5 d-none d-md-block">
                          <img src="@/assets/images/registerimage.png" alt="img">
                      </div>
                      <div class="col-12 col-md-6 mt-4">
                                  <h4 class="text-center"><b>რეგისტრაცია</b></h4>
                              <div class="mt-4">
                                  <label for="exampleInputEmail1" class="form-label mt-1">სახელი გვარი</label>
                                  <input type="name" class="form-control " id="" aria-describedby="name" placeholder="სახელი გვარი">
                              </div>                   
                              <div class="mt-4">
                                <label for="exampleInputEmail1" class="form-label mt-1">მობილური</label>
                                <input type="mobile" class="form-control" id="exampleInputmobile" aria-describedby="mobile" placeholder="XXX XX XX XX">
                              </div>     
                              <div class="mt-4">  
                                <label for="exampleInputEmail1" class="form-label mt-1">ელ.ფოსტა</label>
                                <input type="email" class="form-control" id="email" placeholder="Motivation@gmail.com">
                              </div>

                              <div class="mt-4">
                                  <label for="exampleInputEmail1" class="form-label mt-1">პაროლი</label>  
                                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="პაროლი">
                              </div>
                              <div class="mt-4">
                                <label for="exampleInputEmail1" class="form-label mt-1">გაიმეორეთ პაროლი</label>  
                                <input type="password" class="form-control" id="exampleInputPassword2" placeholder="გაიმეორეთ პაროლი">
                              </div>
                              
                              <div class="row mx-auto mt-4 text-center d-flex justify-items-center">
                                  <div class="col-md-12">
                                      <span>გაქვთ ანგარიში?</span>
                                      <span><a href="/login" class="recovery mx-2">შესვლა</a></span>
                                  </div>
                              
                              </div>         
                              <a href="/main"><button type="button" class="btn btn-warning search-btn w-100 mt-3" style="color: #424242;">რეგისტრაცია</button></a>
                      </div>
                  </div>
              </div>
            </main>
        </div>
        <Footer/>
    </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
  export default {
    name: 'MainView',
    components: {
      Header,
      Footer
    }
  }
</script>

    <style>
        @import '../assets/css/style.css';
    </style>