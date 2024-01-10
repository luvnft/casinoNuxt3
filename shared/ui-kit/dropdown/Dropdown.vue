<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useDropDown } from '@/app/store/useDropDown'
interface Props {
    buttonText: string;
}

const props = defineProps<Props>()
const dropdownStore = useDropDown()
</script>

<template>
    <Menu>
        <MenuButton>{{ props.buttonText }}</MenuButton>
        <MenuItems>
            <MenuItem v-for="link in dropdownStore.items" :key="link.label" as="template" v-slot="{ active }">
            <a :href="link.href" :class="{ 'bg-blue-500 text-white': active, 'bg-white text-black': !active }">
                {{ link.label }}
            </a>
            </MenuItem>
        </MenuItems>
    </Menu>
</template>
  
 