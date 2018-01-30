<script>
export default {
  functional: true,
  render: (h, { children, props }) => (
    <article>
      <div>{children.filter(node => node.tag).slice(0, props.limit)}</div>
    </article>
  )
};
</script>
