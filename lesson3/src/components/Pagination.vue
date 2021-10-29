<template>
    <div :class="[$style.paginationStyle]">
        <div @click="changePage(curPage-1)">-</div>
        <div :class="{ [$style.currentPage]: curPage === page }" @click="changePage(page)" v-for="page in pages" :key="page"> {{ page }}</div>
        <div @click="changePage(curPage+1)">+</div>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        items: {
            type: Array,
            default: () => []
        },
        countOfRow: Number,
        curPage: Number
    },

    data() {
        return {};
    },

    methods: {
        changePage(page) {
            if (page < 1 || page > this.pages) {
                return;
            }

            this.$emit('pageDataChanged', page);
        }
    },
    computed: {
        pages() {
            return Math.ceil(this.items.length / this.countOfRow);
        }
    }
};
</script>

<style lang="scss" module>
.currentPage {
    background: blanchedalmond;
}

.paginationStyle {
    display: flex;
}
</style>