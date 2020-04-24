<template>
    <div class="mt-4">
        <h3>Months Available</h3>
        <div class="flex flex-wrap justify-between">
            <span 
                v-for="(month,index) in months" 
                :key="index"
                class="text-xs rounded-lg mt-2 text-center"
                style="width: 42px"
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