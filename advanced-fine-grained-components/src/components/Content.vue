<script>
export default {
  functional: true,
  render: (h, { children, props }) => (
    <div>{children.filter(node => node.tag).slice(0, props.limit)}</div>
  )
};
</script>
