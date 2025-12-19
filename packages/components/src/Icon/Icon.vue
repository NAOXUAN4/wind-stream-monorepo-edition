<template>
  <i class="ws-icon"
  :class="{
    [`ws-icon--${type}`] : type,
  }" :style="styleShell4ChageColor">
    <font-awesome-icon v-bind="$props"/>
  </i>
</template>


<script lang ='ts' setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import type { IconProps } from './type';
    import { computed, watch, onMounted } from 'vue';
    import { loadIcon } from './iconLoader';

    defineOptions({
      name:"WsIcon",
      inheritAttrs: false  /// 阻止透传到root组件（i）
    });
    const props = defineProps<IconProps>();

    // 在调用 loadIcon 前增加类型判断
    watch(() => props.icon, (newIcon) => {
      if (typeof newIcon === 'string') {
        loadIcon(newIcon);
      } else if (typeof newIcon === 'object' && newIcon !== null && 'prefix' in newIcon && 'iconName' in newIcon) {
        loadIcon(newIcon as { prefix: string; iconName: string });
      }
    }, { immediate: true });

    onMounted(() => {
      if (typeof props.icon === 'string') {
        loadIcon(props.icon);
      } else if (typeof props.icon === 'object' && props.icon !== null && 'prefix' in props.icon && 'iconName' in props.icon) {
        loadIcon(props.icon as { prefix: string; iconName: string });
      }
    });

</script>

<style scoped>
</style>
