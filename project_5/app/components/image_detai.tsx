export function ImageDetail({ image }: any) {
    return (
      <img
        src={image}
        className="post-image object-cover rounded shadow-lg w-3/5"
      />
    );
  }