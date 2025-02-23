<script>
  import DataTable from '../components/DataTable.vue';
    export default {
        components:{DataTable},
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
        </div>
    </div>
    
</template>

  
