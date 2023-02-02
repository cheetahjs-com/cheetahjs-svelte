<script lang="ts">
  import classNames from 'classnames';
  export let thClass: string = 'px-6 py-3';
</script>

<th {...$$restProps} class={classNames(thClass, $$props.class)}>
  <slot />
</th>
