<script setup lang="ts">
import Button from 'primevue/button';
import Container from '@/widgets/container'
import { useUnAuthHeaderNav } from '@/app/store/useHeaderNav'

const headerStore = useUnAuthHeaderNav()
</script>


<template>
    <header id="header" class="header">
        <Container>
            <div class="container header-container">
                <div class="logo"></div>
                <div class="header-actions">
                    <div class="buttons">
                        <Button type="button" label="Log In" />
                        <Button type="button" label="Sign Up" />
                    </div>
                </div>
                <nav class="header-nav">
                    <div v-for="item in headerStore.items" :key="item.label">
                        <a :href="item.href">{{ item.label }}</a>
                    </div>
                </nav>
            </div>
        </Container>
    </header>
</template>


<style scoped>
.header {
    background: rgb(2, 0, 36);
    background: linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(135, 135, 251, 1) 100%, rgba(0, 212, 255, 1) 100%);
}

.header-container {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

}

.header-actions {
    /*  width: 200px; */
    margin-top: 1%;
    display: flex;
    gap: 30px;

}

.header-nav {
    display: flex;
    gap: 2vh;
}
</style>