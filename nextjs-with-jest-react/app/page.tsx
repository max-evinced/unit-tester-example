import Counter from './counter';

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
  <div>
    <h1 role="heading">Next.js App Router</h1>
    <p>Target Text</p>
    <a>An Anchor Tag with no HREF</a>

    <Counter/>
  </div>
);
}
