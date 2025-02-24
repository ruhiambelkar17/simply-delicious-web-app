<script>
export default {
  created() {
    this.getHeadings();
    this.getTableData();
  },
  data() {
    return {
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
      headings: [],
      tableBodyData: [],
      colData: [],
    };
  },
  methods: {
    getHeadings() {
      for (let i = 0; i <= this.tableData.length - 1; i++) {
        //this.headings.push(Object.keys(this.tableData[i]));
        this.headings = Object.keys(this.tableData[i]);
      }
      //console.log("heading arr", this.headings);
    },
    getTableData() {
      for (let i = 0; i <= this.tableData.length - 1; i++) {
        this.tableBodyData.push(Object.values(this.tableData[i]));
      }
      console.log("table data arr", this.tableBodyData);
    },
  },
};
</script>

<template>
  <table class="table">
    <thead>
      <tr>
        <template v-for="(item, index) in headings" :key="index">
          <th scope="col">{{ item }}</th>
        </template>
      </tr>
    </thead>

    <tbody>
      <template v-for="(item, index) in tableBodyData" :key="index">
        <tr>
          <template v-for="(item1, index1) in item" :key="index1">
            <td>{{ item[index1] ? item[index1] : "NA" }}</td>
          </template>
        </tr>
      </template>

      
    </tbody>
  </table>
</template>
