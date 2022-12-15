<template>
    <div>
    <Header/>
    <div>
        <div class="container">
        <div class="row mt-5">
            <div class="col-12 col-md-3 mb-3 mx-3 mt-5">
                <H4 style="font-size: 20px; color: #424242;"><b>სასწავლო პროგრამები</b></H4>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-4">
                <div class="border border-mobile-margin-left">
                    <div class="col-12 col-md-12 text-center mt-4">
                        <img style="width:275px" src="@/assets/images/traningimg.png" alt="img">
                    </div>
                    <div class="col-9 col-md-11 mx-auto mt-3">
                        <h5 class="mt-4"><b>Front-end Development</b></h5>
                        <p class="traningp text-muted">Front-end Developer ქმნის ვებსაიტების და ვებ აპლიკაციების, პროგრამების წინა ნაწილს, ანუ იმ ნაწილს, რომელსაც მომხმარებლები რეალურად ხედავენ. ყოველწლიურად...</p>
                        <a href="TraningRegistration"><button class="btn-traning w-100 mb-5"><b>დეტალურად</b></button></a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-4">
                <div class="border border-mobile-margin-left">
                    <div class="col-12 col-md-12 text-center mt-4">
                        <img class="traningimg" src="@/assets/images/tranings/Group 4.png" alt="img">
                    </div>
                    <div class="col-9 col-md-11 mx-auto mt-3">
                        <h5 class="mt-4"><b>პროფესია მენეჯერი</b></h5>
                        <p class="traningp text-muted">პროფესია მენეჯერი არის მსოფლიოში ყველაზე უნივერსალური საქმიანობა, რადგან თავად მენეჯმენტი არის ყველა სფეროში ეს იქნება კერძო თუ საჯარო სექტორი და ასე იქნება...</p>
                        <a href="/Management"><button class="btn-traning w-100 mb-5"><b>დეტალურად</b></button></a>
                    </div>
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
    name: 'TraningsView',
    components: {
      Header,
      Footer
    }
  }
</script>