import Test from '../(parallax)/test';

export default function Page() {
  return (
    <main className="flex min-h-[300vh] flex-col items-center justify-between p-24">
      Test writing
      <Test />
      Bottom test writing
      <div className="w-48 h-48 bg-red-500" />
    </main>
  );
}
