<script>
  import DataTable from '../components/DataTable.vue';
  import Pagination from '../components/Pagination.vue';
    export default {
        components:{DataTable,Pagination},
      data() {
        return {
          
        }
      }
    }
  </script>

<template>
    <div>
        <h1 class="text-center">Recipes</h1>
        <hr />
        <div class="col-md-10 offset-1">
            <DataTable></DataTable>
            <pagination></pagination>
        </div>
    </div>
    
</template>

  
