export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue"></div>
        <p className="mt-4 text-gray">読み込み中...</p>
      </div>
    </div>
  );
}