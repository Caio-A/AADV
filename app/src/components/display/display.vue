<template>
    <div>
        <div v-if="false"><cadastro/></div>

        <div v-if="true"><dashboard/></div>
    </div>
</template>

<script>
import cadastro from './cadastro'
import dashboard from './dashboard'

export default {
components: {
    cadastro,
    dashboard
}
}

</script>

<style scoped>
    *{
        width: 80%;
        height: 0;
        padding-bottom: 48%;
        background: white;
        float: left;
    }
</style>