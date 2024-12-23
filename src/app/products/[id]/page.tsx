interface Props {
  params: Promise<{
    id: string
  }>
}

export default async function Product({params}: Props) {
  const id = (await params).id;

  return (
      <div className="flex items-center justify-center">
        <p className="text-2xl font-bold">Product page of {id}</p>
      </div>
  );
}
