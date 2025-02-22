<template>
    <div>
        <h1 class="text-center">Recipes</h1>
        <hr />
        <div>
            <b-table
        :items="items"
        :fields="fields"
        :sort-by="sortBy"
        :sort-desc="sortDesc"
        responsive="sm"
      ></b-table>
        </div>
  
      <div>
        Sorting By: <b>{{ sortBy }}</b>, Sort Direction:
        <b>{{ sortDesc ? 'Descending' : 'Ascending' }}</b>
      </div>
    </div>
    
</template>

  <script>
    export default {
      data() {
        return {
          sortBy: 'age',
          sortDesc: false,
          fields: [
            { key: 'last_name', sortable: true },
            { key: 'first_name', sortable: true },
            { key: 'age', sortable: true },
            { key: 'isActive', sortable: false }
          ],
          items: [
            { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
            { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
            { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
            { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
          ]
        }
      }
    }
  </script>
