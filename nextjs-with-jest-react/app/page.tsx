import Counter from './counter';
import Modal from './Dialog';

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
