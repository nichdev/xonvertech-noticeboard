<template>
    <div id="new-event">
        <h3>New Event</h3>
        <div class="row">
            <form @submit.prevent="saveEvent" class="col s12">
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="event_name" required>
                        <label>Event Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="description" required>
                        <label>Event Description</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="created_by" required>
                        <label>Event Creator</label>
                    </div>
                </div>
                <button type="submit" class="btn">Submit</button>
                <router-link to="/" class="btn grey right">Cancel</router-link>
            </form>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
import { v4 as uuidv4 } from 'uuid';
export default {
    name: 'new-event',
    data() {
        return{
            event_id: uuidv4(),
            event_name: null,
            created_by: null,
            created_date: null,
            description: null
        }
    },
    methods: {
        saveEvent () {
            db.collection('events').add({
                event_id: this.event_id,
                event_name: this.event_name,
                created_by: this.created_by,
                description: this.description,
            })
            // eslint-disable-next-line no-unused-vars
            .then(docRef => this.$router.push("/"))
            .catch(error => console.log(error))
        }
    }
}
</script>