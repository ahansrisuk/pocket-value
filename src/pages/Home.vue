<template>
  <div>
    <section>
      <ItemTypeCard class="mb-4" type="Fish" />
      <ItemTypeCard class="mb-4" type="Bugs" />
    </section>
  </div>
</template>

<script>
import ItemTypeCard from '../components/ItemTypeCard';

export default {
  name: 'App',
  components: {
    ItemTypeCard,
  },
};
</script>
