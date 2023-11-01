export function ImageDetail({ image }: any) {
    return (
      <img
        src={image}
        className="object-cover rounded shadow-lg w-3/5"
      />
    );
  }