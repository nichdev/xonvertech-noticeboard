<template>
    <div id="dashboard">
        <ul class="collection with-header">
            <li class="collection-header">
                <h4>Events</h4>
            </li>
            <li v-for="event in events" v-bind:key="event.id" class="collection-item">
                <b>{{ event.event_name }}</b> | <span class="chip">Created by: {{event.created_by}}</span>
                <router-link class="secondary-content" v-bind:to="{name: 'view-event', params: {event_id: event.event_id}}">
                    <button class="waves-effect waves-light btn">See Event</button>   
                </router-link> 
            </li>
        </ul>

        <div class="fixed-action-btn">
        <router-link to='/new-event' class='btn-floating btn-large red'>+</router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
    name: 'dashboard',
    data() {
        return{
            events: []
        }
    },
    created () {
        db.collection('events').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                const data = {
                    'id': doc.id,
                    'event_id': doc.data().event_id,
                    'event_name': doc.data().event_name,
                    'created_by': doc.data().created_by,
                    'created_date': doc.data().created_date
                }
                this.events.push(data)
            })
        })
    }
}
</script>