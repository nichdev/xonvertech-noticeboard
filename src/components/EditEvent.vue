<template>
    <div id="edit-event">
        <h3>Edit Event</h3>
        <div class="row">
            <form @submit.prevent="updateEvent" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="event_name" required>
                        <label class="active">Event Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="description" required>
                        <label class="active">Event Description</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="created_by" required>
                        <label class="active">Event Creator</label>
                    </div>
                </div>
                <button type="submit" class="btn">Save</button>
                <router-link to="/" class="btn grey right">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'edit-event',
    data() {
        return{
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
        updateEvent () {
            db.collection('events').where('event_id', '==', this.$route.params.event_id).get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        doc.ref.update({
                            event_name: this.event_name,
                            created_by: this.created_by,
                            description: this.description
                        })
                        .then(() => {
                            this.$router.push({name: 'view-event', params: {event_id: this.event_id}})
                        })
                    })
                })
        }
    }
}
</script>