<template>
    <div class="mt-4">
        <h3>{{ title }}</h3>
        <div class="flex justify-between">
            <span 
                v-for="(month,index) in months" 
                :key="index"
                class="text-xs rounded-lg px-2 mt-4" 
                :class="isAvailable(month)"
                >
                {{ abbreviatedMonthName(month) }}
            </span>
        </div>
    </div> 
</template>

<script>

export default {
    name: 'AvailableMonths',
    props: ['title', 'availableMonths'],
    data: function () {
        return {
            months: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]
        }
    },
    methods: {
       abbreviatedMonthName (month) {
            return month.substr(0,3);
        },
        isAvailable (month) {
            if (this.availableMonths.includes(month)) {
                return 'bg-mustard';
            } else {
                return 'bg-gray-400';
            }
        },
    },

}
</script>

<style>

</style>