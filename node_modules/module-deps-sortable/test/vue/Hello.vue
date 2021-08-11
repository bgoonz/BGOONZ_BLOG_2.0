<template>
    <p>{{ greeting }} World!</p>
</template>

<script>
import {capitalize} from 'lodash'

export default {
    data: function () {
        return {
            greeting: capitalize('hello')
        }
    }
}
</script>

<style scoped>
p {
    font-size: 2em;
    text-align: center;
}
</style>
