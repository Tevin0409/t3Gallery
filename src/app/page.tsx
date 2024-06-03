const mockUrls = [
  "https://utfs.io/f/37c0982b-2f04-4a26-905e-b9132dc4733b-1j4zgt.jpg",
  "https://utfs.io/f/93c748c0-36e7-40d1-91b5-9763b162c775-fc3zds.png",
  "https://utfs.io/f/670e20e9-4d2c-46df-8351-2b85ecf21281-a9qj1u.png",
  "https://utfs.io/f/1fd8c64d-2fc7-452d-ae02-8fd0d12d7a99-u7dxg.jpg",
  "https://utfs.io/f/f4b1d6c6-99d1-4178-b28c-43ca14a2c0ac-khe3bh.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
      Hello Gallery in progress
    </main>
  );
}
