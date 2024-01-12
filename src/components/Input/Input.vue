<script lang="ts" setup>
import { ref, defineEmits, computed } from 'vue';
import wrapper from './Styled';

const inputValue = ref('');

const props = withDefaults(
  defineProps<{
    size?: "small" | "medium" | "large";
    backgroundColor?: string;
  }>(),
  { size: 'medium' }
);

const style = computed(() => ({
  backgroundColor: props.backgroundColor,
}));

const handleInput = () => {
  console.log('Input alterado:', inputValue.value);
  // Emitindo um evento personalizado para o componente pai
  emit('input-changed', inputValue.value);
};

// Definindo os eventos emitidos pelo componente
const emit = defineEmits(['input-changed']);
</script>

<template>
  <wrapper>
    <input
      type="text"
      :value="inputValue"
      @input="handleInput"
    />
  </wrapper>
</template>