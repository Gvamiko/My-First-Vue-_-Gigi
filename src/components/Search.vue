<template>
  <div>
    <div class="row ">
      <div class="col-12 d-block d-md-none">
        <p class="paragraph-mobile">
          <b>ვაკანსიები, რომლებიც შეიძლება საინტერესო იყოს თქვენთვის ან <br> თქვენი მეგობრებისთვის</b>
        </p>
      </div>
      <div class="col-12 text-center d-block d-md-none">
        <img src="@/assets/images/homeimg.png" alt="img">
      </div>
      <div class="col-12 d-block d-md-none mt-2">
        <label class="lbl"><b>რა სამუშაოს ეძებთ?</b></label>
        <div class="input-group flex-nowrap mt-1">
          <input type="text" class="form-control" placeholder="სამუშაოს დასახელება, კომპანია" aria-label="Username"
            aria-describedby="addon-wrapping">
        </div>
      </div>

      <div class="col-12 d-block d-md-none mt-3">
        <label class="lbl"><b>სად?</b></label>
        <div class="input-group flex-nowrap mt-1">
          <input type="text" class="form-control" placeholder="ადგილმდებარეობა" aria-label="Username"
            aria-describedby="addon-wrapping">
        </div>
      </div>

      <div class="col-12 d-block d-md-none mt-3">
        <button type="button" class="btn btn-warning search-btn w-100 mt-3">ძებნა</button>
      </div>
      <div class="col-md-7 d-none d-md-block">
        <p class="mt-5 paragraph">
          <b>ვაკანსიები, რომლებიც შეიძლება საინტერესო იყოს თქვენთვის ან <br> თქვენი მეგობრებისთვის</b>
        </p>

        <div class="row">
          <div class="col-md-4">
            <label class="lbl mb-2"><b>რა სამუშაოს ეძებთ?</b></label>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="სამუშაოს დასახელება, კომპანია" aria-label="Username"
                aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-md-4">
            <label class="lbl mb-2"><b>სად?</b></label>
            <div class="input-group flex-nowrap">
              <input type="text" class="form-control" placeholder="ადგილმდებარეობა" aria-label="Username"
                aria-describedby="addon-wrapping">
            </div>
          </div>
          <div class="col-md-2 mt-1">
            <a href="/filter"><button type="button" class="btn btn-warning search-btn mt-4">ძებნა</button></a>
          </div>
        </div>
      </div>

      <div class="col-md-5 d-none d-md-block">
        <img src="@/assets/images/homeimg.png" alt="home image" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  components: {
  }
}

</script>
