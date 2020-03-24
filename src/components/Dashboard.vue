<template>
    <div id="dashboard">
        <h3>Dashboard</h3>

        <div class="fixed-action-btn">
        <router-link to='/new-event' class='btn-floating btn-large red'>+</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return{

        }
    }
}
</script>