<script>
export default {
  data() {
    return {
      recordsPerPage: 4,
      tableData: [
        { srNo: 1, recipeType: "veg", recipeName: "Paneer Tikka", ratings: 5 },
        {
          srNo: 2,
          recipeType: "non-veg",
          recipeName: "Chicken Tikka",
          ratings: 4.5,
        },
        { srNo: 3, recipeType: "veg", recipeName: "Veg Kolhapuri", ratings: 4 },
        {
          srNo: 4,
          recipeType: "non-veg",
          recipeName: "Chicken Bhuna",
          ratings: 5,
        },
        { srNo: 5, recipeType: "veg", recipeName: "Veg Kolhapuri", ratings: 4 },
        {
          srNo: 6,
          recipeType: "non-veg",
          recipeName: "Chicken Bhuna",
          ratings: 5,
          ingredients: "chilli",
        },
      ],

      totalRecords: 0,
      currentPage:1,
    };
  },
  created() {
    this.totalRecords=this.tableData.length;
  }
};
</script>

<template>
  {{ tableData.length }}
  <nav aria-label="..." class="d-flex justify-content-center">
    <ul class="pagination">
      <li class="page-item disabled">
        <a class="page-link" @click="PrevPage" tabindex="-1" :aria-disabled="currentPage===1"
          >Previous</a
        >
      </li>
      <!-- <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">2</a>
          </li>
          <li class="page-item"><a class="page-link" href="#">3</a></li> -->
      <template v-for="(item, index) in totalRecords" :key="index">
        <li  v-if="item<4" class="page-item 'item==1 ? active:null'" aria-current="page">
          <a class="page-link" href="#">{{ item }}</a>
        </li>
        
      </template>
      <li class="page-item" aria-current="page">
          <a class="page-link" href="#">...</a>
        </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
