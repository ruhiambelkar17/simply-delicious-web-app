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
        { srNo: 2, recipeType: "non-veg", recipeName: "Chicken Tikka", ratings: 4.5 },
        { srNo: 3, recipeType: "veg", recipeName: "Veg Kolhapuri", ratings: 4 },
        { srNo: 4, recipeType: "non-veg", recipeName: "Chicken Bhuna", ratings: 5 },
      ],
      headings: [],
      tableBodyData:[]
    };
  },
  methods: {
    getHeadings() {
      for (let i = 0; i <= this.tableData.length - 1; i++) {
        //this.headings.push(Object.keys(this.tableData[i]));
        this.headings = Object.keys(this.tableData[i]);
      }
      console.log("heading arr", this.headings);
    },
    getTableData(){
        for (let data in this.tableData){
            
            let x=this.tableData[data];
            console.log("data",x)
            let dd;
            for (let d in x){
                console.log("d",x[d])
                dd=x[d]
                
            }
            this.tableBodyData+=this.tableBodyData.push(dd);
            // for (let heading in this.headings){
            //     let y=this.headings[heading];
                
            //     console.log("x",y.x)
            // }
            // let x=this.headings[i];
            // console.log("x",this.tableData[i].x)
            // this.tableBodyData.push(this.tableData[i]?.x)
        }
        console.log("gettable data",this.tableBodyData)
    }
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
      <!-- <template v-for="(item1,index1) in headings" :key="index1"> -->
        <template v-for="(item,index) in tableData" :key="index" >
            
            <tr>
        <td>{{ item?.srNo }}</td>
        <td>{{ item?.srNo}}</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
        </template>
        
      <!-- </template> -->
      <!-- <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Bird</td>
        <td>@twitter</td>
      </tr> -->
    </tbody>
  </table>
</template>
