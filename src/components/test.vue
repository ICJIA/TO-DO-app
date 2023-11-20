<script>
import axios from "axios";
    export default {
        name: "App",
        data()
        {
        return{
            data:null,
            numberOfColumns:2,
        };
    },
       methods:{
        fetchData(){
            axios.get('https://jsonplaceholder.typicode.com/todos').then(response=>{this.data=response.data}).catch(error=>{console.error('Error fetching data',error);
        });
        },
       },
    };
</script>

<template>
    <div>
        
    <button @click="fetchData">FetchData</button>
    <table v-if="data">
        <thead>
        <tr>
        <th>ID</th>
        <th>title</th>
        </tr>
        </thead>
        <tbody> 
        <tr v-for="item in data" :key="item.id">
            <td>{{ item.id }}</td>
            <td :colspan="5">{{ item.title }}</td>
        </tr>
        </tbody>
    </table>
    </div>
</template>