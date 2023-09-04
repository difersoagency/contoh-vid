<script setup>
import {useQuery, useQueryClient} from 'vue-query';
import {getMessages} from '../firebase-functions'

// Query Client
const queryClient = useQuery();

//Query Hook
const {isLoading, isEror, data, error, refetch} = useQuery("images", getMessages);


</script>


<template>
    <div v-if="isLoading"> Loading </div>
    <div v-else-if="isEror"> an Error has Ouccred : {{ error }}</div>
    <div v-else-if="data">
        {{ data }}
    </div>
</template>