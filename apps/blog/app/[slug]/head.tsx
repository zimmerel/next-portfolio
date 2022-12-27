export default function Head(props: { params: { slug: string } }) {
  return (
    <>
      <title>Blog - {props.params.slug}</title>
    </>
  );
}
