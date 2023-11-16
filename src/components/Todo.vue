<template>
    <div>
        <div>
            <input v-model="newTask" @key.enter="addTask" placeholder="Add a new Task">
            <button @click="addTask">Add</button>
        </div>

        <ul>
            <li v-for="(task,index) in tasks " :key ="index">
            {{ task }}
            <button @click="removeTask(index)">Remove</button>
        </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                newTask:'',
                tasks: [],
            };
        },
        methods:{
            addTask(){
                if(this.newTask.trim()!==''){
                    this.tasks.push(this.newTask.trim());
                    this.newTask='';
                }
            },
            removeTask(index){
                this.tasks.splice(index,1);
            },
        },

    };
</script>
