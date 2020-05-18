<template>
    <div id="view-event">
        <ul class="collection with-header">
            <li class="collection-header"><h4>{{event_name}}</h4></li>
            <div class="collection-item">Description: {{description}}</div>
            <div class="collection-item">Created date: {{created_date}}</div>
            <div class="collection-item">Created by: {{created_by}}</div>
            
        </ul>
        <router-link to="/" class="btn grey">Back</router-link>
        <button @click="deleteEvent" class="btn red right">Delete</button>

        <div class="fixed-action-btn">
            <router-link v-bind:to="{name: 'edit-event', params: {event_id: event_id}}" class='btn-floating btn-large red'>Edit</router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'view-event',
    data() {
        return{
            id: null,
            event_id: null,
            event_name: null,
            created_by: null,
            created_date: null,
            description: null
        }
    },
    beforeRouteEnter(to, from, next) {
        db.collection('events').where('event_id',
            '==', to.params.event_id).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    next(vm => {
                        vm.event_id = doc.data().event_id
                        vm.event_name = doc.data().event_name
                        vm.created_by = doc.data().created_by
                        vm.created_date = doc.data().created_date
                        vm.description = doc.data().description
                    })
                })
            })
    },
    watch: {
        '$router': 'fetchData'
    },
    methods: {
        fetchData () {
            db.collection('events').where('event_id', '==', this.$route.params.event_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        this.event_id = doc.data().event_id
                        this.event_name = doc.data().event_name
                        this.created_by = doc.data().created_by
                        this.created_date = doc.data().created_date
                        this.description = doc.data().description
                    })
                })
        },
        deleteEvent () {
            if(confirm('Are you sure?')){
                db.collection('events').where('event_id', '==', this.$route.params.event_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.delete()
                        this.$router.push('/')
                    })
                })
            }
        }
    }
}
</script>