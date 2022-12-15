  <template>
    <div>
      <Header/>
      <div>
          <div class="container mt-5 mb-3">
              <div class="row">
                  <div class="col-md-6 mt-5 d-none d-md-block">
                      <img  href="/Home" src="@/assets/images/Tabletlogin.png" alt="img">
                  </div>
                  <div class="col-12 col-md-4 mt-5 mx-auto">
                          <h4 class="text-center mt-5">შესვლა</h4>
                      <form class="mt-5">
                          <div class="">
                            <label for="exampleInputEmail1" class="form-label">ელ.ფოსტა</label>
                            <input type="exampleInputEmail1" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ელ.ფოსტა">
                          </div>
                          <div class="mb-5 mt-3">
                            <label for="exampleInputEmail1" class="form-label  ">პაროლი</label>  
                            <input type="password" class="form-control " id="exampleInputPassword1" placeholder="პაროლი">
                          </div>
                          <div class="row mx-auto text-center mt-5">
                              <div class="col-12 col-md-12">
                                  <span>გაქვთ ანგარიში?</span>
                                  <span><a href="/Registration" class="recovery mx-2">რეგისტრაცია</a></span>
                              </div>
                          </div>
                          <a href="/Main"><button type="button" class="btn btn-warning search-btn w-100 mt-3"  style="color: #424242;">შესვლა</button></a>
                        </form>
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
    name: 'LoginView',
    components: {
      Header,
      Footer
    }
  }
  </script>
  
  <style>
  @import '../assets/css/style.css';
  </style>